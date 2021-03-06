<template>
    <div>
        <div>
            <hr>
            <h3 v-if="totalfucks===0"> You fucking virgin</h3>
            <hr>
        </div>
        <div id = "flexbox">
            

            <div v-for=" (t,i) in goods" :key="t+i" >
                <div class = "targets" v-if="t.fucks> 0">
                    <subtract :it="t">
                        <h2> {{t.id }} </h2>
                        <h3> unfuck reward: {{t.price_out}} </h3>
                        <p>You fucked this chick {{t.fucks}} times. Do you wanna unfuck her? </p>
                    </subtract>
                </div>
            </div>        
        </div>
    </div>
</template>

<script>
import Subtract from './Subtract'
import  {mapGetters, mapMutations } from 'vuex'
export default {
    data(){
        return {
            times: 0
        }
    },
    components: {
        'subtract': Subtract
    },
    computed: {
        ...mapGetters([
            'goods', 
            'totalfucks',
            'price_in',

        ])
    },
    methods: {
        ...mapMutations([
            'fuck',
            'unfuck', 
        ])
    }
}
</script>

<style scoped>
#flexbox {
    display: flex;
    flex-direction: row;
    justify-content:center;
}
.targets{
    margin: 10px;
    border-color: black;
    border-style: solid;
    border-width: 3px;
    padding: 10px;
    background-color: whitesmoke;
}
button {
    margin-top: 5px
}

</style>