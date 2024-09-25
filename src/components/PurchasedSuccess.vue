<template>
    <div>
        <main class="centered-content">
            <h2><strong>{{ productName }}</strong></h2>
            <h2><strong>加保成功!</strong></h2>
            <p>電子保單將以加密附件寄送到您的信箱</p>
            <p>若三日內尚未收到，請與「保戶服務部」聯繫:</p>
            <p>0800-020-060</p>
            <h4>...畫面將於 <span class="blue-text">{{count}}</span> 秒後跳轉至「保險商品頁」... </h4>
             <!-- <RouterLink @click="stopCountdownAndNavigate" to="/insuranceproduct">回到保險商品頁</RouterLink> -->
        </main>
    </div>
</template>

<script>
import '@/assets/cardStyle.css';
    export default {
        data () {
            return {
                count: 3,
                timer: null // 保存計時器
            }
        },
        methods: {
            // 倒數功能
            countDown () {
                if (this.count === 0) {
                    this.$router.push('/insuranceproduct');
                } else {
                    // 每秒執行一次
                    this.timer = setTimeout(() => {
                        this.count--;
                        this.countDown();
                    }, 1000);
                }
            },
            stopCountdownAndNavigate() {
                // 取消倒數
                clearTimeout(this.timer);
                // this.$router.push('/insuranceproduct');
            }
        },
        computed: {
            productName () {
                return this.$route.query.name;
            }
        },
        mounted () {
            this.countDown(); // 開始倒數
        }
    }
</script>

<style lang="scss" scoped>
.centered-content {
  display: flex;
  flex-direction: column;
  justify-content: center; /* 垂直置中 */
  align-items: center; /* 水平置中 */
  text-align: center; /* 文字置中 */
}
.blue-text {
    color: blue;
}
</style>
