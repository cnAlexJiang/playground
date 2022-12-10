<template>
  <div class="home-card">
    <div class="enabler">{{ levelOne.categoryTitle }}</div>
    <div class="card-list">
      <BaseCard @click.native="jump(child)" class="card-list-item" v-for="child in levelOne.children" :key="child.id"
        :bottomContent="child.categoryTitle" :content="child">
      </BaseCard>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
import { fetchArticle } from '@/api/article'
import jump from '@/mixins/jump'

export default {
  mixins: [jump],
  props: {
    level: {},
    levelOne: {
      default: () => {
        return {
          categoryTitle: 'Enabler',
          children: [
            {
              categoryTitle: 'title',
            }
          ]
        }
      }
    },

  },
  methods: {
    handleInput(event) {
      let value = event.target.value
      this.$emit('input', value)
      this.$emit('on-change', event)
    },
    async jump(item) {
      if (this.level === '1') {

        if (item.children && item.children.length > 0) {
          this.$router.push({ name: 'use', params: { id: item.id } })
          return
        }

        if (item.children.length === 0) {
          try {

            const res = await fetchArticle({
              pageNum: 1,
              pageSize: 999,
              categoryId: item.id
            })
            const record = _.get(res, 'data.record')
            console.log('record-record', record)
            // doc detail or asset 
            if (record && record.length == 1) {
              const doc = _.get(res, 'data.record.0')
              //contentType  doc_content oss_preview
              if (doc && doc.contentType === 'doc_content') {
                return this.$router.push({ name: 'audio', params: { id: doc.id } })
              }
              if (doc && doc.contentType === 'oss_preview') {
                const url = this.getAssetUrl(doc)
                return location.assign(`https://view.officeapps.live.com/op/view.aspx?src=${url}`)
              }
            }
            // doc list
            if (record && record.length > 1) {
              this.$router.push({ name: 'list', params: { id: item.id } })
            }
          } catch (e) {
            console.log(e)
          }
        }
      }
    },

  }
}
</script>

<style lang="scss">
.home-card {

  .enabler {
    margin-top: 30px;
    margin-bottom: 15px;
    font-size: 20px;
    color: #ffffff;
    letter-spacing: 0;
    line-height: 22px;
    font-weight: 500;
    padding-left: 28px;
  }

  .card-list {
    display: flex;
    flex-wrap: wrap;
    padding-left: 28px;
    padding-right: 12px;
  }

  .card-list-item {
    margin-bottom: 10px;
    margin-right: 16px;
  }

  .card-list-item:nth-child(3n) {
    margin-right: 0px;
  }
}
</style>
