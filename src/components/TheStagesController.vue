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
            | {{item.meter}}
        .stages__choose(v-if="activeMeter == index")
            .stages__button(
                v-for="(childItem, childIndex) in 3"
                :key="`stages-button-${childIndex}`"
                @click="setButton(childIndex)"
            ) 
                | {{childIndex}} 

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
        article {
            flex: 1;
        }
    }
}

@media #{$desktop} {
    .stages {
    }
}
</style>
