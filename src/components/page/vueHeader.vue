<template>
  <div>
    <div class="active">
  <el-row class="menu" type="flex" >
    <el-col :span="10" class="header">
      <div><img src="../../assets/logo.png"></div>
      <div>尚学堂旗下品牌：云数学院[速学堂]百战程序员优效学院线上培训-优效聚名师，学习更有效</div>
    </el-col>
    <el-col :span="14" class="header-one">
      <ul class="header-ul" >
        <li>登入</li>
        <li>注册</li>
        <li>关于</li>
      </ul>
    </el-col>
  </el-row>
    </div>
  <div class="tol">
  <el-row class="menu-one" type="flex">
    <el-col :span="4" class="menu-one-left">
       <ContentLeft :proList="data1"/>
       <ContentNews :news="data2"/>
    </el-col>
    <el-col :span="20" class="menu-one-right" >
      <div style="width:100%;">
       <ContentRight/>
        <div class="contentModel">
        <ContentModel :contList="data3"/>
        </div>
      </div>
    </el-col>
  </el-row>
  </div>
    <div class="myFooter">
      人如蜉蝣于大地，朝生暮死
    </div>
  </div>
</template>
<script>
  import ContentLeft from './contentDetail/contentLeft.vue'
  import ContentRight from './contentDetail/contentRight.vue'
  import ContentNews from './contentDetail/contentNews.vue'
  import ContentModel from './contentDetail/contentModel.vue'
export default{
  name: 'vueHeader',
  data () {
    return {
      data1: [],
      data2: [],
      data3: []
    }
  },
  components: {
    ContentLeft,
    ContentRight,
    ContentNews,
    ContentModel
  },
  created() {
    var a=[{ title: '手机应用类', product: [{is: true, value: '91助手'}, {is: false, value: '豌豆英'}, {is: false, value: '金山毒霸'}]}, {title: 'pc产品', product: [{is: false, value: 'Webstorm'}, {is: true, value: 'Hbuilder'}, {is: false, value: 'Subline'}, {is: true, value: 'Atom'}]}]
    var b=[{title: '数据预测', pic: require('../../assets/1.png'),describe: '开放产品是一款开放产品',path: '/detail/first'},{title: '广告发布', pic: require('../../assets/2.png'),describe: '品牌营销帮助你的产品更好的找到定位',path: '/detail/two'},{title: '流量分析', pic: require('../../assets/3.png'),describe: '使命必达快速迭代永远保持最前端的速度',path: '/detail/three'},{title: '数据统计', pic: require('../../assets/4.png'),describe: '帮你勇闯高峰，到达事业的巅峰',path: '/detail/four'}]
    this.$axios.get('http://www.wwtliu.com/sxtstu/news/juhenews.php',{params: {
      type: 'top',
      count: '30'
    }})
      .then(e => {
       this.data2=e['data'].result.data
        console.log(this.data2)
      })
    .catch (e => {
      console.log(e)
    })
    this.data1=a
    this.data3=b
  }
}
</script>
<style scoped>
  .tol{
    width: 990px;
    min-width: 990px;
    margin: 0 auto}
  .active{
    background: #000000;
    height: 70px;
    width: 100%;
    min-width: 990px;
  }
  .menu{
    width: 990px;
    margin: 0 auto;
    height: 70px;
    color: #FFFFFF;
  }
  .header{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
    min-width: 600px;
  }
  .header div:first-child img{
    width: 50px;
    height: 50px;
  }
  .header-one{
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 100%;
    min-width: 200px;
  }
  .header-ul{
    list-style: none;
    float: right;
  }
  .header-ul li{
    float: left;
    padding: 0px 5px;
  }
  .header-ul li:nth-child(2){
    border-left:1px solid #FFFFFF;
    border-right:1px solid #FFFFFF;
  }
  .menu-one-left{
    min-width: 200px;
  }
.menu-one-right{
  display: flex;
  justify-content: center;
  max-width: 780px;
}
  .contentModel{
    margin: 10px 0px 10px 10px;
  }
  .myFooter{
    width: 100%;
    min-width: 990px;
    text-align: center;
    line-height: 100px;
    background-color: #e3e4e5;
  }
</style>
