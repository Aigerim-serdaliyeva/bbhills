<template lang="pug">
    
.menu-desktop.bb-white
    .menu-desktop__wrap.main-container
        .menu-desktop__logo(@click="goToIndex")
            img(src="@/assets/images/global/header-logo.svg")
        ul.menu-desktop__nav.phen-400
            li(v-for="(item, index) in menu" :key="item.id")
                router-link(                    
                    v-if="index === 0"
                    @click.native="goTo(item.attr.to, item.attr.scroll)"
                    to=""
                ) {{item.name}}
                router-link(                    
                    v-else-if="index === 1"
                    @click.native="goTo(item.attr.to, item.attr.scroll)"
                    to=""
                ) {{item.name}}
                router-link(                    
                    v-else-if="index === 5"
                    @click.native="goTo(item.attr.to, item.attr.scroll)"
                    to=""
                ) {{item.name}}
                router-link(v-else v-bind="item.attr") {{item.name}}
                        
</template>

<script>
export default {
    data() {
        return {
            menu: require("@/assets/json/menu")
        };
    },
    methods: {
        goToIndex() {
            this.$router.push("/");
            setTimeout(() => {
                this.$scrollTo("#home");
            }, 100);
        },
        goTo(path, scrollTo) {
            this.$router.push(path);
            setTimeout(() => {
                this.$scrollTo(scrollTo);
            }, 100);
        }
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
        cursor: pointer;
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
