import axios from "axios";
export default {
  http: axios,
  create(entity) {
    this.http.post(this.baseUrl, entity)
  },

  read() {
    this.http.get(this.baseUrl)
  },

  update(entity) {
    this.http.put(this.baseUrl, entity)
  },

  delete() {
    this.http.delete(this.baseUrl)
  },

  get baseUrl() {
    return '/'
  }
}
