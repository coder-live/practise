import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    iconSrcText: [
      require("@/assets/img/icon/text/visible.svg"), 
      require("@/assets/img/icon/text/time.svg"), 
      require("@/assets/img/icon/text/like.svg"),
      require("@/assets/img/icon/text/collecte.svg"),
      require("@/assets/img/icon/text/comment.svg")
    ],
    iconSrcShare: [
      require("@/assets/img/icon/share/qq.svg"), 
      require("@/assets/img/icon/share/weixin.svg"), 
      require("@/assets/img/icon/share/weibo.svg"), 
    ],
    iconSrcSendText: [
      require("@/assets/img/icon/sendText/express.svg"),
      require("@/assets/img/icon/sendText/photo.svg"),
    ],
    iconSrcAside: [
      require("@/assets/img/icon/text/visible.svg"),
      require("@/assets/img/icon/text/like.svg"),
      require("@/assets/img/icon/text/collecte.svg"),
      require("@/assets/img/icon/text/comment.svg")
    ],
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
