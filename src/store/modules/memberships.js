
const state = {
  postForm: {
    display_name: '',
    QR: '',
    exp: null,
    file: null,
    member: null
  }
}

const mutations = {
  SET_MEMBERSHIP: (state, m) => {
    state.postForm = Object.assign({}, m)
  }
}

const actions = {}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
