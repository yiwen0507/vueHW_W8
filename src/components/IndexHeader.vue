<template>
    <header>
        <img :src="logo" width="5%" alt="Logo" />
        <nav>
            <RouterLink to="/homepage">首頁</RouterLink>
            <RouterLink to="/products">保險商品</RouterLink>
            <RouterLink to="/about">關於我們</RouterLink>
            <RouterLink to="/contact">聯絡我們</RouterLink>
        </nav>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    </header>
    <div class="breadcrumbs">
        <RouterLink to="/homepage">首頁</RouterLink> &gt;
        <RouterLink to="/products">保險商品</RouterLink> &gt;
        產品詳情
    </div>
</template>

<script>
    export default {
        data(){return{
            logo: require('@/assets/images/NanShan-Logo.jpeg'), // Image path
        }}
    }
</script>

<style lang="scss" scoped>

</style>