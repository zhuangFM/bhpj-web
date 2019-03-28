<template>
  <div>
    <Divider>内容发布</Divider>
    <Form ref="formRef" :model="contentData" :rules="ruleValidate" :label-width="80">
      <FormItem label="标题" prop="title">
        <Input v-model="contentData.title" placeholder="2-80字符" style="width: 400px"></Input>
      </FormItem>
      <FormItem label="摘要" prop="summary">
        <Input v-model="contentData.summary" placeholder="2-140字符" style="width: 400px"></Input>
      </FormItem>
      <FormItem label="图片" prop="imageType">
        <RadioGroup v-model="contentData.imageType">
          <Radio label="0">图片地址</Radio>
          <Radio label="1">本地上传</Radio>
        </RadioGroup>
      </FormItem>
      <FormItem label="图片地址" prop="imagePath">
        <Input v-model="contentData.imagePath" placeholder="图片地址" style="width: 400px"></Input>
      </FormItem>
      <FormItem label="本地图片" prop="imagePath">
        <Upload action="">
          <Button icon="ios-cloud-upload-outline">选择本地图片</Button>
        </Upload>
      </FormItem>
      <FormItem label="正文" prop="detail">
        <Input v-model="contentData.detail" type="textarea" :autosize="{minRows: 4,maxRows: 8}" placeholder="2-1000字符" style="width: 400px" ></Input>
      </FormItem>
      <FormItem label="价格" prop="price">
        <Input v-model="contentData.price" type="number" style="width: 200px"  ></Input>
      </FormItem>
      <FormItem>
        <Button type="primary" @click="handleSubmit('formRef')">提交</Button>
        <Button @click="handleReset('formRef')" style="margin-left: 8px">重置</Button>
      </FormItem>
    </Form>
  </div>
</template>

<script>
  export default {
    name: "ContentPublishPage",
    data() {
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
            {required: true, message: 'The name cannot be empty', trigger: 'blur'}
          ],
          mail: [
            {required: true, message: 'Mailbox cannot be empty', trigger: 'blur'},
            {type: 'email', message: 'Incorrect email format', trigger: 'blur'}
          ],
          city: [
            {required: true, message: 'Please select the city', trigger: 'change'}
          ],
          gender: [
            {required: true, message: 'Please select gender', trigger: 'change'}
          ],
          interest: [
            {required: true, type: 'array', min: 1, message: 'Choose at least one hobby', trigger: 'change'},
            {type: 'array', max: 2, message: 'Choose two hobbies at best', trigger: 'change'}
          ],
          date: [
            {required: true, type: 'date', message: 'Please select the date', trigger: 'change'}
          ],
          time: [
            {required: true, type: 'string', message: 'Please select time', trigger: 'change'}
          ],
          desc: [
            {required: true, message: 'Please enter a personal introduction', trigger: 'blur'},
            {type: 'string', min: 20, message: 'Introduce no less than 20 words', trigger: 'blur'}
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
      handleReset(name) {
        this.$refs[name].resetFields();
      }
    }
  }
</script>

<style scoped>

</style>
