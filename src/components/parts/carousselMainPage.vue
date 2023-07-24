<template>
<div>

            <img slot="img" class="d-block img-fluid w-100 main-pic" style="" src="../../assets/images/foto/anderconcert.jpg" alt="image slot">


</div>
</template>

<script>
export default {
    data() {
        return {
            slide: 0,
            sliding: null
        };
    },
    methods: {
        onSlideStart(slide) {
            this.sliding = true;
        },
        onSlideEnd(slide) {
            this.sliding = false;
        }
    }
};
</script>
