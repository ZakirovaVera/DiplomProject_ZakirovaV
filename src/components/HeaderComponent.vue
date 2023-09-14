<template>
    <header class="header sticky  center">
        <div class="header__left">
            <router-link class="header__left_logo" to="/">
                <img :src="infoLogo.logotype" alt="ikon_logo" height="55">
                <h2 class="header__left_logo-text">{{ infoLogo.nameFirma }}</h2>
            </router-link>
        </div>
        <nav class="header__right ">
            <router-link :to="item.url" v-for="item in menulinks" :key="item.id">{{ item.title }}</router-link>
        </nav>
    </header>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: "HeaderComponent",
    computed: {
        ...mapState(['infoLogo', 'menulinks'])
    }
}
</script>

<style lang="scss" scoped>
@import "@/assets/vars";

.sticky{
    position: sticky;
    top: 0;
    z-index: 10;
}
.header {
    min-height: 75px;
    background: $colorHeaderFooter;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    transition: background-color 0.3s;

    &__left {
        padding-left: 1rem;

        &_logo {
            display: flex;
            align-items: center;
            flex-direction: row;
            gap: 10px;
            padding-left: 4px;

            &-text {
                color: $colorSite;
                font-size: 40px;
                font-weight: 400;
                line-height: 50px;
                word-wrap: break-word;
                font-family: DM Serif Display;
            }
        }
    }

    &__right {
        overflow: hidden;
        position: relative;
        display: flex;
        align-items: center;
        gap: 33px;
        padding-right: 1rem;

        & a,
        label {
            color: $colorWhite;
            text-align: center;
            font-family: Jost;
            font-size: 20px;
            line-height: 25px;
            font-style: normal;
            font-weight: 400;

            &:hover {
                color: $colorSite;
            }
        }
    }

    & svg:hover path {
        fill: $colorSite;
    }
}
</style>