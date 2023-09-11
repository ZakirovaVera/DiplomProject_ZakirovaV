<template>
    <header class="header sticky  center">
        <div class="header__left">
            <router-link class="header__left_logo" to="./">
                <img :src="infoLogo.logotype" alt="ikon_logo" height="55">
                <h2 class="header__left_logo-text">{{ infoLogo.nameFirma }}</h2>
            </router-link>
        </div>
        <nav class="header__right ">
            <router-link :to="item.url" v-for="item in menulinks" :key="item.id">{{ item.title }}</router-link>
            <label for="burger">Каталог
            </label>
        </nav>
        <input class="burger__checkbox" id="burger" type="checkbox">
        <div class="burger-menu">
            <div class="burger-menu_box">
                <div class="burger-menu__item" v-for="item in burgerMenu" :key="item">
                    <router-link class="burger-menu__title" :to="item.link">{{ item.name }}</router-link>
                    <ul class="burger-menu__list" v-if="item.li">
                        <li v-for="el in item.li" :key="el"><router-link class="burger-menu__link" :to="el.urlLi">{{
                            el.nameLi }}</router-link></li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: "HeaderComponent",
    computed: {
        ...mapState(['infoLogo', 'menulinks', 'burgerMenu'])
    }
}
</script>

<style lang="scss" scoped>
@import "@/assets/vars";

.sticky{
    position: sticky;
    top: 0;
}
.header {
    min-height: 75px;
    background: $colorBackground;
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
                color: $colorSelectSite;
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
                color: $colorSelectSite;
            }
        }
    }

    & svg:hover path {
        fill: $colorSelectSite;
    }
}

#burger {
    position: absolute;
    left: -999999px;
    visibility: hidden;

    &:checked~.burger-menu {
        right: 0;
    }
}

.burger-menu {
    background: $colorBurgerMenu;
    width: $widthBurgerMenu;
    padding: 32px;
    box-sizing: border-box;
    box-shadow: 6px 4px 35px rgba(0, 0, 0, 0.21);
    position: absolute;
    top: 75px;
    right: -$widthBurgerMenu;
    transition: right 0.5s;
    z-index: 1;

    &__heading {
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 17px;
        color: $colorFont;
    }

    &__item {
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin-bottom: 20px;
    }

    &__list {
        list-style-type: none;
        padding-left: 21px;
        display: flex;
        flex-direction: column;
        gap: 11px;
    }

    &__title {
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        color: $colorSelectSite;
    }

    &__title:hover {
        font-weight: 700;
    }

    &__link {
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        color: $colorBurgerMenuText;
    }

    &__link:hover {
        color: $colorSelectSite;
    }
}
</style>