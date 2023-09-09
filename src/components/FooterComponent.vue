<template>
    <footer class="footer center">
        <div class="footer__left">
            <a class="footer__left_logo" @click="setPageTag('index')" href="#index">
                <img :src="logotype" alt="ikon_logo" height="55">
                <h2 class="footer__left_logo-text">{{ nameFirma }}</h2>
            </a>
            <h2 class="footer__heading footer__heading-color">Заказ торта в Тюмени</h2>
            <p class="footer__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem eligendi quod
                est voluptas ducimus aliquid tempora aperiam quidem illum voluptatum!</p>
        </div>
        <div class="footer__center">
            <h2 class="footer__heading">Контакты</h2>
            <p class="footer__text">{{ confectionersEmail }}</p>
            <p class="footer__text">{{ confectionersPhone }}</p>
            <p class="footer__text">{{ confectionersName }}</p>
        </div>
        <div class="footer__right">
            <h2 class="footer__heading">Соц.сети</h2>
            <div class="footer__right_icon">
                <a class="footer__right_icon_a" href="#">
                    <svg viewBox="0 0 176 176" xmlns="http://www.w3.org/2000/svg">
                        <g id="Layer_2" data-name="Layer 2">
                            <g id="_19.vk" data-name="19.vk">
                                <path
                                    d="m144.46 0h-144.46v144.46a31.54 31.54 0 0 0 31.54 31.54h144.46v-144.45a31.55 31.55 0 0 0 -31.54-31.55zm-10.35 116.58c-2.33.33-13.71 0-14.3 0a11.15 11.15 0 0 1 -7.9-3.15c-2.4-2.31-4.59-4.86-6.89-7.27a19.63 19.63 0 0 0 -2.24-2c-1.88-1.44-3.74-1.12-4.62 1.09a41.82 41.82 0 0 0 -1.43 7.34c-.16 2.23-1.58 3.65-4.08 3.79-1.56.08-3.11.11-4.65.07a35.5 35.5 0 0 1 -16.09-4 44.07 44.07 0 0 1 -13.75-12 146 146 0 0 1 -15.24-25c-.22-.44-4.65-9.88-4.77-10.32-.4-1.49 0-2.92 1.23-3.41.79-.31 15.4 0 15.64 0a5.09 5.09 0 0 1 4.91 3.53 76.3 76.3 0 0 0 11 19.23 10.2 10.2 0 0 0 2.22 2c1.2.82 2.33.54 2.82-.84a24.48 24.48 0 0 0 1-5.87c.08-3.94 0-6.54-.22-10.48-.14-2.52-1-4.74-4.76-5.41-1.14-.2-1.24-1.15-.51-2.09 1.54-2 3.67-2.28 6-2.4 3.5-.2 7-.06 10.52 0h.76a21.54 21.54 0 0 1 4.59.47 4.19 4.19 0 0 1 3.34 3.73 15.25 15.25 0 0 1 .23 3c-.09 4.3-.3 8.61-.35 12.91a22.72 22.72 0 0 0 .43 5.09c.51 2.3 2.07 2.87 3.67 1.21a56.22 56.22 0 0 0 5.5-6.88 69.5 69.5 0 0 0 7.29-14.13c1-2.56 1.79-3.12 4.54-3.12h15.51a9.27 9.27 0 0 1 2.73.36 2.35 2.35 0 0 1 1.63 3c-.76 3.4-2.6 6.29-4.57 9.08-3.16 4.47-6.48 8.82-9.71 13.23a18.17 18.17 0 0 0 -1.12 1.77c-1.21 2.19-1.12 3.42.64 5.24 2.89 2.95 5.89 5.65 8.57 8.65a50.55 50.55 0 0 1 5.38 7c1.94 3.11.75 6.06-2.95 6.58z">
                                </path>
                            </g>
                        </g>
                    </svg>
                </a>
                <a class="footer__right_icon_a" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 176 176">
                        <g id="Layer_2" data-name="Layer 2">
                            <g id="_05.instagram" data-name="05.instagram">
                                <path d="M103.8,88A15.8,15.8,0,1,1,88,72.2,15.8,15.8,0,0,1,103.8,88Z"></path>
                                <path
                                    d="M108.21,48.06H67.79A19.73,19.73,0,0,0,48.06,67.79v40.42a19.73,19.73,0,0,0,19.73,19.73h40.42a19.73,19.73,0,0,0,19.73-19.73V67.79A19.73,19.73,0,0,0,108.21,48.06ZM88,113.87A25.87,25.87,0,1,1,113.86,88,25.91,25.91,0,0,1,88,113.87Zm26-45.34a6.39,6.39,0,1,1,6.39-6.39A6.39,6.39,0,0,1,114,68.53Z">
                                </path>
                                <path
                                    d="M144.46,0H0V144.46A31.54,31.54,0,0,0,31.54,176H176V31.55A31.54,31.54,0,0,0,144.46,0ZM138,108.21A29.83,29.83,0,0,1,108.21,138H67.79A29.83,29.83,0,0,1,38,108.21V67.79A29.83,29.83,0,0,1,67.79,38h40.42A29.83,29.83,0,0,1,138,67.79Z">
                                </path>
                            </g>
                        </g>
                    </svg>
                </a>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'FooterComponent',
    data() {
        return {
            confectionersPhone: "+7-929-265-44-96",
            confectionersName: "Иванова Юлия",
            confectionersEmail: "mail@mail.com",
            logotype: require('@/assets/img/logo_cupcake.svg'),
            nameFirma: "Glaze.tmn",
        }
    },
    props: {
        storageData: Object
    },
    methods: {
        setPageTag(pageTag) {
            this.storageData.currentPage = "" + pageTag;
        }
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
    background: $colorBackground;
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
                color: $colorSelectSite;
                font-size: 40px;
                font-weight: 400;
                line-height: 50px;
                word-wrap: break-word;
                font-family: DM Serif Display;
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
        width: 258px;

        &_icon {
            display: flex;
            gap: 16px;

            &_a svg {
                fill: $colorWhite;
                height: 40px;
                width: 40px;

                &:hover {
                    fill: $colorSelectSite;
                }
            }
        }
    }

    &__heading {
        color: $colorSelectSite;
        font-size: 25px;
        font-family: DM Serif Display;
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
        font-family: Jost;
        font-size: 22px;
        font-style: normal;
        font-weight: 400;
        line-height: 33px;
        letter-spacing: 0.22px;
    }
}
</style>