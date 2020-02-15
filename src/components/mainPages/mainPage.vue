<template>
  <div style="color: rgba(0, 0, 0, 0.5); margin-top: 70px !important;">
    <caroussel-main-page></caroussel-main-page>

    <b-row style=" padding-top:20px;">
      <b-col col md="3" class="sponsors-left">
        <sponsor-caroussel-left></sponsor-caroussel-left>
      </b-col>

      <b-col col md="6">
        <div class="text-center">
          <h3>Wij repeteren op zaterdagavond in het Sportagon te Tessenderlo</h3>

          <h6>Pré-Yessydo's: 18u00 - 19u30</h6>

          <h6>Jeugdorkest Yessydo: 18u30 - 19u30</h6>

          <h6>Musicband Odyssey: 19u30 - 21u00</h6>
        </div>
      </b-col>

      <b-col col md="3" class="sponsors-right">
        <sponsor-caroussel-right></sponsor-caroussel-right>
      </b-col>
    </b-row>

    <b-row style="padding-top: 40px;">
      <b-col col md="9">
        <h1>Wie zijn we?</h1>

        <div>
          <p>Musicband Odyssey, onder leiding van Tim Boonen, is een harmonieorkest van een 50-tal muzikanten. Naast blaas- en slaginstrumenten zijn lage strijkers bij ons ook meer dan welkom! Allemaal hebben we 2 dezelfde dingen met elkaar gemeen: we spelen graag muziek en houden wel van uitdaging.</p>

          <p>We doen ons best om ons repertoire zo gevarieerd mogelijk te houden. Dit proberen we te vertalen in een 3-tal concerten per jaar met een verschillend doelpubliek: voor de allerkleinsten het snowman-concert in december, voor de senioren een klassiek concert in het najaar en in het voorjaar een themaconcert waarin de meest uiteenlopende genres aan bod komen.</p>

          <p>
            <ul>
            <li>Ben je geïnteresseerd om een repetitie bij te wonen? </li>
            <li>Wil jij samen met ons op het podium zitten tijdens 1 van deze  concerten?</li>
            <li>Ben je op zoek naar een enthousiaste vriendengroep? </li>
            </ul>
          </p>
          <p>Bel of mail ons dan gerust!</p>
        </div>
      </b-col>

      <b-col col md="3" class="calender" style="text-align:center">
        <h1>Kalender</h1>
        <br>
        <div>
          <br>
          <b-button variant="secondary" style="color:white !important">
            <a
              style="color:white !important; align-text:center"
              href="https://calendar.google.com/calendar/embed?src=kjkmb09q8qpbl0e9r1q9pdmtf4%40group.calendar.google.com&ctz=Europe%2FBrussels"
            >Leden kalender Odyssey</a>
          </b-button>
        </div>
        <div>
          <br>
          <b-button variant="secondary" style="color:white !important">
            <a
              style="color:white !important"
              href="https://calendar.google.com/calendar/embed?src=am7pifkoaeil9ricqo7ahbkfao%40group.calendar.google.com&ctz=Europe%2FBrussels"
            >Leden kalender Yessydo</a>
          </b-button>
        </div>
      </b-col>
    </b-row>

    <b-modal
      ref="myModalRef"
      id="modal-center"
      size="lg"
      hide-footer
      centered
      title="Ons volgende evenement!"
    >
      <!-- <div class="align-center">
        <i class="fas fa-download"></i>
        <div class="text-center">  
  <h3><b>Huiskamerconcert door sopraan Eva Vanduren en pianist Yuli Lavrenov </b></h3>
</div>
<div>
 <b-row>
   <b-col col md="6"> <p>Musicband Odyssey en B&B Auberginn uit Tessenderlo organiseren voor de derde keer een huiskamerconcert. Op zaterdag 21 maart 2020 om 20 uur geven coloratuursopraan Eva Vanduren en pianist Yuli Lavrenov een concert in B&B Auberginn in Tessenderlo. Na het concert trakteren we je op een drankje.</p>
  
  <p>Een historische vleugel uit 1850, in een prachtig gerestaureerd salon. Muziek uit die tijd, uitgevoerd in een kader waarvoor het werd geschreven. Het publiek zit vlakbij deze twee topmuzikanten. Dit is het recept van dit huiskamerconcert. Op het amusante programma staan operette en opera.</p>
   </b-col>
   <b-col col md="4">
     <img src="../../assets/images/Eva_Vanduren.png" class="img-news-2">
   </b-col>
 </b-row>
  <p>Eva begon haar muzikale studies op negenjarige leeftijd aan de Academie voor Muziek en Woord Tessenderlo. Als fluitiste en piccoloïst speelde ze heel haar jeugd in harmonieorkesten. Pas op latere leeftijd ontdekte ze haar passie voor zang. Ze combineerde dan ook zang, theater en dans in haar studie Klassiek Muziektheater aan de Fontys Hogeschool voor de Kunsten. 
<br/>Momenteel combineert Eva een breed scala aan opdrachten: ze zingt klassieke concerten en missen, solo en in koor, speelt rolletjes in tv-commercials en -series en leent haar stem uit als stemactrice.
</p>
<p>Ook heeft ze haar eerste rol te pakken bij het operettegezelschap Vlaams Muziek Theater. Daarnaast is ze bezig met het maken van nieuwe, eigen muziektheatervoorstellingen met de ambitie zich te tonen in het theater.</p>
<p>Eva Vanduren wordt begeleid op piano door Yuli Lavrenov. De internationaal gerenommeerde pianist van Bulgaarse afkomst geeft concerten en recitals in binnen- en buitenland. Sinds 1993 was Yuli Lavrenov de vaste huispianist van het programma <i>Funiculi Funicula</i> op radio 2.</p>

</div>
<div>
<p><b>Locatie</b>: B&B Auberginn, Diesterstraat 39, 3980 Tessenderlo</p>
<p><b>Toegang</b>: 12 euro (incl. drankje)</p>
<p><b>Reserveren</b>: verplicht (beperkt aantal plaatsen): odyssey-tessenderlo@hotmail.com of storten op rekeningnummer BE62 7350 3437 4461.</p>
</div>
      </div> -->
<div><img src="../../assets/images/uitnodiging_valentijnsontbijt_2020-1.png" width="100%"></div>
      <b-btn class="mt-3" variant="outline-info" block @click="hideModal">verder naar de website!</b-btn>
    </b-modal>
  </div>
</template>

<script>
import carousselMainPage from "../parts/carousselMainPage.vue";
import slickCaroussel from "../parts/slickCaroussel.vue";
import sponsorCarousselLeft from "../parts/sponsorCarousselLeft.vue";
import sponsorCarousselRight from "../parts/sponsorCarousselRight.vue";

export default {
  name: "mainPage",
  components: {
    carousselMainPage,
    slickCaroussel,
    sponsorCarousselLeft,
    sponsorCarousselRight
  },
  data() {
    return {};
  },
  methods: {
    showModal() {
      if (sessionStorage.getItem("popState") != "shown") {
        this.$refs.myModalRef.show();
        sessionStorage.setItem("popState", "shown");
      }
    },
    hideModal() {
      this.$refs.myModalRef.hide();
    }
  },
  mounted() {
    this.showModal();
  }
};
</script>
