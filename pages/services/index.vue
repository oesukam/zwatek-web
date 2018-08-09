<template>
  <div>
    <Cover>
      <h1 slot="title" >Services</h1>
      <ul slot="breadcrumb">
        <li><nuxt-link to="/">Accueil</nuxt-link></li>
        <li class="is-active"><nuxt-link to="/services" aria-current="page">Services</nuxt-link></li>
      </ul>
    </Cover>
    <section class="parallax">
      <div class="parallax-content">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="info">
                <p>Nous concevons et développons des applications <span>Web</span>, <span>Mobile</span> et systemes de controle qui raviront vos utilisateurs et amelioront vos activités.</p>
                <nuxt-link  to="/contact" class="btn-white-line">Contactez Nous</nuxt-link>
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
