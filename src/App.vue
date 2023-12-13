<template>
  <div class="box-site">
    <HeaderComponent />
    <router-view></router-view>
    <FooterComponent />
  </div>
</template>

<script>
import FooterComponent from './components/FooterComponent.vue';
import HeaderComponent from './components/HeaderComponent.vue';
export default {
  components: { HeaderComponent, FooterComponent }
}
</script>

<style lang="scss">
@import "@/assets/vars";

* {
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Mulish', sans-serif;
  background-color: #FFFFFF;
}

.center {
  padding-left: calc(50% - $siteWidth / 2);
  padding-right: calc(50% - $siteWidth / 2);
}

a {
  text-decoration: none;
}

.swiper-wrapper {
  align-items: center;
}

.swiper-button-prev::after,
.swiper-button-next::after {
  color: $colorSite;
}

html:root {
  --swiper-theme-color: $colorSite;
  --swiper-pagination-fraction-color: $colorSite;
}

@media (max-width: 767px) {
  .swiperReviews .swiper-pagination {
    display: none;
  }
}
</style>
