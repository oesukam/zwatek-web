<template>
  <section class="section background">
		<div class="container">
			<div class="columns">
				<div class="column is-5 align-self-center">
					<img src="~/assets/images/mockups/home-mockup.png" class="img-fluid d-block mx-auto" alt="">
				</div>
				<div class="column is-7 align-self-center">
					<ul class="features">
						<li data-scroll-reveal="enter bottom move 30px over 0.6s after 0.2s" data-scroll-reveal-id="5" data-scroll-reveal-initialized="true" data-scroll-reveal-complete="true">
							<div class="count">
								<span>1</span>
							</div>
							<div class="text">
								<h5 class="title">Design et UX qui assurent que votre application sera aimée et utilisée</h5>
								<p>Quisque nec consectetur arcu. Duis tellus ante, sodales sed molestie at, sagittis id neque. Quisque condimentum libero arcu. Mauris tellus sem, ultrices varius nisl at.</p>
							</div>
						</li>
						<li data-scroll-reveal="enter bottom move 30px over 0.6s after 0.3s" data-scroll-reveal-id="6" data-scroll-reveal-initialized="true" data-scroll-reveal-complete="true">
							<div class="count">
								<span>2</span>
							</div>
							<div class="text">
								<h5 class="title">Le développement d'entreprise garantit la fiabilité et la qualité</h5>
								<p>Praesent tortor nulla, ullamcorper vel ante at, varius tincidunt augue. Cras vitae consectetur arcu. Proin at velit vel risus elementum accumsan sed non neque. Aenean risus.</p>
							</div>
						</li>
						<li data-scroll-reveal="enter bottom move 30px over 0.6s after 0.4s" data-scroll-reveal-id="7" data-scroll-reveal-initialized="true" data-scroll-reveal-complete="true">
							<div class="count">
								<span>3</span>
							</div>
							<div class="text">
								<h5 class="title">Un processus éprouvé et testé garantit votre succès</h5>
								<p>Aliquam bibendum velit ut ante cursus, et efficitur lectus rutrum. Maecenas ac convallis lorem, non ultricies sem. Duis elit metus, ullamcorper sed ante sed, viverra bibendum neque.</p>
							</div>
						</li>
						<li data-scroll-reveal="enter bottom move 30px over 0.6s after 0.5s" data-scroll-reveal-id="8" data-scroll-reveal-initialized="true" data-scroll-reveal-complete="true">
							<div class="count">
								<span>4</span>
							</div>
							<div class="text">
								<h5 class="title">Agence de développement d'applications de la conception a la realisation</h5>
								<p>Cras imperdiet faucibus sem, a dignissim urna feugiat sed. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque posuere vestibulum lorem.</p>
							</div>
						</li>
					</ul>
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
  .section.services-section {
  margin-top: -200px;
  position: relative;
  z-index: 10;
}

.section.background {
  background: #F4F8FB url('~/assets/images/bg-top.svg') center top no-repeat;
  background-size: contain;
}
.align-self-center {
    -ms-flex-item-align: center !important;
    align-self: center !important;
}
</style>
