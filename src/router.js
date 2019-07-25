import Vue from "vue";
import Router from "vue-router";
import Meta from "vue-meta";
const router = new Router({
    mode: "history",
    scrollBehavior() {
        return { x: 0, y: 0 };
    },
    routes: [
        {
            path: "/",
            name: "home",
            component: () => import("./views/TheHome.vue")
        },
        {
            path: "/galery",
            name: "galery",
            component: () => import("./views/TheGalery.vue")
        },
        {
            path: "/layout",
            name: "layout",
            component: () => import("./views/TheLayout")
        },
        {
            path: "/stages",
            name: "stages",
            component: () => import("./views/TheStages")
        }
    ]
});

Vue.use(Router);
Vue.use(Meta);

export default router;
