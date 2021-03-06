import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
import axios from 'axios'
export const store = new Vuex.Store({
    state: {
        money: 1000,
        day: 1,
        goods: {
            sm: {
                id: 'Sơn Trịnh',
                price_in: 100,
                price_out: 80,
                fucks: 0,
                change: 0
            }, 

            tm: {
                id: 'Trân Nguyễn',
                price_in: 200,
                price_out: 160,
                fucks: 0,
                change: 0
            },
            vm: {
                id: 'Vink Vink',
                price_in: 150,
                price_out: 120,
                fucks: 0, 
                change: 0
            }
        }
            
    },
    getters:{
        goods: state => {
            return state.goods
        },
        money: state => {
            return state.money
        },
        totalfucks: state => {
            return state.goods.sm.fucks + state.goods.tm.fucks + state.goods.vm.fucks
        },
        day: state => {
            return state.day
        }
    },
    mutations: {
        fuck: (state, {target, times}) => {
            times = parseInt(times)
            target.fucks+=times;
            state.money-=(target.price_in*times);
        },
        unfuck: (state, {target, times}) => {
            times = parseInt(times)
            target.fucks-=times;
            state.money+=(target.price_out*times);
        },
        save: state => {
            console.log(state)
            axios.put('https://simpleweb-d1e05-default-rtdb.firebaseio.com/state.json', state)
            .then(alert('saved'))
            .catch(err => console.log(e))
        },
        load: state => {
            axios.get('https://simpleweb-d1e05-default-rtdb.firebaseio.com/state.json')
            .then(res => {
                var data = res.data
                state.day = data.day
                state.goods = data.goods
                state.money = data.money
                alert("loaded")    
            }).catch(err => console.log(err))
        },
        random: state => {
            
            for(var g in state.goods){
                var random_int = Math.floor(Math.random()*10) - 4
                state.goods[g].price_in += Math.floor(random_int * 0.8);
                state.goods[g].price_out+= random_int;
                state.goods[g].change = random_int
            };
            state.day++;
        }
            
    },

    actions: {

    }
})