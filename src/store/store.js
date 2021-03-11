import Vue from 'vue'
import Vuex from 'vuex'
import { additem } from './modules/additem'
import { filteritem} from './modules/filteritem'
Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {

    },
    getters:{

    },
    
    modules: {
        additem,
        filteritem
    }
})