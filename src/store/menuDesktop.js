const MENU_VISIBLE = "MENU_VISIBLE";
const MENU_HIDDEN = "MENU_HIDDEN";
const MENU_TOGGLE = "MENU_TOGGLE"

export default {
    namespaced: true,
    state: {
        menu_state: false
    },
    mutations: {
        [MENU_VISIBLE](state) {
            state.menu_state = true;
        },
        [MENU_HIDDEN](state) {
            state.menu_state = false;
        },
        [MENU_TOGGLE](state) {
            state.menu_state = !state.menu_state
        }

    }
};
