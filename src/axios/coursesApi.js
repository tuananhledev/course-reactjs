import axiosClient from './axiosClient';

const coursesApi = {
   fetchHome: () => {
      return axiosClient.get('/home');
   },
};

export default coursesApi;
