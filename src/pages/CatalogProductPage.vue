<template>
    <BannerComponent />
    <div class="product-text-box center">
        <h1 class="product-text__title" v-if="!currentTag || isListFillings">Каталог</h1>
        <h1 class="product-text__title" v-else>{{ currentTag }}</h1>
        <h2 class="product-text__subtitle">Торты, для семейного вечера, дня рождения, свадьбы и других событий.</h2>
        <p class="product-text__text">Минимальный вес торта для заказа - 2 кг, шаг 500 грамм.</p>
        <p class="product-text__text">Стоимость оформения оплачивается отдельно.</p>
        <p class="product-text__text">Покрытие велюр + 500₽.</p>
        <p class="product-text__text">Торт цифра, буква, сердце, звезда, кольцо, бутылка, елка - 1,7 кг.</p>
        <p class="product-text__text">Мини тортики минимальный заказ - 6 шт вес 1,5 кг.</p>
        <p class="product-text__text">Птичье молоко 1,5 кг - вес примерно 1,2-1,3 кг + оформление</p>
    </div>
    <section class="product-content center">
        <div class="product__sidebar">
            <div class="product__sidebar__btn-wrap">
                <button class="product__sidebar__btn" @click="getListFillings">Вся
                    продукция</button>
                <button class="product__sidebar__btn" @click="clickTag(tag)" v-for="tag in getTags" :key="tag.id">{{ tag
                }}</button>

            </div>
        </div>
        <div class="product-content-wrap">
            <div class="product__products">
                <ProductComponent v-for="filling in paginatedProducts" :key="filling.id" :fil="filling" />
            </div>
        </div>
        <div v-if="totalPages > 1" class="pagination">
            <router-link v-for="pageNumber in totalPages" :key="pageNumber" :to="getPageLink(pageNumber)">
                {{ pageNumber }}
            </router-link>
        </div>
    </section>
</template>

<script>
import BannerComponent from '@/components/BannerComponent.vue';
import ProductComponent from '@/components/ProductComponent.vue';
import { mapState, mapGetters } from 'vuex';

export default {
    name: "CatalogProductPage",
    data() {
        return {
            itemsPerPage: 9,
            currentContents: [],
            currentTag: null,
            isListFillings: false,
        }
    },
    components: {
        ProductComponent,
        BannerComponent
    },
    computed: {
        ...mapState(['listFillings']),
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
        },
        getListFillings() {
            this.currentContents = this.listFillings;
            this.isListFillings = true;
            this.$router.push(this.getPageLink(1))
        }
    },
}
</script>

<style lang="scss" scoped>
@import "@/assets/vars";

.product-text-box {
    background: $colorPromo;
    padding-bottom: 20px;
}

.product-text {
    &__title {
        font-style: normal;
        font-weight: 700;
        font-size: 48px;
        line-height: 58px;
        padding-top: 30px;
        color: $colorTextBlack;
        text-align: center;
        font-family: DM Serif Display;
        letter-spacing: 1px;
        padding-bottom: 50px;
    }

    &__subtitle {
        font-style: normal;
        font-weight: 400;
        font-size: 32px;
        line-height: 38px;
        color: $colorTextBlack;
        padding-bottom: 16px;
        text-align: justify;
    }

    &__text {
        color: #4D5053;
        font-family: Jost;
        font-size: 22px;
        font-style: normal;
        font-weight: 400;
        line-height: 33px;
        letter-spacing: 0.22px;
        padding-bottom: 4px;
    }
}
.pagination {
    margin-top: 20px;
    text-align: center;

    & a {
        margin-right: 20px;
        cursor: pointer;
        color: #4D5053;
        font-family: Jost;
        font-size: 24px;
        font-style: normal;
        font-weight: 400;
        line-height: 33px;
        letter-spacing: 0.22px;
        padding-bottom: 24px;

        &:hover {
            color: $colorSite;
        }
    }
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

    &__btn-wrap {
        display: flex;
        align-items: center;
        gap: 10px;
        flex-wrap: wrap;
        padding: 30px 0 30px;
    }

    &__btn {
        background-color: $colorHeaderFooter;
        color: #ffffff;
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
            background-color: $colorSite;
            color: $colorFon;
        }
    }
}

.product__products {
    display: grid;
    grid-template-columns: repeat(3, 360px);
    gap: 30px;
    justify-content: space-evenly;
}
</style>