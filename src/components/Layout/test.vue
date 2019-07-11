<b-navbar toggleable="md" type="light" variant="dark" style="justify-content: center; background-color: lightgrey !important; border-bottom: 2px solid darkgrey" fixed='top'> <b-navbar-toggle id="toggle" target="navcollapse" style="margin-right:15px;"></b-navbar-toggle> <b-navbar-brand style="margin-top:10px;"> <img src="../../assets/images/logo/logoOdeyssey.png" alt="musicband odeyssey" style="height: 50px; margin-top: -10px;"> </b-navbar-brand>
 
    <b-navbar-brand href="#">NavBar</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" style="flex-grow: 0" is-nav>
      <b-navbar-nav>
 <b-nav-item class="nav-item"> <router-link :to="'/home'">Home
 </router-link>
 </b-nav-item>
 <b-nav-item class="nav-item"> <router-link :to="'/Nieuws'">Nieuws
 </router-link>
 </b-nav-item>
 <b-nav-item class="nav-item"> <router-link :to="'/OverOns'">Over ons
 </router-link>
 </b-nav-item>
 <b-nav-item class="nav-item"> <router-link :to="'/activiteiten'">Activiteiten </router-link>
 </b-nav-item>
 <b-nav-item class="nav-item"> <router-link :to="'/JeugdorkestYessydo'">Jeugdorkest Yessydo </router-link>
 </b-nav-item>
 <b-nav-item class="nav-item"> <router-link :to="'/Contact'">Contact
 </router-link>
 </b-nav-item>
 <b-nav-item style="margin-left: 20px; text-align:center;"><img src="../../assets/images/logo/logoYessydo.png" alt="musicband odeyssey" style="height: 50px; margin-top: -10px;"> </b-nav-item>
 </b-navbar-nav>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
      </b-navbar-nav>

    </b-collapse>
  </b-navbar>