<template lang="pug">

.layout.phen-400
    .layout__wrap.main-container
        .layout__title
            h2 Таунхаусы 
                span.phen-700 BlackBerry Hills
            h3 Свободная планировка является одним из несомненных преимуществ наших таунхаусов
        layout-controller
        layout-view        

</template>

<script>
import layoutController from "@/components/TheLayoutController";
import layoutView from "@/components/TheLayoutView";

export default {
    components: {
        layoutController, layoutView
    }, 
};
</script>

<style lang="scss">
.layout {
    padding: rem(50) 0;
    &__title {
        text-align: center;
        h2 {
            font-size: rem(36);
        }
        h3 {
            font-size: rem(24);
            margin: rem(20) 0 rem(45);
        }
    }
    &__active {
        background: #fff;
        color: $maincol;        
    }
}

@media #{$desktop} {
    .layout {
        &__active {
            &:hover {
                background: #fff;
                color: $maincol;
            }
        }
    }
}
</style>
