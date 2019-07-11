<template>
<div class="text-center">
  <h1>Foto's</h1> 
  <br/>
  <lightbox :images="FotosCultuuravond" title="Cultuuravond" ></lightbox>
  <lightbox :images="FotosKleurrijk" title="Kleurrijk" ></lightbox>
  <lightbox :images="FotosKortenaken" title="Kortenaken" ></lightbox>
</div>
</template>

<script>
export default {
  name: "fotos",
  data() {
    return {
        FotosCultuuravond : [
    {
        src: require('../../assets/images/FotosCultuuravond/Cultuuravond_0.jpg'),
    },
    {
        src: require('../../assets/images/FotosCultuuravond/Cultuuravond_1.jpg'),
    },
        {
        src: require('../../assets/images/FotosCultuuravond/Cultuuravond_2.jpg'),
    },
    {
        src: require('../../assets/images/FotosCultuuravond/Cultuuravond_3.jpg'),
    },
    {
        src: require('../../assets/images/FotosCultuuravond/Cultuuravond_4.jpg'),
    },
    {
        src: require('../../assets/images/FotosCultuuravond/Cultuuravond_5.jpg'),
    },
    {
        src: require('../../assets/images/FotosCultuuravond/Cultuuravond_6.jpg'),
    },
    {
        src: require('../../assets/images/FotosCultuuravond/Cultuuravond_7.jpg'),
    },
    {
        src: require('../../assets/images/FotosCultuuravond/Cultuuravond_8.jpg'),
    },
    {
        src: require('../../assets/images/FotosCultuuravond/Cultuuravond_9.jpg'),
    },
],
        FotosKortenaken : [
    {
        src: require('../../assets/images/FotosKortenaken/Kortenaken_1.jpg'),
    },
    {
        src: require('../../assets/images/FotosKortenaken/Kortenaken_1.jpg'),
    },
        {
        src: require('../../assets/images/FotosKortenaken/Kortenaken_2.jpg'),
    },
    {
        src: require('../../assets/images/FotosKortenaken/Kortenaken_3.jpg'),
    },
    {
        src: require('../../assets/images/FotosKortenaken/Kortenaken_4.jpg'),
    },
    {
        src: require('../../assets/images/FotosKortenaken/Kortenaken_5.jpg'),
    },
],
                FotosKleurrijk : [
    {
        src: require('../../assets/images/FotosKleurrijk/Kleurrijk_1.jpg'),
    },
        {
        src: require('../../assets/images/FotosKleurrijk/Kleurrijk_2.jpg'),
    },
    {
        src: require('../../assets/images/FotosKleurrijk/Kleurrijk_3.jpg'),
    },
    {
        src: require('../../assets/images/FotosKleurrijk/Kleurrijk_4.jpg'),
    },
    {
        src: require('../../assets/images/FotosKleurrijk/Kleurrijk_5.jpg'),
    },
    {
        src: require('../../assets/images/FotosKleurrijk/Kleurrijk_6.jpg'),
    },
    {
        src: require('../../assets/images/FotosKleurrijk/Kleurrijk_7.jpg'),
    },
    {
        src: require('../../assets/images/FotosKleurrijk/Kleurrijk_8.jpg'),
    },
    {
        src: require('../../assets/images/FotosKleurrijk/Kleurrijk_9.jpg'),
    },
    {
        src: require('../../assets/images/FotosKleurrijk/Kleurrijk_10.jpg'),
    },
    {
        src: require('../../assets/images/FotosKleurrijk/Kleurrijk_11.jpg'),
    },
    ]
    }
  }
};
</script>