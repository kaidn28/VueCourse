<template>
    <div>
        <p>Your Fund: ${{money}}</p>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    computed: {
        ...mapGetters([
            'money'
        ])
    }
}
</script>

<style scoped>
div{
    text-align: center;
}
</style>