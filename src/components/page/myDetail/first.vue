<template>
  <div>
    <div class="box-head-ax">
      <h2>蛋糕美食</h2>
      <p>蛋糕花样丰富多彩，造型百变，味道也总是给我们带来惊喜，不过世界上最著名的10大蛋糕，你知道多有哪些吗？下面就让我们大开眼界吧。</p>
      <div>购买数量 : <Count :maxSum="limit.max" :minSum="limit.min"/></div>
      <div>产品类型 : <MySelect :type="type"/></div>
      <div>有效时间 :</div>
      <div>总价 :</div>
    </div>
    <div class="box-foot-ca">
      <h3>黑森林蛋糕</h3>
      <p>黑森林蛋糕，德国最出名的蛋糕。它融合了樱桃的酸、奶油的甜、樱桃酒的醇香。完美的黑森林蛋糕经得起各种口味的挑剔。黑森林蛋糕被称作黑森林的特产之一，德文原意为“黑森林樱桃奶油蛋糕”。正宗的黑森林蛋糕，巧克力相对比较少，更为突出的是樱桃酒和奶油的味道。</p>
      <h3>长崎蜂蜜蛋糕</h3>
      <p>
        蜂蜜蛋糕，用砂糖、鸡蛋和面粉做成，是日本非常著名的西点。不过，它最早起源于荷兰古国，当时的贵族在招待使节时都会用它来向宾客表达主人最隆重的敬意。
      </p>
      <h3>乳酪蛋糕</h3>
      <p>
        乳酪蛋糕 ，又称奶酪蛋糕。以海绵蛋糕、派皮等为底坯，将加工后的乳酪混合物倒入上面，经过烘烤、装饰而成。包括美式乳酪蛋糕、酸奶乳酪蛋糕等。乳酪类蛋糕单从材料、制作工艺以及口感与其他几种蛋糕相比稍有不同，这类蛋糕介于蛋糕和甜点之间，所以越来越受人关注。
      </p>
    </div>
  </div>
</template>
<script>
import Count from '../myComponents/count.vue'
import MySelect from '../myComponents/mySelect.vue'
export default{
   name: 'first',
   data() {
     return {
      limit: {
        max:20,
        min:1
      },
       type: [{title:'初级版',value: 1},{title:'中级版',value: 2},{title:'高级版',value: 3}]
     }
   },
  components: {
    Count,
    MySelect
  }
}
</script>
<style scoped>
.box-head-ax{
  background-color: #FFFFFF;
  width: 100%;
  padding: 20px 0px;
  margin-bottom: 10px;
}
.box-head-ax>div{
  display: flex;
  align-items: center;
  margin: 10px;
  clear: both;
  height: 30px;
}
.box-head-ax h2{margin: 0px 10px 10px 10px}
.box-head-ax p{margin: 0px 10px 10px 10px}
.box-foot-ca {
  background-color: #FFFFFF;
  width: 100%;
  padding: 20px 0px;
}
.box-foot-ca h3{margin: 0px 10px 10px 10px}
.box-foot-ca p{margin: 0px 10px 30px 10px}
</style>
