<template>
    <div id="whole">
        <hr>
        <h3> Tìm kiếm: </h3>
        <hr>
        <div>
            
        </div>
        <form>
            <label for="name"> Tên: </label><br>
            <input type="text" id="name" v-model="infor.item_name" placeholder="nhập tên mũi tiêm"><br>
            <label for="minage"> Độ tuổi:</label><br>
            <input type="number" id="minage" name="quantity" min="0" max="99" v-model="infor.age_min" placeholder="0">
            <label for=""> đến: </label>
            <input type="number" id="maxage" name="quantity" min="0" max="99" v-model="infor.age_max" placeholder="99"><br>
            <label for="gender"> Giới tính:</label><br>
            <select name="gender" v-model="infor.gender" >
                <option disabled value=""> Chọn giới tính</option>
                <option> Nam </option>
                <option> Nữ </option>
            </select>
            <br><br>
            <button @click="filter(infor)"> Lọc </button>
        </form>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
    data() {
        return{
            infor: {
                item_name: '',
                age_min: '',
                age_max: '',
                gender: ''
            }
            
        }
    },
    methods: {
        ...mapMutations({
            filter: 'filteritem/filter'
        })
    }
}
</script>

<style scoped>
#whole {
    width: 50%;
    margin: auto
}
form {
    width: 30%;
    text-align: left;
    margin: auto;
}
label {
    margin-top: 2px;
    margin-bottom: 2px;
}
@media screen and (max-width: 800px) {
    #whole {
        width: 80%
    }
    form{
        width: 45%
    }
@media screen and (max-width: 600px){
    #whole {
        width: 100%
    }
    form{
        width: 80%
    }
}
}
</style>