<template lang="pug">

-
    var info = {
        title: 'BlackBerry Hills',
        text: 'BlackBerry Hills – таунхаусы бизнес-класса, расположенные в элитном районе, в 10 минутах от центра города. Это спокойный и экологически чистый район, в котором Вы сможете насладиться тишиной, свежим воздухом и приятными прогулками, не выезжая за пределы города. Прежде чем приступить к строительству, мы кропотливо прорабатывали каждую деталь и тщательно продумывали каждое архитектурное решение. Наши дома наделены особенным характером, подчеркивающим исключительность будущих владельцев.'
    }

.home-about#home-about
    #header__trigger
    .line-white.line-white-def
    .home-about__garden.by-white.mob.mob-def-img
    .home-about__main.by-white.by-0-mob.mob-container
        .home-about__part.phen-400 
            article
                h2= info.title
                p= info.text
        .home-about__part        

</template>

<script>
export default {
    mounted() {}
};
</script>

<style lang="scss">
.home-about {
    &__main {
        h2 {
            font-size: rem(36);
            margin-bottom: rem(40);
        }
        p {
            @include fonted(rem(25), rem(41));
        }
    }
}

@media #{$desktop} {
    .home-about {
        .line-white {
            margin: auto;
        }
        &__main {
            display: flex;
            background: url("~@/assets/images/desktop/home-about-bg.jpg");
            @include coverCenter;
            article {
                width: rem(473);
                padding-right: rem(63);
            }
        }
        &__part {
            padding: rem(50) 0;
            flex: 1;
            &:first-child {
                @include flex(flex-end, center);
                text-align: center;
            }
        }
    }
}

@media #{$mobile} {
    .home-about {
        .line-white {
            margin-left: auto;
            position: relative;
            right: rem(53);
        }
        &__main {
            padding-top: rem(50);
            padding-bottom: rem(20);
        }
        &__garden {
            background: url("~@/assets/images/mobile/home-about-img.jpg");
        }
    }
}
</style>
