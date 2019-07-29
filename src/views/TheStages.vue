<template lang="pug">

.stages.phen-400
    .stages__wrap.main-container
        .stages__title
            h2 Таунхаусы 
                span.phen-700 BlackBerry Hills
            h3 Свободная планировка является одним из несомненных преимуществ наших таунхаусов
        stages-controller
        stages-view        

</template>

<script>
import stagesController from "@/components/TheStagesController";
import stagesView from "@/components/TheStagesView";

export default {
    components: {
        stagesController, stagesView
    }, 
};
</script>

<style lang="scss">
.stages {
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
    .stages {
    }
}
</style>
