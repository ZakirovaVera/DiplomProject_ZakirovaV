<template>
    <div class="product-text__btn">
        <button @click="isShow = !isShow">{{ filOpt.name }}</button>
        <div class="animation" v-show="isShow">
            <p v-for="el in filOpt.text" :key="el">{{ el }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProductFillingOptionsComponent',
    // data: {
    //     isShow: false,
    // },
    props: {
        filOpt: Object,
        isShow: Boolean,
    }
}
</script>

<style lang="scss" scoped>
@import "@/assets/vars";

.product-text__btn {
    padding-top: 20px;

    & button {
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

}

.animation {
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
}</style>