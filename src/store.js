import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
import menuMobile from "./store/menuMobile";
import menuDesktop from "./store/menuSticky";
import stages from "./store/stages";

const store = () =>
    new Vuex.Store({
        modules: {
            menuMobile,
            menuDesktop,
            stages
        }
    });

export default store;
