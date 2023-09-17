<template>
    <section class="promo center">
        <div class="promo__img">
            <img :src="promoPhoto" alt="promo_photo">
        </div>
        <div class="promo__slogan">
            <div class="promo__info">
                <h3 class="promo__title">Добро пожаловать на сайт "{{ infoLogo.nameFirma }}"!</h3>
                <p class="promo__text">Я рада приветствовать вас на своем сайте. Вы можете ознакомиться с ассортиментом для заказа тортов из качественных ингредиентов с доставкой:
                <br>
                Индивидуальные торты, для семейного вечера, дня рождения, свадьбы и других событий.
                </p>
                <p class="promo__text">Ваш кондитер, {{ infoLogo.confectionersName }}.</p>
                <router-link class="promo__btn" to="/about"><span>Обо мне</span>
                    <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.85938 8.43542L15.5826 8.29857M10.4776 1.91138L17.0005 8.43436L10.3461 15.0887"
                            stroke="#FFFFFF" stroke-width="2" stroke-linecap="square" stroke-linejoin="round" />
                    </svg></router-link>
            </div>
        </div>
    </section>
    <section class="products-popular center">
        <h2 class="products__heading">Популярные начинки тортов</h2>
        <div class="product-popular-box">
            <ProductComponent v-for="filling in getTop3" :key="filling.id" :fil="filling" />
        </div>
    </section>
    <section class="advantages center">
        <h2 class="advantages__heading">Наши преимущества</h2>
        <div class="advantages__item-wrap">
            <article class="advantages__item">
                <h3 class="advantages__item_title">Вкусный выбор</h3>
                <p class="advantages__item_text">Наш ассортимент постоянно расширяется, вы легко найдёте оригинальный десерт
                    на
                    любую тематику, который идеально впишется в ваше мероприятие.</p>
            </article>
            <article class="advantages__item">
                <h3 class="advantages__item_title">Натуральные продукты</h3>
                <p class="advantages__item_text">Все наши изделия мы готовим без использования загустителей, стабилизаторов
                    и
                    недопустимой химии. Мы заботимся о вас и вашем здоровье.</p>
            </article>
            <article class="advantages__item">
                <h3 class="advantages__item_title">Учтём ваши пожелания</h3>
                <p class="advantages__item_text">Если у вас есть определенные предпочтения и требования к составу, мы
                    обязательно учтём их при выполнении заказа.</p>
            </article>
            <article class="advantages__item">
                <h3 class="advantages__item_title">Возможна доставка</h3>
                <p class="advantages__item_text">Мы привезем ваш заказ туда, куда вы укажете: домой, в офис или в любое
                    другое место в пределах города Тюмени. Также у нас есть самовывоз.</p>
            </article>
        </div>
    </section>
    <div class="swiperReviews center">
        <div class="swiperReviews-box">
            <h2 class="swiperReviews__title">Отзывы</h2>
            <swiper :slidesPerView="3" :spaceBetween="30" :pagination="{
                clickable: true,
            }" :modules="modules" class="mySwiper">
                <swiper-slide v-for="item in reviewsSwiper" :key="index"><img :src="item" alt="отзывы"></swiper-slide>
            </swiper>
        </div>
    </div>
</template>

<script>
import ProductComponent from '@/components/ProductComponent.vue';
import { mapState, mapGetters } from 'vuex';

import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

export default {
    name: "PromoComponent",
    components: {
        ProductComponent,
        Swiper,
        SwiperSlide,
    },
    computed: {
        ...mapState(['infoLogo', 'promoPhoto', 'listFillings', 'reviewsSwiper']),
        ...mapGetters(['getTop3'])
    },
    setup() {
        return {
            modules: [Pagination],
        };
    },
}
</script>

<style lang="scss" scoped>
@import "@/assets/vars";

.swiperReviews {
    padding-bottom: 60px;

    &-box {
        padding: 0 4px 0;
    }

    &__title {
        text-align: center;
        color: $colorSite;
        font-size: 50px;
        font-style: normal;
        font-weight: 700;
        line-height: 62.5px;
        letter-spacing: 1px;
        padding-top: 40px;
    }
}

.swiper {
    width: 100%;
    height: 800px;
}

.swiper-slide {
    height: 670px;
    text-align: center;
    font-size: 18px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
}

.swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px 20px 20px 20px;
}


.promo {
    display: flex;
    background: $colorPromo;
    padding-top: 40px;
    padding-bottom: 40px;

    &__img {
        width: 50%;
        padding-left: 4px;

        & img {
            width: 450px;
            height: 100%;
            border-radius: 0px 80px 0px 80px;
        }
    }

    &__slogan {
        padding-left: 64px;
        display: flex;
        align-items: center;
        padding-right: 4px;
    }

    &__info {
        align-items: flex-start;
        display: flex;
        flex-direction: column;
    }

    &__title {
        font-style: normal;
        font-weight: 700;
        font-size: 48px;
        line-height: 58px;
        color: $colorTextBlack;
        padding-bottom: 28px;
    }

    &__text {
        font-style: normal;
        font-weight: 400;
        font-size: 32px;
        line-height: 38px;
        color: $colorFont;
        padding-bottom: 16px;
        text-align: justify
    }

    &__btn {
        margin-top: 20px;
        border-radius: 18px;
        background: $colorHeaderFooter;
        box-shadow: 0px 10px 20px 0px rgba(192, 192, 192, 0.35);
        display: flex;
        padding: 26px 54px;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 10px;
        color: $colorFon;
        text-align: center;
        font-size: 18px;
        font-style: normal;
        font-weight: 600;
        line-height: 125%;
        letter-spacing: 0.36px;

        &:hover {
            background: $colorSite;
            color: $colorHeaderFooter;

            & svg path {
                stroke: $colorHeaderFooter;
            }
        }
    }
}

.products-popular {
    padding-top: 60px;
    padding-bottom: 96px;
}

.products__heading {
    color: $colorSite;
    text-align: center;
    font-size: 50px;
    font-style: normal;
    font-weight: 400;
    line-height: 62.5px;
    letter-spacing: 1px;
    padding-bottom: 50px;
}

.product-popular-box {
    display: grid;
    grid-template-columns: repeat(auto-fill, 320px);
    gap: 40px;
    justify-content: center;
}

.advantages {
    background: $colorPromo;
    padding-top: 60px;
    padding-bottom: 96px;

    &__heading {
        text-align: center;
        color: $colorSite;
        font-size: 50px;
        font-style: normal;
        font-weight: 700;
        line-height: 62.5px;
        letter-spacing: 1px;
        padding-bottom: 30px;
    }

    &__item-wrap {
        grid-template-columns: repeat(2, 1fr);
        display: grid;
        gap: 40px;
        padding: 0 4px 0;
    }

    &__item {

        // width: 300px;
        &_title {
            color: $colorFont;
            text-align: center;
            font-size: 40px;
            font-style: normal;
            font-weight: 400;
            line-height: 62.5px;
            letter-spacing: 1px;
            padding-bottom: 30px;
        }

        &_text {
            color: $colorFont;
            font-size: 22px;
            font-style: normal;
            font-weight: 400;
            line-height: 33px;
            letter-spacing: 0.22px;
            text-align: justify;
        }
    }
}</style>