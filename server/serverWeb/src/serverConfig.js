let serverUrl = "http://localhost:3000/";
let url = {
  register: serverUrl + 'admin/register', //注册管理员
  login: serverUrl + 'admin/login', //后台登录,
  adminList: serverUrl + "admin/adminList", //查询管理员
  delAdmin: serverUrl + 'admin/delAdmin', //删除管理员
  eventsList: serverUrl + 'events/eventsList', //活动列表
  addEvent: serverUrl + 'events/addEvent', //添加活动
  delEvent: serverUrl + 'events/delEvent', //删除活动
  editEvent: serverUrl + 'events/editEvent', //编辑活动
  updateEvent: serverUrl + 'events/updateEvent', //更新活动
  leaderList: serverUrl + 'leader', //领队
}

module.exports = url;
