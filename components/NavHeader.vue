<template>
  <header :class="['top-nav is-fixed-top', {'bg-white': isWhite }]">
    <div class="container mx-auto navbar">
        <div class="navbar-brand">
          <a class="navbar-item" href="../">
            <img v-if="isWhite" class="top-logo" src="~/assets/images/logo-dark.png" alt="Logo">
            <img v-else class="top-logo" src="~/assets/images/logo-white.png" alt="Logo">
          </a>
          <span @click.prevent="menu = !menu" class="navbar-burger burger" data-target="navbarMenu">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenu" :class="['navbar-menu', {'is-active': menu }]">
          <div class="navbar-end">
            <router-link class="navbar-item" to="/">Accueil</router-link>
            <router-link class="navbar-item" to="/produits">Produits</router-link>
            <router-link class="navbar-item" to="/a_propos">A Propos</router-link>
            <router-link  class="navbar-item" to="/services">Services</router-link>
            <router-link to="/contact" class="navbar-item contact">Contact</router-link>
          </div>
        </div>
    </div>
  </header>
</template>

<script>
  export default {
    data() {
      return {
        isWhite: false,
        menu: false
      }
    },
    methods: {
      handleScroll (event) {
        var scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        this.isWhite = scroll > 100
      },
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll);
    },
  }
</script>

<style scoped>
  .top-nav {
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    z-index: 9999;
    background-color: rgba(0,0,0,0.3);
    padding: 10px 15px;
    -webkit-box-shadow: 1px 1px 2px 1px #ccc;
    -moz-box-shadow:   1px 1px 2px 1px #ccc;
    box-shadow:        1px 1px 2px 1px #ccc;
     -webkit-transition: all 0.3s ease 0s;
    -moz-transition: all 0.3s ease 0s;
    -o-transition: all 0.3s ease 0s;
    transition: all 0.3s ease 0s;
  }
  .navbar {
    background-color: transparent;
  }
  .nuxt-link-exact-active {
    color: #4886FF !important;
  }

  .bg-white .navbar-item {
    color: #5d5c5c;
  }
  .navbar-item {
    display: flex;
    align-items: center;
  }
  .navbar-item:hover {
    background-color: transparent;
    color: #4886FF !important;
  }
  .tabs ul {
    border-bottom: none;
  }
  .is-active .navbar-end .navbar-item{
    color: #000;
  }
  a {
    color: #3B566E;
    text-decoration: none !important;
    border-bottom: none;
    display: block;
    font-weight: 600;
    color: #FFFFFF;
    -webkit-transition: all 0.3s ease 0s;
    -moz-transition: all 0.3s ease 0s;
    -o-transition: all 0.3s ease 0s;
    transition: all 0.3s ease 0s;
    border: transparent;
    text-transform: uppercase;
  }
  a:hover {
    color: #4886FF
  }
  .contact {
    border: 1px solid #4886FF;
    color: #4886FF !important;
    border-radius: 30px;
    padding: 0 25px;
    margin: 5px;
    display: flex;
    align-items: center;
  }
  .contact:hover {
    border: 1px solid #4886FF !important;
    background-color: #fff !important;
  }
  .bg-white .contact:hover {
    border: 1px solid #fff !important;
    background-color: #4886FF !important;
    color: #fff !important;
  }
</style>
