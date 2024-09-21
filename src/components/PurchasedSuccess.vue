<template>
    <div>
        <main>
            <h1>SUCCESS</h1>
            <p>該頁將在 <span>{{count}}</span> 秒後自動跳轉 </p>
            <router-link to="/insuranceproduct">回到保險商品</router-link>
        </main>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                count: 6
            }
        },
        methods: {
            // 倒數功能
            countDown () {
            // 執行一次，count減1
                this.count--
                if (this.count === 0) {
                    this.$router.push('/insuranceproduct')
                }
                // 每秒執行一次
                setTimeout(() => {
                    this.countDown()
                }, 1000)
            }
        },
        mounted () {
            this.countDown()
        }   
    }
</script>

<style lang="scss" scoped>

</style>