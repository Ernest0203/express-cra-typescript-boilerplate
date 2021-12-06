import axios from 'axios';

import config from '../config';

// import { store } from 'store'
// import { receiveLogout } from '../store/actions/auth.actions'

const { apiUrl } = config;

export default class Api {
  constructor({
    baseUrl = apiUrl,
    extraHeaders = {},
    returnError = false,
  } = {}) {
    const headers = {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      ...extraHeaders,
    };

    headers.Authorization = ``;

    this.axios = axios.create({
      baseURL: `${baseUrl}/`,
      headers,
    });

    if (returnError) {
      this.axios.interceptors.response.use(
        function(response) {
          return Promise.resolve(response);
        },
        function(error) {
          if (error.response) {
            return Promise.reject(error.response);
          }
        }
      );
    }
  }

  query(method, url, data = {}) {
    return this.axios[method](url, data);
  }
}
