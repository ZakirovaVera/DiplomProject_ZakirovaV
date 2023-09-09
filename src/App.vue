<template>
<HeaderComponent/>
<router-view></router-view>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
export default {
    components: { HeaderComponent }
}
</script>

<style lang="scss">
@import "@/assets/vars";

* {
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Lato', sans-serif;
}

.center {
  padding-left: calc(50% - $siteWidth / 2);
  padding-right: calc(50% - $siteWidth / 2);
}

// img {
//   max-width: 100%;
// }

a {
  text-decoration: none;
}

.box-site {
  overflow: hidden;
  position: relative;
}
</style>
