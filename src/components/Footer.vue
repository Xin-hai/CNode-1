<template>
  <div id="footer">
    <div class="container">
      <div class="links">
        <a href="https://cnodejs.org/rss">RSS</a>
        |
        <a href="https://github.com/cnodejs/nodeclub/">源码地址</a>
      </div>
      <div class="col-fade">
          <p>CNode 社区为国内最专业的 Node.js 开源技术社区，致力于 Node.js 的技术研究。</p>
          <p>服务器搭建在 <a href="https://www.digitalocean.com/?refcode=eba02656eeb3"> <img src="https://static2.cnodejs.org/public/images/digitalocean.png" alt=""></a>
            ，存储赞助商为 <a href="https://www.qiniu.com/?ref=cnode"><img src="https://static2.cnodejs.org/public/images/qiniu.png" alt=""></a>
          </p>
        <p>新手搭建 Node.js 服务器，推荐使用无需备案的 <a href="https://www.digitalocean.com/?refcode=eba02656eeb3">DigitalOcean(https://www.digitalocean.com/)</a></p>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "Footer",

}
</script>

<style scoped lang="scss">
#footer{
  background: #fff;
  padding: 0 8px;
  margin-top: 10px
}

.container{
  background: #fff;
  max-width: 80%;
  min-width: 960px;
  margin: 0 auto 0 auto;
  color: #e2e2e2;
  padding: 20px 0;
  font-size: 13px;
  line-height: 2em;
  .links {
    a{
      padding: 0 5px;
      color: #666;
    }
    a:hover {
      color: #08c;
    }
  }
  .col-fade{
    p {
      line-height: 20px;
      vertical-align: bottom;
      color: #ababab;
      a{
        font-weight: normal;
        padding-left: 9px;
        color: #08c;
      }
      a:hover{
        text-decoration: underline;
        color: #0055a1;
      }
    }
  }
}

</style>