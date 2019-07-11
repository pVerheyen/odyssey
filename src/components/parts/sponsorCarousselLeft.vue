<template>
    <slick :options="slickOptions">
                <img src="../../assets/sponsors/Ackx.jpg" class="sponsor-image" >
                <img src="../../assets/sponsors/CRNCR.jpg" class="sponsor-image">
                <img src="../../assets/sponsors/Steto.jpg" class="sponsor-image">
                <img src="../../assets/sponsors/Derache.png" class="sponsor-image">
                <img src="../../assets/sponsors/Ackx.jpg" class="sponsor-image" >
                <img src="../../assets/sponsors/dianevleugels.png" class="sponsor-image">
                <img src="../../assets/sponsors/Cortina.png" class="sponsor-image">
                <img src="../../assets/sponsors/Beckers.png" class="sponsor-image">
                <img src="../../assets/sponsors/Bepaco.jpg" class="sponsor-image">
                <img src="../../assets/sponsors/Govaerts.png" class="sponsor-image">
    </slick>
</template>
<script>
    import Slick from 'vue-slick';
    import '../../../node_modules/slick-carousel/slick/slick.css';
    export default {
        data() {
            return {
                slickOptions: {
                    infinite: true,
                    autoplay: true,
                    fade: true,
                    easing: 'linear',
                    arrows: false,
                    variableWidth:false,
                    variableHeight:false,
                    slidesToScroll: 1,
                    pauseOnFocus:false,
                    pauseOnHover: false,
                    swipe: false,
                    lazyload: 'ondemand',
                    autoplaySpeed: 2000,
                    speed: 2000
                },
            };
        },
        methods: {
            updated() {
                this.reInit();
            },
            reInit() {
                this.$refs.slickone.reSlick();
            },
        },
        components: {
            'slick': Slick,
        }
    }
</script>