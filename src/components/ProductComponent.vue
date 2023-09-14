<template>
    <div class="product">
        <img class="product__img" :src="fil.img">
        <a class="product__title" href="/catalog">{{ fil.name }}</a>
        <!-- <h2 class="product__title">{{ fil.name }}</h2> -->
        <p class="product__text product__text-price">{{ fil.price }} руб/кг</p>
        <p class="product__text">{{ fil.description }}</p>
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
    gap: 16px;
    text-align: justify;

    &__img {
        height: 500px;
        object-fit: cover;
        border-radius: 20px 20px 20px 20px;
    }

    &__title {
        color: $colorTextBlack;
        font-family: DM Serif Display;
        font-size: 25px;
        font-style: normal;
        font-weight: 700;
        line-height: 31.25px;
        letter-spacing: 0.5px;
        &:hover{
            color: $colorSite;
        }
    }

    &__text {
        color: $colorFont;
        font-family: Jost;
        font-size: 22px;
        font-style: normal;
        font-weight: 400;
        line-height: 33px;
        letter-spacing: 0.22px;
        padding-bottom: 24px;
    }

    &__text-price {
        padding-bottom: 16px;
        color: $colorSite;
        font-weight: 700;
    }
}
</style>