<template>
  <div>
    <Divider>已购买内容</Divider>
    <Table :columns="columns1" :data="data1"></Table>
  </div>
</template>

<script>
    export default {
        name: "TransactionRecordPage",
      data(){
        return{
          columns1: [
            {
              title: '内容图片',
              key: 'imagePath'
            },
            {
              title: '内容名称',
              key: 'title'
            },
            {
              title: '购买时间',
              key: 'createTime'
            },
            {
              title: '购买数量',
              key: 'amount'
            },
            {
              title: '购买价格',
              key: 'price'
            }
          ],
          data1: [
            {
              imagePath: 'John Brown',
              title: 'John Brown',
              createTime: '2019-03-23 23:22:11',
              num: 18,
              price: 18,
            },
            {
              imagePath: 'John Brown',
              title: 'John Brown',
              createTime: '2019-03-23 23:22:11',
              num: 18,
              price: 18,
            },
            {
              imagePath: 'John Brown',
              title: 'John Brown',
              createTime: '2019-03-23 23:22:11',
              num: 18,
              price: 18,
            },
            {
              imagePath: 'John Brown',
              title: 'John Brown',
              createTime: '2019-03-23 23:22:11',
              num: 18,
              price: 18,
            },
          ]
        }
      },
    }
</script>

<style scoped>

</style>
