<template>
    <div>
        <h4 class="red-text">已申請提前續保:【"{{productName}}"】，請等待專人聯繫</h4>
    </div>
</template>

<script>
    export default {
        computed:{
            productName () {
                return this.$route.query.name
            }
        }
    }
</script>

<style lang="scss" scoped>
.red-text {
    color: red;
}
</style>
