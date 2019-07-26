<template lang="pug">

.home-presentation
    .home-presentation__main
        .home-presentation__hidden
        .home-presentation__wrap.main-container
            .line-white.line-white-def
            .home-presentation__img
                img(src='@/assets/images/desktop/home-presentation-bg-1.jpg', alt="")        
        
        .home-presentation__hidden
        
    .home-presentation__main
        .home-presentation__wrap.main-container
            .home-presentation__description.phen-400
                h2(v-html="title")
                ul
                    li(v-for="item in list") {{item.text}}
                .home-presentation__gift
                    img(src='@/assets/images/desktop/home-presentation-gift.png')
                    h3.phen-700 Терраса в подарок


</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        },
        list: {
            type: Array,
            required: true
        }
    }
};
</script>

<style lang="scss">
.home-presentation {
    &__description {
        h2 {
            @include fonted(rem(36), rem(36));
        }
        h3 {
            text-transform: uppercase;
            margin-top: rem(5);
            font-size: rem(22);
        }
        li {
            @include fonted(rem(24), rem(38));
        }
    }
    &__gift {
        text-align: center;
    }
}

@media #{$desktop} {
    .home-presentation {
        &__first {
            .home-presentation__hidden {
                &:last-child {
                    border-bottom: 4px solid #fff;
                }
            }
            .home-presentation__description {
                border-right: 4px solid #fff;
            }
        }
        &__second {
            .line-white {
                display: none;
            }
            .home-presentation__hidden {
                &:first-child {
                    border-top: 4px solid #fff;
                }
            }
            .home-presentation__description {
                border-left: 4px solid #fff;
            }
        }
        &__main {
            display: flex;
        }
        &__hidden {
            flex: 1;
        }
        &__img {
            border: 4px solid #fff;
            img {
                display: block;
            }
        }
        &__description {
            padding: rem(55) rem(40);
            @include flex(space-between, center);
            h2 {
                text-align: center;
            }
            ul {
                width: rem(590);
            }
        }
    }
}
</style>
