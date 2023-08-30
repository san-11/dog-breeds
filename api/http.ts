import axios from 'axios';

const BASE_URL = 'https://dog.ceo/api/';

const client = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-type': 'application/json',
  },
});

export default client;
