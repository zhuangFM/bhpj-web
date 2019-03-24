<template>
  <Row type="flex" justify="center" align="middle" class="code-row-bg" >
    <Col span="8">col-12</Col>
    <Col span="8" >
      <Form :ref="dataForm" :model="dataForm" :rules="ruleInline" >
        <FormItem prop="user">
          <Input type="text" v-model="dataForm.user" placeholder="Username">
            <Icon type="ios-person-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem prop="password">
          <Input type="password" v-model="dataForm.password" placeholder="Password">
            <Icon type="ios-lock-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem>
          <Button type="primary" @click="handleSubmit('dataForm')">Signin</Button>
        </FormItem>
      </Form>
    </Col>
    <Col span="8">col-12</Col>
  </Row>
</template>

<script>
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
            {required: true, message: 'Please fill in the user name', trigger: 'blur'}
          ],
          password: [
            {required: true, message: 'Please fill in the password.', trigger: 'blur'},
            {type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      handleSubmit(name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.$Message.success('Success!');
          } else {
            this.$Message.error('Fail!');
          }
        })
      },

    },

  }
</script>

<style scoped>

</style>
