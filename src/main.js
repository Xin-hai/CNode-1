import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$http = Axios

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')

Vue.filter('formatData', (string) => {
    if (!string) return ''
    let date = new Date(string)
    let time = new Date().getTime() - date.getTime()
    if (time < 0) {
        return ''
    } else if (time < 30 * 1000) {
        return '刚刚'
    } else if (time < 60 * 1000) {
        return parseInt((time / 1000).toString()) + '秒前'
    } else if (time < 60 * 60 * 1000) {
        return parseInt((time / (1000 * 60)).toString()) + '分钟前'
    } else if (time < 24 * 60 * 60 * 1000) {
        return parseInt((time / (1000 * 60 * 60)).toString()) + '小时前'
    } else if (time < 30 * 24 * 60 * 60 * 1000) {
        return parseInt((time / (24 * 60 * 60 * 1000)).toString()) + '天前'
    } else if (time < 12 * 30 * 24 * 60 * 60 * 1000) {
        return parseInt((time / (30 * 24 * 60 * 60 * 1000)).toString()) + '个月前'
    } else {
        return parseInt((time / (12 * 30 * 24 * 60 * 60 * 1000)).toString()) + '年前'
    }
})

Vue.filter('tabFormat',(post) =>{
    if(post.good === true){
        return '精华'
    }else if(post.top === true){
        return '置顶'
    }else if(post.tab === 'ask'){
        return '问答'
    }else if(post.tab === 'share'){
        return '分享'
    }else if(post.tab === 'job'){
        return '招聘'
    }else {
        return '分享'
    }
})
