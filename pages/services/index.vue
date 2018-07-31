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
                <p>We design and develop <span>mobile apps</span> that delight your users and grow your business.</p>
                <a class="btn-white-line" href="#">Contact Us</a>
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
