<template>
  <div class="activity-container">
    <div class="activity-top">

      <img v-if="info.img" class="activity-top-bg-img" :src="info.img" />
      <img v-else class="activity-top-bg-img" src="../../assets/act/acttop.png" />
      <BaseTop class="activity-top-header" @on-click="jumpTo" />
      <ShareButton class="share" />
    </div>

    <div class="event-name">{{ info.name }}</div>
    <div class="card-list">
      <ActCard :bottomContent="info.content" />
    </div>

    <div class="act-join-pic-container">
      <ActJoinPic :joinState="curUserJoinState" :user="user" :actInfo="info" @on-success="updateList" />
    </div>
    <div class="people-container">
      <PeopleList :list="involvementList" />
    </div>
  </div>
</template>

<script>
// 请求接口
import BaseTop from '@/components/top/BaseTop.vue'
import ShareButton from '@/components/top/Share.vue'
import ActCard from '@/components/act/ActCard.vue'
import ActJoinPic from '@/components/act/ActJoinPic.vue'
import PeopleList from '@/components/act/PeopleList.vue'
import { fetchActiveList } from '@/utils/global'
import { getUserList } from '@/api/active'
import { initNessaryData } from '@/mixins'
import _ from 'lodash'


export default {
  async created() {

    const { act_id } = this.$route.params;

    if (!act_id) {
      this.$router.go(-1)
    }
    await initNessaryData();
    const { user } = this.$store.state.app
    if (!_.isEmpty(user)) {
      this.user = user
    } else {
      console.log('用户信息丢失')
      this.$router.go(-1)
    }

    const list = await fetchActiveList()  // all active
    const act = _.find(list, { id: parseInt(act_id) })

    if (!act) {
      this.$router.go(-1)
    }
    this.info = act
    // people who join the act
    await this.updateList();

  },
  components: {
    BaseTop,
    ShareButton,
    ActCard,
    ActJoinPic,
    PeopleList
  },
  data() {
    return {
      user: {
        nickname: '未登录'
      },
      info: {},
      involvementList: [],
      curUserJoinState: 'not-join', // joined , overdue
    }
  },
  computed: {},
  mounted() { },
  methods: {
    async updateList() {
      const res = await getUserList({
        activityId: this.info.id,
        pageNum: 1,
        pageSize: 999
      })
      this.involvementList = _.get(res, 'data.record') || []
      this.curUserJoinState = _.find(this.involvementList, { userId: this.user.id }) ? 'joined' : 'not-join'

    },
    jumpTo() {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss">
.activity-container {
  background: #023a6d;
  height: 100%;
  min-height: 100vh;

  .activity-top {
    position: relative;
    width: 100%;
    height: 281px;

    .activity-top-bg-img {
      width: 100%;
      height: 100%;
    }

    .activity-top-header {
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

  .event-name {
    margin-top: 18px;
    margin-bottom: 20px;
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
    padding-left: 30px;
    padding-right: 30px;
  }

  .card-list-item {
    margin-bottom: 10px;
  }

  .act-join-pic-container {
    margin-top: 20px;
    width: 100%;
  }

  .people-container {
    margin-top: 20px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
