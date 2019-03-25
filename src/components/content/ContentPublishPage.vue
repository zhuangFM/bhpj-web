<template>
  <Form ref="formRef" :model="contentData" :rules="ruleValidate" :label-width="80">
    <FormItem label="Name" prop="name">
      <Input v-model="contentData.name" placeholder="Enter your name"></Input>
    </FormItem>
    <FormItem label="E-mail" prop="mail">
      <Input v-model="contentData.mail" placeholder="Enter your e-mail"></Input>
    </FormItem>
    <FormItem label="City" prop="city">
      <Select v-model="contentData.city" placeholder="Select your city">
        <Option value="beijing">New York</Option>
        <Option value="shanghai">London</Option>
        <Option value="shenzhen">Sydney</Option>
      </Select>
    </FormItem>
    <FormItem label="Gender" prop="gender">
      <RadioGroup v-model="contentData.gender">
        <Radio label="male">Male</Radio>
        <Radio label="female">Female</Radio>
      </RadioGroup>
    </FormItem>
    <FormItem label="Desc" prop="desc">
      <Input v-model="contentData.desc" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></Input>
    </FormItem>
    <FormItem>
      <Button type="primary" @click="handleSubmit('formRef')">Submit</Button>
      <Button @click="handleReset('formRef')" style="margin-left: 8px">Reset</Button>
    </FormItem>
  </Form>
</template>

<script>
    export default {
        name: "ContentPublishPage",
      data () {
        return {
          contentData: {
            name: '',
            mail: '',
            city: '',
            gender: '',
            interest: [],
            time: '',
            desc: ''
          },
          ruleValidate: {
            name: [
              { required: true, message: 'The name cannot be empty', trigger: 'blur' }
            ],
            mail: [
              { required: true, message: 'Mailbox cannot be empty', trigger: 'blur' },
              { type: 'email', message: 'Incorrect email format', trigger: 'blur' }
            ],
            city: [
              { required: true, message: 'Please select the city', trigger: 'change' }
            ],
            gender: [
              { required: true, message: 'Please select gender', trigger: 'change' }
            ],
            interest: [
              { required: true, type: 'array', min: 1, message: 'Choose at least one hobby', trigger: 'change' },
              { type: 'array', max: 2, message: 'Choose two hobbies at best', trigger: 'change' }
            ],
            date: [
              { required: true, type: 'date', message: 'Please select the date', trigger: 'change' }
            ],
            time: [
              { required: true, type: 'string', message: 'Please select time', trigger: 'change' }
            ],
            desc: [
              { required: true, message: 'Please enter a personal introduction', trigger: 'blur' },
              { type: 'string', min: 20, message: 'Introduce no less than 20 words', trigger: 'blur' }
            ]
          }
        }
      },
      methods: {
        handleSubmit (name) {
          this.$refs[name].validate((valid) => {
            if (valid) {
              this.$Message.success('Success!');
            } else {
              this.$Message.error('Fail!');
            }
          })
        },
        handleReset (name) {
          this.$refs[name].resetFields();
        }
      }
    }
</script>

<style scoped>

</style>
