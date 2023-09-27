<template>
    <BannerComponent />
    <section class="about-me center">
        <div class="about-me__banner">
            <div class="about-me__img-wrap">
                <img class="about-me__img" :src="imgAboutMe" alt="photo">
            </div>
            <div class="about-me__content">
                <h2 class="about-me__heading">Обо мне</h2>
                <p class="about-me__text" v-for="item in textAboutMe" :key="item">{{ item }}</p>
                <div class="about-me__content__img">
                    <img src="@/assets/img/about-me_img.png" alt="img"></div>
            </div>
        </div>
    </section>
    <div class="history center">
        <div class="history__icon">
            <img :src="infoLogo.logotype" alt="ikon_logo" height="55">
            <img :src="infoLogo.logotype" alt="ikon_logo" height="55">
            <img :src="infoLogo.logotype" alt="ikon_logo" height="55">
        </div>
        <h3 class="history__heading">Моя история</h3>
        <p class="history__text" v-for="item in historyAboutMe" :key="item">{{ item }}</p>
        <img class="history__img" :src="imgAboutMeTwo" alt="photo">
    </div>
    <div class="about-me__diplom center">
        <h2 class="about-me__heading heading-center">Мои дипломы образования</h2>
        <swiper :cssMode="true" :navigation="true" :pagination="true" :mousewheel="true" :keyboard="true" :modules="modules"
            class="mySwiper">
            <swiper-slide v-for="item in infoLogo.diplom" :key="index">
                <div>
                    <img :src="item" alt="diplom">
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import BannerComponent from '@/components/BannerComponent.vue';

export default {
    data() {
        return {
            title: "Обо мне"
        }
    },
    computed: {
        ...mapState(['imgAboutMe', 'infoLogo', 'textAboutMe', 'historyAboutMe', 'imgAboutMeTwo'])
    },
    components: {
        Swiper,
        SwiperSlide,
        BannerComponent
    },
    setup() {
        return {
            modules: [Navigation, Pagination, Mousewheel, Keyboard],
        };
    },
}
</script>

<style lang="scss" scoped>
@import "@/assets/vars";

.swiper {
    width: 700px;
    height: 100%;
}

.swiper-slide {
    // height: 850px;
    text-align: center;
    font-size: 18px;
    background: $colorFon;

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
}

.swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.heading-center {
    text-align: center;
    padding-top: 40px;
}

.about-me {
    // background: $colorPromo;
    padding-top: 40px;
    padding-bottom: 40px;

    &__banner {
        display: flex;
        flex-direction: row;
        gap: 50px;
        align-items: flex-start;
    }

    &__img-wrap {
        height: 650px;
    }

    &__img {
        padding-left: 4px;
        height: 100%;
        border-radius: 0px 80px 0px 80px;
    }

    &__content {
        padding-right: 4px;
        &__img{
            text-align: end;
            & img{
                width: 50%;
            }
        }
    }

    &__heading {
        font-style: normal;
        font-weight: 700;
        font-size: 48px;
        line-height: 58px;
        color: $colorTextBlack;
        padding-bottom: 28px;
    }

    &__text {
        text-indent: 25px;
        font-style: normal;
        font-weight: 400;
        font-size: 32px;
        line-height: 38px;
        color: $colorFont;
        padding-bottom: 16px;
        text-align: justify
    }

    &__diplom {
        padding-bottom: 60px;
    }
}

.history {
    text-align: center;
    background: $colorPromo;
    padding-top: 40px;
    padding-bottom: 40px;

    &__icon {
        & img {
            padding: 0 10px 0;
        }
    }

    &__heading {
        color: $colorFont;
        text-align: center;
        font-size: 40px;
        font-style: normal;
        font-weight: 400;
        line-height: 62.5px;
        letter-spacing: 1px;
        padding-bottom: 30px;
    }

    &__text {
        text-indent: 25px;
        font-style: normal;
        font-weight: 400;
        font-size: 32px;
        line-height: 38px;
        color: $colorFont;
        padding-bottom: 16px;
        text-align: justify
    }

    &__img {
        border-radius: 20px 20px 20px 20px;
        padding-top: 20px
    }
}
</style>