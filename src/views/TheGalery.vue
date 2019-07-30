<template lang="pug">

.gallery.bb-white(
    :style="{ 'background-image': 'url(' + background +')' }"
)
    .gallery__wrap
        .gallery__content
            .gallery__slider
                img(
                    class='gallery__slider-item'
                    v-for="(item, index) in 4"
                    :key="`gallery-${index}`"
                    :src="require(`@/assets/images/desktop/gallery/main-${index + 1}.jpg`)"
                    @click="setBackground(index + 1)"
                )

</template>

<script>
import $ from "jquery";
window.Jquery = $;
import slick from "slick-carousel";

export default {
    data() {
        return {
            backgroundIndex: 1
        };
    },
    computed: {
        background() {
            return require(`@/assets/images/desktop/gallery/main-big-${
                this.backgroundIndex
            }.jpg`);
        }
    },
    mounted() {
        let self = this;

        $(".gallery__slider").slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            draggable: false,
            prevArrow: `<button class="gallery__arrow gallery__arrow-left">
                            
                        </button>
            `,
            nextArrow: `<button class="gallery__arrow gallery__arrow-right">
                            
                        </button>
            `,
            responsive: [
                {
                    breakpoint: 960,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });

        $(".gallery__slider").on(
            "beforeChange",
            (event, slick, currentSlide, nextSlide) => {
                self.backgroundIndex = nextSlide + 1;
            }
        );
    },
    methods: {
        setBackground(index) {
            this.backgroundIndex = index;
        }
    }
};
</script>

<style lang="scss">
.gallery {
    @include coverCenter;
    &__arrow {
        img {
            @include sized(rem(50), rem(50));
        }
    }
    &__content {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
    }
    &__arrow {
        position: absolute;
        outline: none;
        z-index: 1;
        @include sized(rem(50), rem(50));
    }
    &__arrow-left {
        top: 0;
        bottom: 0;
        margin: auto;
        background: url("~@/assets/images/global/stages-arrow-left.svg");
        @include coverCenter;
    }
    &__arrow-right {
        top: 0;
        bottom: 0;
        margin: auto;
        background: url("~@/assets/images/global/stages-arrow-right.svg");
        @include coverCenter;
    }
}

@media #{$desktop} {
    .gallery {
        &__wrap {
            margin: auto;
            @include sized(100vh, 100%);
        }
        &__content {
            width: rem(700);
        }
        &__arrow {
            &::before {
                @include pseudo;
                top: 0;
                bottom: 0;
                margin: auto;
                @include sized(4px, rem(100));
                background: #fff;
            }
        }
        &__arrow-left {
            left: rem(-100);
            &::before {
                left: 70%;
            }
        }
        &__arrow-right {
            right: rem(-100);
            &::before {
                right: 70%;
            }
        }
        .slick-slide {
            margin: 0 rem(10);
            position: relative;
            z-index: 2;
            &::before {
                @include pseudo;
                top: 0;
                bottom: 0;
                right: rem(-23);
                margin: auto;
                @include sized(4px, rem(30));
                background: #fff;
                z-index: -1;
            }
        }
        /* the parent */
        .slick-list {
            margin: 0 rem(-10);
            z-index: 3;
        }
    }
}

@media #{$mobile} {
    .gallery {
        margin-bottom: rem(300);
        &__content {
            width: 70%;
        }
        &__wrap {
            height: rem(500);
        }
        &__arrow-left {
            left: rem(-40);
        }
        &__arrow-right {
            right: rem(-40);
        }
    }
}
</style>
