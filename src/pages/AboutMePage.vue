<template>
    <section class="content center">
        <img :src="imgAboutMe" alt="photo">
        <div>
            <h2></h2>
            <p></p>
        </div>
    </section>
</template>

<script>
import { mapState} from 'vuex';

    export default {
        computed:{
            ...mapState(['imgAboutMe'])
        }
    }
</script>

<style lang="scss" scoped>
@import "@/assets/vars";
</style>