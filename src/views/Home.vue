<template>
<div :class="{'landing-page':true, 'show-mobile-menu':isMobileMenuOpen}">
    <menu-single-page-mobile @close-mobile-menu="isMobileMenuOpen=false" :is-open="isMobileMenuOpen"/>
    <div class="main-container">
        <div class="landing-page-nav">
            <menu-single-page @toggle-mobile-menu="mobileMenuToggle"/>
        </div>
        <div class="content-container">
            <div class="section home">
                <piaf-hero-home :title="$t('lp.hero.title')" :detail="$t('lp.hero.detail')" :data="homeIcons" :button-text="$t('lp.hero.register')"
                :featuresTitle="$t('lp.featuressection.title')" :featuresDetail="$t('lp.featuressection.detail')" :featuresData="features"/>
            </div>

            <div class="section" id="reviews">
                <piaf-client-reviews :title="$t('lp.reviews.title')" :detail="$t('lp.reviews.detail')" :data="reviews"/>
            </div>

            <div class="section background" id="pricing">
                <piaf-pricing-table :title="$t('lp.pricetable.title')" :data="pricingOptions" :button-text="$t('lp.hero.register')"/>
            </div>

            <div class="section" id="faq">
                <piaf-collapse :title="$t('collapse.accordion')"/>
            </div>

            <div class="section footer mb-0">
                <piaf-footer />
            </div>
        </div>
    </div>
</div>
</template>
<script>
import MenuSinglePage from '@/containers/LandingPage/MenuSinglePage';
import MenuSinglePageMobile from '@/containers/LandingPage/MenuSinglePageMobile';

import PiafHeroHome from '@/components/LandingPage/HeroHome';
import PiafClientReviews from '@/components/LandingPage/ClientReviews';
import PiafPricingTable from '@/components/LandingPage/PricingTable';
import PiafCollapse from '@/components/LandingPage/Collapse';
import PiafFooter from '@/containers/LandingPage/Footer';

import homeIcons from '@/data/lp.homeIcons';
import features from '@/data/lp.features';
import reviews from '@/data/lp.reviews';
import pricingOptions from '@/data/lp.pricingOptions';

export default {
  components: {
    MenuSinglePage,
    MenuSinglePageMobile,
    PiafHeroHome,
    PiafClientReviews,
    PiafPricingTable,
    PiafCollapse,
    PiafFooter,
  },
  data() {
    return {
      isMobileMenuOpen: false,
      homeIcons,
      features,
      reviews,
      pricingOptions,
    };
  },
  methods: {
    mobileMenuToggle() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
    },
  },
};
</script>
