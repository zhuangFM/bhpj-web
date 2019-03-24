<template>
  <div class="layout">
    <Layout>
      <Header>
        <Menu mode="horizontal" theme="dark" active-name="1">
          <!--<div class="layout-logo"></div>-->
          <div class="layout-nav">
            <router-link to="/login-page">
              <MenuItem name="1">
                <Icon type="md-person" />
                请[登陆]
              </MenuItem>
            </router-link>
          </div>
        </Menu>
      </Header>
      <Content :style="{padding: '0 50px',align:'left'}">
        <Breadcrumb :style="{margin: '20px 0'}">
          <BreadcrumbItem to="/content-page">
            所有内容
          </BreadcrumbItem>
          <BreadcrumbItem to="/content-page">
            Components
          </BreadcrumbItem>
          <BreadcrumbItem to="/content-page">
            Layout
          </BreadcrumbItem>
        </Breadcrumb>
        <Card>
          <div style="min-height: 200px;">
            <router-view/>
          </div>
        </Card>
      </Content>
      <Footer class="layout-footer-center">2019-2020 &copy; fimi.zhuang</Footer>
    </Layout>
  </div>
</template>

<script>
  export default {
    name: "MainPage"
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

  .layout-logo {
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
  }

  .layout-nav {
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
  }

  .layout-footer-center {
    text-align: center;
  }

  /*去掉 router-link 下划线*/
  a {
    text-decoration: none;
  }
</style>
