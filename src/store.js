import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import menuMobile from "./store/menuMobile";
import menuDesktop from "./store/menuDesktop";

const store = () =>
    new Vuex.Store({
        modules: {
            menuMobile: menuMobile,
            menuDesktop: menuDesktop
        }
    });

export default store;
