<template>
  <div style="color: rgba(0, 0, 0, 0.5); margin-top: 70px !important;">
    <caroussel-main-page></caroussel-main-page>

    <b-row style=" padding-top:20px;">
      <b-col col md="3" class="sponsors-left">
        <sponsor-caroussel-left></sponsor-caroussel-left>
      </b-col>

      <b-col col md="6">
        <div class="text-center">
          <h3>Wij repeteren op zaterdagavond te campus Russelberg</h3>

          <h6>Pré-Yessydo's: 18u30 - 19u00</h6>

          <h6>Jeugdorkest Yessydo: 19u00 - 19u45</h6>

          <h6>Musicband Odyssey: 20u00 - 21u00</h6>
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

          <ul>
            <li>Ben je geïnteresseerd om een repetitie bij te wonen?</li>
            <li>Wil jij samen met ons op het podium zitten tijdens 1 van deze concerten?</li>
            <li>Ben je op zoek naar een enthousiaste vriendengroep?</li>
          </ul>
          <p>Bel of mail ons dan gerust!</p>
        </div>
      </b-col>

      <b-col col md="3" class="calender" style="text-align:center">
        <h1>Kalender</h1>
        <br />
        <div>
          <br />
          <b-button variant="secondary" style="color:white !important">
            <a
              style="color:white !important; align-text:center"
              href="https://calendar.google.com/calendar/embed?src=kjkmb09q8qpbl0e9r1q9pdmtf4%40group.calendar.google.com&ctz=Europe%2FBrussels"
            >Leden kalender Odyssey</a>
          </b-button>
        </div>
        <div>
          <br />
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
      title="Muziek uit mijnen tijd III!"
    >
      <div class="align-center">
        <i class="fas fa-download"></i>
          <div class="row">
            <img src="../../assets/images/flyers/MUMT3_affiche-1.png" style='width: 100%' alt="dubbel">
        </div>
        <!-- <div class="text-left">
          Hallo,
          <br> 
          <br>
Het zal voor iedereen intussen wel al duidelijk zijn dat de Covid19-situatie in de Belgische ziekenhuizen ongelooflijk ernstig is.
<br> 
<br>
Uit zorg voor de zorg en voor elkaar en in navolging van de oproep van de Vlaamse overheid, kunnen we de repetities niet langer laten door gaan.
Even terug pauze om in de nabije toekomst de draad terug op te pakken.
<br>
<br>
We weten niet hoe lang we de pauzeknop ingedrukt zullen moeten houden. Hou er alvast rekening mee dat het probleem in onze ziekenhuizen niet in één, twee, drie opgelost zal zijn en dat we voor een aantal weken niet samen zullen kunnen musiceren. Van zodra de Corona-situatie voldoende gestabiliseerd is en het terug is toegelaten, zullen we zo snel mogelijk de repetities hervatten in de meest veilige omstandigheden.
<br>
<br>
Ondertussen houd het veilig en zorg voor elkaar waar nodig.
<br><br>
Hopelijk tot gauw!!

        </div> -->
      </div>
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
