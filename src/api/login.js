import request from '@/utils/request'

export function login(username, password, code, uuid) {
  return Promise.resolve({ 'user': { 'dataScopes': [], 'roles': ['admin'], 'user': { 'avatarName': 'avatar.jpeg', 'avatarPath': '/home/eladmin/avatar/avatar.jpeg', 'createTime': '2018-08-23 09:11:56', 'dept': { 'id': 2, 'name': '研发部' }, 'email': 'admin@el-admin.vip', 'enabled': true, 'gender': '男', 'id': 1, 'jobs': [{ 'id': 11, 'name': '全栈开发' }], 'nickName': '管理员', 'phone': '18888888888', 'pwdResetTime': '2020-05-03 16:38:31', 'roles': [{ 'dataScope': '全部', 'id': 1, 'level': 1, 'name': '超级管理员' }], 'updateTime': '2020-09-05 10:43:31', 'updatedBy': 'admin', 'username': 'admin' }}, 'token': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiI0OTZmZDAxM2E4N2Q0OTExOTZhY2VhOTcyMTIxZjk5ZiIsInVzZXIiOiJhZG1pbiIsInN1YiI6ImFkbWluIn0.PdaCm3uh1cO-fh8ecvWDn0DgB98yi77qdqBlJr2bUb6o8wAVaWKuLbtoJRbNwkv57jwoZkNl9f8j0qFuThKzQA' })
  // return request({
  //   url: 'auth/login',
  //   method: 'post',
  //   data: {
  //     username,
  //     password,
  //     code,
  //     uuid
  //   }
  // })
}

export function getInfo() {
  return Promise.resolve({ 'dataScopes': [], 'roles': ['admin'], 'user': { 'avatarName': 'avatar.jpeg', 'avatarPath': '/home/eladmin/avatar/avatar.jpeg', 'createTime': '2018-08-23 09:11:56', 'dept': { 'id': 2, 'name': '研发部' }, 'email': 'admin@el-admin.vip', 'enabled': true, 'gender': '男', 'id': 1, 'jobs': [{ 'id': 11, 'name': '全栈开发' }], 'nickName': '管理员', 'phone': '18888888888', 'pwdResetTime': '2020-05-03 16:38:31', 'roles': [{ 'dataScope': '全部', 'id': 1, 'level': 1, 'name': '超级管理员' }], 'updateTime': '2020-09-05 10:43:31', 'updatedBy': 'admin', 'username': 'admin' }})
  // return request({
  //   url: 'auth/info',
  //   method: 'get'
  // })
}

export function getCodeImg() {
  return Promise.resolve({ 'uuid': 'code-key-4b64183f9bb04a1a9342c39613bd449b', 'img': 'data:image/png;base64,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' })
  // return request({
  //   url: 'auth/code',
  //   method: 'get'
  // })
}

export function logout() {
  return request({
    url: 'auth/logout',
    method: 'delete'
  })
}
