<template>
<div>
   <div class="box-menu" >
     <span @click="cli1()">{{ showlate }}</span>
    <ul class="box-menu-ul" v-show="show">
      <li v-for="(arr,index) in type" @click="cli(index)" ><span>{{arr.title}}</span></li>
    </ul>
   </div>
</div>
</template>
<script>
  export default{
    data() {
      return {
        showlate: '',
        show: true
      }
    },
    props: {
      type:{
        type:Array,
        default:function () {
          return [{
            title: '',
            value: ''
          }]
        }
      }
    },
    created() {
      this.showlate=this.type[0].title
    },
    methods: {
      cli(e) {
        this.showlate=this.type[e].title
        this.show=false
      },
      cli1() {
        if(this.show==false){
          this.show=true
        }else {
          this.show=false
        }
      }
    }
  }
</script>
<style scoped>
  .box-menu{
    margin-left: 10px;
    position: relative;
    border: 1px #8c939d solid;
  }
  .box-menu>span{
    margin: 5px 10px;
    display: inline-block;
  }
.box-menu-ul{
  position: absolute;
  list-style: none;
  border: 1px #8c939d solid;
  border-top: none;
  width: 100%;
  left: -1px;
}
  .box-menu-ul li span{
    display: inline-block;
    margin: 5px 10px;
  }
</style>
