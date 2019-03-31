<template>
  <div style="background:#eee;padding: 20px;">
    <Card :bordered="false" :style="{textAlign:'center',width:''}">

      <h3 slot="title">用 户 登 录</h3>
      <Form ref="formRef" :model="dataForm" :rules="ruleInline" style="width: 500px;margin-left: 670px;">
        <FormItem prop="uname">
          <Input type="text" v-model="dataForm.uname" placeholder="用户名">
            <Icon type="ios-person-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem prop="password">
          <Input type="password" v-model="dataForm.password" placeholder="密码">
            <Icon type="ios-lock-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem>
          <Button type="primary" size="large" @click="handleSubmit('formRef')">登录</Button>
        </FormItem>
      </Form>
    </Card>
  </div>
</template>

<script>
  import store from '@/vuex/store';
  import {mapActions} from 'vuex';
  import crypto from 'crypto';


  export default {
    name: "Login",
    data() {
      return {
        dataForm: {
          uname: '',
          password: ''
        },
        ruleInline: {
          uname: [
            {required: true, message: '请填写用户名', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '请填写密码', trigger: 'blur'},
          ]
        }
      }
    },
    methods: {
      ...mapActions(['login']),
      handleSubmit(name) {
        var father = this;
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.dataForm.password = this.getMD5(this.dataForm.password);
            this.$http.post('/api/user/login', this.dataForm).then(response => {
              console.log(response);
              if (response.data.code == '1') {
                const loginData = {'userId':response.data.user.id,'userType': response.data.user.type, 'userName': response.data.user.uname, 'isLogin': true};
                this.login(loginData).then(data => {
                  if (data) {
                    this.$Message.success('登录成功!');
                    father.$router.push({path: '/main-page', query: loginData});
                  }
                });
              }
            });
          } else {
            this.$Message.error('信息不完整！');
          }
        });
      },
      getMD5(str) {
        const md5 = crypto.createHash('md5');
        md5.update(str);
        return md5.digest('hex');
      }
    },
    store
  }
</script>

<style scoped>
</style>
