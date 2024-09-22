<template>
    <div>
        <main>
            <div>
                <h1>保單詳情-[{{productCode }}_{{productName }}]</h1>
                <button type="button" class="btn btn-primary" @click="goBack">回前頁</button>
            </div>
            <div>
                <p>身故給付</p>
                <p>意外給付</p>
            </div>
        </main>
    </div>
</template>

<script>
import '@/assets/myStyle.css';
    export default {
        methods:{
            goBack(){
                this.$router.push({ path: `/insuranceproduct` });
            }
        },
        computed: {
            // 通过 query 获取传递的参数
            productCode() {
                return this.$route.query.code;
            },
            productName () {
                return this.$route.query.name;
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>