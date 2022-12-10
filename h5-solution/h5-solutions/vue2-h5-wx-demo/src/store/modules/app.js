import _ from 'lodash'

function flatTree(tree) {
  const arr = []
  const res = []
  if (_.isArray(tree)) {
    arr.push(...tree)
  }
  while (arr.length > 0) {
    const node = arr.shift()
    const children = node.children
    res.push(node)
    if (children && children.length > 0) {
      arr.unshift(...children)
    }
  }

  return res
}


const state = {
  userName: '',
  user: {},
  CategoryTree: [],
  CategoryFlat: [],
}
const mutations = {
  SET_USER_NAME(state, name) {
    state.userName = name
  },
  SET_CATEGORY_FLAT(state, arr) {
    state.CategoryTree = arr
    state.CategoryFlat = flatTree(arr)
  },
  SET_USER(state, user) {
    state.user = user
  }
}

const actions = {
  // 设置name
  setUserName({ commit }, name) {
    commit('SET_USER_NAME', name)
  }
}
export default {
  state,
  mutations,
  actions
}
