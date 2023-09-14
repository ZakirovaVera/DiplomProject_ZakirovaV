<template>
    <BannerComponent/>
    <section class="about-me center">
        <div class="about-me__banner">
            <div class="about-me__img-wrap">
                <img class="about-me__img" :src="imgAboutMe" alt="photo">
            </div>
            <div class="about-me__content">
                <h2 class="about-me__heading">Обо мне</h2>
                <p class="about-me__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur a, similique
                    impedit corporis facilis hic quaerat tempora, dolore natus, iure nemo sunt et! Quasi eligendi blanditiis
                    earum in corrupti quia. Nesciunt dignissimos ipsa modi, excepturi veniam ipsum minima, iste consectetur
                    magni facere, ea aspernatur aut exercitationem facilis voluptate quis nobis.</p>
                <p class="about-me__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur a, similique
                    impedit corporis facilis hic quaerat tempora, dolore natus, iure nemo sunt et! Quasi eligendi blanditiis
                    earum in corrupti quia. Nesciunt dignissimos ipsa modi, excepturi veniam ipsum minima, iste consectetur
                    magni facere, ea aspernatur aut exercitationem facilis voluptate quis nobis.</p>
            </div>
        </div>

    </section>
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

//   import './style.css';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import BannerComponent from '@/components/BannerComponent.vue';

export default {
    data() {
        return {
            title:"Обо мне"
        }
    },
    computed: {
        ...mapState(['imgAboutMe', 'infoLogo'])
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
    width: 100%;
    height: 100%;
}

.swiper-slide {
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
    background: $colorPromo;
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
        height: 100%;
        border-radius: 0px 80px 0px 80px;
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
        padding-bottom: 16px;
        font-style: normal;
        font-weight: 400;
        font-size: 32px;
        line-height: 38px;
        color: $colorFont;
        padding-bottom: 16px;
        text-align: justify
    }

    &__diplom {
        padding-bottom: 96px;
    }
}</style>