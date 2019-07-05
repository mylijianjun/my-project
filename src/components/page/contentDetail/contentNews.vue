<template>
  <div class="menu-left">
    <div>最新消息</div>
    <div>
      <ul class="menu-left-ul">
        <li v-for="i in news">{{ i.title }}</li>
      </ul>
    </div>
  </div>
</template>
<script>
 export default{
   name: 'news',
   data() {
     return {

     }
   },
   props: {
     news: {
       type: Array,
       default: function () {
          return [{
            title: ''
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
    margin: 10px 0px;
    border-bottom: 0px;
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
    height: 300px;
    overflow: hidden;
  }
  .menu-left-ul span{
    margin: 10px 0px;
    font-weight: bold;
    display: inline-block;
  }
  .menu-left-ul{
    border-bottom: 1px solid #8c939d;
  }
  .menu-left-ul li{
    margin: 5px 0px;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 1;
    display: -webkit-box;
    -webkit-box-orient: vertical;
  }
  .hot{
    display: inline-block;
    background-color: red;
    color: #FFFFFF;
  }
</style>
