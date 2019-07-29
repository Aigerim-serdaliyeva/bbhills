<template lang="pug">

-
    var info = [
        {
            title: '1-ой очереди',
            text: 'Свободно: 23 из 28'
        }, 
        {
            title: '2-ой очереди',
            text: 'Свободно: 23 из 28'
        }
    ]

.home-townhouse            
    .home-townhouse__wrap.desk-container
        .home-townhouse__content.desk
            each item in info
                .home-townhouse__text
                    article
                        h2.phen-700 ТАУНХАУС 
                        h2.phen-700 !{item.title}
                        p.phen-300 !{item.text}
        .home-townhouse__layout
            img.desk(src="@/assets/images/desktop/home-townhouse-layout.png", alt="")
            img.mob(src="@/assets/images/mobile/home-townhouse-layout.png", alt="")

</template>

<style lang="scss">
.home-townhouse {
    &__wrap {
        position: relative;
    }
    &__layout {
        img {
            display: block;
            margin: auto;
        }
    }
    &__content {
        position: absolute;
        top: rem(220);
        left: 0;
        width: 100%;
    }
    &__text {
        width: 100%;
        &:first-child {
            @include flex(flex-end, center);
            article {
                margin-right: rem(20);
            }
        }
        &:last-child {
            @include flex(flex-start, center);
            position: relative;
            top: rem(94);
            text-align: right;
            article {
                margin-left: rem(15);
            }
        }
        article {
            h2 {
                @include fonted(rem(48), rem(48));
                margin-bottom: rem(9);
            }
            p {
                font-size: rem(24);
            }
        }
    }
}
</style>
