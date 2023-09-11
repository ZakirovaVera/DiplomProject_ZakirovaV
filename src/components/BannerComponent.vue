<template>
    <div class="banner center">
    </div>
</template>

<script>

export default {

}
</script>

<style lang="scss" scoped>
@import "@/assets/_vars.scss";

.banner {
    // background: url(<path-to-image>), lightgray 50% / cover no-repeat;
    background-image: url(@/assets/img/banner2.jpg);
    background-size: cover;
    background-position: center;
    height: 200px;
    display: flex;
    align-items: flex-end;
    justify-content: center;

}
</style>