<template>
    <footer class="footer center">
        <div class="footer__left">
            <router-link class="footer__left_logo" to="/">
                <img :src="infoLogo.logotype" alt="ikon_logo" height="55">
                <h2 class="footer__left_logo-text">{{ infoLogo.nameFirma }}</h2>
            </router-link>
            <h2 class="footer__heading footer__heading-color">Заказ торта в Тюмени</h2>
            <p class="footer__text">Индивидуальные торты, для семейного вечера, дня рождения, свадьбы и других событий.</p>
        </div>
        <div class="footer__center">
            <h2 class="footer__heading">Контакты</h2>
            <p class="footer__text">{{ infoLogo.confectionersEmail }}</p>
            <p class="footer__text">{{ infoLogo.confectionersPhone }}</p>
            <p class="footer__text">{{ infoLogo.confectionersName }}</p>
        </div>
        <div class="footer__right">
            <h2 class="footer__heading">Соц.сети</h2>
            <div class="footer__right_icon">
                <a :href="infoLogo.linkVk" class="footer__right_icon_a">
                    VK
                </a>
                <a :href="infoLogo.linkInstagram" class="footer__right_icon_a">
                    Нельзя_gram
                </a>
            </div>
        </div>
    </footer>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'FooterComponent',
    computed: {
        ...mapState(['infoLogo'])
    },
}
</script>

<style lang="scss" scoped>
@import "@/assets/vars";

.footer {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: start;
    justify-items: center;
    background: $colorHeaderFooter;
    padding-top: 80px;
    padding-bottom: 104px;

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
                font-size:36px;
                font-weight: 400;
                line-height: 50px;
                word-wrap: break-word;
                text-align: justify;
            }
        }
    }

    &__center {
        display: flex;
        flex-direction: column;
        gap: 26px;
    }

    &__right {
        display: flex;
        flex-direction: column;
        gap: 26px;
        // width: 258px;

        &_icon {
            display: flex;
            gap: 16px;

            &_a {
                border-radius: 10px;
                background: $colorWhite;
                box-shadow: 0px 10px 20px 0px rgba(192, 192, 192, 0.35);
                display: flex;
                padding: 10px 10px;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                gap: 10px;
                color: #222;
                text-align: center;
                font-size: 16px;
                font-style: normal;
                font-weight: 600;
                line-height: 125%;
                letter-spacing: 0.36px;

                &:hover {
                    background: $colorSite;
                    color: $colorFon;
                }
            }
        }
    }

    &__heading {
        color: $colorSite;
        font-size: 20px;
        font-weight: 400;
        line-height: 31.25px;
        word-wrap: break-word;
        padding-top: 8px;

        &-color {
            color: $colorWhite;
            padding: 10px 0 16px;
        }
    }

    &__text {
        color: $colorWhite;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 33px;
        letter-spacing: 0.22px;
        // text-align: justify;
    }
}

@media (max-width: 1024px) {
    .footer {
        grid-template-columns: repeat(1, 500px);
        justify-content: center;
        gap: 50px;
        text-align: center;

        &__left {
            padding-left: 0;

            &_logo {
                justify-content: center;
            }
        }

        &__right_icon {
            justify-content: center;
        }
    }
}

@media (max-width: 767px) {
    .footer {
        grid-template-columns: repeat(auto-fill, 350px);
        padding-top: 40px;
        padding-bottom: 60px;
        &__heading{
            font-size: 16px;
        }
        &__text {
            font-size: 14px;
        }
    }
}
</style>