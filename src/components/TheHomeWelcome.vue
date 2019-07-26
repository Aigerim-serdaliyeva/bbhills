<template lang="pug">
    
.home-welcome.by-white
    .home-welcome__wrap.main-container
        .home-welcome__title
            img(src="@/assets/images/desktop/home-welcome-title.svg")
            h2.phen-400 Стиль жизни успешных людей
            img(src="@/assets/images/desktop/home-welcome-grape.svg")
        .home-welcome__call
            call

</template>

<script>
import call from "@/components/Call.vue";

export default {
    components: {
        call
    }
};
</script>

<style lang="scss">
.home-welcome {
    background: url("~@/assets/images/desktop/home-welcome-bg.jpg");
    @include coverCenter;
    padding: rem(140) 0 rem(56);
    &__wrap {
        color: #fff;
    }
    &__title {
        h2 {
            font-size: rem(52);
            padding: rem(25) 0;
            text-transform: uppercase;
        }
        text-align: center;
    }
    &__call {
        display: flex;
        justify-content: flex-end;
    }
}
</style>
