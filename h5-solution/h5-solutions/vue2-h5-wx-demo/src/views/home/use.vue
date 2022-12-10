<template>
  <div class="use-container">
    <div class="use-top">
      <img class="use-top-bg-img" src="../../assets/usage/use-top.svg" />
      <BaseTop class="use-top-header" @on-click="jumpTo" />
      <ShareButton class="share" />
    </div>

    <div class="qrg">{{ title }}</div>
    <div class="card-list">
      <BaseCard type="two" @click.native="jump(item)" class="card-list-item" v-for="item in levelTwoChildren"
        :key="item.id" :bottomContent="item.categoryTitle" :content="item"></BaseCard>
    </div>
  </div>
</template>

<script>
// 请求接口
import BaseTop from '@/components/top/BaseTop.vue'
import ShareButton from '@/components/top/Share.vue'
import BaseCard from '@/components/base//BaseCard.vue'
import { initNessaryData } from '@/mixins'
import jump from '@/mixins/jump'
import { fetchArticle } from '@/api/article'

import _ from 'lodash'
export default {
  mixins: [jump],
  components: {
    BaseTop,
    ShareButton,
    BaseCard
  },
  data() {
    return {
      user: {
        name: '王晓怡'
      },
      levelTwo: {},
      levelTwoChildren: [],
      title: '未定义'
    }
  },
  async created() {
    await initNessaryData()
    const { id } = this.$route.params;
    const { CategoryFlat, user } = this.$store.state.app
    this.levelTwo = _.find(CategoryFlat, { id })
    this.title = _.get(this.levelTwo, 'categoryTitle')
    this.levelTwoChildren = _.get(this.levelTwo, 'children') || []
    if (!_.isEmpty(user)) {
      this.user = user
    }
    console.log('created', this.$route.params, _.cloneDeep(this.levelTwo))

  },
  computed: {},
  mounted() {
    console.log('mounted', this.$route.params)

  },
  methods: {
    jumpTo() {
      this.$router.push({ name: 'home' })

    },
    async jump(item) {
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
  }
}
</script>

<style lang="scss">
.use-container {
  background: #023a6d;
  height: 100vh;
  box-sizing: border-box;

  .use-top {
    position: relative;
    width: 100%;
    height: 281px;

    .use-top-bg-img {
      width: 100%;
      height: 100%;
    }

    .use-top-header {
      position: absolute;
      top: 0;
      width: 100%;
    }

    .share {
      position: absolute;
      bottom: 10px;
      right: 15px;
    }
  }

  .qrg {
    margin-top: 20px;
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
