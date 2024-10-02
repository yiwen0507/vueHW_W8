<template>
    <div>
        <strong><p style="text-align:center">保戶資料</p></strong>
        <div class="form-container">
            <MemberDataPolicyholder></MemberDataPolicyholder>
            <MemberDataPolicy></MemberDataPolicy>
            <MemberDataPolicyExpiry></MemberDataPolicyExpiry>
        </div>
    </div>
</template>

<script>
import '@/assets/cardStyle.css';
import MemberDataPolicyholder from './MemberDataPolicyholder.vue';
import MemberDataPolicy from './MemberDataPolicy.vue';
import MemberDataPolicyExpiry from './MemberDataPolicyExpiry.vue';
export default {
    components:{
        MemberDataPolicyholder,
        MemberDataPolicy,
        MemberDataPolicyExpiry
    }
};
</script>

<style lang="scss" scoped>
.form-container {
    display: flex; /* 使用 Flexbox 進行排列 */
    justify-content: space-between; /* 使表單之間均勻分佈 */
    flex-wrap: wrap; /* 當空間不夠時自動換行 */
    flex-direction: row;
}
</style>
