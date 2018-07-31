<template>
  <section class="welcome-area">
    <!-- ***** Wellcome Area Content Start ***** -->
		<div class="welcome-area">
      <!-- ***** Wellcome Area Background Start ***** -->
		<div class="welcome-bg" data-bg="~/assets/images/welcome.jpg">
			<img src="~/assets/images/bg-bottom.svg" alt="">
		</div>
		<div class="welcome-content">
			<div class="container">
				<div class="columns sm:mx-0 sm:p-8">
					<div class="column align-self-center">
						<h1>Découvrez nos applications mobiles sur lesquelles nous travaillons.</h1>
						<p>Nous concevons et développons des applications mobiles qui ravissent
              vos utilisateurs et développent votre activité.
              Développement de qualité professionnelle combiné à un design exceptionnel.</p>
						<router-link to="/produits" class="btn-white-line" href="#">PRODUITS</router-link>
					</div>
					<div class="column">
						<div class="apps">
							<div class="container-fluid">
								<div class="columns is-multiline">
									<div class="column is-3">
										<a href="https://wikilangue.org" target="_blank" class="app-item">
											<div class="welcome-icon">
												<img src="~/assets/images/apps-logo/wikilangue.png" class="img-fluid" alt="">
											</div>
										</a>
									</div>
									<div class="column is-3">
										<a href="https://play.google.com/store/apps/details?id=com.oesukam.preexetat&hl=en" target="_blank" class="app-item">
											<div class="welcome-icon">
												<img src="~/assets/images/apps-logo/pre-exetat.png" class="img-fluid" alt="">
											</div>
										</a>
									</div>
									<div class="column is-3">
										<a href="https://play.google.com/store/apps/details?id=com.infodteam.lingalaphrasebook" target="_blank" class="app-item">
											<div class="welcome-icon">
												<img src="~/assets/images/apps-logo/learn-lingala.png" class="img-fluid" alt="">
											</div>
										</a>
									</div>
                  <div class="column is-3">
										<a href="https://rfmtv.net" target="_blank" class="app-item">
											<div class="welcome-icon">
												<img src="~/assets/images/apps-logo/rfmtv.png" class="img-fluid" alt="">
											</div>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		</div>
    <div class="section services-section">
    <div class="container">
			<div class="columns">
				<!-- ***** Home About Start ***** -->
				<div class="column is-5 align-self-bottom">
					<div class="left-heading">
						<h2 class="section-title">Agence de développement d'applications de la conception au déploiement</h2>
					</div>
					<div class="left-text">
						<p class="dark">Pellentesque posuere vestibulum lorem, ut efficitur erat tristique sed. Ut vitae tincidunt ante. </p>
						<p>Donec vulputate urna sed rutrum venenatis. Cras consequat magna quis arcu elementum, quis congue risus volutpat. Praesent tortor nulla, ullamcorper.</p>
					</div>
					<router-link to="/services" class="btn-primary-line">SERVICES</router-link>
				</div>
				<!-- ***** Home About End ***** -->

				<!-- ***** Home Services Start ***** -->
				<div class="column is-5 is-offset-1 align-self-bottom">
					<div class="columns">
						<div class="column is-6">
							<a href="services-single.html" class="home-services-item mtop-70" data-scroll-reveal="enter bottom move 30px over 0.6s after 0.2s" data-scroll-reveal-id="1" data-scroll-reveal-initialized="true" data-scroll-reveal-complete="true">
								<i class="fa fa-browser"></i>
								<h5 class="services-title">Développement des Sites Web</h5>
							</a>
							<a href="services-single.html" class="home-services-item" data-scroll-reveal="enter bottom move 30px over 0.6s after 0.2s" data-scroll-reveal-id="2" data-scroll-reveal-initialized="true" data-scroll-reveal-complete="true">
								<i class="fa fa-connectdevelop"></i>
								<h5 class="services-title">Développement d'applications Mobile: Android et IOs</h5>
							</a>
						</div>
						<div class="column is-6">
							<a href="services-single.html" class="home-services-item active" data-scroll-reveal="enter bottom move 30px over 0.6s after 0.3s" data-scroll-reveal-id="3" data-scroll-reveal-initialized="true" data-scroll-reveal-complete="true">
								<i class="fa fa-object-ungroup"></i>
								<h5 class="services-title">Design &amp; Expérience utilisateur</h5>
							</a>
							<a href="services-single.html" class="home-services-item" data-scroll-reveal="enter bottom move 30px over 0.6s after 0.3s" data-scroll-reveal-id="4" data-scroll-reveal-initialized="true" data-scroll-reveal-complete="true">
								<i class="fa fa-line-chart"></i>
								<h5 class="services-title">Maintenance &amp; Monitoring</h5>
								<p>Facilisis arcu ligula, malesuada id tincidunt laoreet, facilisis at justo.</p>
							</a>
						</div>
					</div>
				</div>
				<!-- ***** Home Services End ***** -->
			</div>
		</div>
		</div>
    <Workflow />
    <Teams />
    <HomeCounters />
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'
import Workflow from '~/components/Workflow.vue'
import Teams from '~/components/Teams.vue'
import HomeCounters from '~/components/HomeCounters.vue'

