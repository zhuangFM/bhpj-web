<template>
  <div class="layout">
    <Layout>
      <Header>
        <!--<div class="layout-logo"></div>-->
        <div v-if="getUserInfo.isLogin">
          <div style="display:inline;float: left;color: #ffffff;">
            <Icon type="md-person"/>
            <span v-show="getUserInfo.userInfo.userType === 1||getUserInfo.userInfo.userType === '1'">
                欢迎买家，{{getUserInfo.userInfo.userName}}
              </span>
            <span v-show="getUserInfo.userInfo.userType === 0||getUserInfo.userInfo.userType === '0'">
                欢迎卖家，{{getUserInfo.userInfo.userName}}
              </span>
            <span @click="userLogout"><a>[退出]</a></span>
          </div>
          <div style="float:right;" v-show="getUserInfo.userInfo.userType === 1||getUserInfo.userInfo.userType === '1'">
            <Menu mode="horizontal" theme="dark" active-name="1">
              <MenuItem name="1" to="/main-page">
                <Icon type="md-home"/>
                首页
              </MenuItem>
              <MenuItem name="2" to="/main-page">
                <Icon type="md-appstore"/>
                财务
              </MenuItem>
              <MenuItem name="3" to="/main-page">
                <Icon type="md-cart"/>
                购物车
              </MenuItem>
            </Menu>
          </div>
          <div style="float:right;" v-show="getUserInfo.userInfo.userType === 0||getUserInfo.userInfo.userType === '0'">
            <Menu mode="horizontal" theme="dark" active-name="1">
              <MenuItem name="1" to="/main-page">
                <Icon type="md-home"/>
                首页
              </MenuItem>
              <MenuItem name="2" to="/content-publish-page">
                <Icon type="md-cloud-upload"/>
                发布
              </MenuItem>
            </Menu>
          </div>
        </div>
        <div v-else-if="isLogin">
          <div style="display:inline;float: left;color: #ffffff;">
            <Icon type="md-person"/>
            <span v-show="userType === 0||userType === '0'">
                欢迎卖家，{{userName}}
              </span>
            <span v-show="userType === 1||userType === '1'">
                欢迎买家，{{userName}}
              </span>
            <span @click="userLogout"><a>[退出]</a></span>
          </div>
          <div style="float:right;" v-show="userType === 1||userType === '1'">
            <Menu mode="horizontal" theme="dark" active-name="1">
              <MenuItem name="1" to="/main-page">
                <Icon type="md-home"/>
                首页
              </MenuItem>
              <MenuItem name="2" to="/main-page">
                <Icon type="md-appstore"/>
                财务
              </MenuItem>
              <MenuItem name="3" to="/main-page">
                <Icon type="md-cart"/>
                购物车
              </MenuItem>
            </Menu>
          </div>
          <div style="float:right;" v-show="userType === 0||userType === '0'">
            <Menu mode="horizontal" theme="dark" active-name="1">
              <MenuItem name="1" to="/main-page">
                <Icon type="md-home"/>
                首页
              </MenuItem>
              <MenuItem name="2" to="/content-publish-page">
                <Icon type="md-cloud-upload"/>
                发布
              </MenuItem>
            </Menu>
          </div>
        </div>
        <div v-else>
          <router-link to="/login-page"  style="color: #ffffff;">
              <Icon type="md-person"/>
              请[登陆]
          </router-link>
        </div>
      </Header>
      <Content :style="{padding: '0 50px',align:'left'}">
        <router-view/>
      </Content>
      <Footer class="layout-footer-center">2019-2020 &copy; fimi.zhuang</Footer>
    </Layout>
  </div>
</template>

<script>
  import store from '@/vuex/store';
  import {mapActions, mapGetters} from 'vuex';


  export default {
    name: "MainPage",
    data() {
      return {
        'isLogin': false,
        'userType': '',
        'userName': '',
      }
    },
    computed: {
      ...mapGetters(['getUserInfo'])
    },
    methods: {
      ...mapActions(['logout']),
      userLogout() {
        var father = this;
        this.logout({}).then(data => {
          if (data) {
            father.$router.push('/login-page');
          }
        });
      },
      initData() {
        console.log(this.$route.query);
        this.isLogin = this.$route.query.isLogin;
        this.userName = this.$route.query.userName;
        this.userType = this.$route.query.userType;
        console.log(this.userType);
        this.$router.push({path: '/content-page', query: {"userId": 1}});
      }
    },
    created() {
      this.initData();
    },
    mounted() {
    },
    store
  }
</script>

<style scoped>
  .layout {
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  }

  .layout-footer-center {
    text-align: center;
  }

  /*去掉 router-link 下划线*/
  a {
    text-decoration: none;
  }
</style>
