import axios from 'axios';

export const baseUrl = 'http://localhost:3000';

//axios 的实例及拦截器配置
const axiosInstance = axios.create({
  baseURL: baseUrl,
  withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
});

axiosInstance.interceptors.request.use(
  config => {
    // 不传递默认开启loading
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

axiosInstance.interceptors.response.use(
  res => res.data,
  err => {
    console.log(err, "网络错误");
  }
);

export {
  axiosInstance
};

