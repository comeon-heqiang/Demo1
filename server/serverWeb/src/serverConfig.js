let serverUrl = "http://localhost:3000/";
let url = {
  register: serverUrl + 'admin/register', //注册管理员
  login: serverUrl + 'admin/login', //后台登录,
  adminList:serverUrl+"admin/adminList", //查询管理员
  delAdmin:serverUrl+'admin/delAdmin', //删除管理员
  eventsList:serverUrl+'events/eventsList' //活动列表
}

module.exports = url;
