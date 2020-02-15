<template>
  <div>
    <a href @click.prevent="show = !show">
      <h2 style="color: black">{{title}}</h2>
    </a>
    <transition name="smooth">
      <div v-show="show">
        <lightbox :images="lijst"></lightbox>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "FotoLijst",
  props: {
    lijst: Array,
    title: String
  },
  data() {
    return {
      show: false
    };
  },
  methods: {}
};
</script>
