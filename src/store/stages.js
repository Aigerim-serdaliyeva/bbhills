const SET_BUTTON = "SET_BUTTON";
const SET_METER = "SET_METER";

export default {
    namespaced: true,
    state: {
        activeMeter: 0,
        activeButton: 0
    },
    getters: {
        activeMeter: state => state.activeMeter,
        activeButton: state => state.activeButton
    },
    mutations: {
        [SET_BUTTON](state, payload) {
            state.activeButton = payload;
        },
        [SET_METER](state, payload) {
            state.activeMeter = payload;
        }
    },
    actions: {
        setMeter({ commit }, payload) {
            commit(SET_METER, payload);
        },
        setButton({ commit }, payload) {
            commit(SET_BUTTON, payload);
        }
    }
};
