

import _ from 'lodash'
import { fetchArticle } from '@/api/article'
export default {
    methods: {

        async handleTypeDoc(id) {
            let url
            try {
                const res = await fetchArticle({
                    pageNum: 1,
                    pageSize: 999,
                    categoryId: id
                })
                const content = _.get(res, 'data.record.0')

                const temp = _.get(content, 'contentDetails')

                const details = JSON.parse(temp)

                if (_.get(content, 'contentType') === 'oss_preview') {
                    url = _.get(details[0], 'value')
                }

            } catch (e) {
                console.log(e)
            }
            return url
        },
        getAssetUrl(doc) {
            let url
            try {
                const temp = _.get(doc, 'contentDetails')
                const details = JSON.parse(temp)
                const res = _.find(details, { type: 'oss' })
                url = _.get(res, 'value')
            } catch (e) {
                console.log(e)
            }
            return url
        }
    }
}
