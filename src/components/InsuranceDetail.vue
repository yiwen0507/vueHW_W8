<template>
    <div>
        <main>
            <div>
                <h1>保單詳情-【{{productCode }}_{{productName }}】</h1>
                <button type="button" class="btn btn-primary" @click="goBack">回前頁</button>
            </div>
            <div>
                <ul v-for="(detail, index) in details" :key="index">
                    <li>{{ detail }}</li>
                </ul>
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
            // query傳遞參數
            productCode() {
                return this.$route.query.code;
            },
            productName () {
                return this.$route.query.name;
            },
            details() {
                const detail_1 = this.$route.query.detail_1 || '';
                const detail_2 = this.$route.query.detail_2 || '';
                const detail_3 = this.$route.query.detail_3 || '';
                // detail組成組數
                return [detail_1, detail_2, detail_3].filter(detail => detail !== '');
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>