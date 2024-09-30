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
        <nav> 
            <P><RouterLink to="/homepage">首頁</RouterLink> </P>
            <P v-for="(crumb, index) in breadcrumbs" :key="index">
                <RouterLink v-if="index !== breadcrumbs.length && crumb.meta.breadcrumb !== '首頁'" :to="crumb.path">
                    &gt;
                   {{ crumb.meta.breadcrumb }}
                </RouterLink>
            </P>
        </nav>
  </div>
</template>

<script>
    export default {
        data(){return{
            logo: require('@/assets/images/NanShan-Logo.jpeg'), // Image path
        }},
        computed: {
            breadcrumbs() {
                let matchedRoutes = this.$route.matched;
                return matchedRoutes.filter(route => route.meta && route.meta.breadcrumb);
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>