<template lang="pug">    

.stages__controller
    article(
        v-for="(item, index) in stages"
        :key="item.id"
    )
        .stages__meter(
            @click="setMeter(index)"
            :class="{'stages__active': activeMeter == index} "
        )
            | {{item.meter}} кв.м.
        .stages__choose(v-if="activeMeter == index")
            .stages__button(
                v-for="(childItem, childIndex) in item.quantity"
                :key="`stages-button-${childIndex}`"
                @click="setButton({ index: childIndex, text: childItem.text })"
                :class="{'stages__active': activeButton == childIndex} "
            ) 
                | {{childIndex + 1}} 

</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
    data() {
        return {
            stages: require("@/assets/json/stages")            
        };
    },
    computed: {
        ...mapGetters({
            activeButton: "stages/activeButton",
            activeMeter: "stages/activeMeter"
        })
    },
    methods: {
        ...mapActions({
            setMeter: "stages/setMeter",
            setButton: "stages/setButton"
        })
    }
};
</script>

<style lang="scss">
.stages {
    &__controller {
        display: flex;
        position: relative;
        article {
            flex: 1;
            text-align: center;            
            // & + article {
            //     border-left: 1px solid $maincol;
            // }            
        }
    }
    &__meter {
        @include fonted(rem(30), rem(36));
        padding: rem(4) 0;
        cursor: pointer;             
    }    
    &__choose {
        display: flex;
    }
    &__button {
        flex: 1;
        cursor: pointer;             
    }
    &__meter, &__button {        
        &:hover {
            background: #fff;            
            color: $maincol;
        }
    } 
}

@media #{$desktop} {
    .stages {
        &__button {
            @include fonted(rem(24), rem(29));   
        }
    }
}

@media #{$mobile} {
    .stages {         
        &__controller {
            margin-bottom: rem(60);
        }  
        &__choose {
            position: absolute; bottom: rem(-50); left: 0;
            width: 100%;
        }   
        &__button {
            @include fonted(rem(30), rem(36));
        }
    }
}
</style>
