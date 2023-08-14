<template>
  <div class="listing">
    <div class="loading" v-if="isLoading">
      <img src="@/assets/loading.gif" alt="这是加载中">
    </div>

    <div class="posts" v-else>
      <ul class="container">

        <li class="topBar">
          <span v-for="(item,index) in topBar" :key="index"
          :class="{'selectedBar': selected.indexOf(item) !== -1 }" @click="selectedBar(index,item)" >
            <a href="#">{{item.name}}</a>
          </span>
        </li>

        <li v-for="post in posts" :key="post.id" class="cell">
          <img :src="post.author.avatar_url" alt="">
          <span class="count">
            <span class="reply">{{ post.reply_count }}</span>
            /{{ post.visit_count }}
          </span>
          <span
              :class="[{good: (post.good === true),top:(post.top === true),'normal':(post.good !==true && post.top !== true)}]">
            <span>{{post | tabFormat}}</span>
          </span>
          <router-link :to="{
            name:'post_content',
            params: {
              id: post.id
            }
           }">
            <span>
            {{ post.title }}
          </span>
          </router-link>
          <span class="last-reply">
            {{ post.last_reply_at | formatData }}
          </span>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
export default {
  name: "Listing",
  data() {
    return {
      isLoading: false,
      posts: [],
      topBar: [
        {name: '全部'}, {name: '精华'}, {name: '分享'},
        {name: '问答'}, {name: '招聘'}, {name: '客户端测试'}
      ],
      selected: []
    }
  },
  methods: {
    getData() {
      this.$http.get('https://cnodejs.org/api/v1/topics', {
        page: 1,
        limit: 10
      }).then(res => {
        this.isLoading = false
        this.posts = res.data.data
      }).catch((err) => console.log(err))
    },
    selectedBar(index,item){
      if(this.selected.indexOf(item) === -1){
        this.selected = [] // 将前一次选中的移除
        this.selected.push(item)
      }
    }
  },
  created(){
    this.selected.push(this.topBar[0])
  },
  beforeMount() {
    this.isLoading = true // 加载动画
    this.getData()
  }
}
</script>

<style scoped lang="scss">
@import "~@/assets/style/listing";
</style>