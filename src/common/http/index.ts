import axios from 'axios';
import { getToken } from '@/common/utils';
import history from '@/common/router';
//不拦截token的白名单
import whiteList from './httpWhiteRoster';
//处理函数
import { handleStatus } from './handleStatus';
//请求地址
import webRoot from './webRoot';

let baseUrl = webRoot;

//生产环境
if (process.env.NODE_ENV === 'production') {
    if (!baseUrl) {
        baseUrl = window.location.origin;
    }
    axios.defaults.baseURL = baseUrl;
}
//开发环境
if (process.env.NODE_ENV === 'development') {
    //注意:webpack中devSever配置了proxy跨域,不能设置baseurl
    if (process.env.NODE_PROXY) {
        axios.defaults.baseURL = undefined;
    }
}
//默认10秒超时
axios.defaults.timeout = 10000;

//http request 拦截器
const author = 'Authorization';
//取消请求
let cancel: any = null;
axios.interceptors.request.use(
    (config) => {
        const token = getToken();
        if (!token) {
            console.error('!未设置token');
        }
        if (token) {
            if (!config.url) {
                return config;
            }
            if (whiteList.indexOf(config.url) === -1) {
                config.headers.common[author] = 'Bearer ' + token;
            }
        }
        //处理请求取消
        const CancelToken = axios.CancelToken;
        config.cancelToken = new CancelToken(c => {
            cancel = c;
        });
        return config;
    },
    (error) => Promise.reject(error)
);

//http response 拦截器
axios.interceptors.response.use(
    (response) => response,
    (error) => Promise.resolve(error.response)
);
// 监听路由变化
history.listen(() => {
    if (cancel) {
        cancel();
    }
});
interface HttpProps {
    POST: Function,
    GET: Function,
    DELETE: Function,
    PUT: Function
}
const http: HttpProps = {
    async POST(url: string, data: any) {
        const response = await axios.post(url, data, {});
        return handleStatus(response);
    },
    async GET(url: string, params: any) {
        const response = await axios.get(url, {
            params: {_t: +new Date(), ...params}
        });
        return handleStatus(response);
    },
    async DELETE(url: string, params: any) {
        const response = await axios.delete(url, {
            params: {_t: +new Date(), ...params}
        });
        return handleStatus(response);
    },
    async PUT(url: string, data: any) {
        const response = await axios.put(url, data, {});
        return handleStatus(response);
    }
};
export default http;