<template lang="pug">
    
.call
    .call__wrap
        .call__circle
            img(src="@/assets/images/global/call-circle-bg.png")
        h2.phen-700 Оставьте заявку и я свяжусь с вами, в удобное для вас время!
        form.phen-400(@submit.prevent="submit")
            h3 Ваше имя
            input(type="text" v-model="name" required) 
            h3 Ваш телефон
            input(type="text" v-model="phone" required) 
            h3 E-mail
            input(type="text" v-model="email")
            h3 Удобное время для звонка
            input(type="text" v-model="time")
            button.phen-400(type="submit") {{buttonText}}

</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            name: "",
            phone: null,
            email: "",
            time: "",
            buttonText: "Отправить",
            publicPath: process.env.BASE_URL
        };
    },
    methods: {
        submit() {
            this.buttonText = "Отправляется...";
            const data = {
                name: this.name,
                phone: this.phone,
                email: this.email,
                time: this.time
            };

            axios.post(`${this.publicPath}/mailer.php`, data).then(() => {
                this.buttonText = "Заявка отправлена";
            });
        }
    }
};
</script>

<style lang="scss">
.call {
    display: inline-block;
    padding: rem(9.8);
    width: rem(289);
    background: $maincol;
    text-align: center;
    position: relative;
    &__wrap {
        padding: rem(35) rem(20);
        border: 2px solid #fff;
    }
    &__circle {
        position: absolute;
        bottom: 90%;
        left: 0;
        right: 0;
        margin: auto;
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
        font-size: rem(18);
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

@media #{$mobile} {
    .call {
        width: 95%;
        display: block;
        margin: rem(170) auto 0;
        padding: 0;
        &__circle {
            bottom: 95%;
        }
        h2 {
            @include fonted(rem(24), rem(29));
        }
        h3 {
            font-size: rem(22);
        }
        form {
            padding: rem(20);
        }
        input {
            &:not(:last-of-type) {
                margin: rem(8) 0 rem(16);
            }
            &:last-of-type {
                margin-top: rem(8);
            }
        }
        button {
            font-size: rem(30);
            margin-top: rem(30);
            padding: rem(10) rem(30);
        }
    }
}
</style>
