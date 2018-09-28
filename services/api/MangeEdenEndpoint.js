import axios from 'axios';

const config = {
  baseURL: 'https://www.mangaeden.com/api',
  language: 0,
  p: 1,
  l: 25
}

export default {
  getMangaList(p = config.p, l = config.l) {
    return axios.get(
      config.baseURL + 
      '/list/' + 
      config.language +
      '?p=' + p +
      '&l=' + l)
  },

  getMangaInfo(id) {
    return axios.get(
      config.baseURL + 
      '/manga/' + 
      id
    )
  },

  getChapter(id) {
    return axios.get(
      config.baseURL + 
      '/chapter/' + 
      id
    )
  }
}