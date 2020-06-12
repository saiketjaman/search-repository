const state = () => {
  return {
    repo: [],
    pageTotal: 0
  }
}

const mutations = {
  setRepo(state, repo) {
    state.repo = repo
  },
  setPageTotal(state, total) {
    state.pageTotal = total
  }
}

const getters = {
  getRepos: state => state.repo,
  getPageTotal: state => state.pageTotal
}

const actions = {
  async fetchRepos({
    commit
  }, {
    q,
    page = 1,
    per_page = 30
  }) {
    let axiosConfig = {
      headers: {
        'Accept': 'application/vnd.github.mercy-preview+json'
      }
    };
    const response = await this.$axios.get(
      `https://api.github.com/search/topics?q=${q}&order=desc&page=${page}&per_page=${per_page}`, axiosConfig
    )
    commit('setRepo', response.data.items)
    commit('setPageTotal', response.data.total_count)
  }
}

export default {
  state,
  mutations,
  getters,
  actions
}
