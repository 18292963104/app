import axios from "axios";
import nprogress from "nprogress";
import 'nprogress/nprogress.css';
import store from '../store'

const request = axios.create({
    baseURL: "/api",
    timeout: 5000,
})

request.interceptors.request.use((config) => {

    if (store.state.detail.uuid_token) {
        config.headers.userTempId = store.state.detail.uuid_token
    }
    nprogress.start()
    return config
})

request.interceptors.response.use((res) => {
    nprogress.done()
    return res.data
}, error => {
    return Promise.reject(new Error('faile'))
})

export default request;
