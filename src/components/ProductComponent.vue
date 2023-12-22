<template>
    <div class="product">
        <img class="product__img" :src="fil.img">
        <a class="product__title" href="/catalog">{{ fil.name }}</a>
        <div>
            <p class="product__text product__text-price">{{ fil.price }} руб/кг</p>
            <p class="product__text">{{ fil.description }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "ProductComponent",
    props: {
        fil: Object,
    },
}
</script>

<style lang="scss" scoped>
@import "@/assets/vars";

.product {
    display: flex;
    flex-direction: column;
    gap: 8px;

    &__img {
        height: 500px;
        object-fit: cover;
        border-radius: 20px 20px 20px 20px;
    }

    &__title {
        color: $colorTextBlack;
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        line-height: 31.25px;
        letter-spacing: 0.5px;
        min-height: 60px;

        &:hover {
            color: $colorSite;
        }
    }

    &__text {
        color: $colorFont;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 33px;
        letter-spacing: 0.22px;
        text-align: justify;
        padding-bottom: 24px;
    }

    &__text-price {
        padding-bottom: 16px;
        color: $colorSite;
        font-weight: 700;
    }
}

@media (max-width: 1024px) {
    .product {
        &__title {
            font-size: 20px;
        }

        &__text {
            display: none;
        }

        &__img {
            height: 400px;
        }
    }
}

@media (max-width: 767px) {
    .product__img {
        height: 300px;
    }
    .product__title{
        text-align: center;
    }
}
</style>