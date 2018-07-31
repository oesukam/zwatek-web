<template>
  <section class="container pbottom-70">
		<div class="section">
			<div class="columns">
				<div class="column">
					<div class="center-heading">
						<h2 class="section-title">Notre Equipe</h2>
					</div>
				</div>
			</div>
			<div class="columns">
				<div class="column is-4">
					<div class="team-item">
						<div class="header">
							<div class="img">
								<img class="team-imoji" src="~/assets/images/teams/olivier.png" alt="">
							</div>
							<div class="info">
								<strong>Olivier ESUKA</strong>
								<strong>Fondateur et CEO</strong>
								<span>Développeur Fullstack et Mobile</span>
							</div>
						</div>
						<!-- <ul class="social">
							<li><a href="#"><i class="fa fa-facebook"></i></a></li>
							<li><a href="#"><i class="fa fa-twitter"></i></a></li>
							<li><a href="#"><i class="fa fa-linkedin"></i></a></li>
							<li><a href="#"><i class="fa fa-github"></i></a></li>
						</ul> -->
					</div>
				</div>
				<div class="column is-4">
					<div class="team-item">
						<div class="header">
							<div class="img">
								<img class="team-imoji" src="~/assets/images/teams/poly.png" alt="">
							</div>
							<div class="info">
								<strong>Polycarpe MAKOMBO</strong>
								<strong>Fondateur</strong>
								<span>Développeur Backend</span>
							</div>
						</div>
						<!-- <ul class="social">
							<li><a href="#"><i class="fa fa-facebook"></i></a></li>
							<li><a href="#"><i class="fa fa-twitter"></i></a></li>
							<li><a href="#"><i class="fa fa-linkedin"></i></a></li>
							<li><a href="#"><i class="fa fa-github"></i></a></li>
						</ul> -->
					</div>
				</div>
				<div class="column is-4">
					<div class="team-item">
						<div class="header">
							<div class="img">
								<img class="team-imoji" src="~/assets/images/teams/kers.png" alt="">
							</div>
							<div class="info">
								<strong>Blaise</strong>
								<strong>Fondateur</strong>
								<span>Designer</span>
							</div>
						</div>
						<!-- <ul class="social">
							<li><a href="#"><i class="fa fa-facebook"></i></a></li>
							<li><a href="#"><i class="fa fa-twitter"></i></a></li>
							<li><a href="#"><i class="fa fa-linkedin"></i></a></li>
							<li><a href="#"><i class="fa fa-github"></i></a></li>
						</ul> -->
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
  export default {

  }
</script>

<style scoped>
  .section-title {
    font-weight: 400;
    font-size: 30px;
    color: #3B566E;
    letter-spacing: 1.30px;
    line-height: 40px;
    margin-bottom: 20px !important;
  }
  .team-imoji {
    background-color: #24CDFF;
    height: 5rem;
    width: 5rem;
    object-fit: cover;
  }
  .team-item {
  background-image: linear-gradient(127deg, #fff 0%, #fff 91%);
  box-shadow: 0 2px 48px 0 rgba(0, 0, 0, 0.06);
  padding: 20px;
  border-radius: 40px;
  border-bottom-right-radius: 4px;
  position: relative;
  overflow: hidden;
  margin-bottom: 30px;
}

.team-item:before {
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

.team-item:hover:before {
  opacity: 1;
}

.team-item:hover .header .info strong {
  color: #fff;
}

.team-item:hover .header .info span {
  color: #F7F8FF;
}

.team-item:hover .body {
  color: #F7F8FF;
}

.team-item:hover .social {
  right: 0px;
}

.team-item .header {
  overflow: hidden;
  margin-bottom: 20px;
  position: relative;
  z-index: 2;
}

.team-item .header .img {
  float: left;
  width: 76px;
  margin-right: 10px;
  overflow: hidden;
  border-radius: 2px;
  border-top-left-radius: 40px;
}

.team-item .header .info strong {
  display: block;
  font-weight: 400;
  font-size: 14px;
  color: #3B566E;
  letter-spacing: 0.6px;
  margin-top: 3px;
  margin-bottom: 3px;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
}

.team-item .header .info span {
  display: block;
  font-weight: 400;
  font-size: 12px;
  color: #6F8BA4;
  letter-spacing: 0.52px;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
}

.team-item .body {
  font-weight: 400;
  font-size: 14px;
  line-height: 26px;
  color: #6F8BA4;
  letter-spacing: 0.6px;
  position: relative;
  z-index: 2;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
}

.team-item .social {
  position: absolute;
  right: -150px;
  top: 77px;
  overflow: hidden;
  width: 150px;
  height: 28px;
  background: #fff;
  text-align: center;
  border-radius: 3px 0px 0px 3px;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
  z-index: 2;
}

.team-item .social li {
  display: inline-block;
  height: 28px;
  line-height: 28px;
  margin-left: 5px;
  margin-right: 5px;
}
@media (max-width: 991px) {
  .team-item {
    cursor: pointer;
  }
}
</style>
