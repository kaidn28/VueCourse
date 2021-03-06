<template>
    <div>
        <hr>
        <h3>Danh sách nô lệ:</h3>
        <hr>
        <div id="flexbox">
            <div v-for=" (t,i) in goods" :key="t+i" class = "targets">
                <add :it="t">
                    <div>
                        <h2> {{t.id }} </h2>
                        <h3> fuck fare: {{t.price_in}} </h3>
                        <p>You fucked this chick {{t.fucks}} times. Another round?</p>
                    </div>
                </add>
            </div>        
        </div>
    </div>
</template>

<script>
import Add from './Add'
import  {mapGetters, mapMutations } from 'vuex'

export default {
    data(){
        return {
        }
    },
    components: {
        'add': Add
    },
    computed: {
        ...mapGetters([
            'goods'
        ]),
    },
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
button{
    margin-top: 5px;
}
</style>