<template>
  <div >
    <Cover>
      <h1 slot="title" >A Propos</h1>
      <ul slot="breadcrumb">
        <li><router-link to="/">Accueil</router-link></li>
        <li class="is-active"><router-link to="/a_propos" aria-current="page">A Propos</router-link></li>
      </ul>
    </Cover>
    <div class="container">
      <div class="hero">
        <div class="hero-body">
          <p>
            ZwaTek est une Agence de développement des applications dans
            le domaine de la Nouvelle Technologie d’Informatique : Application Mobile,
            Site Web, Logiciel du système de gestion d’entreprise ou industriel et Design
            (logo, affiche, webdesign, …).
          </p>
        </div>
      </div>
    </div>
    <section class="parallax">
      <div class="parallax-content">
        <div class="container">
          <div class="hero">
              <div class="info">
                <p>
                  Nous concevons et développons des applications <span>Web</span> et <span>Mobile</span>
                  qui ravissent vos utilisateurs et apportent un plus a votre entreprise
                </p>
                <router-link class="btn-white-line" to="/contact">Contactez Nous</router-link>
              </div>
            </div>
        </div>
      </div>
    </section>
    <Teams />
  </div>
</template>

<script>
  import Cover from '~/components/Cover'
  import Teams from '~/components/Teams.vue'
  export default {
    components: {
      Cover,
      Teams
    }
  }
</script>

<style scoped>

</style>
