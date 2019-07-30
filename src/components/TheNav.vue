<template lang="pug">

.nav#nav
    menu-mobile.mob
    menu-mobile.mob.menu-desktop__sticky(
        :class="{ 'menu-desktop__hidden': !menu_state }"
    )
    menu-desktop.desk
    menu-desktop.desk.menu-desktop__sticky(
        :class="{ 'menu-desktop__hidden': !menu_state }"
    )
    

</template>

<script>
import MenuMobile from "@/components/MenuMobile";
import MenuFixed from "@/components/MenuFixed";
import MenuDesktop from "@/components/MenuDesktop";
import { mapState } from "vuex";

export default {
    components: {
        MenuMobile,
        MenuFixed,
        MenuDesktop
    },
    computed: {
        ...mapState("menuDesktop", ["menu_state"])
    }
};
</script>
