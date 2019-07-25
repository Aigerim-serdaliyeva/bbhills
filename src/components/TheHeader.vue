<template lang="pug">
    
header.header#header 
    the-nav
    .header__space
    #header__trigger
    .header__space

</template>

<script>
import TheNav from "@/components/TheNav";
import headerFixed from "@/mixins/headerFixed";

export default {
    mixins: [headerFixed],
    components: {
        TheNav
    }
};
</script>

<style lang="scss">
.header__space {
}

#header__trigger {
}
</style>
