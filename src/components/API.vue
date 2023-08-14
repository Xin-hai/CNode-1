<template>
  <div id="api">
    <section class="goTopic">
      <router-link to="/">主页</router-link>
      <span class="slash">/ API</span>
    </section>
    <div class="content">
      <h2>API请参考 <a href="https://cnodejs.org/api">cnode的API介绍</a></h2>
    </div>
  </div>

</template>

<script>
export default {
  name: ""
}
</script>

<style scoped lang="scss">

#api {
  max-width: 80%;
  margin: 10px auto;
  .goTopic {
    padding: 6px;
    border-radius: 3px 3px 0 0;
    background: #f6f6f6;

    a {
      color: #80bd01;
      font-size: 14px;
    }

    a:hover {
      text-decoration: underline;
    }

    .slash {
      padding: 0 5px;
      font-size: 14px;
      color: #999;
    }
  }
  .content {
    border-top: 1px solid #eee;
    background: #fff;
    height: 67.5vh;
    display: flex;
    justify-content: center;
    padding: 200px;
    a{
      color: #08c;
    }
    a:hover{
      color: #8b467f;
      text-decoration: underline;
    }
  }
}

</style>