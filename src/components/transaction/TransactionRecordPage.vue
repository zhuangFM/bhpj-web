<template>
  <div>
    <Divider>已购买内容</Divider>
    <Table :columns="columns1" :loading="loading" :data="data1"></Table>
  </div>
</template>

<script>
  import store from '@/vuex/store';
  import {mapActions, mapState, mapGetters} from 'vuex';
    export default {
        name: "TransactionRecordPage",
      data(){
        return{
          columns1: [
            {
              type:'html',
              title: '内容图片',
              key: 'contentImagePath'
            },
            {
              title: '内容名称',
              key: 'contentTitle'
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
              key: 'singlePrice'
            }
          ],
          data1: [],
          loading:true,
        }
      },
      computed: {
        ...mapGetters(['getUserInfo']),
        ...mapState(['userInfo']),
      },
      methods:{
          getTransactionRecord(){
            this.$http.get('/api/transactionRecord/get_transactionRecord_info_list_by_userId',
              {params:{
                  'userId':this.userInfo.userId
                }
              }
            ).then(response=>{
              this.loading = false;
              this.data1 = response.data.transactionRecordInfoList;
              for(var i in this.data1){
                const item = this.data1[i];
                if(item.contentImageType == '0'){
                  item.contentImagePath = "<img src='"+item.contentImagePath+"' style='width:50px;height:50px;'/>";
                }
                else{
                  item.contentImagePath = "<img src='static/images/"+item.contentId+"/"+item.contentImagePath+"' />";
                }
              }
            })
          }
      },
      created() {
          this.getTransactionRecord();
      },
      store
    }
</script>

<style scoped>

</style>
