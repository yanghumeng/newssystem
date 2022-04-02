import request from './request'
// 注册
export const registerApi=(params)=>request.post('/register',params)
// 登录
export const loginApi=(params)=>request.post('/login',params)
// 获取文章列表
export const articleApi=(params)=>request.get('/article',{params})
// 添加文章
export const articleAddApi=(params)=>request.post('/article/add',params)
// 获取文章
export const getArticleApi=(params)=>request.get(`/article/${params.id}`)
// 修改文章
export const articleUpdateApi=(params)=>request.put('/article/update',params)
// 删除文章
export const delArticleApi=(params)=>request.put('/article/remove',params)
