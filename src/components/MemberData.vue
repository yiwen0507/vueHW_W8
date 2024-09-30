<template>
    <div>
        <h1>保戶資料</h1>
        <div class="form-container">
            <form class="policy-card" novalidate=“true”>
                <h5>個人資料</h5>
                <hr>
                
                <!-- 姓名輸入框 -->
                <div class="form-group">
                    <label for="policyholderName">姓名</label>
                    <input disabled type="text" id="policyholderName" v-model="formData.policyholderName" :placeholder="member.policyholderName" />
                </div>

                <!-- 身分證號輸入框 -->
                <div class="form-group">
                    <label for="id">身分證號</label>
                    <input disabled type="text" id="id" v-model="formData.id" :placeholder="member.id"/>
                </div>

                <!-- 性別選擇 -->
                <div class="form-group">
                    <label for="gender">性別選擇</label>
                    <select disabled id="gender" v-model="formData.gender">
                        <option value="男">男</option>
                        <option value="女">女</option>
                    </select>
                </div>
                
                <!-- 出生日期 -->
                <div class="form-group">
                    <label for="birthdate">出生日期</label>
                    <input disabled type="date" id="birthdate" v-model="formData.birthdate"/>
                </div>
                
                <!-- 連絡電話 -->
                <div class="form-group">
                    <label for="contact_number">連絡電話</label>
                    <input disabled type="text" id="contact_number" v-model="formData.contact_number" :placeholder="member.contact_number"/>
                </div>
                
                <!-- 電子郵件 -->
                <div class="form-group">
                    <label for="email">電子郵件</label>
                    <input disabled type="email" id="email" v-model="formData.email" :placeholder="member.email"/>
                </div>
                
                <!-- 住址 -->
                <div class="form-group">
                    <label for="address">住址</label>
                    <input disabled type="text" id="address" v-model="formData.address" :placeholder="member.address"/>
                </div>
                <button>編輯</button>
            </form>

            <form class="policy-card">
                <h5>保單資訊</h5>
                <hr>
            </form>

            <form class="policy-card">
                <h5>繳費及到期日資訊</h5>
                <hr>
            </form>
        </div>
    </div>
</template>

<script>
import '@/assets/cardStyle.css';
export default {
    inject: ['member'],
    data() {
        return {
            formData: {
                policyholderName: "",
                id: "",
                gender: "",
                birthdate: "",
                contact_number: "",
                email: "",
                address: ""
            }
        };
    }
};
</script>

<style lang="scss" scoped>
.policy-card {
    margin: 10px; /* 表單之間的間距 */
    padding: 20px; /* 表單內部的間距 */
    border: 1px solid #ccc; /* 表單邊框 */
    border-radius: 4px; /* 表單圓角 */
    flex: 1; /* 使表單在可用空間中平均分配 */
}

.form-container {
    display: flex; /* 使用 Flexbox 進行排列 */
    justify-content: space-between; /* 使表單之間均勻分佈 */
    flex-wrap: wrap; /* 當空間不夠時自動換行 */
}

.form-group {
    display: flex; /* 使用 Flexbox 進行排列 */
    align-items: center; /* 垂直置中 */
    margin-bottom: 10px; /* 每個字段的下邊距 */
}
</style>
