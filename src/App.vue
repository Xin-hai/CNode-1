<template>
  <div id="app">
      <Header />
    <div class="container-mainSideBar clearfix">
      <router-view name="sideBar"></router-view>
      <router-view name="main" :key="$route.fullPath"></router-view>
    </div>


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
@import '~@/assets/style/markdown-github.css';


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


.clearfix:after{
  clear: both;
  content: '';
  display: block;
}
.container-mainSideBar{
  margin: 15px 180px 0 180px;
}

</style>
