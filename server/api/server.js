import axios from '../../src/utils/axios'

// 注册
export async function post_register(params) {
    return axios.post(`/api/user/register`, params);
}

// 登录
export async function post_login(params) {
    return axios.post(`/api/user/login`, params);
}
