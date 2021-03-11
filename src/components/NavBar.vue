<template>
    <div>
        <b-navbar type="dark" variant="dark" toggle="md">
            <b-nav>
                <b-nav-item  active to="/" exact> Hướng dẫn  </b-nav-item>
                <b-nav-item active to="/add"> Thêm  </b-nav-item>
                <b-nav-item active to="/filter"> Lọc  </b-nav-item>
                <b-nav-item active to="/listitems"> Danh sách </b-nav-item>
            </b-nav>
        </b-navbar>
    </div>
    
</template>

<script>
export default {
    
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
</style>