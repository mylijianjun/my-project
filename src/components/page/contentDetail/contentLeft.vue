<template>
  <div class="menu-left">
     <div>全部产品</div>
    <div v-for="arr in proList">
       <ul class="menu-left-ul">
         <span>{{ arr.title }}</span>
         <li v-for="i in arr.product">{{ i.value }}<span v-show="i.is==true" class="hot">HOT</span></li>
       </ul>
    </div>
  </div>
</template>
<script>
  export default{
    name: 'contentleft',
    data() {
      return {

      }
    },
    props: {
      proList: {
        type: Array,
        default: function () {
          return [{
            title: '',
            product: []
          }]
        }
      }
    }
  }
</script>
<style scoped>
 .menu-left{
   border: 1px solid #8c939d;
   width: 200px;
   border-bottom: 0px;
   margin: 10px 0px;
   background-color: #ffffff;
 }
  .menu-left div:first-child {
    color: #ffffff;
    background-color: #13ce66;
    padding-left: 10px;
    height: 30px;
    line-height: 30px;
  }
  .menu-left-ul{
    padding-left: 10px;
    list-style: none;
  }
 .menu-left-ul>span{
   margin: 10px 0px;
   font-weight: bold;
   display: inline-block;
 }
 .menu-left-ul{
   border-bottom: 1px solid #8c939d;
 }
 .menu-left-ul li{
   margin: 5px 0px;
 }
.hot{
  display: inline-block;
  background-color: red;
  color: #FFFFFF;
}
</style>
