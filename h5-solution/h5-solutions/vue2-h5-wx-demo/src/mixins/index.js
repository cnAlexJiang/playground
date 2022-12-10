import { getCategoryTree } from '@/api/category'
import { getUserInfo } from '@/api/user'

import store from '@/store/index'
import _ from 'lodash'

import { Toast } from 'vant'


export async function initNessaryData() {
    const { CategoryTree, user } = store.state.app;
    if (!CategoryTree || CategoryTree.length == 0) {
        await fetchCategory()
    }
    if (_.isEmpty(user)) {
        await fetchUser()
    }
    console.log('initNessaryData')
}
async function fetchCategory() {
    let res = []
    try {
        res = await getCategoryTree()
    } catch (e) {
        console.log(e)
        Toast.fail('后端异常');
    }

    store.commit('SET_CATEGORY_FLAT', res.data)
}

async function fetchUser() {
    let user = {}
    try {
        const res = await getUserInfo()
        user = res.data
    } catch (e) {
        console.log(e)
        Toast.fail('后端异常');
    }
    store.commit('SET_USER', user)

}


export function getRecenetSearch() {
    const json = localStorage.getItem('recent_search');
    let arr = []
    try {
        arr = JSON.parse(json)
        if (!_.isArray(arr)) {
            arr = []
        }
    } catch (e) { }
    return arr
}
export function setRecenetSearch(title) {
    if (!title) {
        return

    }
    const json = localStorage.getItem('recent_search');
    let arr = []
    try {
        arr = JSON.parse(json)
        if (!_.isArray(arr)) {
            arr = []
        }
    } catch (e) { }
    if (arr.length > 10) {
        arr.shift()
    }
    if (arr.includes(title)) {
        return
    }
    arr.push(title)
    localStorage.setItem('recent_search', JSON.stringify(arr))
}