<template>
    <BannerComponent />
    <div class="product-text center">
        <div class="product-text-box">
            <h1 class="product-text__title" v-if="!currentTag || isListFillings">Каталог</h1>
            <h1 class="product-text__title" v-else>{{ currentTag }}</h1>
            <div class="product-text__subtitle-wrap" @click="isShow = !isShow">
                <h2 class="product-text__subtitle">Торты, для семейного вечера, дня рождения, свадьбы и других событий.</h2>
                <button class="product-text__btn">
                    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 612 612"
                        style="enable-background:new 0 0 612 612;" xml:space="preserve">
                        <g>
                            <g id="_x31_0_34_">
                                <g>
                                    <path
                                        d="M604.501,134.782c-9.999-10.05-26.222-10.05-36.221,0L306.014,422.558L43.721,134.782 c-9.999-10.05-26.223-10.05-36.222,0s-9.999,26.35,0,36.399l279.103,306.241c5.331,5.357,12.422,7.652,19.386,7.296 c6.988,0.356,14.055-1.939,19.386-7.296l279.128-306.268C614.5,161.106,614.5,144.832,604.501,134.782z" />
                                </g>
                            </g>
                        </g>
                    </svg></button>
            </div>
            <div class="product-text_animation" v-show="isShow">
                <p class="product-text__text">Минимальный вес торта для заказа - 2 кг, шаг 500 грамм, стоимость 1500-1800₽
                </p>
                <p class="product-text__text">Мини тортик от 1 кг до 2 кг - стоимость 1700₽ за кг.</p>
                <p class="product-text__text">Стоимость оформения оплачивается отдельно.</p>
                <p class="product-text__text">Покрытие велюр + 500₽.</p>
                <p class="product-text__text">Торт цифра, буква, сердце, звезда, кольцо, бутылка, елка - 1,7 кг.</p>
                <p class="product-text__text">Мини тортики минимальный заказ - 6 шт вес 1,5 кг.</p>
                <p class="product-text__text">Птичье молоко 1,5 кг - вес примерно 1,2-1,3 кг + оформление</p>
            </div>

            <div class="product-text__btn-conteiner">
                <ProductFillingOptionsComponent v-for="filOpt in fillingOptions" :key="index" :filOpt="filOpt"
                    :isActive="isActive" />
            </div>
        </div>
    </div>
    <div class="product-content center">
        <div class="product__sidebar" id="el">
            <div class="product__sidebar__btn-wrap">
                <button class="product__sidebar__btn" :class='{ active__sinebar: active__sinebar == "" }'
                    @click="getListFillings">Вся
                    продукция</button>
                <button class="product__sidebar__btn" :class="{ active__sinebar: tag == active__sinebar }"
                    @click="clickTag(tag)" v-for="tag in getTags" :key="tag.id">{{ tag
                    }}</button>

            </div>
        </div>
        <div class="product-content-wrap">
            <div class="product__products">
                <ProductComponent v-for="filling in paginatedProducts" :key="filling.id" :fil="filling" />
            </div>
        </div>
        <div v-if="totalPages > 1" class="pagination">
            <router-link class="pagination_a" :class="{ active: pageNumber == active }" v-for="pageNumber in totalPages"
                :key="pageNumber" :to="getPageLink(pageNumber)" @click="clickPaginatorNum(pageNumber)">
                {{ pageNumber }}
            </router-link>
        </div>
    </div>
</template>

<script>
import BannerComponent from '@/components/BannerComponent.vue';
import ProductComponent from '@/components/ProductComponent.vue';
import ProductFillingOptionsComponent from '@/components/ProductFillingOptionsComponent.vue';
import { mapState, mapGetters } from 'vuex';

export default {
    name: "CatalogProductPage",
    data() {
        return {
            itemsPerPage: 9,
            currentContents: [],
            currentTag: null,
            isListFillings: false,
            active: 1,
            isShow: false,
            active__sinebar: '',
            isActive: false,
        }
    },
    components: {
        ProductComponent,
        BannerComponent,
        ProductFillingOptionsComponent,
    },
    computed: {
        ...mapState(['listFillings', 'fillingOptions']),
        ...mapGetters(['getTags']),

        totalPages() {
            return Math.ceil(this.currentContents.length / this.itemsPerPage);
        },
        paginatedProducts() {
            const pageNumber = this.getCurrentPageNumber();
            const startIndex = (pageNumber - 1) * this.itemsPerPage;
            const endIndex = startIndex + this.itemsPerPage;
            return this.currentContents.slice(startIndex, endIndex);
        }
    },
    created() {
        this.currentContents = this.listFillings;
    },
    methods: {
        getCurrentPageNumber() {
            this.isActive__sinebar = false;
            const pageNumberParam = parseInt(this.$route.params.pageNumber);
            return isNaN(pageNumberParam) || pageNumberParam < 1 ? 1 : pageNumberParam;

        },
        getPageLink(pageNumber) {
            return `/catalog/${pageNumber}`;
        },

        clickTag(tag) {
            this.currentTag = tag;
            this.currentContents = Object.values(this.listFillings).filter((el) => el.tag === tag);
            this.isListFillings = false;
            this.$router.push(this.getPageLink(1))
            this.active = 1;
            this.active__sinebar = tag;
        },
        getListFillings() {
            this.currentContents = this.listFillings;
            this.isListFillings = true;
            this.$router.push(this.getPageLink(1))
            this.active__sinebar = '';
        },
        clickPaginatorNum(num) {
            const el = document.getElementById('el');
            el.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
            this.active = num;
        },
    },
}
</script>

