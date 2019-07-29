<template lang="pug">
    
.stages__view
    .stages__scale.phen-700 Увеличить
    .stages__title
    .stages__content
        img.mob(
            :src='require(`@/assets/images/mobile/stages/img-${activeMeter + 1}-${activeButton + 1}.png`)'
            :class="{ 'mx-auto': !text }"
        )
        p(v-if="text") {{text}}
        img.desk(
            :src='require(`@/assets/images/desktop/stages/img-${activeMeter + 1}-${activeButton + 1}.png`)'
            :class="{ 'mx-auto': !text }"
        )        

</template>

<script>
import { mapGetters } from "vuex";

export default {
    computed: {
        ...mapGetters({
            activeButton: "stages/activeButton",
            activeMeter: "stages/activeMeter",
            text: 'stages/text'
        })
    }
}
</script>

<style lang="scss">
.stages {
    &__view {
        margin-top: rem(30);
        width: 100%;        
        background: #fff;
        color: $maincol;
        position: relative;
    }
    &__scale {                
        text-align: right;
        position: absolute; top: 0; right: 0;
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
    .stages {
        &__content {
            padding: rem(50);
            display: flex; align-items: center;            
            p {
                width: rem(300);
                margin-right: rem(140);
            }
        }
    }
}

@media #{$mobile} {
    .stages {
        &__content {
            padding:rem(50) rem(30);
            p {
                margin-top: rem(30);
                
            }
        }
    }
}

</style>
