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

          <h6>Pré-Yessydo's: 18u00 - 19u00</h6>

          <h6>Jeugdorkest Yessydo: 18u3s0 - 19u30</h6>

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
          <p>Musicband Odyssey is een harmonie van een 50-tal muzikanten. Wekelijks repeteren wij in Sportagon in Tessenderlo. Wij spelen een drietal concerten per jaar.</p>

          <p>Odyssey bestaat ook uit het jeugdorkest Yessydo. Deze beginnende en vaak jonge muzikanten worden wekelijks begeleid door een professionele dirigent.</p>

          <p>Geïnteresseerd om een repetitie bij te wonen? Ben je op zoek naar een enthousiaste vriendengroep? Mail of bel ons gerust!</p>
        </div>
      </b-col>

      <b-col col md="3" class="calender" style="text-align:center">
        <h1>Kalender</h1>

        <a href="/dist/kalender2019.pdf" target="_blank">
          <img
            src="../../assets/images/foto/kalender2019.png"
            style="max-height:300px; max-width:250px"
          >
        </a>

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

        <img src="../../assets/images/flyers/muziekUitMijnenTijd.png" width="100%">
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
