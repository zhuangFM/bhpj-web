<template>
  <div>
    <Divider>购物车</Divider>
    <Table :columns="columns1" :loading="loading" :data="data1"></Table>
    <Button type="error" @click="buyAllItem">购买</Button>
  </div>
</template>

<script>
  import store from '@/vuex/store';
  import {mapActions, mapState, mapGetters} from 'vuex';

  export default {
    name: "ShoppingCartPage",
    data() {
      return {
        columns1: [
          {
            title: '内容名称',
            key: 'contentTitle'
          },
          {
            title: '数量',
            key: 'amount'
          },
          {
            title: '价格',
            key: 'contentPrice'
          }
        ],
        tableData: [],
        data1: [],
        loading:true,
      }
    },
    computed: {
      ...mapGetters(['getUserInfo']),
      ...mapState(['userInfo']),
    },
    methods: {
      getShoppingCartDetail() {
        this.$http.get('/api/shoppingCart/get_shoppingCart_info_list_by_userId',
          {
            params: {
              'userId': this.userInfo.userId
            }
          }
        ).then(response => {
          this.loading = false;
          this.data1 = response.data.shoppingCartInfoList;
        })
      },
      buyAllItem() {
        if (confirm('确认购买？')) {
          const postData = [];
          for (var index in this.data1) {
            const jsonData = {
              'userId':this.data1[index].userId,
              'contentId':this.data1[index].contentId,
              'amount':this.data1[index].amount,
              'singlePrice':this.data1[index].contentPrice,
            }
            postData.push(jsonData);
          }
          this.$http.post('/api/transactionRecord/save_transactionRecord', postData).then(response => {
            console.log(response)
            this.$http.get('/api/shoppingCart/delete_shoppingCart_by_userId', {
              params: {
                'userId': this.userInfo.userId
              }
            }).then(res => {
              console.log(res);
              this.$Message.success('购买成功!');
              this.$router.push({path: '/transaction-record-page'});
            });
          });
        }
      }
    },
    created() {
      this.getShoppingCartDetail();
    },
    store
  }
</script>

<style scoped>

</style>
