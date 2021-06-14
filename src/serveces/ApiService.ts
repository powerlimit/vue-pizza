import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://my-json-server.typicode.com/powerlimit/vue-pizza',
  timeout: 1000,
  headers: {
    Accept: 'application/json',
    'Content-type': 'application/json',
  },
});

export default {
  getItems(): Promise<any> {
    return apiClient.get('/pizza');
  },
};
