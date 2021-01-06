import axios from 'axios'

const service = axios.create({
  baseURL: process.env.REACT_APP_BASE_API,
  withCredentials: true,
  timeout: 10000
})

service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    Promise.reject(error)
    return { error }
  }
)

service.interceptors.response.use(
  response => {
    return response
  },
  error => {
    Promise.reject(error)
    return { error }
  }
)

export default service
