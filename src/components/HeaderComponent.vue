<template>
    <header class="header sticky  center">
        <div class="header__left">
            <router-link class="header__left_logo" to="/" @click="clickLog()">
                <img :src="infoLogo.logotype" alt="ikon_logo" height="55">
                <h2 class="header__left_logo-text">{{ infoLogo.nameFirma }}</h2>
            </router-link>
        </div>
        <nav class="header__right ">
            <router-link class="header__right__a" :class="{ active: item.title == active }" @click="clickNav(item.title)"
                :to="item.url" v-for="item in menulinks" :key="item.id">{{ item.title }}</router-link>
        </nav>
        <div class="hamburger-menu">
            <input id="menu__toggle" type="checkbox" />
            <label class="menu__btn" for="menu__toggle">
                <span></span>
            </label>
            <nav class="menu__box">
                <router-link class="header__right__a menu__item" :class="{ active: item.title == active }"
                    @click="clickNav(item.title)" :to="item.url" v-for="item in menulinks" :key="item.id">{{ item.title
                    }}</router-link>
            </nav>
        </div>
    </header>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: "HeaderComponent",
    data() {
        return {
            active: '',
        }
    },
    computed: {
        ...mapState(['infoLogo', 'menulinks']),
    },
    methods: {
        clickNav(string) {
            this.active = string;
        },
        clickLog() {
            this.active = '';
        }
    },
}
</script>

<style lang="scss" scoped>
@import "@/assets/vars";

.sticky {
    position: sticky;
    top: 0;
    z-index: 10;
}

.header {
    height: $heightHeader;
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

        &__a {
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

#menu__toggle {
    opacity: 0;
    visibility: hidden;
}

#menu__toggle:checked+.menu__btn>span {
    transform: rotate(45deg);
}

#menu__toggle:checked+.menu__btn>span::before {
    top: 0;
    transform: rotate(0deg);
}

#menu__toggle:checked+.menu__btn>span::after {
    top: 0;
    transform: rotate(90deg);
}

#menu__toggle:checked~.menu__box {
    right: 0 !important;
}

.hamburger-menu {
    display: none;
}

.menu__btn {
    display: flex;
    align-items: center;
    position: absolute;
    top: 25px;
    right: 20px;
    transform: translate(-50%, 0);
    width: 26px;
    height: 26px;
    cursor: pointer;
    z-index: 1;

}

.menu__btn>span,
.menu__btn>span::before,
.menu__btn>span::after {
    display: block;
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: $colorWhite;
    transition-duration: .25s;
}

.menu__btn>span::before {
    content: '';
    top: -8px;
}

.menu__btn>span::after {
    content: '';
    top: 8px;
}

.menu__box {
    display: block;
    position: fixed;
    top: 0;
    right: -100%;
    width: 300px;
    margin: 0;
    padding: $heightHeader 0;
    list-style: none;
    background-color: rgb(0 0 0 / 70%);
    box-shadow: 2px 2px 6px rgba(0, 0, 0, .4);
    transition-duration: .25s;
}

.menu__item {
    display: block;
    padding: 12px 24px;
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    font-weight: 600;
    text-decoration: none;
    transition-duration: .25s;
}

.menu__item:hover {
    background-color: #CFD8DC;
}

.active {
    color: $colorSite;
}

@media (max-width: 1024px) {

    .header__right {
        display: none;
    }

    .hamburger-menu {
        display: inline;
    }
}
</style>