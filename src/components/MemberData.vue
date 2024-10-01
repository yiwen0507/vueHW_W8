<template>
    <div>
        <strong><p style="text-align:center">保戶資料</p></strong>
        <div class="form-container">
            <form class="policy-card" novalidate=“true”>
                <h5>個人資料</h5>
                <hr>
                <!-- 姓名 -->
                <div>
                    <label for="policyholder_name">姓名</label>
                    <input type="text" id="policyholder_name" v-model="policyholder_name" :placeholder="member.policyholder_name" @blur="validateName"/>
                </div>
                <!-- 身分證 -->
                <div>
                    <label for="id">身分證號</label>
                    <input type="text" id="id" v-model="id" :placeholder="member.id" @blur="validateId"/>
                </div>
                <!-- 性別 -->
                <div>
                    <label for="gender">性別選擇</label>
                    <select disabled id="gender" v-model="gender">
                        <option value="M">男</option>
                        <option value="F">女</option>
                    </select>
                </div>
                <!-- 生日 -->
                <div>
                    <label for="birthdate">出生日期</label>
                    <input disabled type="date" id="birthdate" v-model="birthdate"/>
                </div>
                <!-- 電話 -->
                <div>
                    <label for="contact_number">聯絡電話</label>
                    <input type="text" id="contact_number" v-model="contact_number" :placeholder="member.contact_number" @blur="validateNumber"/>
                </div>
                <!-- 電子郵件 -->
                <div>
                    <label for="email">電子郵件</label>
                    <input type="email" id="email" v-model="email" :placeholder="member.email" @blur="validateEmail"/>
                </div>
                <!-- 住址 -->
                <div>
                    <label for="address">住址</label>
                    <input disabled type="text" id="address" v-model="address" :placeholder="member.address"/>
                </div>
                <button>編輯</button>
                
                <strong>
                    <div v-if="nameValid === 0 || idValid === 0 || numberValid === 0 || emailValid === 0">
                        <hr>
                    </div>
                    <div v-if="nameValid === 0" >
                        <p class="red-text">X 名字不可空白</p>
                    </div>
                    <div v-if="idValid === 0" >
                        <p class="red-text">X 身分證不可空白</p>
                    </div>
                    <div v-if="numberValid === 0" >
                        <p class="red-text">X 聯絡電話不可空白</p>
                    </div>
                    <div v-if="emailValid === 0" >
                        <p class="red-text">X 電子郵件不可空白</p>
                    </div>
                </strong>
            </form>

            <form class="policy-card">
                <h5>保單資訊</h5>
                <hr>
                <strong><p>保單號碼</p></strong>
                <li v-for="(policie , index) in member.policies " :key="index">
                    {{ policie }}
                </li>
                <strong><p>已有保固</p></strong>
                <li v-for="(existing_coverage , index) in member.existing_coverages " :key="index">
                    {{ existing_coverage }}
                </li>
            </form>

            <form class="policy-card">
                <h5>繳費及到期日資訊</h5>
                <hr>
                <strong><p>繳費頻率:{{ member.premium_payment_frequency }}</p></strong>
                <strong><p>近期保單到期日:</p></strong>
                <button>up</button>
                <button>down</button>
                <table class="table table-bordered">
                    <thead>
                        <th>保單號碼</th>
                        <th>到期日</th>
                    </thead>
                    <tbody v-for="(policy_expiry_date, index) in member.policy_expiry_dates" :key="index">
                        <td>{{ policy_expiry_date.policy_number }}</td>
                        <td>{{ policy_expiry_date.expiry_date }}</td>
                    </tbody>
                </table>
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
            policyholder_name: "",
            id: "",
            gender: "",
            birthdate: "",
            contact_number: "",
            email: "",
            address: "",
            nameValid: -1,
            idValid: -1,
            numberValid: -1,
            emailValid: -1,
        };
    },
    methods: {
        validateName() {
            if (this.policyholder_name.trim() === "") {
                this.nameValid = 0;
            } else {
                this.nameValid = 1;
            }
        },
        validateId() {
            if (this.id.trim() === "") {
                this.idValid = 0;
            } else {
                this.idValid = 1;
            }
        },
        validateNumber() {
            if (this.contact_number.trim() === "") {
                this.numberValid = 0;
            } else {
                this.numberValid = 1;
            }
        },
        validateEmail() {
            if (this.email.trim() === "") {
                this.emailValid = 0;
            } else {
                this.emailValid = 1;
            }
        },
        
    }
};
</script>

<style lang="scss" scoped>
.form-container {
    display: flex; /* 使用 Flexbox 進行排列 */
    justify-content: space-between; /* 使表單之間均勻分佈 */
    flex-wrap: wrap; /* 當空間不夠時自動換行 */
}

.red-text{
    color: red;
}
</style>
