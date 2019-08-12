var vm = new Vue({
<template>
  <div class="box-count">
    <div @click="reduce">-</div>
    <div><input v-model="sum" @keyup="admin"></div>
    <div @click="add">+</div>
  </div>
</template>
<script>
  export default{
    name: 'count',
    data() {
      return{
         sum:1
      }
    },
    methods: {
      add() {
        if(this.sum<this.maxSum){
          this.sum++
          this.$emit('myCount',this.sum)
        }
      },
      reduce() {
        if(this.sum>this.minSum){
          this.sum--
          this.$emit('myCount',this.sum)
        }
      },
      admin() {
        this.sum=this.sum.replace(/\D/g,'')
        if(this.sum>this.maxSum){
          this.sum=this.maxSum
        }
        else if(this.sum<this.minSum){
          this.sum=this.minSum
        }
        this.$emit('myCount',this.sum)
      }
    },
    props: {
      maxSum: {
        type: Number,
        default: 10
      },
      minSum: {
        type: Number,
        default: 1
      }
    }
  }
</script>
<style scoped>
  .box-count{
    display: inline-block;
  }
  .box-count>div{
    float: left;
  }
  .box-count>div:nth-child(1){
    border: 1px #8c939d solid;
    margin-left: 10px;
    height: 30px;
    width: 30px;
    line-height: 30px;
    text-align: center;
    border-right: none;
  }
  .box-count>div:nth-child(1):hover{
    background-color: lime;
  }
  .box-count>div:nth-child(3):hover{
    background-color: lime;
  }
  .box-count>div:nth-child(2) input{
    height: 28px;
    width: 50px;
    text-align: center;
  }
  .box-count>div:nth-child(3){
    border: 1px #8c939d solid;
    height: 30px;
    width: 30px;
    line-height: 30px;
    text-align: center;
    border-left: none;
  }
</style>
