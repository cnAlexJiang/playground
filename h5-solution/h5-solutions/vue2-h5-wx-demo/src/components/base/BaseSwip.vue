<template>
  <van-swipe class="base-swip" vertical>
    <van-swipe-item v-for="(item, idx) in list" :key="idx" class="item-size">
      <div class="img-title">
        <img :src="item.img" class="img" @click="jump(item)" />
        <div class="title">{{ item.name }}</div>
      </div>
    </van-swipe-item>
  </van-swipe>
</template>

<script>
import siwpSvg from '../../assets/base/swip.svg'
import _ from 'lodash'
import { fetchActiveList } from '@/utils/global'
import { fetchArticle } from '@/api/article'
import jump from '@/mixins/jump'

export default {
  mixins: [jump],
  components: {},
  data() {
    return {
      images: [siwpSvg, siwpSvg, siwpSvg],
      list: []
    }
  },
  async created() {
    try {
      const res = await fetchActiveList() || []
      res.map(item => {
        item.asset_type = 'act'
      })

      let docList = []
      try {
        const res = await fetchArticle({
          pageNum: 1,
          pageSize: 999,
          isHome: 1
        })
        docList = _.get(res, 'data.record')
      } catch (e) {
        console.log(e)
      }


      docList.map(item => {
        item.asset_type = 'doc'
        item.name = item.cateTitle
        item.img = item.contentBannerImg
      })
      console.log('act-list', _.cloneDeep(res))
      console.log('docList', _.cloneDeep(docList))
      this.list = [...res, ...docList]
    } catch (e) {
      console.log(e)
    }

  },
  methods: {
    async jump(item) {
      if (item.asset_type == 'act') {
        this.$router.push({ name: 'act', params: { act_id: item.id } })
      }
      if (item.asset_type == 'doc') {
        const doc = item
        if (doc && doc.contentType === 'doc_content') {
          return this.$router.push({ name: 'audio', params: { id: doc.id } })
        }
        if (doc && doc.contentType === 'oss_preview') {
          const url = this.getAssetUrl(doc)
          return location.assign(`https://view.officeapps.live.com/op/view.aspx?src=${url}`)
        }
      }

    }
  }
}
</script>

<style lang="scss">
.base-swip {
  height: 240px;

  .item-size {
    .img-title {
      display: flex;
      flex-direction: column;
      height: 240px;
      overflow: hidden;
      border-top-right-radius: 8px;
      border-top-left-radius: 8px;

      .img {
        height: 210px;
      }

      .title {
        height: 30px;
        background: #ffffff;
        border-bottom-right-radius: 8px;
        border-bottom-left-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 12px;
        color: #000000;
        letter-spacing: 0;
        font-weight: 500;
      }
    }
  }
}
</style>
