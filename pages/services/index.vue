<template>
  <div>
    <Cover>
      <h1 slot="title" >Services</h1>
      <ul slot="breadcrumb">
        <li><router-link to="/">Accueil</router-link></li>
        <li class="is-active"><router-link to="/services" aria-current="page">Services</router-link></li>
      </ul>
    </Cover>
    <section class="parallax">
      <div class="parallax-content">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="info">
                <p>Nous concevons et développons des applications <span>Web</span>, <span>Mobile</span> et systemes de controle qui raviront vos utilisateurs et développeront votre activité.</p>
                <router-link  to="/contact" class="btn-white-line">Contactez Nous</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import Cover from '~/components/Cover'
  export default {
    components: {
      Cover
    }
  }
</script>

<style scoped>

</style>
