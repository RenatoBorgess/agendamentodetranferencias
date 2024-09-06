import axios from 'axios'

const clientHttp = axios.create({
  baseURL: import.meta.env.VITE_API,
});

export default clientHttp;
