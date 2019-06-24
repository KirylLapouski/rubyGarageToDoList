import repository from "./repository";

export default {
  ...repository,
  get baseUrl() {
    return '/api/project';
  }
}
