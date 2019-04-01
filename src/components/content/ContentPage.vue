<template>
  <div>
    <Card :bordered="false">
      <Tabs value="name1">
        <TabPane label="所有内容" name="name1">所有内容
          <div class="goods-list">
            <div class="goods-show-info" v-for="(item, index) in allContentList" :key="item.id">
              <div class="goods-show-img">
                <router-link :to="{ path: '/content-detail-page', query: { contentId: item.id,userType:userType } }">
                  <img :src="'static/images/'+item.id+'/'+item.imagePath" v-if="item.imageType === 1"
                       style="height: 150px;"/>
                  <img :src="item.imagePath" v-if="item.imageType === 0" style="height: 150px;"/>
                </router-link>
              </div>
              <div class="goods-show-price">
                <span>
                  <Icon type="social-yen text-danger"></Icon>
                  <span class="seckill-price text-danger">{{item.price.toFixed(2)}}</span>
                </span>
              </div>
              <div class="goods-show-detail">
                <span>{{item.title}}</span>
              </div>
              <div class="goods-show-num">
                已有<span>{{item.selled || 0}}</span>人购买
              </div>
              <Tag checkable color="error" v-if="item.buyerId != null && item.buyerId.indexOf(userInfo.userId)>-1 ">
                已购买
              </Tag>
              <!--<div class="goods-show-seller">-->
              <!--<span>{{item.merchantName}}</span>-->
              <!--</div>-->
            </div>
          </div>
        </TabPane>
        <TabPane label="已购买" name="name2" v-if=" isLogin && userInfo.userType =='1'">
          <div class="goods-list">
            <div class="goods-show-info" v-for="(item, index) in buyedContetnList" :key="item.id">
              <div class="goods-show-img">
                <router-link :to="{ path: '/content-detail-page', query: { contentId: item.id,userType:userType } }">
                  <img :src="'static/images/'+item.id+'/'+item.imagePath" v-if="item.imageType === 1"
                       style="height: 150px;"/>
                  <img :src="item.imagePath" v-if="item.imageType === 0" style="height: 150px;"/>
                </router-link>
              </div>
              <div class="goods-show-price">
                <span>
                  <Icon type="social-yen text-danger"></Icon>
                  <span class="seckill-price text-danger">{{item.price.toFixed(2)}}</span>
                </span>
              </div>
              <div class="goods-show-detail">
                <span>{{item.title}}</span>
              </div>
              <div class="goods-show-num">
                已有<span>{{item.selled || 0}}</span>人购买
              </div>
              <Tag checkable color="error" v-if="item.buyerId != null && item.buyerId.indexOf(userInfo.userId)>-1 ">
                已购买
              </Tag>
              <!--<div class="goods-show-seller">-->
              <!--<span>{{item.merchantName}}</span>-->
              <!--</div>-->
            </div>
          </div>
          已购买
        </TabPane>
      </Tabs>
    </Card>
  </div>
</template>

<script>
  import store from '@/vuex/store';
  import {mapGetters, mapState} from 'vuex';

  export default {
    name: "ContentPage",
    data() {
      return {
        'allContentList': [],
        'buyedContetnList': [],
        'userId': 0,
        'userType': 0
      }
    },
    methods: {
      getContentList() {
        this.$http.get('/api/content/get_all_content_list').then(response => {
          this.allContentList = response.data.contentList;
          for (var i in this.allContentList) {
            const item = this.allContentList[i];
            if (item.buyerId != null && item.buyerId.indexOf(this.userInfo.userId) > -1) {
              this.buyedContetnList.push(item);
            }
          }
          console.log(response);
        });
      }
    },
    computed: {
      ...mapGetters(['getUserInfo']),
      ...mapState(['userInfo']),
      ...mapState(['isLogin']),
    },
    created() {
      this.userId = this.$route.query.userId;
      this.userType = this.$route.query.type;
      this.getContentList();
    },
    mounted() {

    },
    store
  }

</script>

<style scoped>
  .text-danger {
    color: #A94442;
  }

  .seckill-price {
    margin-right: 5px;
    font-size: 25px;
    font-weight: bold;
  }


  .item-as-title span:first-child {
    margin-left: 20px;
  }

  .item-as-title span:last-child {
    float: right;
    margin-right: 15px;
    font-size: 10px;
    color: #ccc;
  }


  .item-as-img img {
    width: 100%;
  }

  .item-as-price span {
    font-size: 18px;
  }

  .item-as-selled span {
    color: #005AA0;
  }

  .goods-list-tool ul {
    padding-left: 15px;
    list-style: none;
  }

  .goods-list-tool li {
    cursor: pointer;
    float: left;
  }

  .goods-list-tool span {
    padding: 5px 8px;
    border: 1px solid #ccc;
    border-left: none;
    line-height: 36px;
    background-color: #fff;
  }

  .goods-list-tool span:hover {
    border: 1px solid #E4393C;
  }

  .goods-list-tool i:hover {
    color: #E4393C;
  }


  .goods-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .goods-show-info {
    width: 240px;
    padding: 10px;
    margin: 15px 0px;
    border: 1px solid #fff;
    cursor: pointer;
  }

  .goods-show-info:hover {
    border: 1px solid #ccc;
    box-shadow: 0px 0px 15px #ccc;
  }

  .goods-show-price {
    margin-top: 6px;
  }

  .goods-show-img img {
    width: 100%;
  }

  .goods-show-detail {
    font-size: 12px;
    margin: 6px 0px;
  }

  .goods-show-num {
    font-size: 12px;
    margin-bottom: 6px;
    color: #009688;
  }

  .goods-show-num span {
    color: #005AA0;
    font-weight: bold;
  }

  .goods-show-seller {
    font-size: 12px;
    color: #E4393C;
  }

</style>
