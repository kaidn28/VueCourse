<template>
    <div id = "app">
        <hr>
        <h3>Welcome to the fuck yall mom App</h3>  
        <hr>
        <p> Hope you enjoy </p>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    data (){
        return {
        }
    },
    computed: {
        ...mapGetters([
            'money'
        ])
    }
}
</script>

<style scoped>
#app {
    margin: auto;
    text-align: center;
}
</style>