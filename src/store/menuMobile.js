const MENU_TOGGLE = "MENU_TOGGLE";

export default {
    namespaced: true,
    state: {
        menu_state: false
    },
    mutations: {
        [MENU_TOGGLE](state, payload) {
            if (!payload) {
                state.menu_state = payload;
                return;
            }
            state.menu_state = !state.menu_state;
        }
    }
};
