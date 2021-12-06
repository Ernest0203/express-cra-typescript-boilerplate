import Api from './api';

export default {
  filesUpload: data => {
    const api = new Api();
    return api.query('post', `files`, data);
  },
  getFiles: () => {
    const api = new Api();
    return api.query('get', `files/`);
  },
};
