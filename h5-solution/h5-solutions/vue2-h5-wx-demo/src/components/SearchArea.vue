<template>
  <div class="search-area">
    <BaseInput @on-blur="blurHandler" v-model="title" @on-focus="focusHandler" class="input" />
    <div class="user-position">
      <div class="user" v-if="!showMask">
        {{ user.nickname }}
      </div>
      <div class="user" v-else>
        <div @click="cancelSearch">取消</div>
        <div style="margin-left:4px;" @click="jumpSearchList">更多</div>
      </div>
    </div>
    <div class="search-mask" v-if="showMask">
      <div v-if="title.length == 0" class="recent-content">
        <div>
          常用搜索内容:
        </div>
        <div @click="changeTitle(item)" v-for="item in recentSearch" :key="item" class="item">
          {{ item }}
        </div>
      </div>
      <div v-if="title.length > 0" class="recent-content">搜索结果: {{ searchRes.length }} 条</div>

      <BaseLine class="divide" />
      <div class="history-content">
        <div @click="(e) => { jumpItem(e, item) }" class="history-content-item" v-for="item in searchRes"
          :key="item.id">
          {{ item.cateTitle }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 请求接口
import { getUserInfo } from '@/api/user.js'
import { mapGetters } from 'vuex'
import _ from 'lodash'
import { getVagueCategory } from '@/api/category'
import { getRecenetSearch, setRecenetSearch } from '@/mixins'
import { fetchArticle } from '@/api/article'
import jump from '@/mixins/jump'

export default {
  mixins: [jump],

  props: {
    user: {
      default: () => {
        return {
          nickname: '未登录'
        }
      }
    },

  },
  data() {
    return {
      title: '',
      showMask: false,
      searchRes: [],
      recentSearch: [],
    }
  },
  computed: {
    ...mapGetters(['userName'])
  },
  mounted() {
  },
  watch: {
    async title(n, o) {
      console.log('title', n)
      if (!n) {
        this.searchRes = []
        return
      }

      const res = await fetchArticle({
        pageNum: 1,
        pageSize: 999,
        contentTitle: n
      })
      // const record = _.get(res, 'data.record')

      // console.log(22, res,)
      setRecenetSearch(n)
      this.searchRes = _.get(res, 'data.record') || []
    }
  },
  methods: {
    // 请求数据案例
    initData() {
      // 请求接口数据，仅作为展示，需要配置src->config下环境文件
      const params = { user: 'sunnie' }
      getUserInfo(params)
        .then(() => { })
        .catch(() => { })
    },
    // Action 通过 store.dispatch 方法触发
    doDispatch() {
      this.$store.dispatch('setUserName', '真乖，赶紧关注公众号，组织都在等你~')
    },
    goGithub() {
      window.location.href = 'https://github.com/sunniejs/vue-h5-template'
    },
    focusHandler() {
      this.showMask = true
      this.recentSearch = getRecenetSearch()

    },
    blurHandler() {
      return
    },
    cancelSearch() {
      this.showMask = false
      this.title = ''
      this.searchRes = []
    },
    jumpItem(e, item) {
      e.stopPropagation()

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
    jumpSearchList() {
      if (this.title) {
        this.$router.push({ name: 'search', params: { title: this.title } })
      }
    },
    changeTitle(item) {
      this.title = item
    }
  }
}
</script>

<style lang="scss">
.search-area {
  z-index: 99;
  height: 36px;
  position: relative;

  .input {
    position: absolute;
    left: 28px;
  }

  .user {
    font-size: 12px;
    color: #ffffff;
    text-align: left;
    line-height: 10px;
    font-weight: 500;
    display: flex;
    height: 100%;
    align-items: center;
  }

  .user-position {
    position: absolute;
    right: 32px;
    height: 100%;
  }

  .search-mask {
    position: absolute;
    top: 36px;
    left: 0px;
    height: 100vh;
    width: 100%;
    background: #023a6d;

    .recent-content {
      font-size: 12px;
      color: #808080;
      letter-spacing: 0;
      font-weight: 400;
      padding: 0 28px;
      margin-top: 28px;
      display: flex;
      align-items: center;
      line-height: 20px;
      flex-wrap: wrap;

      .item {
        margin-left: 4px;

      }
    }

    .divide {
      margin-bottom: 20px;
      margin-top: 20px;
    }

    .history-content {
      font-size: 12px;
      color: #808080;
      letter-spacing: 0;
      font-weight: 400;
      padding: 0 28px;
      margin-top: 28px;
      display: flex;
      flex-direction: column;
    }

    .history-content-item {
      margin-bottom: 10px;
    }
  }
}
</style>
