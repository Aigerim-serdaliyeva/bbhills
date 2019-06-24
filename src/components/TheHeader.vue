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
    height: 1000px;
}

#header__trigger {
    @include sized(100px, 100px);
    min-width: 100px; min-height: 100px;
    background: #000;
}
</style>
