const loadingMixin = {
  data () {
    return {
      loading: false,
      searching: false
    }
  },
  methods: {
    loadingFullPage () {
      return this.$loading({
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      })
    }
  }
}

export default loadingMixin
