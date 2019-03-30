<template>
  <div>
    <Divider>购物车</Divider>
    <Table :columns="columns1" :data="data1"></Table>
  </div>
</template>

<script>
  export default {
    name: "ShoppingCartPage",
    data(){
      return{
        columns1: [
          {
            title: '内容名称',
            key: 'title'
          },
          {
            title: '数量',
            key: 'num'
          },
          {
            title: '价格',
            key: 'price'
          }
        ],
        data1: [
          {
            title: 'John Brown',
            num: 18,
            price: 18,
          },
          {
            title: 'Jim Green',
            num: 24,
            price: 18,
          },
          {
            title: 'Joe Black',
            num: 30,
            price: 18,
          },
        ]
      }
    },
  }
</script>

<style scoped>

</style>
