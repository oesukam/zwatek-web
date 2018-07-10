<template>
  <header class="top-nav">
    <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item" href="../">
            <img src="~/assets/images/logo-white.png" alt="Logo">
          </a>
          <span class="navbar-burger burger" data-target="navbarMenu">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenu" class="navbar-menu">
          <div class="navbar-end">
            <div class="tabs is-right">
              <ul>
                <li><router-link to="/">Accueil</router-link></li>
                <li><router-link to="/nos_produits">Projets</router-link></li>
                <li><router-link to="/a_propos">A Propos</router-link></li>
                <li><router-link to="/services">Services</router-link></li>
                <li><router-link to="/contact" class="contact">Contact</router-link></li>
              </ul>
            </div>
          </div>
        </div>
    </div>
  </header>
</template>

<script>
  export default {

  }
</script>

<style scoped>
  .top-nav {
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    height: 80px;
    z-index: 9999;
    background-color: rgba(0,0,0,0.3);
    display: flex;
    align-items: center;
  }
  .nuxt-link-exact-active {
    color: #4886FF
  }
  .tabs ul {
    border-bottom: none;
  }
  a {
    color: #3B566E;
    text-decoration: none !important;
    border-bottom: none;
    display: block;
    font-weight: 700;
    color: #FFFFFF;
    -webkit-transition: all 0.3s ease 0s;
    -moz-transition: all 0.3s ease 0s;
    -o-transition: all 0.3s ease 0s;
    transition: all 0.3s ease 0s;
    line-height: 36px;
    border: transparent;
    text-transform: uppercase;
  }
  a:hover {
    color: #4886FF
  }
  .contact {
    border: 1px solid #4886FF;
    color: #4886FF;
    border-radius: 30px;
    padding: 0 25px;
  }
  .contact:hover {
    border: 1px solid #4886FF;
    background-color: #fff;
  }
</style>
