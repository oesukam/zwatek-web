<template>
  <footer class="footer">
    <div class="columns">
      <div class="column is-4">
        <h3>Liens utiles</h3>
        <ul class="footer-nav">
          <li><router-link to="/produits"><i class="fa fa-angle-right"></i><span>Produits</span></router-link></li>
          <li><router-link to="/a_propos"><i class="fa fa-angle-right"></i><span>A Propos</span></router-link></li>
          <li><router-link to="/services"><i class="fa fa-angle-right"></i><span>Services</span></router-link></li>
          <li><router-link to="/contact"><i class="fa fa-angle-right"></i><span>Contact</span></router-link></li>
        </ul>
      </div>
      <div class="column is-4">
        <h3>Nouveaux Produits</h3>
        <ul class="footer-nav">
          <li><a href="https://www.rfmtv.net" target="_blank"><i class="fa fa-angle-right"></i><span>RFM TV</span></a></li>
          <li><a href="https://www.wikilangue.org" target="_blank"><i class="fa fa-angle-right"></i><span>Wikilangue</span></a></li>
          <li><a href="#" target="_blank"><i class="fa fa-angle-right"></i><span>Pré-Exétat</span></a></li>
          <li><a href="#" target="_blank"><i class="fa fa-angle-right"></i><span>Apprendre | Learn Lingala</span></a></li>
        </ul>
      </div>
      <div class="column is-4">
        <h3>Contactez Nous</h3>
        <div class="address">
          <p>Tel: +(243) 82-201-2578</p>
          <p><span>E-Mail: </span><a href="#">support@zwatek.com</a></p>
          <ul class="social">
            <li><a href="#"><i class="fa fa-facebook-square"></i></a></li>
            <li><a href="#"><i class="fa fa-twitter-square"></i></a></li>
            <li><a href="#"><i class="fa fa-linkedin-square"></i></a></li>
            <li><a href="#"><i class="fa fa-github-square"></i></a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <p class="copyright">© 2018 ZwaTek. Tous les droits sont réservés.</p>
      </div>
    </div>
</footer>
</template>

<script>
  export default {

  }
</script>

<style scoped>
  .footer {
    padding: 3rem 3rem 0px 3rem !important;
    background: #F4F8FB;
  }
  .footer-logo {
    margin: 30px 0px 20px 0px;
    width: 100px;
    height: auto;
  }
  h3 {
    font-size: 1.3rem;
    font-weight: 400;
    color: #3B566E;
    letter-spacing: 0.69px;
    line-height: 30px;
    margin-bottom: 15px !important;
  }
  .copyright {
    text-align: center;
    border-top: 1px solid #DAE6FD;
    margin-top: 30px;
    padding-top: 30px;
    padding-bottom: 30px;
    font-weight: 400;
    font-size: 14px;
    color: #6F8BA4;
    letter-spacing: 0.88px;
  }

  li a {
    display: block;
    overflow: hidden;
  }

  a:hover span {
    padding-left: 5px;
  }

  a i {
    float: left;
    height: 32px;
    line-height: 32px;
    margin-right: 12px;
    font-size: 14px;
    color: #3B566E;
  }

  a span {
    float: left;
    height: 32px;
    line-height: 32px;
    font-weight: 400;
    font-size: 14px;
    color: #6F8BA4;
    -webkit-transition: all 0.3s ease 0s;
    -moz-transition: all 0.3s ease 0s;
    -o-transition: all 0.3s ease 0s;
    transition: all 0.3s ease 0s;
  }

  .social {

  }
  .social li {
    float: left;
    font-size: 16px;
    margin-right: 10px;
  }
</style>
