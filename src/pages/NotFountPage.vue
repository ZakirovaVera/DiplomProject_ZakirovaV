<template>
    <section class="notfount center">
        <div class="notfount__content">
            <h1 class="notfount__title">404</h1>
            <h2 class="notfount__subtitle">Страница на стадии разработки</h2>
            <router-link class="notfount__btn" to="./" @click="SET_CURRENT_MNEMOCODE_MENU_LINK('home')"><span>Вернуться на главную</span>
                <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.85938 8.43542L15.5826 8.29857M10.4776 1.91138L17.0005 8.43436L10.3461 15.0887"
                        stroke="#FFFFFF" stroke-width="2" stroke-linecap="square" stroke-linejoin="round" />
                </svg></router-link>
        </div>
        <div class="notfount__img">
            <img src="@/assets/img/notFountPhoto.jpg" alt="notFountPhoto">
        </div>
    </section>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
    methods: {
        ...mapMutations(['SET_CURRENT_MNEMOCODE_MENU_LINK'])
    },
}
</script>

<style lang="scss" scoped>
@import "@/assets/_vars.scss";

.notfount {
    display: flex;
    gap: 80px;
    align-items: center;

    &__content {
        display: flex;
        width: 569px;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
    }

    &__title {
        color: $colorSite;
        font-size: 250px;
        font-style: normal;
        font-weight: 400;
        line-height: 125%;
    }

    &__subtitle {
        color: $colorFont;
        font-size: 30px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
        letter-spacing: 0.35px;
        padding-top: 16px;
        padding-bottom: 24px;
    }

    &__btn {
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

    &__img {
        width: 50%;
        max-height: 725px;
    }

    &__img img {
        border-radius: 0px 0px 0px 353px;
        background: $colorWhite;
    }
}
</style>