<template>
  <div class="join-pic">
    <div class="join-img">
      <img v-if="joinState == 'not-join'" @click="join" src="../../assets/act/join-it.svg" />
      <img v-if="joinState == 'joined'" src="../../assets/act/act-joined.svg" />
      <img v-if="joinState == 'overdue'" src="../../assets/act/act-joined.svg" />
    </div>
    <div class="join-words" v-if="joinState == 'not-join'" @click="join">点击参加</div>
    <div class="join-words" v-if="joinState == 'joined'">已参与该活动</div>
    <div class="join-words" v-if="joinState == 'overdue'">该活动已结束</div>
  </div>
</template>

<script>
import { joinAct } from '@/api/active'
export default {
  props: {
    joinState: {
      default: ''
    },
    value: {},
    user: {},
    actInfo: {}
  },
  mounted() {
  },
  methods: {
    handleInput(event) {
      let value = event.target.value
      this.$emit('input', value)
      this.$emit('on-change', event)
    },
    async join() {
      try {
        if (this.user.id && this.actInfo.id) {
          const res = await joinAct({
            "userId": this.user.id,
            "userImage": "https://portrait.gitee.com/uploads/avatars/user/2813/8441097_shaynas_1610801433.png",
            "activityId": this.actInfo.id
          })
          console.log('res=', res)
          this.$emit('on-success')
        }
        this.$emit('join-success')
      } catch (e) {
        console.log(3)
      }

    }
  }
}
</script>

<style lang="scss">
.join-pic {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  .join-img {
    width: 100px;
    height: 100px;
    padding: 18.75px;
  }

  .join-words {
    font-size: 20px;
    color: #ffffff;
    letter-spacing: 0;
    font-weight: 500;
  }
}
</style>
