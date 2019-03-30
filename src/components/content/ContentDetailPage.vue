<template>
  <div>
    <div class="item-detail-show">
      <div class="item-detail-left">
        <div class="item-detail-big-img">
          <img :src="'static/images/'+contentInfo.id+'/'+contentInfo.imagePath" alt="">
        </div>
        <!--<div class="item-detail-img-row">-->
        <!--<div class="item-detail-img-small" v-for="(item, index) in contentInfo.goodsImg" :key="index"-->
        <!--@mouseover="showBigImg(index)">-->
        <!--<img :src="'static/images/'+getGoodsDetailBase.goodsId+'/'+item" alt="">-->
        <!--</div>-->
        <!--</div>-->
      </div>
      <div class="item-detail-right">
        <div class="item-detail-title">
          <p>
            <span class="item-detail-express">校园配送</span> {{contentInfo.title}}</p>
        </div>
        <!--<div class="item-detail-tag">-->
        <!--<p>-->
        <!--<span v-for="(item,index) in getGoodsDetailBase.tags" :key="index">【{{item}}】</span>-->
        <!--</p>-->
        <!--</div>-->
        <div class="item-detail-price-row">
          <div class="item-price-left">
            <div class="item-price-row">
              <p>
                <span class="item-price-title">价&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;格</span>
                <span class="item-price">￥{{contentInfo.price.toFixed(2)}}</span>
              </p>
            </div>
            <!--<div class="item-price-row">-->
            <!--<p>-->
            <!--<span class="item-price-title">优 惠 价</span>-->
            <!--<span class="item-price-full-cut" v-for="(item,index) in getGoodsDetailBase.discount" :key="index">{{item}}</span>-->
            <!--</p>-->
            <!--</div>-->
            <!--<div class="item-price-row">-->
            <!--<p>-->
            <!--<span class="item-price-title">促&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;销</span>-->
            <!--<span class="item-price-full-cut" v-for="(item,index) in getGoodsDetailBase.promotion" :key="index">{{item}}</span>-->
            <!--</p>-->
            <!--</div>-->
          </div>
          <div class="item-price-right">
            <div class="item-remarks-sum">
              <p>累计销售</p>
              <p>
                <span class="item-remarks-num">{{contentInfo.selled}} </span>
              </p>
            </div>
          </div>
        </div>
        <!-- 白条分期 -->
        <!--<div class="item-select">-->
        <!--<div class="item-select-title">-->
        <!--<p>白条分期</p>-->
        <!--</div>-->
        <!--<div class="item-select-row">-->
        <!--<div class="item-select-class" v-for="(item,index) in hirePurchase" :key="index">-->
        <!--<Tooltip :content="item.tooltip" placement="top-start">-->
        <!--<span>{{item.type}}</span>-->
        <!--</Tooltip>-->
        <!--</div>-->
        <!--</div>-->
        <!--</div>-->
        <br>
        <div class="add-buy-car-box">
          <div class="add-buy-car">
            <InputNumber :min="1" v-model="count" size="large"></InputNumber>
            <Button type="error" size="large" @click="addShoppingCartBtn()">加入购物车</Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ContentDetailPage",
    data() {
      return {
        'currentContentId': null,
        'contentInfo': {},
      }
    },
    methods: {
      getContentInfo() {
        this.$http.get('/content/get_content_by_id', {
          params: {
            'id': this.currentContentId,
          }
        }).then(response => {
          console.log(response);
            this.contentInfo = response.data.content;
        });
      }
    },
    created() {
      this.currentContentId = this.$route.query.contentId;
      this.getContentInfo();
    }

  }
</script>

<style scoped>
  /******************商品图片及购买详情开始******************/
  .item-detail-show {
    width: 80%;
    margin: 15px auto;
    display: flex;
    flex-direction: row;
    background-color: #fff;
  }

  .item-detail-left {
    width: 350px;
    margin-right: 30px;
  }

  .item-detail-big-img {
    width: 350px;
    height: 350px;
    box-shadow: 0px 0px 8px #ccc;
    cursor: pointer;
  }

  .item-detail-big-img img {
    width: 100%;
  }

  .item-detail-img-row {
    margin-top: 15px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .item-detail-img-small {
    width: 68px;
    height: 68px;
    box-shadow: 0px 0px 8px #ccc;
    cursor: pointer;
  }

  .item-detail-img-small img {
    width: 100%;
  }

  /*商品选购详情*/
  .item-detail-right {
    display: flex;
    flex-direction: column;
  }

  .item-detail-title p {
    color: #666;
    font-size: 20px;
  }

  .item-detail-express {
    font-size: 14px;
    padding: 2px 3px;
    border-radius: 3px;
    background-color: #e4393c;
    color: #fff;
  }

  /*商品标签*/
  .item-detail-tag {
    font-size: 12px;
    color: #e4393c;
  }

  /*价格详情等*/
  .item-detail-price-row {
    padding: 5px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: #f3f3f3;
  }

  .item-price-left {
    display: flex;
    flex-direction: column;
  }

  .item-price-title {
    color: #999999;
    font-size: 14px;
    margin-right: 15px;
  }

  .item-price-row {
    margin: 5px 0px;
  }

  .item-price {
    color: #e4393c;
    font-size: 23px;
    cursor: pointer;
  }

  .item-price-full-cut {
    margin-right: 5px;
    padding: 3px;
    color: #e4393c;
    font-size: 12px;
    background-color: #ffdedf;
    border: 1px dotted #e4393c;
    cursor: pointer;
  }

  .item-remarks-sum {
    padding-left: 8px;
    border-left: 1px solid #ccc;
  }

  .item-remarks-sum p {
    color: #999999;
    font-size: 12px;
    line-height: 10px;
    text-align: center;
  }

  .item-remarks-num {
    line-height: 18px;
    color: #005eb7;
  }

  .item-select {
    display: flex;
    flex-direction: row;
    margin-top: 15px;
  }

  .item-select-title {
    color: #999999;
    font-size: 14px;
    margin-right: 15px;
  }


  .item-select-row {
    display: flex;
    flex-direction: row;
    margin-bottom: 8px;
  }


  .item-select-img img {
    width: 100%;
  }

  .item-select-intro p {
    margin: 0px;
    padding: 5px;
  }

  .item-select-class {
    padding: 5px;
    margin-right: 8px;
    background-color: #f7f7f7;
    border: 0.5px solid #ccc;
    cursor: pointer;
  }

  .item-select-class:hover {
    border: 0.5px solid #e3393c;
  }

  .add-buy-car-box {
    width: 100%;
    margin-top: 15px;
    border-top: 1px dotted #ccc;
  }

  .add-buy-car {
    margin-top: 15px;
  }

</style>
