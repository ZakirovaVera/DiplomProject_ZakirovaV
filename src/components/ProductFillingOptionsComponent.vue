<template>
    <div class="product-text__btn">
        <button class="product-text__btn-btn" :class="{ isActive }" @click="isActive = !isActive">{{ filOpt.name }}</button>
        <div class="animation" v-show="isActive">
            <p v-for="el in filOpt.text" :key="el">{{ el }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProductFillingOptionsComponent',
    props: {
        filOpt: Object,
        isActive: Boolean,
    },
}
</script>

<style lang="scss" scoped>
@import "@/assets/vars";

.product-text__btn {
    padding-top: 20px;
    width: 100%;
    display: flex;
    flex-direction: column;

    &-btn {
        background: $colorFon;
        border-radius: 10px;
        padding: 8px 10px;
        border: 2px solid $colorSite;
        color: $colorFont;
        font-size: 22px;
        font-style: normal;
        font-weight: 400;
        line-height: 33px;
        letter-spacing: 0.22px;

    }

    &-btn:hover {
        background: $colorSite;
        color: $colorFon;
    }

}

.isActive {
    background: $colorSite;
    color: $colorFon;
}

.animation {
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
</style>