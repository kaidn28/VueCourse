<template>
    <div>
        <div>
            <hr>
            <h3> Giá các con hàng trên thị trường:</h3>
            <hr>
            <p> Ngày thứ: {{ day }}</p>
        </div>
        <div v-for="(g,i) in goods" :key="i" class = "item">
            <item>
                <div class = "content">
                    <h3> Con hàng: {{g.id}}</h3>
                    <p> Giá mua vào: {{g.price_in }}</p>
                    <p> Giá bán ra: {{g.price_out}}</p>
                    <p> Giá thay đổi so với hôm qua: {{ g.change }}</p>
                </div>                
            </item>

        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
import Item from './Item'
export default {
    computed: {
        ...mapGetters([
            'goods',
            'day'
        ])
    },
    components: {
        'item': Item
    }
}
</script>

<style scoped>
.item {
    margin: 20px;
    padding: 5px;
    display: flex;
    flex-direction: row;
    background-color: whitesmoke;
    border-style: solid;
    border-color: black;
    border-width: 2px;
}
.content {
    text-align: left;
}
</style>