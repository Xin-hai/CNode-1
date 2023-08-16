<template>
  <div class="UserInfo">
    <div class="loading" v-if="isLoading">
      <img src="@/assets/loading.gif" alt="">
    </div>
    <div v-else class="userInformation">
      <section class="goTopic">
        <router-link to="/">主页 </router-link>
        <span class="slash">/</span>
      </section>
      <section class="inner-userinfo">
        <img :src="userInfo.avatar_url" alt="">
        <span>{{userInfo.loginname}}</span>
        <ul>
          <span class="score">{{userInfo.score}} 积分</span>
          <li class="firstLi"> {{userCollectInfo.length}}个话题收藏 </li>
          <li class="secondLi">
            <img src="@/assets/github.svg" alt="">
            <a :href="githubUrl">@{{userInfo.githubUsername}}</a>
          </li>
          <li class="lassLi">注册时间 {{userInfo.create_at | formatData}}</li>
        </ul>
      </section>
    </div>
    <div class="topics">
      <p>最近创建的话题</p>
      <ul>
        <li v-for="item in userInfo.recent_topics" :key="item.id">
          <div class="imgName">
              <img :src="item.author.avatar_url" alt="">

            <span>{{item.author.loginname}}</span>
            <router-link :to="{
              name:'post_content',
              params:{
                id: item.id
              }
            }">
              <span class="topics-title">{{item.title}}</span>
            </router-link>
          </div>
          <div class="last-reply-time">{{item.last_reply_at | formatData}}</div>
        </li>
      </ul>
    </div>
    <div class="replies">
      <p>最近参与的话题</p>
      <ul>
        <li v-for=" item in userInfo.recent_replies" :key="item.id">
          <div class="imgName">
            <router-link :to="{
              name:'userinfo',
              params: {
                name: item.author.loginname
              }
            }">
              <img :src="item.author.avatar_url" alt="">
            </router-link>

            <span>{{item.author.loginname}}</span>

            <router-link :to="{
              name:'post_content',
              params:{
                id: item.id
              }
            }">
              <span class="topics-title">{{item.title}}</span>
            </router-link>
          </div>
          <div class="last-reply-time">{{item.last_reply_at | formatData}}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserInfo",
  data() {
    return {
      isLoading: false,
      userInfo: {},
      userCollectInfo: {},
      githubUrl: 'https://github.com/'
    }
  },
  methods: {
    getData() {
      this.$http.get(`https://cnodejs.org/api/v1/user/${this.$route.params.name}`)
          .then(res => {
        this.isLoading = false
           this.githubUrl =  this.githubUrl + res.data.data.githubUsername
        this.userInfo = res.data.data
      }).catch((err) => console.log(err))
    },
    getCollectData(){
      this.$http.get(`https://cnodejs.org/api/v1/topic_collect/${this.$route.params.name}`)
          .then(res => {
            console.log(res.data.data)
            this.userCollectInfo = res.data.data
          }).catch((err) => console.log(err))
    }
  },
  beforeMount() {
    this.getData()
    this.getCollectData()
  },
}
</script>

<style scoped lang="scss">
.userInformation{
  background: white;
  margin: 15px auto;
  width: 80%;
  .goTopic {
    padding: 6px;
    border-bottom: 1px solid #e5e5e5;
    background: #f6f6f6;
    a {
      color: #80bd01;
      font-size: 14px;
    }
    a:hover{
      text-decoration: underline;
    }
    .slash {
      padding: 0 5px;
      color: #ccc;
    }
  }
  .inner-userinfo{
    padding: 10px;
    > img{
      width: 30px;
      vertical-align: middle;
      margin-right: 10px;
      margin-bottom: 10px;
    }
    ul {
      font-size: 14px;
      > span{
      }
      .firstLi{
        color: #778087;
      }
      .secondLi{
        color: #778087;
        display: flex;
        justify-content: start;
        align-items: center;
        img{
          width: 20px;
          height: 20px;
          vertical-align:middle;
          margin-right: 2px;
          color: #778087;
        }
        a {
          vertical-align: middle;
        }
      }
      .lassLi {
        color: #ababab;
      }
    }
  }
}
.replies,.topics{
  background: white;
  margin: 15px auto;
  width: 80%;
  font-size: 0.72rem;
  > p {
    background: #f6f6f6;
    border-bottom: 1px solid #f0f0f0;
    color: #444;
    font-size: 14px;
    padding-left: 10px;
  }
  ul{
    margin-left: 10px;
    li{
      white-space: nowrap;
      font-size: 14px;
      padding: 10px 0;
      border-bottom: 1px solid #f0f0f0;
      display: flex;
      justify-content: space-between;
      .imgName {
        > span{
          padding: 0 8px;
        }
        a {
          color:#08c;
          text-decoration: none;
        }
        a:hover{
          color: #8b467f;
        }
        .topics-title{
          font-size: 16px;
          max-width: 70%;
          white-space: nowrap;
          vertical-align: middle;
          line-height: 30px;
        }
        img {
          vertical-align: middle;
          width: 30px;
          height: 30px;
        }
      }
      .last-reply-time{
        padding-right: 10px;
        font-size: 11px;
        color: #777;
      }
    }
  }
}

.userInfomation {
  background: white;
  width: 80%;
  margin: 15px auto;
}

.userInfomation section {
  padding: 12px;
}

.userInfomation img {
  width: 30px;
}

.userInfomation li {
  list-style: none;
}

.userInfomation .replies,
.userInfomation .topics {
  font-size: 0.72rem;
  border-top: 10px #DDDDDD solid;
}

.userInfomation > div > p {
  padding: 12px 0 12px 12px;
  background-color: rgba(212, 205, 205, 0.17);
  font-size: 0.75rem;
  margin: 0;
}

.userInfomation > div > ul > li {
  padding: 4px 0 4px 12px;
  white-space: nowrap;
  font-size: 0.72rem;
  text-overflow: ellipsis;
  overflow: hidden;
  line-height: 30px;
  vertical-align: middle;
}

.userInfomation > div > ul > li > a {
  color: #094E99;
  text-decoration: none;
}
</style>