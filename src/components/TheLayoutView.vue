<template lang="pug">
    
.layout__view
    .layout__scale.phen-700 Увеличить
    .layout__title
    .layout__content
        img.mob(
            :src='require(`@/assets/images/mobile/layout/img-${activeMeter + 1}-${activeButton + 1}.png`)'
            :class="{ 'mx-auto': !text }"
        )
        p(v-if="text") {{text}}
        img.desk(
            :src='require(`@/assets/images/desktop/layout/img-${activeMeter + 1}-${activeButton + 1}.png`)'
            :class="{ 'mx-auto': !text }"
        )        

</template>

<script>
import { mapGetters } from "vuex";

export default {
    computed: {
        ...mapGetters({
            activeButton: "layout/activeButton",
            activeMeter: "layout/activeMeter",
            text: "layout/text"
        })
    }
};
</script>

<style lang="scss">
.layout {
    &__view {
        margin-top: rem(30);
        width: 100%;
        background: #fff;
        color: $maincol;
        position: relative;
    }
    &__scale {
        text-align: right;
        position: absolute;
        top: 0;
        right: 0;
        padding: rem(10) rem(10) 0 0;
        text-transform: uppercase;
        font-size: rem(20);
        cursor: pointer;
    }
    &__content {
        p {
            @include fonted(rem(24), rem(29));
            color: $maincol;
        }
        img {
            display: block;
        }
    }
}

@media #{$desktop} {
    .layout {
        &__content {
            padding: rem(50);
            display: flex;
            align-items: center;
            p {
                width: rem(300);
                margin-right: rem(140);
            }
        }
    }
}

@media #{$mobile} {
    .layout {
        &__content {
            padding: rem(50) rem(30);
            p {
                margin-top: rem(30);
            }
        }
    }
}
</style>
