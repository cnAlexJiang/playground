<template>
    <div class="search-list-container">
        <div class="qrg">搜索内容: {{ title }}</div>
        <div class="qrg">搜索结果: {{ searchRes.length }} 条</div>
        <BaseLine class="divide" />
        <div class="card-list">
            <CoolCard @click.native="jumpItem(item)" class="card-search-item" v-for="item in searchRes" :content="item"
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
import { getUserInfo } from '@/api/user'
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

            title: '未定义',
            searchRes: [],

        }
    },
    async created() {
        await initNessaryData()
        await this.fetchUser()

        const { title } = this.$route.params;
        this.title = title
        await this.vagueSearch()
    },
    computed: {},
    mounted() { },
    methods: {
        jumpTo() {
            this.$router.go(-1)
        },
        jumpItem(item) {
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
        async vagueSearch() {
            const res = await fetchArticle({
                pageNum: 1,
                pageSize: 999,
                contentTitle: this.title
            })
            this.searchRes = _.get(res, 'data.record') || []
        },
        async fetchUser() {
            const res = await getUserInfo()
            this.user = res.data
        }
    }
}
</script>
  
<style lang="scss">
.search-list-container {
    background: #023a6d;
    height: 100%;
    box-sizing: border-box;
    min-height: 100vh;


    .qrg {
        padding-top: 18px;
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

    .card-search-item {
        margin-bottom: 10px;
        margin-top: 10px;
    }
}
</style>
  