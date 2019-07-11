<template>
  <div id="app" class="main-container">
    
    <topbar ></topbar>
    <router-view class="content"></router-view>
    <footerbar class="footer"></footerbar>
  </div>
</template>

<script>
import topbar from './components/Layout/topbar'
import footerbar from './components/Layout/footer'
import JQuery from 'jquery'
let $ = JQuery

export default {
  name: 'app',
  components: {
    topbar,
    footerbar
  },
  data () {
    return {
      
    }
  },
  mounted(){
        $(".router-link-active").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });
  }
}
</script>
