<template lang="pug">

mixin mobileMenuContentWrap
    .mobile-menu__content-wrap
        .mobile-menu__content-toggle(@click="MENU_TOGGLE") Click        

.mobile-menu
    .mobile-menu__wrap
        .mobile-menu__toggle(@click="MENU_TOGGLE") Click
    .mobile-menu__content(
        :class="{ 'mobile-menu__hidden': !menu_state }"        
    )
        +mobileMenuContentWrap
</template>

<script>
import { createNamespacedHelpers } from "vuex";

const { mapState, mapMutations } = createNamespacedHelpers("menuMobile");

export default {
    computed: {
        ...mapState(["menu_state"])
    },
    watch: {
        menu_state(isOpen) {
            isOpen
                ? (document.documentElement.style.overflow = "hidden")
                : (document.documentElement.style.overflow = "auto");
        }
    },
    methods: {
        ...mapMutations(["MENU_TOGGLE"])
    }
};
</script>

<style lang="scss">
.mobile-menu {
    width: 100%;
    position: relative;
    &__wrap {
        padding: rem(10);
        @include flex(space-between, center);
        border-bottom: 1px solid #000;
    }
    &__content {
        position: fixed;
        top: 0;
        left: 0;
        transform: translateY(0);
        transition: 0.3s ease-in-out;
        @include sized(100vh, 100%);
        background: blue;
    }
    &__content-toggle {
        padding: rem(10);
        position: absolute;
        top: 0;
        left: 0;
    }
    &__hidden {
        visibility: hidden;
        transform: translateX(-100%);
    }
    &__sticky {
        position: fixed;
        top: 0;
        left: 0;
    }
}
</style>
