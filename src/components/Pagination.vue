<template>
<div id="pagination">
  <button @click="changeBtn">首页</button>
  <button @click="changeBtn">上一页</button>
  <button v-for="btn in pageBtn" :key="btn" :class="[{currentPage:btn===currentPage},'pageBtn']"
  @click="changeBtn(btn)"
  >
    {{btn}}
  </button>
  <button @click="changeBtn">下一页</button>
</div>
</template>

<script>
import $ from 'jquery'
export default {
  name: "Pagination",
  data(){
    return {
      pageBtn: [1,2,3,4],
      currentPage: 1
    }
  },
  methods: {
    changeBtn(page){

      if(typeof page !== 'number'){
        switch (page.target.innerText){
          case '上一页':
            $('button.currentPage').prev().click()
                break
          case '下一页':
            $('button.currentPage').next().click()
                break
          case '首页':
            this.pageBtn = [1,2,3,4]
                this.changeBtn(1)
                break
          default: break
        }
        return
      }
      this.currentPage = page
      if(page === this.pageBtn[3]){
        this.pageBtn.shift()
        this.pageBtn.splice(3,0,this.pageBtn[2]+1)
      }else if(page === this.pageBtn[0] && page!==1){
        this.pageBtn.unshift(this.pageBtn[0]-1)
        this.pageBtn.splice(4,1)
      }
      this.$emit('handle',this.currentPage)
    }
  }
}
</script>

<style scoped lang="scss">
#pagination {
  margin-bottom: 15px;
  margin-top: 10px;
  padding: 6px 20px;
  background:  white;
  border-radius: 5px;
  button {
    border: 1px solid grey;
    cursor: pointer;
    background:  white;
    color:#000;
    border-radius: 3px;
    outline: none;
    padding: 0 2px;
    width: 50px;
    height: 30px;
    margin-right: 4px;
  }
  .currentPage {
    background:#409eff;
    color: #fff;
  }
}


//.currentPage {
//  color: white;
//  background-color: #1f1b1b;
//
//}
</style>