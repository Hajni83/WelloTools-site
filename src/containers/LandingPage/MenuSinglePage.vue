<template>
<headroom>
<b-container class="d-flex align-items-center justify-content-between">

        <a class="navbar-logo pull-left" href="/singlepage-home" @click.prevent="scrollToContent('body')">
            <span class="white" />
            <span class="dark" />
        </a>
        <b-nav class="navbar-nav d-none d-lg-flex flex-row">
            <b-nav-item @click.prevent="scrollToContent('#features')">{{ $t("lp.menu.features") }}</b-nav-item>
            <b-nav-item @click.prevent="scrollToContent('#reviews')">{{ $t("lp.menu.reviews") }}</b-nav-item>
            <b-nav-item @click.prevent="scrollToContent('#pricing')">{{ $t("lp.menu.pricing") }}</b-nav-item>
            <b-nav-item @click.prevent="scrollToContent('#faq')">{{ $t("lp.menu.faq") }}</b-nav-item>
        </b-nav>
         <a href="#" @click.prevent="openMobileMenu" class="mobile-menu-button">
                <i class="simple-icon-menu" />
            </a>
    </b-container>
</headroom>
</template>
<script>
import { headroom } from 'vue-headroom';
import { scroller } from 'vue-scrollto/src/scrollTo';

const scrollTo = scroller();
export default {
  components: {
    headroom,
  },
  data() {
    return {
      currentPath: '',
    };
  },
  methods: {
    scrollToContent(el) {
      scrollTo(el);
    },

    openMobileMenu() {
      this.$emit('toggle-mobile-menu');
    },
  },
  mounted() {
    this.currentPath = this.$route.path;
  },
};
</script>
