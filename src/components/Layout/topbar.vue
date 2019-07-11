<template>
<div style="left: 20%">

  <b-navbar toggleable="md" type="light" variant="dark" style="justify-content: center; background-color: lightgrey !important; border-bottom: 2px solid darkgrey" fixed='top'>
   <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-navbar-brand style="margin-left:10px; margin-top:10px;"> <img src="../../assets/images/logo/logoOdeyssey.png" alt="musicband odeyssey" style="height: 50px; margin-top: -10px;"> </b-navbar-brand>
 
    <b-collapse id="nav-collapse" style="flex-grow: 0" is-nav>
      <b-navbar-nav>
        <b-nav-item onClick="window.scrollTo(0,0)" :to="'/home'">Home</b-nav-item>
        <b-nav-item onClick="window.scrollTo(0,0)" :to="'/Nieuws'">Nieuws</b-nav-item>
        <b-nav-item onClick="window.scrollTo(0,0)" :to="'/OverOns'">Over ons</b-nav-item>
        <b-nav-item onClick="window.scrollTo(0,0)" :to="'/activiteiten'">Activiteiten</b-nav-item>
        <b-nav-item onClick="window.scrollTo(0,0)" :to="'/foto'">Foto's</b-nav-item>
        <b-nav-item onClick="window.scrollTo(0,0)" :to="'/JeugdorkestYessydo'">Jeugdorkest Yessydo</b-nav-item>
        <b-nav-item onClick="window.scrollTo(0,0)" :to="'/Contact'">Bestuur</b-nav-item>
        <b-nav-item onClick="window.scrollTo(0,0)" style="margin-left: 20px; text-align:center;"><img src="../../assets/images/logo/logoYessydo.png" alt="musicband odeyssey" style="height: 50px; margin-top: -10px;"> </b-nav-item>
       </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>

export default {
    name: "topbar",
        data() {
        return {
            width: 0,
            height: 0
        };
    },
    created() {
        window.addEventListener('resize', this.handleResize)
        this.handleResize();
    },
    destroyed() {
        window.removeEventListener('resize', this.handleResize)
    },
    methods: {
        handleResize() {
            this.width = window.innerWidth;
            this.height = window.innerHeight;
        }
    }
};
</script>