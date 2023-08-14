<template>
  <div id="app">
      <Header />
    <router-view name="main" :key="$route.fullPath"></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from '@/views/Header.vue'
import Footer from "@/components/Footer.vue";


export default {
  name: 'APP',
  components:{
    Footer,
    Header,
  }
}
</script>

<style lang="scss" >
@import '~@/assets/style/helper.scss';
@import '~@/assets/style/reset.scss';
@import '~@/assets/style/markdown.css';
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}
body {
  word-break: break-word;
  line-height: 2em;
  color: #333;
  background: #e1e1e1;
  font-family: "Helvetica Neue","Luxi Sans","DejaVu Sans",Tahoma,"Hiragino Sans GB",STHeiti,sans-serif!important;;
}
.loading {
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #e1e1e1;
  height: calc(100vh - 50px);
  img {
    width: 240px;
    height: 240px;
  }
}

</style>
