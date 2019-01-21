import axios from 'axios';

export default class OmdbApi {
  constructor(apikey) {
    this.url = 'https://www.omdbapi.com/';
    this.cache = {
      i: {},
      t: {},
      s: {},
    };
    this.getRequest = (key, value) => {
      if (this.cache[key][value]) {
        return new Promise(res => res(this.cache[key][value]));
      } else {
        const params = {
          apikey: apikey,
          plot: 'full',
        };
        params[key] = value;
        return axios
          .get(this.url, { params })
          .then(res => (this.cache[key][value] = res.data), () => {});
      }
    };
  }
  search(query) {
    return this.getRequest('s', query);
  }
  getById(id) {
    return this.getRequest('i', id);
  }
  getByTitle(title) {
    return this.getRequest('t', title);
  }
}
