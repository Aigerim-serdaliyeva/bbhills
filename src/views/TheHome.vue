<template lang="pug">
    .home#home 
        welcome
        about 
        townhouse
        advantages
        presentation(
            v-for="item in presentation"
            :key="item.id"
            :title="item.title"
            :list="item.list"
            :class="item.class"
        )
        order

</template>

<script>
import welcome from "@/components/TheHomeWelcome.vue";
import about from "@/components/TheHomeAbout.vue";
import townhouse from "@/components/TheHomeTownhouse.vue";
import advantages from "@/components/TheHomeAdvantages.vue";
import presentation from "@/components/HomePresentation.vue";
import order from "@/components/TheHomeOrder.vue";
import headerFixed from "@/mixins/headerFixed";

export default {
    mixins: [headerFixed],
    data() {
        return {
            presentation: require("@/assets/json/presentation")
        };
    },
    components: {
        welcome,
        about,
        townhouse,
        advantages,
        presentation,
        order
    }
};
</script>
