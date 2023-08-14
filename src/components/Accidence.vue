<template>
  <div class="accidence">
    <section class="goTopic">
      <router-link to="/">主页</router-link>
      <span class="slash">/ Node.js 新手入门</span>
    </section>

    <ul class="generalUl">
      <li class="h2">Node.js 入门</li>
      <li v-for="(item,name) in hashMap1" :key="name">
        <p>{{name}}</p>
        <p>  <a :href="item"> {{item}}</a></p>
      </li>
    </ul>
    <ul class="generalUl">
      <li class="h2">Node.js 资源</li>
      <li v-for="(item,name) in hashMap2" :key="name">
        <p>{{name}}</p>
        <p>  <a :href="item"> {{item}}</a></p>
      </li>
    </ul>
    <ul class="generalUl">
      <li class="h2">Node.js 名人</li>
      <li>
        <p>《名人堂》</p>
        <p><a href="https://github.com/cnodejs/nodeclub/wiki/名人堂">https://github.com/cnodejs/nodeclub/wiki/名人堂</a></p>
      </li>
    </ul>
    <ul class="generalUl">
      <li class="h2">Node.js 服务器</li>
      <li>
        <p>新手搭建 Node.js 服务器，推荐使用无需备案的</p>
        <p><a href=" https://www.digitalocean.com/">DigitalOcean(https://www.digitalocean.com/)</a></p>
      </li>
    </ul>

  </div>
</template>

<script>

export default {
  name: "",
  data(){
    return {
      hashMap1: {
        '《汇智网 Node.js 课程》': 'http://www.hubwiz.com/course/?type=nodes',
        '《快速搭建 Node.js 开发环境以及加速 npm》':'http://fengmk2.com/blog/2014/03/node-env-and-faster-npm.html',
        '《Node.js 包教不包会》': 'https://github.com/alsotang/node-lessons',
        '《ECMAScript 6入门》': 'http://es6.ruanyifeng.com/',
        '《七天学会NodeJS》': 'https://github.com/nqdeng/7-days-nodejs',
        '《Node入门-一本全面的Node.js教程》': 'http://www.nodebeginner.org/index-zh-cn.html'
      },
      hashMap2: {
        '《node weekly》': 'http://nodeweekly.com/issues',
        '《node123-node.js中文资料导航》': 'https://github.com/youyudehexie/node123',
        '《A curated list of delightful Node.js packages and resources》': 'https://github.com/sindresorhus/awesome-nodejs',
        '《Node.js Books》': 'https://github.com/pana/node-books'
      }
    }
  }
}
</script>

<style scoped lang="scss">
.accidence {
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
  .h2{
    background: #fff;
    font-size: 26px;
    padding: 10px;
    margin-left: 5px;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    font-weight: 600;
  }
  .generalUl{
    background: #fff;
    p{
      font-weight: 700;
      padding: 15px;
      font-size: 15px;
      line-height: 1.7em;
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
.generalUl:last-child {
  p{
    display: inline-block;
    margin: 10px 0px 10px 15px ;
    padding: 0;
  }
    p:last-child{
      margin-left: 0;
    }
  }
}
</style>