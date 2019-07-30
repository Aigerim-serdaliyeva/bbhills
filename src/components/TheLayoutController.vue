<template lang="pug">    

.layout__controller
    article(
        v-for="(item, index) in layout"
        :key="item.id"
    )
        .layout__meter(
            @click="setMeter(index)"
            :class="{'layout__active': activeMeter == index} "
        )
            | {{item.meter}} кв.м.
        .layout__choose(v-if="activeMeter == index")
            .layout__button(
                v-for="(childItem, childIndex) in item.quantity"
                :key="`layout-button-${childIndex}`"
                @click="setButton({ index: childIndex, text: childItem.text })"
                :class="{'layout__active': activeButton == childIndex} "
            ) 
                | {{childIndex + 1}} 

</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
    data() {
        return {
            layout: require("@/assets/json/layout")            
        };
    },
    computed: {
        ...mapGetters({
            activeButton: "layout/activeButton",
            activeMeter: "layout/activeMeter"
        })
    },
    methods: {
        ...mapActions({
            setMeter: "layout/setMeter",
            setButton: "layout/setButton"
        })
    }
};
</script>

<style lang="scss">
.layout {
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
}

@media #{$desktop} {
    .layout {
        &__button {
            @include fonted(rem(24), rem(29));   
        }
        &__meter, &__button {        
            &:hover {
                background: #61394C;                        
            }
        } 
    }
}

@media #{$mobile} {
    .layout {         
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
