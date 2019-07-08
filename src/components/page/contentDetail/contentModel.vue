<template>
  <div class="header-top">
    <div v-for="arr in contList" class="header-top-box">
      <div> <img :src='arr.pic' /></div>
      <div>
        <div>{{ arr.title }}</div>
        <div>{{ arr.describe }}</div>
        <div  @click="cli(arr)">立即到达</div>
      </div>
    </div>
  </div>
</template>
<script>
  var storage=window.localStorage;
  export default{
    name: 'contentModel',
    data() {
      return {
          im: require('../../../assets/1.png')
      }
    },
    props: {
      contList: {
        type: Array,
        default: function () {
          return [
            {
               title: '',
               pic: '',
               describe: '',
               path: ''
            }
          ]
        }
      }
    },
    methods: {
       cli(e){
//         if(!window.localStorage){
//           alert("浏览器支持localstorage");
//         }else{
//           var storage=window.localStorage;
//           var data={
//             name:'xiecanyong',
//             sex:'man',
//             hobby:'program'
//           };
//           var d=JSON.stringify(data);
//           storage.setItem("data",d);
//           console.log(storage.data);
//         }
         window.localStorage.setItem("result",JSON.stringify(e));
         this.$router.push(e.path)
       }
    }
  }
</script>
<style scoped>
.header-top{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
  .header-top-box{
    width: 360px;
    margin-bottom: 10px;
    display: flex;
    justify-content: flex-start;
    background-color: #ffffff;
    padding: 10px 10px;
  }
.header-top-box>div:nth-child(2){
   display: flex;
   flex-direction: column;
   justify-content: space-between;
  margin-left: 10px;
}
.header-top-box>div:nth-child(2)>div:nth-child(1){
 font-weight: bold;
  font-size: 16px;
}
.header-top-box>div:nth-child(2)>div:nth-child(3){
  background-color: #4FC08D;
  width: 100px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  color: #FFFFFF;
}
/*.header-top-box>div:nth-child(2) div:nth-child(3) a{*/
  /*text-decoration: none;*/
  /*color: #FFFFFF;*/
/*}*/
</style>
