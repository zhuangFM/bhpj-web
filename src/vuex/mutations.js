
// 设置用户登录信息
export const SET_USER_LOGIN_INFO = (state, data) => {
  const info={
    'isLogin':true,
    'userInfo':data
  };
  localStorage.setItem('userInfo', JSON.stringify(info));
  state.userInfo = data;
  state.isLogin = true;
};


// 用户登出
export const SIGN_OUT_USER = (state) => {
  state.userInfo = {};
  state.isLogin = false;
  localStorage.removeItem('userInfo');
};

