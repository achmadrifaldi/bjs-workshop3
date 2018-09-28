import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      chapter: []
    },
    mutations: {
      addChapter (state, chapter) {
        state.chapter = chapter
      }
    }
  })
}

export default createStore