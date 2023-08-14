<template>
  <div id="about">
    <section class="goTopic">
      <router-link to="/">主页</router-link>
      <span class="slash">/ 关于</span>
    </section>
    <div class="content">
      <h2>关于</h2>
      <ul>
        <li><p>CNode 社区为国内最大最具影响力的 Node.js 开源技术社区，致力于 Node.js 的技术研究。</p></li>
        <li><p>CNode 社区由一批热爱 Node.js 技术的工程师发起，目前已经吸引了互联网各个公司的专业技术人员加入，我们非常欢迎更多对 Node.js 感兴趣的朋友。</p></li>
        <li><p>CNode 的 SLA 保证是，一个9，即 90.000000%。</p></li>
        <li><p>社区目前由<a href="https://cnodejs.org/user/thonatos">@suyi</a>在维护，有问题请联系:<a href="https://github.com/thonatos">https://github.com/thonatos</a> </p></li>
        <li><p>请关注我们的官方微博:<a href="http://weibo.com/cnodejs">http://weibo.com/cnodejs</a></p></li>
      </ul>
    </div>
  </div>

</template>

<script>
export default {
  name: "CnodeAbout"
}
</script>

<style scoped lang="scss">

#about {
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
    height: 70vh;
    h2{
      background: #fff;
      font-size: 26px;
      padding: 10px;
      margin-left: 5px;
      border-top: 1px solid #eee;
      border-bottom: 1px solid #eee;
      font-weight: 600;
    }
    p{
      padding: 10px 0 10px 15px;
      font-size: 15px;
      line-height: 1em;
      overflow: auto;
    }
    a{
      font-weight: normal;
      padding-left: 9px;
      color: #08c;
    }
    a:hover{
      text-decoration: underline;
    }
  }
}
</style>