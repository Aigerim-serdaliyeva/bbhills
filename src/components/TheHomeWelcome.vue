<template lang="pug">
    
.home-welcome
    .home-welcome__wrap.main-container
        .home-welcome__title
            img(src="@/assets/images/desktop/home-welcome-title.svg")
            h2.phen-400 Стиль жизни успешных людей
            img(src="@/assets/images/desktop/home-welcome-grape.svg")
        .d-flex
            .home-welcome__call
                .home-welcome__call__wrap
                    h2.phen-700 Оставьте заявку и я свяжусь с вами, в удобное для вас время!
                    input(type="text" )

</template>

<style lang="scss">
.home-welcome {
    background: url("~@/assets/images/desktop/home-welcome-bg.png");
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
        margin-left: auto;
        display: inline-block;
        padding: rem(9.8);
        width: rem(289);
        background: $maincol;
        text-align: center;
        &__wrap {
            padding: rem(35) rem(20);            
        }
        input {
            font-family: Phenomena;
            font-weight: 400;
        }
    }
}
</style>
