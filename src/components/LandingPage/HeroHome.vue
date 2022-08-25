<template>
	<b-container>
		<b-row class="home-row">
			<b-colxx xxs="12" xl="11" lg="12" md="12">
				<div class="home-text">
					<div class="display-1" v-html="title" />
					<p class="white mb-5" v-html="detail" />
					<a href="mailto:info@wellochat.com" class="btn btn-outline-semi-light btn-xl">{{buttonText}}</a>
				</div>
			</b-colxx>
		</b-row>

		<b-row>
			<a class="btn btn-circle btn-outline-semi-light hero-circle-button" href="#" v-scroll-to="scrollOptions">
				<i class="simple-icon-arrow-down"></i>
			</a>
		</b-row>

		<div class="marginTop250px" id="features">
			<div v-for="(item,index) in featuresData" :key="index">
				<b-row class="feature-row" v-if="index%2==0" :key="`left-${index}`">
					<b-colxx xxs="12" md="6" lg="5" class="d-flex align-items-center">
						<div class="d-flex">
							<div class="feature-text-container white-text">
								<h2>{{item.title}}</h2>
								<p v-html="item.detail"></p>
							</div>
						</div>
					</b-colxx>
					<b-colxx xxs="12" md="6" offset-md="0" lg="6" offset-lg="1" class="position-relative">
						<img :alt="item.title" class="shadow feature-image-right feature-image-charts position-relative p-3 bg-white" :src="getImgUrl(item.img)" />
					</b-colxx>
				</b-row>
				<b-row class="feature-row" v-else :key="`right-${index}`">
					<b-colxx xxs="12" order-xxs="2" md="6" lg="6" order-md="1">
						<img :alt="item.title" class="shadow feature-image-left feature-image-charts p-3 bg-white" :src="getImgUrl(item.img)" />
					</b-colxx>
					<b-colxx xxs="12" order-xxs="1" md="6" offset-md="0" order-md="2" lg="5" offset-lg="1" class="d-flex align-items-center">
						<div class="d-flex">
							<div class="feature-text-container">
								<h2>{{item.title}}</h2>
								<p v-html="item.detail"></p>
							</div>
						</div>
					</b-colxx>
				</b-row>
			</div>
		</div>
	</b-container>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';

export default {
  props: [
    'title',
    'detail',
    'buttonText',
    'data',
    'featuresTitle',
    'featuresDetail',
    'featuresData',
  ],
  components: {
    swiper,
    swiperSlide,
  },
  data() {
    return {
      swiperIconsOption: {
        slidesPerView: 4,
        breakpoints: {
          0: { slidesPerView: 1 },
          768: { slidesPerView: 1 },
          1200: { slidesPerView: 2 },
          1440: { slidesPerView: 3 },
        },
      },
      scrollOptions: {
        el: '#features',
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
      const rowOffsetHome = document.querySelector('.home-row').offsetLeft;
      document.querySelector(
        '.landing-page .section.home',
      ).style.backgroundPositionX = `${rowOffsetHome - 580}px`;
    },
    getImgUrl(pic) {
      return require(`../../assets/img/landing-page/${pic}`);
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
