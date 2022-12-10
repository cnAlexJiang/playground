<template>
  <div class="people-list">
    <div class="title">已有{{userList.length}}人参与此活动</div>
    <div class="img-list">
      <div class="img-item" v-for="item in userList" :key="item.id">
        <img src="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      default: () => []
    },
  },
  data() {
    return {
      userList: []

    }
  },
  watch: {
    list() {
      console.log('list', this.list)
      this.userList = [...this.list]
      if (this.userList && this.userList.length > 35) {
        this.userList.length = 35
      }
    }
  },


  methods: {}
}
</script>

<style lang="scss">
.people-list {
  width: 233px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  .title {
    font-size: 10px;
    color: #ffffff;
    text-align: center;
    line-height: 22px;
    font-weight: 400;
  }

  .img-list {
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    background: white;
    justify-content: center;
    padding-top: 5px;
    padding-bottom: 5px;

    .img-item {
      width: 27.5px;
      height: 27.5px;
      background: gray;
      margin: 2.5px;
    }
  }
}
</style>
