<template>
    <div>
        <b-navbar type="dark" variant="dark" toggle="md">
            <b-nav @click="display=false">
                <b-nav-item  active to="/" exact>Home  </b-nav-item>
                <b-nav-item active to="/portfolio"> Portfolio </b-nav-item>
                <b-nav-item active to="/stocks"> Stocks  </b-nav-item>
                
            </b-nav>
            <b-nav id = "right">
                <b-nav-item active v-if="display" class= "market" @click="save"> Save </b-nav-item>
                <b-nav-item active v-if="display" class= "market" @click="load"> Load </b-nav-item>
                <b-nav-item active v-if="display" class= "market" @click="random"> Next Day </b-nav-item>
                <b-nav-item active to="/market" @click="display=true"> Market </b-nav-item>                
            </b-nav>
        </b-navbar>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
    data(){
        return {
            display:false
        }
    },
    computed: {
        ...mapGetters([
            'money',
            'goods'
        ])
    },
    methods: {
        ...mapMutations([
            'random',
            'save',
            'load'
        ])
    }
}
</script>

<style scoped>

a.nav-link{
    color: white
}
#moneyleft{
    text-align: center;
}
a.nav-link:hover {
    background-color: gray;
}
#right {
    margin-left: auto;
}
.market {
    margin-left: 2px;
    font-size: 80%;
    margin-top: 3px
}
</style>
