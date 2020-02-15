<template>
  <div>
        <lightbox :images="images" title="Sneeuwman XII 2019"></lightbox>
      <!-- <li v-for="client in images" v-bind:key="client.pathShort"><img :src="client.pathShort" /></li> -->
  </div>
</template>

<script>
export default {
  name: "SectionOurClients",
  data() {
    return {
      images: []
    };
  },

  mounted() {
    this.importAll(require.context("../../assets/images/herfstconcert Samana/", true, /\.jpg$/));
    //this.importAll(require.context("../../assets/images/muurklimmen/", true, /\.JPG$/));
  },

  methods: {
    importAll(r) {
      r.keys().forEach(key =>{
        //  debugger;
     // var naam = key.substring(2);
     console.log(r(key))
        this.images.push({ src: r(key) })
      });
      
    }
  }
};
</script>