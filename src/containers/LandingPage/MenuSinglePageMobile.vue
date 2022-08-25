<template>
    <div class="mobile-menu" @mouseenter="isMenuOver=true" @mouseleave="isMenuOver=false"  @touchstart="isMenuOver=true">
        <a class="logo-mobile" href="/singlepage-home" @click.prevent="scrollToContent('body')">
             <span />
        </a>
        <b-nav class="navbar-nav">
            <b-nav-item @click.prevent="scrollToContent('#features')">{{ $t("lp.menu.features") }}</b-nav-item>
            <b-nav-item @click.prevent="scrollToContent('#reviews')">{{ $t("lp.menu.reviews") }}</b-nav-item>
            <b-nav-item @click.prevent="scrollToContent('#pricing')">{{ $t("lp.menu.pricing") }}</b-nav-item>
            <b-nav-item @click.prevent="scrollToContent('#faq')">{{ $t("lp.menu.faq") }}</b-nav-item>
            <b-nav-item>
                <div class="separator" />
            </b-nav-item>
        </b-nav>
    </div>
</template>
<script>
import { scroller } from 'vue-scrollto/src/scrollTo';
import { setTimeout } from 'timers';

const scrollTo = scroller();
export default {
  props: ['isOpen'],
  data() {
    return {
      currentPath: '',
      isMenuOver: false,
    };
  },
  methods: {
    scrollToContent(el) {
      scrollTo(el, { offset: -25 });
      this.isMenuOver = false;
      this.closeMobileMenu();
    },
    closeMobileMenu() {
      if (!this.isMenuOver) {
        this.$emit('close-mobile-menu');
      }
    },
    addEventListener() {
      document.addEventListener('click', this.closeMobileMenu);
      document.addEventListener('touchstart', this.closeMobileMenu);
    },
    removeEventListener() {
      document.removeEventListener('click', this.closeMobileMenu);
      document.removeEventListener('touchstart', this.closeMobileMenu);
    },
  },
  mounted() {
    this.currentPath = this.$route.path;
  },
  beforeDestroy() {
    this.removeEventListener();
  },
  watch: {
    $route(to, from) {
      if (to.path !== from.path) {
        this.currentPath = to.path;
        window.scrollTo(0, top);
        this.isMenuOver = false;
        this.closeMobileMenu();
      }
    },
    isOpen(val) {
      setTimeout(() => {
        if (val) {
          this.addEventListener();
        } else {
          this.removeEventListener();
        }
      }, 500);
    },
  },

};
</script>
