<template>
    <div class="audio-container">
        <BaseTop @on-click="jumpTo" />
        <div class="audio-top">
            <img class="audio-top-bg-img" src="../../assets/top/list-img.svg" />
            <ShareButton class="share" />
        </div>

        <div class="qrg">{{ article.contentTitle }}</div>
        <BaseLine class="divide" />
        <!-- <iframe
            src="https://view.officeapps.live.com/op/view.aspx?src=https://s2-cdn.oneitfarm.com/1667216076070-RIC平台目录v3.docx"
            frameborder="0"></iframe> -->
    </div>
</template>
  
<script>
// 请求接口
import BaseTop from '@/components/top/BaseTop.vue'
import ShareButton from '@/components/top/Share.vue'

import { initNessaryData } from '@/mixins'
import { fetchArticle } from '@/api/article'
export default {
    components: {
        BaseTop,
        ShareButton,
    },
    data() {
        return {
            level4: {},
            level4Children: [],
            title: '未定义',
            article: {},
            details: [],
            showError: false,
            content:
                '  简单来说，我们是一家医疗科技公司；复杂一点来说，我们是一家专注于微创介入、极具创新活力、全球性的医疗科技公司，希望通过创新的微创介入解决方案，改善人们的生活质量，提升全世界患者的健康品质。'
        }
    },
    async created() {
        await initNessaryData()

        const { id } = this.$route.params;
        const res = await fetchArticle({
            pageNum: 1,
            pageSize: 999,
            categoryId: id
        })
        const content = _.get(res, 'data.record.0')
        this.article = content || {}
        try {
            const temp = _.get(content, 'contentDetails')
            this.details = JSON.parse(temp)
        } catch (e) {
            console.log(e)
            this.details = []
        }
        if (_.isEmpty(this.details)) {
            this.showError = true
        }
        console.log('created', content, this.$route.params, window.wx)

        window.wx.previewFile({
            url: "https://view.officeapps.live.com/op/view.aspx?src=https://s2-cdn.oneitfarm.com/1667216076070-RIC平台目录v3.docx",
            name: '', // 需要预览文件的文件名，必须有带文件格式的后缀，例如.doc(不填的话取url的最后部分，最后部分是个包含格式后缀的文件名)
            size: 1048576 // 需要预览文件的字节大小(必填，而且大小必须正确，否则会打开失败)
        });


    },
    computed: {},
    mounted() { },
    methods: {
        jumpTo() {
            this.$router.go(-1)
        }
    }
}
</script>
  
<style lang="scss">
.audio-container {
    background: #023a6d;
    height: 100%;
    min-height: 100vh;
    box-sizing: border-box;

    .audio-top {
        position: relative;
        width: 100%;
        height: 181px;

        .audio-top-bg-img {
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
        margin-top: 16px;
        padding-left: 30px;
        padding-right: 30px;
    }

    .card-list-item {
        margin-bottom: 10px;
    }

    .audio-center {
        width: 100%;
        display: flex;
        padding: 0 30px;
        justify-content: center;

        .mini-audio {
            width: 100% !important;
            margin: 14px 0px !important;
        }
    }

    .image-center {
        margin-top: 30px;
        width: 100%;
        display: flex;
        justify-content: center;
        padding: 0 30px;
        width: 100%;
        height: 396px;

        .image {
            background: #eff9f6;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }

    .player-container {
        margin-top: 30px;
        width: 100%;
        display: flex;
        justify-content: center;
        padding: 0 30px;
    }
}
</style>
  