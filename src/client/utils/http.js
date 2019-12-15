import axios from 'axios';

const instance = axios.create();

instance.interceptors.response.use(null, (rejection) => {
  const { response: { status } } = rejection;
  if (status != 200) {
    console.error('Request failed with status code: ', status); // eslint-disable-line
  }

  return Promise.reject(rejection);
});

export default instance;