export const getUserInfo = state => {
  let info = localStorage.getItem('userInfo');
  if (!info) {
    return {'isLogin': false};
  } else {
    console.log(JSON.parse(info));
    return JSON.parse(info);
  }
};
