import request from './request'
// 注册
export const registerApi=(params)=>request.post('/register',params)
// 登录
export const loginApi=(params)=>request.post('/login',params)
// 获取文章列表
export const articleApi=(params)=>request.get('/article',{params})