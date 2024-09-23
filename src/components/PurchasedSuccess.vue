<template>
    <div>
        <main class="centered-content">
            <h2>{{ productName }}</h2>
            <h2>加保成功!</h2>
            <p>電子保單將以加密附件寄送到您的信箱</p>
            <p>若三日內尚未收到，請與「保戶服務部」聯繫:</p>
            <p>0800-020-060</p>
            <h4>...畫面將於 <span class="blue-text">{{count}}</span> 秒後跳轉至「保險商品頁」... </h4>
            <!-- <router-link to="/insuranceproduct">回到保險商品</router-link> -->
        </main>
    </div>
</template>

<script>
import '@/assets/cardStyle.css';
    export default {
        data () {
            return {
                count: 3
            }
        },
        methods: {
            // 倒數功能
            countDown () {
            // 執行一次，count減1
                if (this.count === 0) {
                    this.$router.push('/insuranceproduct')
                }
                // 每秒執行一次
                setTimeout(() => {
                    this.count--
                    this.countDown()
                }, 1000)

                // setTimeout(function(){
                //     this.count -= 1
                //     this.countDown()
                // }.bind(this), 1000);  // 使用 bind 綁定 this
            }
        },
        computed: {
            productName () {
                return this.$route.query.name;
            }
        },
        mounted () {
            this.countDown()
        }   
    }
</script>

<style lang="scss" scoped>
.centered-content {
  display: flex;
  flex-direction: column;
  justify-content: center; /* 垂直居中 */
  align-items: center; /* 水平居中 */
  min-height: 100vh; /* 使内容居中对齐屏幕高度 */
  text-align: center; /* 文本居中 */
}
.blue-text{
    color:blue
}
</style>