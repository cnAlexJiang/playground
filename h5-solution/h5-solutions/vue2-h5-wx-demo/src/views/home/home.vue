<template>
  <div class="home-container">
    <BaseTop :show-back="false" @on-click="jumpTo" />
    <SearchArea :user="user" />

    <div class="re-imaging">
      <div class="left">RE-IMAGINING CAREERS</div>
      <div class="right">See all</div>
    </div>
    <div class="swip-contain">
      <BaseSwip v-if="showAct"></BaseSwip>
    </div>
    <HomeCard level="1" v-for="item in levelOneArr" :levelOne="item" :key="item.id"></HomeCard>
    <base-divider />
  </div>
</template>

<script>
// 请求接口
import BaseTop from '@/components/top/BaseTop.vue'
import BaseSwip from '@/components/base/BaseSwip.vue'
import { initApp } from '@/api/login.js'
import { getCategoryTree } from '@/api/category'
import { getUserInfo } from '@/api/user'
import HomeCard from '@/components/home/HomeCard.vue'

import _ from 'lodash'

export default {

  components: {
    BaseTop,
    BaseSwip,
    HomeCard
  },
  data() {
    return {
      showAct: false,
      wechat: `${this.$cdn}/wx/640.gif`,
      levelOneArr: [],  // 分类所有数据
      user: {
        nickname: '未登录'
      },

    }
  },

  async created() {
    await initApp()
    await this.fetchCategory()
    await this.fetchUser()
    this.showAct = true

  },



  methods: {
    jumpTo() {
      // this.$router.go(-1)
    },

    async fetchCategory() {
      const res = await getCategoryTree()
      this.levelOneArr = res.data
      console.log('getCategoryTree', _.cloneDeep(this.levelOneArr))
      this.$store.commit('SET_CATEGORY_FLAT', this.levelOneArr)
    },
    async fetchUser() {
      const res = await getUserInfo()
      this.user = res.data
      this.$store.commit('SET_USER', this.user || {})

    }
  }
}
</script>

<style lang="scss">
.home-container {
  /* 你的命名空间 */
  background: #023a6d;
  height: 100%;
  min-height: 100vh;

  box-sizing: border-box;

  .re-imaging {
    height: 25px;
    margin-top: 22px;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 26px;
    padding-right: 32px;

    .left {
      font-size: 18px;
      color: #ffffff;
      letter-spacing: 0;
      font-weight: 500;
    }

    .right {
      opacity: 0.6;
      font-size: 12px;
      color: #ffffff;
      letter-spacing: 0;
      text-align: center;
      line-height: 12px;
      font-weight: 500;
    }
  }

  .swip-contain {
    overflow: hidden;
    height: 240px;
    padding: 0 26px;
  }

}
</style>
