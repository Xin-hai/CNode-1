<template>
<div class="authorInfo" id="sideBar">
  <div class="authorTitle">
    <div class="topBar first" >作者</div>
    <div class="imgName">
      <router-link :to="{
            name: 'userinfo',
            params: {
              name:userInfo.loginname
            }
          }">
        <img :src="userInfo.avatar_url" alt="" class="author-img">
      </router-link>
      <span>{{userInfo.loginname}}</span>
    </div>
    <p>积分: {{userInfo.score}}</p>
  </div>

  <div class="recentTopics">
    <div class="topBar">作者其他话题</div>
    <ul>
      <li v-for="(list,index) in topicLimitBy5" :key="index">
        <router-link :to="{
          name: 'post_content',
          params: {
            id: list.id,
            name: list.author.loginname
          }
        }">
          {{list.title}}
        </router-link>
      </li>
    </ul>
  </div>

  <div class="recentReplies">
    <div class="topBar">无人回复的话题</div>
    <ul>
      <li v-for="(list,index) in replyLimitBy5" :key="index">
        <router-link :to="{
          name: 'post_content',
          params: {
            id: list.id,
            name: list.author.loginname
          }
        }">
          {{list.title}}
        </router-link>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
export default {
  name: "SideBar",
  data(){
    return {
      userInfo: {}
    }
  },
  methods: {
    getData() {
      this.$http.get(`https://cnodejs.org/api/v1/user/${this.$route.params.name}`)
          .then(res => {
            this.isLoading = false
            this.userInfo = res.data.data
          }).catch((err) => console.log(err))
    },
  },
  computed: {
    topicLimitBy5(){
      if(this.userInfo.recent_topics){
        return this.userInfo.recent_topics.slice(0,5);
      }
      return []
    },
    replyLimitBy5(){
      if(this.userInfo.recent_replies){
        return this.userInfo.recent_replies.slice(0,5);
      }
      return []
    }
  },
  beforeMount() {
    this.isLoading = true
    this.getData()
  }
}
</script>

<style scoped lang="scss">
#sideBar {
  width: 290px;
  float: right;
  font-size: 14px;
  margin-bottom: 20px;
  .authorTitle {
    .imgName{
      display: flex;
      align-items: center;
      img{
        width: 48px;
        height: 48px;
        margin: 10px 10px 0 10px;
        border-radius: 3px;
      }
      span {
        vertical-align: middle;
        text-overflow: ellipsis;
        color: #778087;
      }
    }
    p{
      padding-left: 10px;
    }
  }
}

.topBar {
  color: #51585c;
  border-radius: 3px 3px 0 0;
  text-align: start;
  display: flex;
  align-items: center;
  height: 40px;
  padding-left: 10px;
  margin-top: 10px;
  background: #f6f6f6;
}

.topBar.first{
  margin-top: 0
}

.authorTitle,.recentTopics,.recentReplies{
  background: #fff;
}
.recentTopics,.recentReplies{
  ul{

    li{
      max-width: 270px;
      font-size: 14px;
      line-height: 30px;
      vertical-align: middle;
      padding-left: 10px;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      a{
        color: #778087;
      }
    }
  }
}

</style>