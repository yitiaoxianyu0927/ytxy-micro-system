
import RequestUtils from '@/utils/request.js'

const { requestServer } = RequestUtils;

export function loginByUsername(staff_account, password,check_code,short_msg,loginbyUserName = false) {
  const data = {
    staff_account,
    password,
    check_code,
    short_msg,    //短信验证码
    loginbyUserName
  }
  return requestServer('/safety/user/login',data);
}

export function logout(token) {
  return requestServer('/safety/user/logout',{token});
}

export function getUserInfo(token) {
  return requestServer('/safety/user/getUserInfoByToken',{ token });
}


export function loginByShortMsg(mobile,short_msg){  ///电话  //短信验证码

  const data = {

    mobile,
    short_msg
  }

  return requestServer('/safety/user/loginByShortMsg',data)

}