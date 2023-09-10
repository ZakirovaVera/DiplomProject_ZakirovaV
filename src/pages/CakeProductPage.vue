<template>
    <section class="product-content center">
        <div class="product-content-wrap">
            <h1 class="product-content__title">Начинки Тортов</h1>
            <div class="product-box">
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
import ProductComponent from '@/components/ProductComponent.vue';
import { mapState } from 'vuex';

export default {
    name: "CakeProductPage",
    data() {
        return {
            itemsPerPage: 6,
        }
    },
    components: {
        ProductComponent,
    },
    computed: {
        ...mapState(['listFillings']),
        totalPages() {
            return Math.ceil(this.listFillings.length / this.itemsPerPage);
        },
        paginatedProducts() {
            const pageNumber = this.getCurrentPageNumber();
            const startIndex = (pageNumber - 1) * this.itemsPerPage;
            const endIndex = startIndex + this.itemsPerPage;
            return this.listFillings.slice(startIndex, endIndex);
        },
    },
    methods: {
        getCurrentPageNumber() {
            const pageNumberParam = parseInt(this.$route.params.pageNumber);
            return isNaN(pageNumberParam) || pageNumberParam < 1 ? 1 : pageNumberParam;
        },
        getPageLink(pageNumber) {
            return `/cake/${pageNumber}`;
        },
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
    padding-top: 60px;
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

.product-box {
    display: grid;
    grid-template-columns: repeat(3, 360px);
    gap: 30px;
    justify-content: space-evenly;
}
</style>