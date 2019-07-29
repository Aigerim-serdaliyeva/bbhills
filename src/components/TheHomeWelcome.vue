<template lang="pug">
    
.home-welcome.by-white
    .home-welcome__wrap.main-container
        .home-welcome__title.desk
            img(src="@/assets/images/desktop/home-welcome-title.svg")
            h2.phen-400 Стиль жизни успешных людей
            img(src="@/assets/images/desktop/home-welcome-grape.svg")
        .home-welcome__title.mob
            img(src="@/assets/images/mobile/home-welcome-title.svg")
            h2.phen-400 Стиль жизни успешных людей
        .home-welcome__call.desk
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
    @include coverCenter;
    padding: rem(140) 0 rem(56);
    &__wrap {
        color: #fff;
    }
    &__title {
        text-align: center;
        h2 {
            text-transform: uppercase;
        }
    }
    &__call {
        display: flex;
        justify-content: flex-end;
    }
}

@media #{$desktop} {
    .home-welcome {
        background: url("~@/assets/images/desktop/home-welcome-bg.jpg");
        @include coverCenter;
        &__title {
            h2 {
                font-size: rem(52);
                padding: rem(25) 0;
            }
        }
    }
}

@media #{$mobile} {
    .home-welcome {
        // height: 100vh;
        height: rem(600);
        background: url("~@/assets/images/mobile/home-welcome-bg.jpg");
        @include coverCenter;
        &__title {
            h2 {
                font-size: rem(27);
                text-transform: uppercase;
                text-shadow: 0px 4px 19px rgba(0, 0, 0, 0.25);
            }
            img {
                display: block;
            }
        }
    }
}
</style>
