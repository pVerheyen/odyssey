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
      <div class="align-center">
        <i class="fas fa-download"></i>

        <img src="../../assets/images/flyers/sneeuwman.jpg" width="100%">
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
