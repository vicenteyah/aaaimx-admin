import { fetchListP } from '@/api/partner'
import { fetchListD } from '@/api/division'
import { fetchRoles, fetchList } from '@/api/member'

const state = {
  partners: [],
  divisions: [
    {
      id: 1,
      name: 'Software',
      story: '',
      logo: null
    },
    {
      id: 2,
      name: 'Machine Learning',
      story: '',
      logo: null
    },
    {
      id: 3,
      name: 'Operations',
      story: '',
      logo: null
    },
    {
      id: 4,
      name: 'Robotics',
      story: '',
      logo: null
    },
    {
      id: 5,
      name: 'Applied Maths',
      story: '',
      logo: null
    },
    {
      id: 6,
      name: 'Social Impact',
      story: '',
      logo: null
    },
    {
      id: 8,
      name: 'Board',
      story: '',
      logo: null
    },
    {
      id: 9,
      name: 'Biomedics',
      story: '',
      logo: null
    }
  ],
  roles: [
    {
      id: 4,
      name: 'Graduated'
    },
    {
      id: 5,
      name: 'Member'
    },
    {
      id: 3,
      name: 'Researcher'
    },
    {
      id: 1,
      name: 'Student'
    },
    {
      id: 2,
      name: 'Teacher'
    }
  ],
  collaborators: [],
  postForm: {
    fullname: '',
    email: '',
    active: false,
    board: false,
    thumbnailUrl: '',
    thumbnailFile: null,
    charge: '',
    adscription: null,
    membership: null,
    divisions: [],
    roles: []
  }
}

const getters = {
  partners: state => state.partners,
  divisions: state => state.divisions,
  roles: state => state.roles
}

const mutations = {
  SET_MEMBER: (state, member) => {
    state.postForm = Object.assign({}, member)
  },
  SET_PARTNERS: (state, partners) => {
    state.partners = partners
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
  },
  SET_DIVISIONS: (state, divisions) => {
    state.divisions = divisions
  },
  SET_COLLS: (state, collaborators) => {
    state.collaborators = collaborators
  }
}

const actions = {
  fetchPartners ({ commit }) {
    return new Promise((resolve, reject) => {
      fetchListP()
        .then(data => {
          commit('SET_PARTNERS', data.results)
          resolve()
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  fetchDivisions ({ commit }) {
    return new Promise((resolve, reject) => {
      fetchListD()
        .then(data => {
          commit('SET_DIVISIONS', data.results)
          resolve()
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  fetchRoles ({ commit }) {
    return new Promise((resolve, reject) => {
      fetchRoles()
        .then(data => {
          commit('SET_ROLES', data.results)
          resolve()
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  fetchCollaborators ({ commit }) {
    return new Promise((resolve, reject) => {
      fetchList()
        .then(res => {
          fetchList({ limit: res.count }).then(data => {
            commit('SET_COLLS', data.results)
            resolve()
          })
        })
        .catch(err => {
          reject(err)
        })
    })
  }
}
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
