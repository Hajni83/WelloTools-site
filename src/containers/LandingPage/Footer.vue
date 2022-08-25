<template>
	<div>
		<b-container>
			<b-row class="footer-row">
				<b-colxx xxs="12" class="text-right">
					<a class="btn btn-circle btn-outline-semi-light footer-circle-button" href="#" v-scroll-to="scrollToTopOptions">
						<i class="simple-icon-arrow-up"></i>
					</a>
				</b-colxx>
				<b-colxx xxs="12" class="text-center footer-content">
					<router-link tag="a" to="/multipage-home">
						<img class="footer-logo" alt="footer logo" src="../../assets/img/landing-page/logo-footer.svg" />
					</router-link>
				</b-colxx>
			</b-row>

		</b-container>
		<div class="separator mt-5"></div>
		<b-container class="copyright pt-5 pb-5">
			<b-row>
				<b-colxx xxs="6">
					<p class="mb-0">{{$t('lp.footer.copyright')}}</p>
				</b-colxx>
				<b-colxx xxs="6" class="text-right social-icons">
					<ul class="list-unstyled list-inline">
						<li class="list-inline-item">
							<a href="https://www.facebook.com/wellochat"><i class="simple-icon-social-facebook"></i></a>
						</li>
						<li class="list-inline-item">
							<a href="https://twitter.com/wellochat"><i class="simple-icon-social-twitter"></i></a>
						</li>
						<li class="list-inline-item">
							<a href="https://www.instagram.com/wellochat/"><i class="simple-icon-social-instagram"></i></a>
						</li>
					</ul>
				</b-colxx>
			</b-row>
		</b-container>
	</div>

</template>
<script>
export default {
  data() {
    return {
      scrollToTopOptions: {
        el: 'body',
        container: 'body',
        duration: 500,
        easing: 'ease-in',
        offset: 0,
        force: true,
        cancelable: true,
        onStart: false,
        onDone: false,
        onCancel: false,
        x: false,
        y: true,
      },
    };
  },
  methods: {
    onResizeLandingPage() {
      const rowOffestFooter = document.querySelector('.footer-row').offsetLeft;
      document.querySelector(
        '.landing-page .section.footer',
      ).style.backgroundPositionX = `${window.outerWidth
        - rowOffestFooter
        - 2004}px`;
    },
  },
  mounted() {
    this.onResizeLandingPage();
    window.addEventListener('resize', this.onResizeLandingPage);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResizeLandingPage);
  },
};
</script>
