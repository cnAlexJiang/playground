import Vue from 'vue'
import { getActiveList } from '@/api/active'
const state = Vue.observable({
    activeList: []
})

export async function fetchActiveList() {
    let list = state.activeList
    if (list.length == 0) {
        const res = await getActiveList({ pageNum: 1, pageSize: 999 })
        list = _.get(res.data, 'record') || []
    }
    return list
}
