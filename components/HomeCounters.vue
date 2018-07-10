<template>
  <section class="parallax">
		<div class="parallax-content">
			<div class="container">
				<div class="columns">
					<div class="column is-3">
						<div class="count-item">
							<strong>5</strong>
							<span>Application Mobile<br>Complètes</span>
						</div>
					</div>
					<div class="column is-3">
						<div class="count-item">
							<strong>18</strong>
							<span>Client<br>Heureux</span>
						</div>
					</div>
					<div class="column is-3">
						<div class="count-item">
							<strong>20</strong>
							<span>Site Web<br>Déployés</span>
						</div>
					</div>
					<div class="column is-3">
						<div class="count-item">
							<strong>2</strong>
							<span>Prix<br>Remportés</span>
						</div>
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
  .parallax {
  min-height: 280px;
  position: relative;
}

.parallax:before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: .78;
  background-image: linear-gradient(127deg, #384DFF 0%, #24CDFF 91%);
  z-index: 2;
}

.parallax .parallax-content {
  position: relative;
  z-index: 3;
}

.parallax .parallax-content .count-item {
  height: 280px;
  position: relative;
  overflow: hidden;
}

.parallax .parallax-content .count-item:hover strong {
  margin-top: 60px;
}

.parallax .parallax-content .count-item:before {
  content: '';
  position: absolute;
  width: 1px;
  height: 40px;
  background: #fff;
  left: 0px;
  right: 0px;
  margin: auto;
  top: 0px;
}

.parallax .parallax-content .count-item:after {
  content: '';
  position: absolute;
  width: 1px;
  height: 40px;
  background: #fff;
  left: 0px;
  right: 0px;
  margin: auto;
  bottom: 0px;
}

.parallax .parallax-content .count-item strong {
  display: block;
  text-align: center;
  font-weight: 400;
  font-size: 40px;
  letter-spacing: 1.72px;
  margin-bottom: 10px;
  color: #fff;
  margin-top: 70px;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
}

.parallax .parallax-content .count-item span {
  display: block;
  text-align: center;
  color: #fff;
  font-weight: 400;
  font-size: 20px;
  letter-spacing: 0.86px;
}

.parallax .parallax-content .info {
  text-align: center;
  font-weight: 400;
  font-size: 22px;
  color: #fff;
}

.parallax .parallax-content .info p {
  letter-spacing: 1px;
  margin-top: 80px;
  margin-bottom: 60px;
}

.parallax .parallax-content .info p span {
  text-decoration: underline;
}

.parallax .parallax-content .info .btn-white-line {
  margin: auto;
}
@media (max-width: 991px) {
  .home-services-item.mtop-70 {
    margin-top: 30px !important;
  }
  .services-section {
    margin-top: 0px !important;
  }
  .team-item {
    cursor: pointer;
  }
  .parallax .parallax-content .count-item {
    height: auto;
    padding-top: 20px;
    padding-bottom: 20px;
  }
  .parallax .parallax-content .count-item:hover strong {
    margin-top: 0px;
  }
  .parallax .parallax-content .count-item:before {
    display: none;
  }
  .parallax .parallax-content .count-item:after {
    width: 40px;
    height: 1px;
  }
  .parallax .parallax-content .count-item strong {
    margin-top: 0px;
  }
  .parallax .parallax-content .info .btn-white-line {
    margin-bottom: 80px;
  }
}
.columns {
  width: 100%;
}
</style>
