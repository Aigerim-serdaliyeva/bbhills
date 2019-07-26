<template lang="pug">
    
.menu-desktop
    .menu-desktop__wrap.main-container
        .menu-desktop__logo
            img(src="@/assets/images/global/header-logo.svg")
        ul.menu-desktop__nav.phen-400
            li(v-for="item in menu" :key="item.id")
                router-link(v-bind="item.attr") {{item.name}}
                        
</template>

<script>
export default {
    data() {
        return {
            menu: require("@/assets/json/menu")
        };
    }
};
</script>

<style lang="scss">
.menu-desktop {
    transition: 0.3s ease-in-out;
    background: $maincol;
    z-index: 10;
    &__logo {
        align-self: center;
    }
    &__wrap {
        @include flex(space-between, flex-start);
    }
    &__nav {
        color: #fff;
        height: 100%;
        display: flex;
        li {
            height: 100%;
            & + li {
                margin-left: rem(40);
            }
        }
        a {
            color: #fff;
            padding: rem(20) 0;
            height: 100%;
            @include flex(center, center);
            font-size: rem(24);
        }
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
