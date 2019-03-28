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
      <FormItem label="图片地址" prop="imagePath" v-show="contentData.imageType === 0 || contentData.imageType === '0'">
        <Input v-model="contentData.imagePath" placeholder="图片URL" style="width: 400px"></Input>
      </FormItem>
      <FormItem label="本地图片" v-show="contentData.imageType === 1 || contentData.imageType === '1'">
        <Upload action="">
          <Button icon="ios-cloud-upload-outline">选择本地图片</Button>
        </Upload>
      </FormItem>
      <FormItem label="正文" prop="detail">
        <Input v-model="contentData.detail" type="textarea" :autosize="{minRows: 4,maxRows: 8}" placeholder="2-1000字符"
               style="width: 400px"></Input>
      </FormItem>
      <FormItem label="价格" prop="price">
        <Input v-model="contentData.price" type="number" style="width: 200px"></Input>
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
          imageType: 0,
        },
        ruleValidate: {
          title: [
            {required: true, type: 'string', min: 2, max: 80, message: '输入有误', trigger: 'blur'}
          ],
          summary: [
            {required: true, type: 'string', min: 2, max: 140, message: '输入有误', trigger: 'blur'}
          ],
          imageType: [
            {required: true, type: 'string', message: '请选择', trigger: 'blur'}
          ],
          imagePath: [
            {type: 'url', message: '输入正确的URL', trigger: 'blur'}
          ],
          detail: [
            {required: true, type: 'string', min: 2, max: 1000, message: '输入有误', trigger: 'blur'}
          ],
          price: [
            {required: true, type: 'string', message: '请输入正确的价格', trigger: 'blur'}
          ],
        }
      }
    },
    methods: {
      handleSubmit(name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            console.log(this.contentData);
            this.showSpin();
            this.$http.post('/api/content/save_content', this.contentData).then(response => {
              console.log(response);
              this.$Spin.hide();
              this.$Message.success('发布成功!');
            });
          } else {
            this.$Message.error('发布失败!');
          }
        })
      },
      handleReset(name) {
        this.$refs[name].resetFields();
      },
      showSpin(){
        this.$Spin.show({
          render: (h) => {
            return h('div', [
              h('Icon', {
                'class': 'demo-spin-icon-load',
                props: {
                  type: 'ios-loading',
                  size: 18
                }
              }),
              h('div', '正在发布....')
            ])
          }
        });
      }
    }
  }
</script>

<style scoped>
  .demo-spin-icon-load{
    animation: ani-demo-spin 1s linear infinite;
  }
</style>
