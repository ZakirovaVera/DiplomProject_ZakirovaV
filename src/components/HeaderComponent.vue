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
        <div class="header__menu">
            <input type="checkbox" id="burger-checkbox" class="burger-checkbox">
            <label for="burger-checkbox" class="burger"></label>
            <ul class="menu-list">
                <router-link class="header__right__a menu-item" :class="{ active: item.title == active }"
                    @click="clickNav(item.title)" :to="item.url" v-for="item in menulinks" :key="item.id">{{ item.title
                    }}</router-link>
            </ul>
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

.header__menu {
    display: none;
    padding-right: 4px;
}

.burger-checkbox {
    position: absolute;
    visibility: hidden;
}

.burger {
    position: relative;
    z-index: 1;
    cursor: pointer;
    display: block;
    position: relative;
    border: none;
    background: transparent;
    width: 40px;
    height: 26px;
}

.burger::before,
.burger::after {
    content: '';
    left: 0;
    position: absolute;
    display: block;
    width: 100%;
    height: 4px;
    border-radius: 10px;
    background: $colorWhite;
}

.burger::before {
    top: 0;
    box-shadow: 0 11px 0 $colorWhite;
    transition: box-shadow .3s .15s, top .3s .15s, transform .3s;
}

.burger::after {
    bottom: 0;
    transition: bottom .3s .15s, transform .3s;
}

.burger-checkbox:checked+.burger::before {
    top: 11px;
    transform: rotate(45deg);
    box-shadow: 0 6px 0 rgba(0, 0, 0, 0);
    transition: box-shadow .15s, top .3s, transform .3s .15s;
}

.burger-checkbox:checked+.burger::after {
    bottom: 11px;
    transform: rotate(-45deg);
    transition: bottom .3s, transform .3s .15s;
}

.menu-list {
    top: $heightHeader;
    right: 0;
    position: absolute;
    display: grid;
    gap: 12px;
    padding: 0 0 42px;
    margin: 0;
    background: $colorHeaderFooter;
    list-style-type: none;
    transform: translateX(100%);
    transition: right .3s;
    width: 200px;
}

.menu-item {
    display: block;
    padding: 8px;
    color: white;
    font-size: 18px;
    text-align: center;
    text-decoration: none;
}

.menu-item:hover {
    background: rgba(255, 255, 255, .2)
}

.burger-checkbox:checked~.menu-list {
    transform: translateX(0);
}

.active {
    color: $colorSite;
}

@media (max-width: 1024px) {

    .header__right {
        display: none;
    }

    .header__menu {
        display: inline;
    }
}</style>