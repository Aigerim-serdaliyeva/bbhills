<template lang="pug">
    
.call
    .call__wrap
        h2.phen-700 Оставьте заявку и я свяжусь с вами, в удобное для вас время!
        form.phen-400
            h3 Ваше имя
            input(type="text" ) 
            h3 Ваш телефон
            input(type="text" ) 
            h3 E-mail
            input(type="text")
            h3 Удобное время для звонка
            input(type="text")
            button.phen-400(type="submit") Отправить

</template>

<script>
export default {};
</script>

<style lang="scss">
.call {
    display: inline-block;
    padding: rem(9.8);
    width: rem(289);
    background: $maincol;
    text-align: center;
    &__wrap {
        padding: rem(35) rem(20);
        border: 2px solid #fff;
    }
    form {
        padding: rem(15) 0 0;
    }
    input {
        font-family: Phenomena;
        font-weight: 400;
        background: transparent;
        border: 1px solid #fff;
        width: 80%;
        color: #fff;
        padding: rem(5) rem(10);
        text-align: center;
        &:not(:last-of-type) {
            margin: rem(4) 0 rem(8);
        }
        &:last-of-type {
            margin-top: rem(4);
        }
    }
    h2 {
        @include fonted(rem(18), rem(22));
    }
    h3 {
        font-size: rem(18);
    }
    button {
        margin-top: rem(15);
        background: #fff;
        padding: rem(4) rem(24);
        @include fonted(rem(18), rem(22));
        color: $maincol;
    }
}
</style>
