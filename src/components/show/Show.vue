<template>
    <div>
        <filter-section></filter-section>
        <result></result>
    </div>
</template>

<script>
import Filter from './Filter'
import Result from './Result'
export default {
    data(){
        return {

        }
    },
    components: {
        'filter-section': Filter,
        'result': Result
    }
}
</script>