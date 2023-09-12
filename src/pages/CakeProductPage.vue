<template>
    <BannerComponent />
    <section class="product-content center">
        <div>
            <h1 class="product-content__title" v-if="!currentTag || isListFillings">Каталог</h1>
            <h1 class="product-content__title" v-else>{{ currentTag }}</h1>
            <h1>Торты, для семейного вечера, дня рождения, свадьбы и других событий.</h1>
            <p>Минимальный вес торта для заказа - 2 кг, шаг 500 грамм</p>
            <p>Стоимость оформения оплачивается отдельно.</p>
            <p>Покрытие велюр + 500₽.</p>
            <p>Торт цифра, буква, сердце, звезда, кольцо, бутылка, елка. 1700 кг.</p>
            <p>Мини тортики минимальный заказ 6 шт вес 1,5 кг.</p>
            <p>Птичье молоко 1500 кг - вес примерно 1.2-1.3 + оформление</p>

        </div>
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
                <ProductComponent v-for="filling in currentContents" :key="filling.id" :fil="filling" />
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
    name: "CakeProductPage",
    data() {
        return {
            itemsPerPage: 6,
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
        // ...mapActions(['filterArticles']),

        totalPages() {
            return Math.ceil(this.listFillings.length / this.itemsPerPage);
        },
        paginatedProducts() {
            const pageNumber = this.getCurrentPageNumber();
            const startIndex = (pageNumber - 1) * this.itemsPerPage;
            const endIndex = startIndex + this.itemsPerPage;
            return this.listFillings.slice(startIndex, endIndex);
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
        },
        getListFillings() {
            this.currentContents = this.listFillings;
            this.isListFillings = true;
        }
    },
}
</script>

<style lang="scss" scoped>
@import "@/assets/vars";

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
            color: $colorSelectSite;
        }
    }
}

.product-content {
    padding-bottom: 96px;

    &-wrap {
        min-height: 1720px;
    }

    &__title {
        color: $colorSelectSite;
        text-align: center;
        font-family: DM Serif Display;
        font-size: 50px;
        font-style: normal;
        font-weight: 400;
        line-height: 62.5px;
        letter-spacing: 1px;
        padding-bottom: 50px;
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
        background-color: #222222;
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
            background-color: $colorSelectSite;
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