import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
import menuMobile from "./store/menuMobile";
import menuDesktop from "./store/menuSticky";
import layout from "./store/layout";

const store = () =>
    new Vuex.Store({
        modules: {
            menuMobile,
            menuDesktop,
            layout
        }
    });

export default store;
