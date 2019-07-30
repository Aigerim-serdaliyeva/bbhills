const SET_BUTTON = "SET_BUTTON";
const SET_METER = "SET_METER";
const SET_TEXT = "SET_TEXT";
import layout from "@/assets/json/layout"

export default {
    namespaced: true,
    state: {
        activeMeter: 0,
        activeButton: 0,
        text: layout[0].quantity[0].text,        
    },
    getters: {
        activeMeter: state => state.activeMeter,
        activeButton: state => state.activeButton,
        text: state => state.text
    },
    mutations: {
        [SET_BUTTON](state, payload) {
            state.activeButton = payload.index;
            state.text = payload.text
        },
        [SET_METER](state, payload) {
            state.activeMeter = payload;
            state.activeButton = 0;
            state.text = layout[payload].quantity[0].text
        },
        [SET_TEXT] (state, payload) {
            state.text = payload
        }
    },
    actions: {
        setMeter({ commit }, payload) {
            commit(SET_METER, payload);
        },
        setButton({ commit }, payload) {
            commit(SET_BUTTON, payload);
        },
        setText({commit}, payload) {
            commit(SET_TEXT, payload)
        }
    }
};
