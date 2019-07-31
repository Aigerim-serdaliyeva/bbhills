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
            component: () => import("./views/TheHome")
        },
        {
            path: "/gallery",
            name: "gallery",
            component: () => import("./views/TheGalery")
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
        },
        {
            path: "/call",
            name: "call",
            component: () => import("./views/TheCallback")
        }
    ]
});

Vue.use(Router);
Vue.use(Meta);

export default router;
