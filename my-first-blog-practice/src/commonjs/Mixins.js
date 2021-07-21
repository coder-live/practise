import BackTop from "components/content/backtop/BackTop";


export const mixin = {
  data() {
    return {
      isShow: false,
    }
  },
  components: {
    BackTop,
  },
  mounted() {
    //console.log(333);
    window.addEventListener( "mousewheel",this.scroll,false );
  },
  activated() {
    this.isShow = false;
    //console.log(this.dIndex);
  }
}

