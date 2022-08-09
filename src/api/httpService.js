import axios from 'axios';

// axios.defaults.headers.common['x-auth-token'] = auth.getJwt()

const apiEndpoint = 'http://localhost:5000';
axios.interceptors.response.use(null, (error) => {
  if (
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500
  ) {
    return Promise.reject(error);
  } else {
    console.log('<<<Logging the error>>>', error);

    // alert("An unexpected error occurred.");
  }
});

axios.defaults.baseURL = apiEndpoint;

export function setJwt(token) {
  axios.defaults.headers.common['x-auth-token'] = token;
}

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  setJwt,
};
