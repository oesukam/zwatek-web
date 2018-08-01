<template>
  <div>
    <Cover>
      <h1 slot="title" >Contact</h1>
      <ul slot="breadcrumb">
        <li><router-link to="/">Accueil</router-link></li>
        <li class="is-active"><router-link to="/contact" aria-current="page">Contact</router-link></li>
      </ul>
    </Cover>
    <div class="map-wrapper">
				<!-- ***** Contact Informations Start ***** -->
				<div class="container">
					<div class="columns">
						<div class="column">
							<div class="contact-info">
								<div class="item">
									<i class="fa fa-location-arrow"></i>
									<div class="txt">
										<span>République Démocratique du Congo<br></span>
									</div>
								</div>
								<div class="item">
									<i class="fa fa-phone"></i>
									<div class="txt">
										<span>+(243) 82-201-2578<br> +(243) 97-273-4435</span>
									</div>
								</div>
								<div class="item">
									<i class="fa fa-envelope"></i>
									<div class="txt">
										<span><a href="mailto:support@zwatek.com">support@zwatek.com</a></span>
									</div>
								</div>
								<!-- <ul class="social">
									<li><a href="#"><i class="fa fa-facebook-square"></i></a></li>
									<li><a href="#"><i class="fa fa-twitter-square"></i></a></li>
									<li><a href="#"><i class="fa fa-linkedin-square"></i></a></li>
									<li><a href="#"><i class="fa fa-google-plus-square"></i></a></li>
									<li><a href="#"><i class="fa fa-github-square"></i></a></li>
								</ul> -->
							</div>
						</div>
					</div>
				</div>
				<!-- ***** Contact Informations End ***** -->
			</div>
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
  .main-content {
    padding-top: 200px;
  }
  .map-wrapper {
    position: relative;
    width: 100%;
    height: 365px;
    margin-bottom: 60px;
  }
  .map-wrapper .contact-info {
  height: 365px;
  background-image: linear-gradient(127deg, #384DFF 0%, #24CDFF 91%);
  padding: 40px;
  padding-top: 55px;
  color: #fff;
}

.map-wrapper .contact-info .item {
  overflow: hidden;
  margin-bottom: 30px;
}

.map-wrapper .contact-info .item i {
  float: left;
  font-size: 16px;
  width: 20px;
  margin-right: 10px;
  margin-top: 5px;
}

.map-wrapper .contact-info .item span {
  float: left;
  width: calc(100% - 30px);
  width: -webkit-calc(100% - 30px);
  font-size: 14px;
}

.map-wrapper .contact-info .item span a {
  color: #fff;
}

.map-wrapper .contact-info .social {
  overflow: hidden;
  margin-top: 5px;
  text-align: center;
}

.map-wrapper .contact-info .social li {
  display: inline;
  font-size: 22px;
  margin-right: 7px;
  margin-left: 7px;
}

.map-wrapper .contact-info .social li a {
  color: #fff;
}

.contact-text {
  font-weight: 400;
  font-size: 14px;
  color: #6F8BA4;
  letter-spacing: 0.6px;
  line-height: 26px;
}

.contact-text p {
  margin-bottom: 28px;
}

.contact-form input, .contact-form textarea {
  border: 1px solid #eee;
  width: 100%;
  height: 50px;
  outline: none;
  padding-left: 20px;
  padding-right: 20px;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  margin-bottom: 30px;
}

.contact-form input:focus, .contact-form textarea:focus {
  border: 1px solid #4886FF;
  padding-left: 30px;
}

.contact-form textarea {
  height: 150px;
  resize: none;
  padding: 20px;
}

@media (max-width: 991px) {
  .map-wrapper {
    height: auto;
  }
  .map-wrapper .map-canvas {
    position: relative;
    height: 365px;
    margin-bottom: 30px;
  }
}

</style>
