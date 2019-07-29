<template lang="pug">

footer.footer#footer
    .footer__wrap.main-container
        .footer__contacts.phen-400
            h2 Контакты
            p(
                v-for="item in contacts"
                :key="item.id"   
                v-html="item.text"             
            ) 
        .footer__info
            .footer__icons
                font-awesome-icon(:icon="['fab', 'facebook']")
                font-awesome-icon(:icon="['fab', 'instagram']")
            h2.phen-400 All Rights Reserved © 2019 «BlackBerry Hills»                

</template>

<script>
export default {
    data() {
        return {
            contacts: require("@/assets/json/footer")
        };
    }
};
</script>

<style lang="scss">
.footer {
    color: #fff;
    &__contacts {
        $mb: rem(20);
        h2 {
            font-size: rem(48);
            margin-bottom: $mb;
            text-transform: uppercase;
        }
        p {
            @include fonted(rem(24), rem(29));
            &:nth-of-type(3),
            &:nth-of-type(5) {
                margin-bottom: $mb;
            }
        }
        a {
            color: #fff;
        }
    }
    &__info {
        text-align: center;
        font-size: rem(30);
        svg + svg {
            margin-left: rem(20);
        }
        h2 {
            font-size: rem(18);
            margin-top: rem(30);
            opacity: 0.4;
        }
    }
}

@media #{$desktop} {
    .footer {
        padding: rem(100) 0 rem(20);
        background: url("~@/assets/images/desktop/footer-bg.jpg");
        @include coverCenter;
        &__contacts {
            width: rem(278);
            text-align: center;
            padding-bottom: rem(280);
        }
    }
}

@media #{$mobile} {
    .footer {
        padding: rem(50) 0;
        &__info {
            margin-top: rem(80);
        }
    }
}
</style>
