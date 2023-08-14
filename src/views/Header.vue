<template>
  <div id="header">
    <div class="container">
      <img src="@/assets/nodejs.svg" alt="网络错误，这是cnode.js的图片" title="conde.js">
      <ul>
        <li>
          <router-link to="/">首页</router-link>
        </li>
        <li>
         <router-link to='/accidence'>新手入门</router-link>
        </li>
        <li>
          <router-link to='/api'>API</router-link>
        </li>
        <li>
          <router-link to='/cnode'>关于</router-link>
        </li>
        <li>   <router-link to='/register'>注册</router-link></li>
        <li>   <router-link to='/login'>登录</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped lang="scss">
#header {
  background: #444444;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 0;
  .container{
    width: 80%;
    height: 40px;
    display: flex;
    justify-content: space-between;
    vertical-align: middle;
    img {
      flex: auto;
      max-width: 120px;
    }
    ul{
      display: flex;
      justify-content: center;
      align-items: center;
      li {
        padding: 10px 15px;
        a{
          color: #ccc;
          font-size: 14px;
          white-space: nowrap;
        }
        a:hover{
          color: aliceblue;
          text-shadow: 0 1px 0 #fff;
        }
      }
      li:last-child {
        padding-right: 0;
      }
    }
  }
}

@media (max-width: 980px) {
  #header{
    .container {
      height: 40*2px;
      flex-direction: column;
      ul{
        justify-content: flex-start;
        li:first-child{
          padding-left: 0
        }
      }
    }
  }
}

</style>