<template>
<div class="text-center">
  <h1>Foto's</h1> 
  <br/>
  <lightbox :images="FotosCultuuravond" title="Cultuuravond" ></lightbox>
  <lightbox :images="FotosKleurrijk" title="Kleurrijk" ></lightbox>
  <lightbox :images="FotosKortenaken" title="Kortenaken" ></lightbox>
  <lightbox :images="FotosPannekoekenConcert" title="Pannekoekenconcert" ></lightbox>
  <lightbox :images="FotosMuziekkamp" title="Muziekkamp 2019" ></lightbox>
  <lightbox :images="FotosSpaghettidag" title="Spaghettidag" ></lightbox>
  <lightbox :images="FotosKlassiek" title="Klassiek uit mijnen tijd" ></lightbox>
  <lightbox :images="FotosSnowman" title="Snowman XI" ></lightbox>
</div>
</template>

<script>
export default {
  name: "fotos",
  data() {
    return {
    FotosSnowman : [
    {
        src: require('../../assets/images/FotosSnowman/Snowman-XI_1-min.jpg'),
    },
    {
        src: require('../../assets/images/FotosSnowman/Snowman-XI_2-min.jpg'),
    },
    {
        src: require('../../assets/images/FotosSnowman/Snowman-XI_3-min.jpg'),
    },
    {
        src: require('../../assets/images/FotosSnowman/Snowman-XI_4-min.jpg'),
    },
    {
        src: require('../../assets/images/FotosSnowman/Snowman-XI_5-min.jpg'),
    },
    {
        src: require('../../assets/images/FotosSnowman/Snowman-XI_6-min.jpg'),
    },
    {
        src: require('../../assets/images/FotosSnowman/Snowman-XI_7-min.jpg'),
    },
    ],
                        FotosKlassiek : [
    {
        src: require('../../assets/images/FotosKlassiek/Klassiek_uit_mijnen_tijd_1-min.jpg'),
    },
    {
        src: require('../../assets/images/FotosKlassiek/Klassiek_uit_mijnen_tijd_2-min.jpg'),
    },
    {
        src: require('../../assets/images/FotosKlassiek/Klassiek_uit_mijnen_tijd_3-min.jpg'),
    },
    {
        src: require('../../assets/images/FotosKlassiek/Klassiek_uit_mijnen_tijd_4-min.jpg'),
    },
    {
        src: require('../../assets/images/FotosKlassiek/Klassiek_uit_mijnen_tijd_5-min.jpg'),
    },
    {
        src: require('../../assets/images/FotosKlassiek/Klassiek_uit_mijnen_tijd_6-min.jpg'),
    },
    {
        src: require('../../assets/images/FotosKlassiek/Klassiek_uit_mijnen_tijd_7-min.jpg'),
    },
    {
        src: require('../../assets/images/FotosKlassiek/Klassiek_uit_mijnen_tijd_8-min.jpg'),
    },
    {
        src: require('../../assets/images/FotosKlassiek/Klassiek_uit_mijnen_tijd_9-min.jpg'),
    },
    ],
                FotosSpaghettidag : [
    {
        src: require('../../assets/images/FotosSpaghettidag/Spaghettidag_1-min.jpg'),
    },
    {
        src: require('../../assets/images/FotosSpaghettidag/Spaghettidag_2-min.jpg'),
    },
    {
        src: require('../../assets/images/FotosSpaghettidag/Spaghettidag_3-min.jpg'),
    },
    {
        src: require('../../assets/images/FotosSpaghettidag/Spaghettidag_4-min.jpg'),
    },
    {
        src: require('../../assets/images/FotosSpaghettidag/Spaghettidag_5-min.jpg'),
    },
    {
        src: require('../../assets/images/FotosSpaghettidag/Spaghettidag_6-min.jpg'),
    },
    {
        src: require('../../assets/images/FotosSpaghettidag/Spaghettidag_7-min.jpg'),
    },
    {
        src: require('../../assets/images/FotosSpaghettidag/Spaghettidag_8-min.jpg'),
    },
    {
        src: require('../../assets/images/FotosSpaghettidag/Spaghettidag_9-min.jpg'),
    },
    {
        src: require('../../assets/images/FotosSpaghettidag/Spaghettidag_10-min.jpg'),
    },
    {
        src: require('../../assets/images/FotosSpaghettidag/Spaghettidag_11-min.jpg'),
    },
    {
        src: require('../../assets/images/FotosSpaghettidag/Spaghettidag_12-min.jpg'),
    },
    {
        src: require('../../assets/images/FotosSpaghettidag/Spaghettidag_13-min.jpg'),
    },
    {
        src: require('../../assets/images/FotosSpaghettidag/Spaghettidag_14-min.jpg'),
    },
    {
        src: require('../../assets/images/FotosSpaghettidag/Spaghettidag_15-min.jpg'),
    },
    {
        src: require('../../assets/images/FotosSpaghettidag/Spaghettidag_16-min.jpg'),
    },
    {
        src: require('../../assets/images/FotosSpaghettidag/Spaghettidag_17-min.jpg'),
    },
    {
        src: require('../../assets/images/FotosSpaghettidag/Spaghettidag_18-min.jpg'),
    }
    ],
        FotosCultuuravond : [
    {
        src: require('../../assets/images/FotosCultuuravond/Cultuuravond_0-min.jpg'),
    },
    {
        src: require('../../assets/images/FotosCultuuravond/Cultuuravond_1-min.jpg'),
    },
        {
        src: require('../../assets/images/FotosCultuuravond/Cultuuravond_2-min.jpg'),
    },
    {
        src: require('../../assets/images/FotosCultuuravond/Cultuuravond_3-min.jpg'),
    },
    {
        src: require('../../assets/images/FotosCultuuravond/Cultuuravond_4-min.jpg'),
    },
    {
        src: require('../../assets/images/FotosCultuuravond/Cultuuravond_5-min.jpg'),
    },
    {
        src: require('../../assets/images/FotosCultuuravond/Cultuuravond_6-min.jpg'),
    },
    {
        src: require('../../assets/images/FotosCultuuravond/Cultuuravond_7-min.jpg'),
    },
    {
        src: require('../../assets/images/FotosCultuuravond/Cultuuravond_8-min.jpg'),
    },
    {
        src: require('../../assets/images/FotosCultuuravond/Cultuuravond_9-min.jpg'),
    },
],
        FotosKortenaken : [
    {
        src: require('../../assets/images/FotosKortenaken/Kortenaken_1-min.jpg'),
    },
        {
        src: require('../../assets/images/FotosKortenaken/Kortenaken_2-min.jpg'),
    },
    {
        src: require('../../assets/images/FotosKortenaken/Kortenaken_3-min.jpg'),
    },
    {
        src: require('../../assets/images/FotosKortenaken/Kortenaken_4-min.jpg'),
    },
    {
        src: require('../../assets/images/FotosKortenaken/Kortenaken_5-min.jpg'),
    },
],
                FotosKleurrijk : [
    {
        src: require('../../assets/images/FotosKleurrijk/Kleurrijk_1-min.jpg'),
    },
        {
        src: require('../../assets/images/FotosKleurrijk/Kleurrijk_2-min.jpg'),
    },
    {
        src: require('../../assets/images/FotosKleurrijk/Kleurrijk_3-min.jpg'),
    },
    {
        src: require('../../assets/images/FotosKleurrijk/Kleurrijk_4-min.jpg'),
    },
    {
        src: require('../../assets/images/FotosKleurrijk/Kleurrijk_5-min.jpg'),
    },
    {
        src: require('../../assets/images/FotosKleurrijk/Kleurrijk_6-min.jpg'),
    },
    {
        src: require('../../assets/images/FotosKleurrijk/Kleurrijk_7-min.jpg'),
    },
    {
        src: require('../../assets/images/FotosKleurrijk/Kleurrijk_8-min.jpg'),
    },
    {
        src: require('../../assets/images/FotosKleurrijk/Kleurrijk_9-min.jpg'),
    },
    {
        src: require('../../assets/images/FotosKleurrijk/Kleurrijk_10-min.jpg'),
    },
    {
        src: require('../../assets/images/FotosKleurrijk/Kleurrijk_11-min.jpg'),
    },
    ],
            FotosPannekoekenConcert : [
    {
        src: require('../../assets/images/FotosPannekoekenConcert/Pannenkoekenconcert_1-min.jpg'),
    },
    {
        src: require('../../assets/images/FotosPannekoekenConcert/Pannenkoekenconcert_2-min.jpg'),
    },
    {
        src: require('../../assets/images/FotosPannekoekenConcert/Pannenkoekenconcert_3-min.jpg'),
    },
    {
        src: require('../../assets/images/FotosPannekoekenConcert/Pannenkoekenconcert_4-min.jpg'),
    },
    {
        src: require('../../assets/images/FotosPannekoekenConcert/Pannenkoekenconcert_5-min.jpg'),
    },
    {
        src: require('../../assets/images/FotosPannekoekenConcert/Pannenkoekenconcert_6-min.jpg'),
    },
    {
        src: require('../../assets/images/FotosPannekoekenConcert/Pannenkoekenconcert_7-min.jpg'),
    },

],
            FotosMuziekkamp : [
    {
        src: require('../../assets/images/FotosMuziekkamp/Muziekkamp-2019-1-min.jpg'),
    },
    {
        src: require('../../assets/images/FotosMuziekkamp/Muziekkamp-2019-2-min.jpg'),
    },
    {
        src: require('../../assets/images/FotosMuziekkamp/Muziekkamp-2019-3-min.jpg'),
    },
    {
        src: require('../../assets/images/FotosMuziekkamp/Muziekkamp-2019-4-min.jpg'),
    },
    {
        src: require('../../assets/images/FotosMuziekkamp/Muziekkamp-2019-5-min.jpg'),
    },
    {
        src: require('../../assets/images/FotosMuziekkamp/Muziekkamp-2019-6-min.jpg'),
    },
    {
        src: require('../../assets/images/FotosMuziekkamp/Muziekkamp-2019-7-min.jpg'),
    },
    {
        src: require('../../assets/images/FotosMuziekkamp/Muziekkamp-2019-8-min.jpg'),
    },
    {
        src: require('../../assets/images/FotosMuziekkamp/Muziekkamp-2019-9-min.jpg'),
    },
    {
        src: require('../../assets/images/FotosMuziekkamp/Muziekkamp-2019-10-min.jpg'),
    },
    {
        src: require('../../assets/images/FotosMuziekkamp/Muziekkamp-2019-11-min.jpg'),
    },
    {
        src: require('../../assets/images/FotosMuziekkamp/Muziekkamp-2019-12-min.jpg'),
    },
    {
        src: require('../../assets/images/FotosMuziekkamp/Muziekkamp-2019-13-min.jpg'),
    },
    {
        src: require('../../assets/images/FotosMuziekkamp/Muziekkamp-2019-14-min.jpg'),
    },
    {
        src: require('../../assets/images/FotosMuziekkamp/Muziekkamp-2019-15-min.jpg'),
    },

]
    }
  }
};
</script>