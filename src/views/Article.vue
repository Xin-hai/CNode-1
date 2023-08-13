<template>
<div class="article">
    <div class="loading" v-if="isLoading">
      <img src="@/assets/loading.gif" alt="">
    </div>
  <div v-else >
      <div class="header">
          <div class="title">{{post.title}}</div>
        <ul>
          <li>●发布于：{{post.create_at | formatData}}</li>
          <li>●作者
            {{post.author.loginname}}
          </li>
          <li>
            {{post.visit_count}} 次浏览
          </li>
          <li>
            来自{{post | tabFormat}}
          </li>
        </ul>
        <div v-html="post.content" class="content"></div>
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
  }
}
</script>

<style  lang="scss">
@import '~@/assets/style/markdown.css';

</style>