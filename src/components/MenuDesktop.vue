<template lang="pug">
    
.menu-desktop
    .menu-desktop__wrap.main-container.mx-auto
        nav.menu-desktop__nav
            a link

</template>

<script>
export default {};
</script>

<style lang="scss">
.menu-desktop {
    transition: 0.3s ease-in-out;
    &__wrap {
        border: 1px solid #000;
    }
    &__nav {
        @include flex(flex-start, center);
    }
    &__hidden {
        transform: translateY(-100%);
        visibility: hidden;
    }
    &__sticky {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
    }
}
</style>
