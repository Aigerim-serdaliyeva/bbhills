<template lang="pug">
    
.stages
    .stages__wrap.desk-container
        .stages__title.phen-400 Ход строительства
        .stages__slider
            img(
                v-for="(item, index) in 21"
                :key="`build-${index}`"
                :src='require(`@/assets/images/desktop/stages/build_${index + 1}.jpg`)'
            )
        .stages__info.mob-container
            .stages__arrows 
            .stages__date     
                .stages__caption(
                    v-for="item in date"
                    :key="item.id"
                )
                    .stages__time.phen-300 {{item.date}} 
                    .stages__filtered-line                    
                    .stages__filtered-line.stages__filtered-line-circle    
                        .stages__holder
                            span
                            span
                        .stages__vertical-line
                    .stages__text.phen-300 
                        .stages__filtered-line    
                        p {{item.text}}
                        .stages__filtered-line    

</template>

<script>
import $ from "jquery";
window.Jquery = $;
import slick from "slick-carousel";

export default {
    data() {
        return {
            date: require("@/assets/json/stages-date.json")
        };
    },
    mounted() {
        $(".stages__slider").slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            centerMode: true,
            draggable: false,
            centerPadding: "0px",
            focusOnSelect: true,
            appendArrows: $(".stages__arrows"),
            prevArrow: `<button class="stages__arrow stages__arrow-left">
                            <img src="static/stages-arrow-left.svg">
                        </button>
            `,
            nextArrow: `<button class="stages__arrow stages__arrow-left">
                            <img src="static/stages-arrow-right.svg">
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

        $(".stages__date").slick({
            infinite: true,
            arrows: false,
            draggable: false,
            touchMove: false
        });

        $(".stages__slider").on(
            "beforeChange",
            (event, slick, currentSlide, nextSlide) => {
                $(".stages__date").slick("slickGoTo", nextSlide);
            }
        );
    }
};
</script>

<style lang="scss">
.stages {
    text-align: center;
    &__title {
        text-transform: uppercase;
        margin: rem(50) 0;
        font-size: rem(36);
    }
    &__arrows {
        width: 100%;
        @include flex(space-between, centerPadding);
    }
    &__filtered-line {
        position: relative;
        @include sized(1px, 100%);
        background: linear-gradient(
            to right,
            rgba(0, 0, 0, 0) 0%,
            rgba(255, 255, 255, 0) 1%,
            rgba(255, 255, 255, 1) 51%,
            rgba(0, 0, 0, 0) 100%
        );
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00000000', endColorstr='#00000000',GradientType=1 );
    }
    &__filtered-line-circle {
        &::before {
            @include pseudo;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            margin: auto;
            @include sized(rem(7), rem(7));
            background: #fff;
            border-radius: 100%;
            opacity: 0;
            transition: opacity 0.4s 0.4s;
        }
    }
    &__time {
        font-size: rem(30);
        text-transform: uppercase;
        margin-bottom: rem(18);
        position: relative;
        display: inline-block;
        &::before {
            @include pseudo;
            bottom: rem(-5);
            left: 0;
            @include sized(1px, 100%);
            background: linear-gradient(
                to right,
                rgba(0, 0, 0, 0) 0%,
                rgba(255, 255, 255, 0) 1%,
                rgba(255, 255, 255, 1) 51%,
                rgba(0, 0, 0, 0) 100%
            );
            filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00000000', endColorstr='#00000000',GradientType=1 );
            opacity: 0;
            transition: opacity 0.4s 0.4s;
        }
    }
    &__holder {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        @include flex(space-between, center);
        transition: width 0.4s 0.4s;
        span {
            @include sized(rem(15), 1px);
            background: #fff;
        }
    }
    &__vertical-line {
        position: absolute;
        top: rem(-9);
        left: 0;
        right: 0;
        margin: auto;
        @include sized(rem(40), 1px);
        transition: height 0.4s 0.4s;
        background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0) 0%,
            rgba(255, 255, 255, 1) 25%,
            rgba(255, 255, 255, 1) 50%,
            rgba(255, 255, 255, 1) 75%,
            rgba(0, 0, 0, 0) 100%
        );
    }
    &__text {
        margin-top: rem(60);
        @include fonted(rem(24), rem(29));
        p {
            padding: rem(10) 0;
        }
    }
}

@media #{$desktop} {
    .stages {
        &__title {
            font-size: rem(36);
        }
        &__slider {
            .slick-center {
                transform: scale(1.4);
                img {
                    border: 4px solid #ffffff;
                }
            }
            .slick-active {
                padding: 60px 0;
                transition: transform 0.3s ease-in-out;
            }
            .slick-slide:not(.slick-active) {
                margin: 60px 0;
            }
        }
        &__holder {
            width: rem(50);
        }
        &__info {
            .slick-current {
                .stages__holder {
                    width: rem(600);
                }
                .stages__vertical-line {
                    height: rem(60);
                }
                .stages__filtered-line::before {
                    opacity: 1;
                }
                .stages__time::before {
                    opacity: 1;
                }
            }
        }
    }
}

@media #{$mobile} {
    .stages {
        img {
            display: block;
        }
        &__arrows {
            margin-top: rem(20);
        }
        &__arrow {
            img {
                @include sized(rem(50), rem(50));
            }
        }
        &__holder {
            width: rem(50);
        }
        &__info {
            .slick-current {
                .stages__holder {
                    width: 70%;
                }
                .stages__vertical-line {
                    height: rem(60);
                }
                .stages__filtered-line::before {
                    opacity: 1;
                }
                .stages__time::before {
                    opacity: 1;
                }
            }
        }
    }
}
</style>
