<template>
  <div style="background:#eee;padding: 20px;">
    <Card :bordered="false" :style="{textAlign:'center',width:''}">

      <h3 slot="title">用 户 登 录</h3>
      <Form ref="formRef" :model="dataForm" :rules="ruleInline" style="width: 500px;margin-left: 670px;">
        <FormItem prop="user">
          <Input type="text" v-model="dataForm.user" placeholder="用户名">
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
  import { mapActions} from 'vuex';

  export default {
    name: "Login",
    data() {
      return {
        dataForm: {
          user: '',
          password: ''
        },
        ruleInline: {
          user: [
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
            var loginData = {userType: 0, userName: 'buyer',isLogin:true};
            this.login(loginData).then(data => {
              if (data) {
                this.$Message.success('登录成功!');
                father.$router.push({path:'/main-page',query:loginData});
              }
            })
          } else {
            this.$Message.error('信息不完整！');
          }
        })
      },
    },
    store
  }
</script>

<style scoped>
</style>
