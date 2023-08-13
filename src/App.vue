<template>
  <div id="app">
      <Header />
    <router-view name="main"></router-view>

  </div>
</template>

<script>
import Header from '@/views/Header.vue'


export default {
  name: 'APP',
  components:{
    Header,
  }
}
</script>

<style lang="scss">
@import '~@/assets/style/helper.scss';
@import '~@/assets/style/reset.scss';
#app {
  font-family: "Helvetica Neue","Luxi Sans","DejaVu Sans",$font-fangSong,$font-song,$font-kai;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}
body {
  word-break: break-word;
  line-height: 20px;
  color: #333;
  background: #e1e1e1;
}

</style>
