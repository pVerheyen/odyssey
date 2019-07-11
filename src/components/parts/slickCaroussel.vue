<template>
    <slick :options="slickOptions" style="border: 3px solid lightgrey">
                <img src="../../assets/sponsors/Ackx.jpg" class="sponsor-image" >
                <img src="../../assets/sponsors/Alfanet.png" class="sponsor-image">
                <img src="../../assets/sponsors/Auberginn.jpg" class="sponsor-image">
                <img src="../../assets/sponsors/Baby_baby.jpg" class="sponsor-image">
                <img src="../../assets/sponsors/BartEngelen.png" class="sponsor-image">
                <img src="../../assets/sponsors/Beckers.jpg" class="sponsor-image">
                <img src="../../assets/sponsors/Bepaco.jpg" class="sponsor-image">
                <img src="../../assets/sponsors/Bouwpunt.jpg" class="sponsor-image">
                <img src="../../assets/sponsors/CRNCR.jpg" class="sponsor-image">
                <img src="../../assets/sponsors/Govaerts.png" class="sponsor-image">
                <img src="../../assets/sponsors/Kadulleke.jpg" class="sponsor-image">
                <img src="../../assets/sponsors/NewYork.jpg" class="sponsor-image">
                <img src="../../assets/sponsors/RedStar.jpg" class="sponsor-image">
                <img src="../../assets/sponsors/Sportagon.jpg" class="sponsor-image">
                <img src="../../assets/sponsors/Steto.jpg" class="sponsor-image">
                <img src="../../assets/sponsors/Thomas.png" class="sponsor-image">
                <img src="../../assets/sponsors/UITTessenderlo.jpg" class="sponsor-image">
                <img src="../../assets/sponsors/Vanlommel.jpg" class="sponsor-image">
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
                    slidesToShow: 5,
                    autoplay: true,
                    fade: false,
                    easing: 'linear',
                    arrows: false,
                    variableWidth:false,
                    variableHeight:false,
                    slidesToScroll: 1,
                    pauseOnFocus:false,
                    pauseOnHover: false,
                    swipe: false,
                    lazyload: 'ondemand',
                    autoplaySpeed: 1000,
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