<template>
  <div class="list-container">
    <BaseTop @on-click="jumpTo" />
    <SearchArea :user="user" />
    <div class="list-top">

      <img v-if="level3.categoryBanner" class="list-top-bg-img" :src="level3.categoryBanner" />
      <img v-else class="list-top-bg-img" src="../../assets/top/list-img.svg" />
      <ShareButton class="share" />
    </div>

    <div class="qrg">{{ level3.categoryTitle }}</div>
    <BaseLine class="divide" />
    <div class="card-list">
      <CoolCard @click.native="jump(item)" class="card-list-item" v-for="item in level3Children" :content="item"
        :key="item.id" />
    </div>
    <base-divider />
  </div>
</template>

<script>
// 请求接口
import BaseTop from '@/components/top/BaseTop.vue'
import ShareButton from '@/components/top/Share.vue'
import { initNessaryData } from '@/mixins'
import _ from 'lodash'
import { fetchArticle } from '@/api/article'

import jump from '@/mixins/jump'


export default {
  mixins: [jump],

  components: {
    BaseTop,
    ShareButton
  },
  data() {
    return {
      user: {
        nickname: '未登录'
      },
      level3: {},
      level3Children: [],
      title: '未定义'
    }
  },
  async created() {
    await initNessaryData()

    const { id } = this.$route.params;
    const { CategoryFlat, user } = this.$store.state.app;

    const res = await fetchArticle({
      pageNum: 1,
      pageSize: 999,
      categoryId: id
    })
    const record = _.get(res, 'data.record')
    console.log('record-record', record)
    this.level3Children = record

    this.level3 = _.find(CategoryFlat, { id }) || {}
    this.title = _.get(this.level3, 'categoryTitle')
    this.user = user
    console.log('created', this.$route.params, _.cloneDeep(this.level3))

  },
  computed: {},
  mounted() { },
  methods: {
    jumpTo() {
      this.$router.go(-1)

    },
    async jump(item) {
      // 这种情况可能存在吗？
      if (item.children && item.children.length > 0) {
        this.$router.push({ name: 'list', params: { id: item.id } })
        return
      }

      const doc = item
      //contentType  doc_content oss_preview
      if (doc && doc.contentType === 'doc_content') {
        return this.$router.push({ name: 'audio', params: { id: doc.id } })
      }
      if (doc && doc.contentType === 'oss_preview') {
        const url = this.getAssetUrl(doc)
        return location.assign(`https://view.officeapps.live.com/op/view.aspx?src=${url}`)
      }
    },

  }
}
</script>

<style lang="scss">
.list-container {
  background: #023a6d;
  height: 100%;
  box-sizing: border-box;
  min-height: 100vh;

  .list-top {
    position: relative;
    width: 100%;
    height: 181px;

    .list-top-bg-img {
      position: absolute;
      bottom: 0px;
      left: 50%;
      transform: translateX(-50%);
      width: 164px;
      height: 164px;
    }

    .share {
      position: absolute;
      bottom: 10px;
      right: 15px;
    }
  }

  .qrg {
    margin-top: 18px;
    margin-bottom: 15px;
    font-size: 20px;
    color: #ffffff;
    letter-spacing: 0;
    line-height: 22px;
    font-weight: 500;
    padding-left: 28px;
  }

  .divide {
    margin-bottom: 19px;
  }

  .card-list {
    display: flex;
    flex-direction: column;
    padding-left: 30px;
    padding-right: 30px;
  }

  .card-list-item {
    margin-bottom: 10px;
    margin-top: 10px;
  }
}
</style>
