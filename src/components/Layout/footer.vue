<template>
    <footer class="page-footer font-small unique-color-dark mt-4" style="min-height: 15vh;">
        <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style="width: 100%; border-width: 2px">
        <div class="text-center text-md-left" style="padding: 0">
            <div class="row">
                <div class="col-md-3">
                    <h6 class="text-uppercase font-weight-bold">Musicband Odyssey</h6>
                    <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style="width: 60px;">
                    <br>
                    <img src="../../assets/images/logo/logoOdeyssey.png" alt="musicband odeyssey" style="height: 50px">
                    <h6 class="text-uppercase font-weight-bold" style="padding-top:30px;">Jeugdorkest Yessydo</h6>
                    <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style="width: 60px;">
                    <br>
                    <img src="../../assets/images/logo/logoYessydo.png" alt="musicband odeyssey" style="height: 50px">
                </div>
                <div class="col-md-2 links">
                    <h6 class="text-uppercase font-weight-bold">Handige links</h6>
                    <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style="width: 60px;">
                    <p>
                        <router-link
                            :to="'/JeugdorkestYessydo'"
                        >Jeugdorkest Yessydo
                        </router-link>
                    </p>
                    <p>
                        <router-link
                            :to="'/overons'"
                        >Over ons
                        </router-link>
                    </p>
                    <p>
                        <router-link
                            :to="'/activiteiten'"
                        >Activiteiten
                        </router-link>
                    </p>
                    <p>
                        <router-link
                            :to="'/nieuws'"
                        >Nieuws
                        </router-link>
                    </p>
                </div>
                <div class="col-md-4 links">
                    <h6 class="text-uppercase font-weight-bold">Ligging</h6>
                    <iframe width="300" height="250" frameborder="0" style="border:0"
                            src="https://maps.google.com/maps?q=Russelenberg,%20gerhagenstraat%2058&t=&z=17&ie=UTF8&iwloc=&output=embed"
                            allowfullscreen></iframe>
                </div>
                <div class="col-md-3 links">
                    <h6 class="text-uppercase font-weight-bold">Contact</h6>
                    <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style="width: 60px;">
                    <p>
                        <b>Adres:</b> 58, 3980 Tessenderlo (Campus Russelberg)</p>
                                            <p><b>Mail:</b>
                        <a 
          href="mailto:odyssey-tessenderlo@hotmail.com">odyssey-tessenderlo@hotmail.com</a></p>
                        <p><b>Parkeren:</b> parking aan de achterliggende straat <i>(Russelenberg z/n (tegenover nr. 69))</i></p>

                        <p class="text-uppercase font-weight-bold">Corona-aanspreekpunt</p>
                        <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style="width: 60px;">
                        <p><b>Mail: </b><a href = "mailto: freddy.crets@crncr.be">Freddy.Crets@crncr.be</a></p>
                        <p>
                           <b>Tel: </b> <a style="color=blue" href="tel:+32474323010">+32 474 32 30 10</a>
                        </p>
                </div>
            </div>
        </div>
        <div class="footer-copyright text-center py-3" style="background-color: rgba(0,0,0,0.1); margin-top:10px;">© 2021 Copyright
        </div>
    </footer>
</template>

<script>
    export default {
        name: 'footerBar',
        data() {
            return {}
        }
    }
</script>
<style>

</style>