<style lang="scss" scoped>
@import "@/assets/vars";

@keyframes vision {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

.project-content__btn-wrap {
    // width: 880px;
    height: 75px;
    justify-content: center;
    align-items: center;
    gap: 96px;
    display: inline-flex;
    border-radius: 18px;
    border: 0.5px #CDA274 solid;
    margin-bottom: 60px;
}

.project-content__btn {
    height: 100%;
    border: none;
    background: none;
    padding-left: 66px;
    padding-right: 66px;
    padding-top: 26px;
    padding-bottom: 26px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    display: flex;
    text-align: center;
    color: #292F36;
    text-align: center;
    font-family: Jost;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 125%;
    /* 22.5px */
    letter-spacing: 0.36px;
}

.project-content__btn:hover {
    padding-left: 66px;
    padding-right: 66px;
    padding-top: 26px;
    padding-bottom: 26px;
    background: #CDA274;
    border-radius: 18px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    display: flex;
    text-align: center;
    color: white;
    font-size: 18px;
    font-family: Jost;
    font-weight: 600;
    line-height: 22.50px;
    letter-spacing: 0.36px;
    word-wrap: break-word
}

.product-text_animation {
    margin-top: 10px;
    border-radius: 26px;
    border: 0.5px solid rgb(255, 131, 155);
    padding: 10px 10px 20px 10px;
    background: rgb(255, 255, 255);
    animation: vision 1s ease-in-out;

    & p {
        color: $colorFont;
        font-size: 22px;
        font-style: normal;
        font-weight: 400;
        line-height: 33px;
        letter-spacing: 0.22px;
        padding-top: 20px;
        // padding-bottom: 24px;
    }
}

.product-text-box {
    padding: 0 4px 0;
}

.product-text {
    background: $colorPromo;
    padding-bottom: 20px;

    &__title {
        font-style: normal;
        font-weight: 700;
        font-size: 48px;
        line-height: 58px;
        color: $colorTextBlack;
        text-align: center;
        letter-spacing: 1px;
        padding-bottom: 20px;
        padding-top: 30px;
    }

    &__subtitle-wrap {
        display: flex;
        flex-direction: row;
        gap: 16px;
        padding-bottom: 16px;
    }

    &__subtitle {
        font-style: normal;
        font-weight: 400;
        font-size: 32px;
        line-height: 38px;
        color: $colorTextBlack;
        text-align: justify;
    }

    &__btn {
        border: none;
        background: none;

        & svg {
            width: 20px;
            height: 20px;
        }
    }

    &__text {
        color: #4D5053;
        font-size: 22px;
        font-style: normal;
        font-weight: 400;
        line-height: 33px;
        letter-spacing: 0.22px;
        padding-bottom: 4px;
    }

    &__btn-conteiner {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 20px;
        justify-content: space-evenly;
    }

    &__text-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 30px;
        justify-content: space-evenly;
    }
}

.pagination {
    margin-top: 20px;
    text-align: center;

    &_a {
        margin-right: 20px;
        cursor: pointer;
        color: #4D5053;
        font-size: 24px;
        font-style: normal;
        font-weight: 400;
        line-height: 33px;
        letter-spacing: 0.22px;
        padding-bottom: 24px;

        &:hover {
            color: $colorSite;
        }

        &:active {
            color: $colorTextBlack;
            font-weight: 700;
        }
    }
}

.active {
    color: $colorSite;
}

.product-content {
    padding-bottom: 96px;

    &-wrap {
        min-height: 1720px;
    }
}

.product__sidebar {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    padding: 0px 4px 0px;

    &__btn-wrap {
        display: flex;
        align-items: center;
        gap: 10px;
        flex-wrap: wrap;
        padding: 30px 0 30px;
    }

    &__btn {
        background-color: $colorHeaderFooter;
        color: $colorFon;
        text-align: center;
        font-family: Jost;
        font-size: 18px;
        font-style: normal;
        font-weight: 600;
        line-height: 125%;
        letter-spacing: 0.36px;
        border-radius: 10px;
        padding: 9px 30px;
        transition: background-color 0.3s ease-in-out;

        // &:hover {
        //     border-radius: 10px;
        //     background-color: $siteColorHeading;
        //     color: #FFF;
        // }
        &:hover {
            background-color: $colorPromo;
            color: $colorTextBlack;
        }
    }
}

.product__products {
    display: grid;
    grid-template-columns: repeat(auto-fill, 360px);
    // grid-template-columns: repeat(3, 360px);
    gap: 30px;
    justify-content: space-evenly;
}

.active__sinebar {
    background-color: $colorSite;
    color: $colorFon;
}
</style>