export default {
  components: {
    Logo,
    Workflow,
    Teams,
    HomeCounters
  }
}
</script>

<style>
.title
{
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
.subtitle
{
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
.links
{
  padding-top: 15px;
}

.welcome-area {
  min-height: 637px;
  height: auto;
  position: relative;
}

.welcome-bg {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url('~/assets/images/welcome.jpg');
}

.welcome-bg:before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.85;
  background-image: linear-gradient(127deg, #384DFF 0%, #24CDFF 91%);
  z-index: 3;
}

.welcome-bg:after {
  content: '';
  position: absolute;
  width: 100%;
  height: 50%;
  bottom: 0px;
  left: 0px;
  right: 0px;
  background: none;
  z-index: 6;
}

.welcome-bg img {
  position: absolute;
  width: 100%;
  height: auto;
  bottom: -1px;
  left: 0px;
  right: 0px;
  z-index: 5;
}

.welcome-content {
  position: absolute;
  width: 100%;
  top: 50%;
  left: 0;
  z-index: 11;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
}

.welcome-content {
  position: absolute;
  width: 100%;
  top: 50%;
  left: 0;
  z-index: 11;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
}



.welcome-content h1 {
  font-weight: 400;
  font-size: 36px;
  line-height: 46px;
  letter-spacing: 1.4px;
  color: #fff;
  margin-bottom: 30px !important;
}

.welcome-content p {
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  left: 0.53px;
  color: #fff;
  margin-bottom: 30px;
}
.app-item {
  display: block;
  float: right;
  margin-bottom: 30px;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
}

.app-item:hover {
  margin-top: -10px;
  padding-bottom: 10px;
}

.app-item .icon {
  box-shadow: 0 2px 48px 0 rgba(0, 0, 0, 0.06);
}
.section.services-section {
  margin-top: -200px;
  position: relative;
  z-index: 10;
}
.align-self-bottom {
  ms-flex-item-align: flex-end !important;
  align-self: flex-end !important;
}
/*
---------------------------------------------
home
---------------------------------------------
*/
.home-services-item {
  display: block;
  background-image: linear-gradient(127deg, #fff 0%, #fff 91%);
  box-shadow: 0 2px 48px 0 rgba(0, 0, 0, 0.06);
  font-weight: 400;
  font-size: 14px;
  color: #6F8BA4;
  line-height: 26px;
  letter-spacing: 0.88px;
  padding: 30px;
  border-radius: 40px;
  border-bottom-right-radius: 4px;
  margin-top: 30px;
  position: relative;
}

.home-services-item.box {
  border-radius: 4px !important;
}

.home-services-item.box:before {
  border-radius: 4px !important;
}

.home-services-item:before {
  content: '';
  border-radius: 40px;
  border-bottom-right-radius: 4px;
  position: absolute;
  width: 100%;
  height: 100%;
  background: red;
  top: 0px;
  left: 0px;
  z-index: 1;
  background-image: linear-gradient(127deg, #384DFF 0%, #24CDFF 91%);
  opacity: 0;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
}

.home-services-item:hover, .home-services-item.active {
  color: #F7F8FF;
}

.home-services-item:hover:before, .home-services-item.active:before {
  opacity: 1;
}

.home-services-item:hover .services-title, .home-services-item.active .services-title {
  color: #fff;
}

.home-services-item:hover i, .home-services-item.active i {
  background-image: linear-gradient(127deg, #fff 0%, #fff 91%);
}

.home-services-item .services-title {
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  color: #3B566E;
  margin-bottom: 23px !important;
  letter-spacing: 0.7px;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
  position: relative;
  z-index: 2;
}

.home-services-item i {
  font-size: 26px;
  margin-bottom: 23px;
  background-image: linear-gradient(127deg, #384DFF 0%, #24CDFF 91%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
  position: relative;
  z-index: 2;
}

.home-services-item p {
  position: relative;
  z-index: 2;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
  margin-bottom: 0px !important;
}

.home-services-item .btn-white-line {
  position: relative;
  z-index: 2;
  width: 100%;
}

.features {
  padding-top: 30px;
}

.features li {
  overflow: hidden;
  margin-bottom: 30px;
}

.features li:hover .count span {
  background: #4886FF;
  color: #fff;
}

.features li .count {
  float: left;
  width: 68px;
  min-height: 150px;
  background: url('~/assets/images/features-bg.svg') center bottom no-repeat;
}

.features li .count span {
  display: block;
  width: 37px;
  height: 37px;
  line-height: 37px;
  text-align: center;
  -webkit-border-radius: 100px;
  -moz-border-radius: 100px;
  border-radius: 100px;
  margin: auto;
  border: 1px solid #4886FF;
  font-weight: 600;
  font-size: 16px;
  color: #4886FF;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
}

.features li .text {
  float: left;
  width: calc(100% - 68px);
  width: -webkit-calc(100% - 68px);
  padding-left: 20px;
}

.features li .text .title {
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  letter-spacing: 1px;
  color: #3B566E;
  margin-top: 5px;
  margin-bottom: 24px !important;
}

.features li .text p {
  font-weight: 400;
  font-size: 16px;
  color: #6F8BA4;
  letter-spacing: 1px;
  line-height: 28px;
}




@media (max-width: 991px) {
  .home-services-item.mtop-70 {
    margin-top: 30px !important;
  }
  .services-section {
    margin-top: 0px !important;
  }
}
.left-heading .section-title {
  font-weight: 400;
  font-size: 28px;
  color: #3B566E;
  letter-spacing: 1.75px;
  line-height: 42px;
  margin-bottom: 20px !important;
}
.left-text {
  font-weight: 400;
  font-size: 16px;
  color: #6F8BA4;
  line-height: 28px;
  letter-spacing: 1px;
  margin-bottom: 50px;
}

.btn-primary-line {
    display: block;
    width: 225px;
    height: 45px;
    line-height: 45px;
    color: #4886FF;
    font-weight: 700;
    font-size: 13px;
    letter-spacing: 0.81px;
    border: 1px solid #4886FF;
    -webkit-border-radius: 100px;
    -moz-border-radius: 100px;
    border-radius: 100px;
    background: none;
    -webkit-transition: all 0.3s ease 0s;
    -moz-transition: all 0.3s ease 0s;
    -o-transition: all 0.3s ease 0s;
    transition: all 0.3s ease 0s;
    text-align: center;
    cursor: pointer;
}
.btn-white-line {
  display: block;
  width: 225px;
  height: 45px;
  line-height: 45px;
  color: #fff;
  font-weight: 700;
  font-size: 13px;
  letter-spacing: 0.81px;
  border: 1px solid #fff;
  -webkit-border-radius: 100px;
  -moz-border-radius: 100px;
  border-radius: 100px;
  background: none;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
  text-align: center;
  cursor: pointer;
}
.btn-white-line:hover {
  background: #fff;
  color: #4886FF;
}

.btn-primary-line {
  display: block;
  width: 225px;
  height: 45px;
  line-height: 45px;
  color: #4886FF;
  font-weight: 700;
  font-size: 13px;
  letter-spacing: 0.81px;
  border: 1px solid #4886FF;
  -webkit-border-radius: 100px;
  -moz-border-radius: 100px;
  border-radius: 100px;
  background: none;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
  text-align: center;
  cursor: pointer;
}

.btn-primary-line:hover {
  background: #4886FF;
  color: #fff;
}
.bg-white {
  background-color: #fff !important;
  color: rgba(0,0,0,0.5) !important;
}
</style>
