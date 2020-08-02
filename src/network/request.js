import axios from 'axios'
export function request(config) {
  const instance = axios.create({
    // baseURL: "http://152.136.185.210:8000/api/n3",
    timeout: 5000
  })
   instance.interceptors.request.use(config => {
   // Do something before request is sent
   return config;
   },error => {
   // Do something with request error
   return Promise.reject(error);
   });

   instance.interceptors.response.use(response => {
   // Do something before response is sent
   return response;
   },error => {
   // Do something with response error
   return Promise.reject(error);
   });

  return instance(config)
}