<template>
    <div>
        <h1><strong>保戶園地</strong></h1>
        <p>圖像操作介面，點擊側邊欄位顯示內容</p>
        <RouterView></RouterView>
    </div>
</template>

<script>
export default {
    methods: {
        goToMember() {
            this.$router.push({ 
                name: 'data',
            });
        }
    }
};
</script>

<style lang="scss" scoped>
/* 你可以在這裡添加樣式 */
</style>
