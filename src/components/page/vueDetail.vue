<template>
   <div>
     <div class="active">
       <el-row class="menu" type="flex" >
         <el-col :span="10" class="header">
           <div><img src="../../assets/logo.png" @click="imgClick()"></div>
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
     <div class="active-con-dor">
        <div class="active-fir-div">
           <div><img :src=result.pic  class="active-img-str"></div>
           <ul>
             <li v-for="arr in b"><router-link :to=arr.path tag="li">{{arr.title}}</router-link></li>
           </ul>
        </div>
        <div class="active-grr-div"><router-view /></div>
     </div>
     <div class="myFooter">
       人如蜉蝣于大地，朝生暮死
     </div>
   </div>
</template>
<script>
  export default{
    name: 'vuedetail',
    data() {
      return {
         b: [{title: '数据预测', pic: require('../../assets/1.png'),describe: '开放产品是一款开放产品',path: '/detail/first'},{title: '广告发布', pic: require('../../assets/2.png'),describe: '品牌营销帮助你的产品更好的找到定位',path: '/detail/two'},{title: '流量分析', pic: require('../../assets/3.png'),describe: '使命必达快速迭代永远保持最前端的速度',path: '/detail/three'},{title: '数据统计', pic: require('../../assets/4.png'),describe: '帮你勇闯高峰，到达事业的巅峰',path: '/detail/four'}],
         result: JSON.parse(localStorage.getItem('result'))
      }
    },
    methods: {
      imgClick() {
        this.$router.push('/')
      }
    }
  }
</script>
<style scoped>
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
  .active-con-dor{
    width: 990px;
    margin: 0 auto;
    height: 150px;
  }
  .active-con-dor>div{
    float: left;
  }
  .active-con-dor>div:nth-child(1){
    min-width: 200px;
    background-color: #FFFFFF;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .active-con-dor>div:nth-child(2){
    margin: 10px 10px;
  }
  .active-fir-div{ width: 20%;}
  .active-grr-div{ width: 80%; max-width: 770px}
  .active-fir-div>div:nth-child(1){
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .active-con-dor>div:nth-child(1) ul{
     list-style: none;
  }
  .active-con-dor>div:nth-child(1) ul>li>li{
    padding: 10px 10px;
  }
  .active-con-dor>div:nth-child(1) ul>li>li:hover{
    color: #ffffff;
    background-color: #00ff00;
  }
  .active-img-str{
    border-radius: 50px;
  }
  .myFooter{
    width: 100%;
    min-width: 990px;
    text-align: center;
    line-height: 100px;
    background-color: #e3e4e5;
    clear: both;
  }
  .router-link-active{
    color: #ffffff;
    background-color: green;
  }
</style>
