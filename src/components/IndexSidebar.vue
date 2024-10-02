<template>
    <aside>
        <h2>快速導航</h2>
        <ul>
            <li><RouterLink to="/homepage">首頁</RouterLink></li>
            <li><RouterLink to="/products">保險商品</RouterLink></li>
            <li><RouterLink to="/alreadypurchased">已購保單</RouterLink></li>
            <li><RouterLink to="/member" @click="goToMember">保戶園地</RouterLink></li>
            <li><RouterLink to="/member/memberdata" v-if="isClick === true">&emsp;-保戶資料</RouterLink></li>
            <li><RouterLink to="/news">最新消息</RouterLink></li>
            <li><RouterLink to="/about">關於南山</RouterLink></li>
        </ul>
    </aside>
    <button type="button" id="toggle-sidebar">&lt;&lt;</button>
    <!-- 初始為收合狀態的按鈕 -->
</template>

<script>
    export default {
        data(){return{
            isClick: false,
        }},
        methods:{
            goToMember(){
                this.isClick = !this.isClick
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>