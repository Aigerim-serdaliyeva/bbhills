<template lang="pug">

mixin mobileMenuContentWrap
    .mobile-menu__content-wrap
        .mobile-menu__content-menu
            .mobile-menu__content-toggle(@click="MENU_TOGGLE") 
                img(src="@/assets/images/mobile/menu-close.svg")        
            .mobile-menu__content-logo(@click="goTo('/')")
                img(src="@/assets/images/global/header-logo.svg")
            .mobile-menu__content-phone(@click="goTo('/call')")
                img(src="@/assets/images/mobile/menu-phone.svg")
    
    .mobile-menu__content-main.phen-400
        .mobile-menu__content-link(
            v-for="(item, index) in menu"
            :key="item.id"            
            
        )
            span            
            router-link(                    
                v-if="index === 0"
                @click.native="goToScroll(item.attr.to, item.attr.scroll)"
                to=""
            ) {{item.name}}
            router-link(                    
                v-else-if="index === 1"
                @click.native="goToScroll(item.attr.to, item.attr.scroll)"
                to=""
            ) {{item.name}}
            router-link(                    
                v-else-if="index === 5"
                @click.native="goToScroll(item.attr.to, item.attr.scroll)"
                to=""
            ) {{item.name}}
            router-link(v-else @click.native="MENU_TOGGLE" v-bind="item.attr") {{item.name}}
            span


.mobile-menu
    .mobile-menu__wrap.main-container
        .mobile-menu__toggle(@click="MENU_TOGGLE")
            img(src="@/assets/images/mobile/menu-bar.svg")
        .mobile-menu__logo(@click="goTo('/')")
            img(src="@/assets/images/mobile/menu-logo.svg")
        .mobile-menu__phone(@click="goTo('/call')")
            img(src="@/assets/images/mobile/menu-phone.svg")
         
    .mobile-menu__content(
        :class="{ 'mobile-menu__hidden': !menu_state }"        
    )
        +mobileMenuContentWrap
</template>

<script>
import { createNamespacedHelpers } from "vuex";

const { mapState, mapMutations } = createNamespacedHelpers("menuMobile");

export default {
    data() {
        return {
            menu: require("@/assets/json/menu")
        };
    },
    computed: {
        ...mapState(["menu_state"]),
        currentRoute() {
            return this.$route.path;
        }
    },
    watch: {
        menu_state(isOpen) {
            isOpen
                ? (document.documentElement.style.overflow = "hidden")
                : (document.documentElement.style.overflow = "auto");
        }
    },
    methods: {
        ...mapMutations(["MENU_TOGGLE"]),
        goTo(path) {
            this.$router.push(path);
            this.MENU_TOGGLE();
        },
        goToScroll(path, scrollTo) {
            this.MENU_TOGGLE();
            this.$router.push(path);
            setTimeout(() => {
                this.$scrollTo(scrollTo);
            }, 100);
        }
    }
};
</script>

<style lang="scss">
.mobile-menu {
    transition: 0.3s ease-in-out;
    width: 100%;
    position: relative;
    background: $maincol;
    z-index: 100;
    &__wrap {
        @include flex(space-between, center);
        color: #fff;
        font-size: rem(22);
    }
    &__content {
        position: fixed;
        top: 0;
        left: 0;
        transform: translateY(0);
        transition: 0.2s ease-in-out;
        @include sized(100vh, 100%);
        background: $maincol;
    }
    &__content-wrap {
        padding: rem(27) rem(20) rem(50);
    }
    &__content-link {
        @include flex(center, center);
        & + .mobile-menu__content-link {
            margin-top: rem(30);
        }
        span {
            height: 2px;
            flex: 1;
            background: #fff;
        }
        a {
            display: block;
        }
        span {
            display: none;
        }
        a {
            color: #fff;
            font-size: rem(28);
            padding: 0 rem(10);
        }
    }
    &__content-menu {
        @include flex(space-between, center);
    }
    &__content-active {
        span {
            display: block;
        }
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
    &__logo {
        position: relative;
        top: rem(3);
        img {
            max-width: 80%;
            display: block;
            margin: auto;
        }
    }
}
</style>
