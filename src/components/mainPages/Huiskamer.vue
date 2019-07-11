<template>
  <div class="padding-small">
    <h1 class="text-center">Huiskamerconcert door Kurt Bertels en Bert Koch - Sax à l'ancienne</h1>

    <b-row class="main-activity">
      <b-col col md="3">
        <img
          src="../../assets/images/flyers/huiskamer.jpg"
          style="padding-right:10px; max-width: 300px;"
        >
      </b-col>

      <b-col>
        <p>Musicband Odyssey en B&B Auberginn uit Tessenderlo organiseren voor de derde keer een huiskamerconcert. Op zondag 26 mei 2019 om 14 uur geven saxofonist Kurt Bertels en pianist Bert Koch een concert in B&B Auberginn in Tessenderlo. Na het concert trakteren we je op een drankje.</p>
        <p>
          Een
          <b>historische vleugel uit 1850</b>, in een prachtig gerestaureerd salon. Muziek uit die tijd, uitgevoerd in een kader waarvoor het werd geschreven. Het publiek zit vlakbij deze 2 topmuzikanten. Dit is het recept van dit huiskamerconcert.
        </p>
        <p>
          Een
          <b>negentiende-eeuwse saxofoon en piano</b> klinken maken samen een vergeten geluid bekend bij het grote publiek. Met Sax à l'ancienne brengen saxofonist Kurt Bertels en pianist Bert Koch de negentiende-eeuwse saxofoon weer tot leven. Zij brengen een ode aan componisten die zich lieten inspireren door de Belgische uitvinding.
        </p>
      </b-col>
    </b-row>
    <b-row class="main-activity">
      <b-col>
        <p>
          De
          <b>Genkse saxofonist Kurt Bertels</b> en pianist Bert Koch uit Neeroeteren ontmoetten elkaar tijdens hun studie aan het Brusselse conservatorium. Meteen de start voor een mooie samenwerking. Hun repertoire bestaat uit zowel klassiekers als een avontuurlijke collectie van Belgische componisten.
        </p>
        <p>
          Als kamermusicus maakt
          <b>Kurt Bertels</b> deel uit van het Kugoni Trio en het Anemos Saxofoonkwartet. Daarnaast is hij veelvuldig te horen met pianist Bert Koch, die ook lid is van Kugoni Trio. Het trio werd verkozen tot de eerste prijswinnaar van Supernova (voormalig Gouden Vleugels) en Forte Limburg. Als solist werd Kurt Bertels prijswinnaar van Dexia Classics (2007), Internationale Wereld Muziek Concours (2008), Prinses Christina Concours (2009), Forte (2011) en New Tenuto (2012).
        </p>
        <p>
          <b>Bert Koch</b> werkte mee aan talloze creaties van werken van vooraanstaande componisten als Jan-Hendrik Van Damme, Jeroen d'Hoe, Wilfried Westerlinck, Jan Van Landeghem, ... Hij componeerde werken waarin hij zijn voorkeur voor de variatieserie liet zien. Zijn werk Thema met variaties in fis voor piano werd in 2002 uitgereikt voor de wedstrijd Aquarius-componisten.
        </p>
      </b-col>
    </b-row>
    <p>
      <b>Datum:</b>
 zondag 26 mei 2019 om 14 uur
    </p>

    <p>
      <b>Locatie:</b> B&B Auberginn, Diesterstraat 39, 3980 Tessenderlo
    </p>

    <p>
      <b>Toegang:</b> 12 euro (incl. drankje)
    </p>

    <p>
      <b>Reserveren:</b> verplicht (beperkt aantal plaatsen):
      <a
        href="mailto:odyssey-tessenderlo@hotmail.com"
        style="all: revert;"
      >odyssey-tessenderlo@hotmail.com</a>of storten op rekeningnummer BE62 7350 3437 4461.
    </p>

    <p>
      <router-link
        :to="'/activiteiten'"
        style="  color: inherit;
    
        
    
          text-decoration: inherit;"
      >
        <b-button
          variant="outline-info"
          size="sm"
          style="margin-bottom:4px; margin-left: 5px;"
        >Terug naar overzicht</b-button>
      </router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: "huiskamer",
  data() {
    return {};
  }
};
</script>