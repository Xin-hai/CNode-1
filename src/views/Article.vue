<template>
<div class="article">
    <div class="loading" v-if="isLoading">
      <img src="@/assets/loading.gif" alt="">
    </div>
  <div v-else class="article-content">
      <div class="topic-header">
          <div class="topic-title">{{post.title}}</div>
        <ul class="topic-changes">
          <li>  •发布于{{ "\xa0" }}{{ post.create_at | formatData }}{{ "\xa0" }}</li>
          <li>   作者 {{ post.author.loginname }}{{ "\xa0" }}</li>
          <li>•{{ post.visit_count }} 次浏览{{ "\xa0" }}</li>
          <li>•来自{{ post | tabFormat }}{{ "\xa0" }}</li>
        </ul>
        <div v-html="post.content" class="topic-content"></div>
      </div>
      <div class="topic-replies">
        <div class="topic-topBar"> {{post.reply_count}} 回复</div>
        <div v-for="(reply, index) in post.replies" :key="index" class="reply-content">
          <router-link :to="{
            name: 'userinfo',
            params: {
              name:reply.author.loginname
            }
          }">
            <img :src="reply.author.avatar_url" alt="" class="author-img">
          </router-link>

            <span class="first-span">{{reply.author.loginname}}</span>
            <span>{{index+1}}楼•</span>
            <span>{{reply.create_at | formatData}}</span>
            <span class="reply-zan">
              <img src="@/assets/style/赞.svg" alt="" class="topic-zan">
              <span>{{reply.ups.length}}</span>
            </span>
          <p v-html="reply.content" class="markdown-text"></p>
        </div>
      </div>

  </div>

</div>
</template>

<script>
export default {
  name: "Article",
  data(){
    return {
      isLoading: false,
      post: {}
    }
  },
  methods: {
    getArticleData(){
      this.$http.get(`https://cnodejs.org/api/v1/topic/${this.$route.params.id}`)
          .then(res => {
            if(res.data.success === true){
              this.isLoading = false
              this.post = res.data.data
            }
          })
          .catch(error=>console.log(error))
    }
  },
  beforeMount() {
    this.isLoading = true
    this.getArticleData()
  },
}

</script>

<style  lang="scss" scoped>
@import '~@/assets/style/markdown-github.css';
// 从数据库拿到的 图片 img 怎么都选不中
.markdown-text {
  img{
    max-width: 1000px;
  }
}
img{
  max-width: 1000px;
}


.article{
  margin: 0 0 0 185px;
  max-width: 64%;
  min-height: 71.8vh;
}
.article:not(:first-child) {
  //margin-right: 340px;
  margin-top: 15px;
}
.article-content{
  background: #fff;
}

.topic-header {
  padding: 10px;
  border-radius: 3px 3px 0 0;
  background: #fff;
  .topic-title {
    font-size: 22px;
    font-weight: 700;
    margin: 8px 0;
    vertical-align: bottom;
    width: 75%;
    line-height: 130%;
  }
  .topic-changes {
    font-size: 12px;
    color: #838383;
    overflow: hidden;
    word-break: break-word;
    margin: 6px 0;
    padding-bottom: 8px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #e5e5e5;
    li {
      font-family: "Helvetica Neue","Luxi Sans","DejaVu Sans",Tahoma,"Hiragino Sans GB",STHeiti,sans-serif!important;
      margin-right: 2px;
    }
  }
  .topic-content{

    padding: 5px 8px;
  }
}

.topic-replies{
  margin-top: 15px;

  .topic-topBar{
    padding: 10px;
    font-size: 14px;
    margin-top: 10px;
    background: #f6f6f6;
    border-radius: 3px 3px 0 0;
    display: flex;
    align-items: center;
    vertical-align: middle;
    justify-content: flex-start;
  }
  .reply-content{
    .author-img{
      width: 30px;
      height: 30px;
      position: relative;
      bottom: -9px;
      margin: 0 10px;
    }
    a, span{
      font-size: 13px;
      color: #666;
      text-decoration: none;
    }
    .first-span{
     margin-right: 5px;
    }
    p{
      padding-left: 55px;
      margin: 0 0 15px;
      font-size: 15px;
    }
  }
}

.topic-zan{
  width: 20px;
  height: 20px;
}
.markdown-text img {
  width: 92% !important;
  cursor: pointer;
}
.reply-zan{
  float: right;
  vertical-align: middle;
  text-align: center;
  margin-right: 10px;
  margin-top: 20px;
  span {
    margin-left: 5px;
    display: inline-block;
    vertical-align: middle;
    font-size: 20px;
  }
  img {
    display: inline-block;
    vertical-align: middle
  }
}

</style>