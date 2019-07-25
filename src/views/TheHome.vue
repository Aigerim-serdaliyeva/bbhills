<template lang="pug">
    .home#home 
        welcome
        about 
        townhouse
        advantages
        presentation
        order

</template>

<script>
import welcome from "@/components/TheHomeWelcome.vue";
import about from "@/components/TheHomeAbout.vue";
import townhouse from "@/components/TheHomeTownhouse.vue";
import advantages from "@/components/TheHomeAdvantages.vue";
import presentation from "@/components/HomePresentation.vue";
import order from "@/components/TheHomeOrder.vue";

export default {
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
