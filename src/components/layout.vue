<template>
  <div>
  <VueHeader />
  <VueFooter/>
  </div>
</template>

<script>
import VueFooter from './page/vueFooter.vue'
import VueHeader from './page/vueHeader.vue'

export default {
  name: 'layout',
  data () {
    return {
    }
  },
  components: {
    VueFooter,
    VueHeader
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
