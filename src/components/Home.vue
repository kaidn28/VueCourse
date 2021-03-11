<template>
    <div id = "whole">
        <hr>
        <h3> Hướng dẫn sử dụng</h3>
        <hr>
        <div id="tutorial">
            <p>Bấm vào <b> Thêm </b> để thêm một mũi tiêm mới vào cơ sở dữ liệu. </p>
            <p>Bấm vào <b> Lọc </b> để chọn mũi tiêm phù hợp với thông tin bệnh nhân. </p>
            <p>Bấm vào <b> Danh sách </b> để xem các loại mũi tiêm đang có. </p>
        </div>
        
    </div>
    
</template>

<script>
export default {
    
}
</script>

<style scoped>

#whole {
    width: 50%;
    margin: auto
}
#tutorial {
    text-align: left;
    width: 65%;
    margin: auto
}
@media screen and (max-width: 800px) {
    #whole {
        width: 80%
    }
    #tutorial{
        width: 80%
    }
@media screen and (max-width: 600px){
    #whole {
        width: 100%
    }
    #tutorial{
        width: 95%
    }
}
}
</style>