import axios from 'axios';

const instance = axios.create({
  baseURL: "https://my-web-project-01.firebaseio.com/"
});

export default instance;