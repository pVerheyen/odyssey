<template>
    <slick :options="slickOptions">
                <img src="../../assets/sponsors/Vanlommel.png" class="sponsor-image">
                <img src="../../assets/sponsors/BouwPunt.png" class="sponsor-image">
                <img src="../../assets/sponsors/Auberginn.jpg" class="sponsor-image">
                <img src="../../assets/sponsors/Thomas.png" class="sponsor-image">
                <img src="../../assets/sponsors/NewYork.jpg" class="sponsor-image">
                <img src="../../assets/sponsors/RedStar.jpg" class="sponsor-image">
                <img src="../../assets/sponsors/Exelmans.png" class="sponsor-image">
                <img src="../../assets/sponsors/Tomatto.png" class="sponsor-image">
                <img src="../../assets/sponsors/Ossekop.png" class="sponsor-image">
                <img src="../../assets/sponsors/Villaplancha.png" class="sponsor-image">
                <img src="../../assets/sponsors/Horta.png" class="sponsor-image">
                <img src="../../assets/sponsors/Hoedemakers.png" class="sponsor-image">
                <img src="../../assets/sponsors/Gaethofs.png" class="sponsor-image">
                <img src="../../assets/sponsors/Icinuit.png" class="sponsor-image">
                <img src="../../assets/sponsors/Aveve.png" class="sponsor-image">
                <img src="../../assets/sponsors/Looiseverfhandel.png" class="sponsor-image">
                <img src="../../assets/sponsors/Paenhuys.png" class="sponsor-image">
                <img src="../../assets/sponsors/Artistico.png" class="sponsor-image">
                <img src="../../assets/sponsors/Fritz.png" class="sponsor-image">
                <img src="../../assets/sponsors/Mondelaers.png" class="sponsor-image">
                <img src="../../assets/sponsors/Koninckshof.png" class="sponsor-image">
                <img src="../../assets/sponsors/Persoons.png" class="sponsor-image">
                <img src="../../assets/sponsors/Loret.png" class="sponsor-image">
                <img src="../../assets/sponsors/Denhoek.png" class="sponsor-image">
                <img src="../../assets/sponsors/Siegi.png" class="sponsor-image">
                <img src="../../assets/sponsors/Pressing.png" class="sponsor-image">
                <img src="../../assets/sponsors/Ooms.png" class="sponsor-image">
                <img src="../../assets/sponsors/Doehetzelf.png" class="sponsor-image">
                <img src="../../assets/sponsors/Silhouette.png" class="sponsor-image">
                <img src="../../assets/sponsors/Floralux.png" class="sponsor-image">
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