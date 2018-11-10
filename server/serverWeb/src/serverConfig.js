let serverUrl = "http://localhost:3000/";
let url = {
  register: serverUrl + 'admin/register', //注册管理员
  login: serverUrl + 'admin/login', //后台登录,
  adminList:serverUrl+"admin/adminList"
}

module.exports = url;
