<template>
    <div>
        <slot></slot>     
        <button v-if="!buying" @click="buying = !buying" > Unfuck </button>
        <template v-else>
            <input type="number" placeholder="How many times?" v-model="times"><br>
            <button @click="unfuck({target:it, times:times})"> Confirm </button>
            <button @click.prevent="buying = false"> Cancel</button> 
        </template>   
    </div>
</template>

<script>
import { mapGetters, mapMutations} from 'vuex'
export default {
    props: {
        it: Object
    },
    data(){
        return {
            buying: false,
            times: 0
        }
    },
    methods: {
        ...mapMutations([
            'unfuck'
        ])
    }
}
</script>

<style scoped>
    
</style>