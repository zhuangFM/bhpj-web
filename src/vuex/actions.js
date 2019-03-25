// 登陆
export const login = ({ commit }, data) => {
  console.log("access login action");
  return new Promise((resolve, reject) => {
    commit('SET_USER_LOGIN_INFO', data);
    resolve(true);
  });
};


// 登出
export const logout = ({ commit }, data) => {
  return new Promise((resolve, reject) => {
    commit('SIGN_OUT_USER', data);
    resolve(true);
  });
};


