<template>
   <form class="policy-card" novalidate=“true” v-on:submit.prevent>
        <h5>個人資料</h5>
        <hr>
        <!-- 姓名 -->
        <div>
            <label for="policyholder_name">姓名</label>
            <input :disabled="isDisable" type="text" id="policyholder_name" v-model="policyholder_name" @blur="validateName"/>
            <!-- <input :disabled="isDisable" type="text" id="policyholder_name" v-model="policyholder_name"/> -->
        </div>
        <!-- 身分證 -->
        <div>
            <label for="id">身分證號</label>
            <input :disabled="isDisable" type="text" id="id" v-model="id" @blur="validateId"/>
            <!-- <input :disabled="isDisable" type="text" id="id" v-model="id"/> -->
        </div>
        <!-- 性別 -->
        <div>
            <label for="gender">性別選擇</label>
            <select :disabled="isDisable" id="gender" v-model="gender">
                <option value="male">男</option>
                <option value="female">女</option>
            </select>
        </div>
        <!-- 生日 -->
        <div>
            <label for="birthdate">出生日期</label>
            <input :disabled="isDisable" type="date" id="birthdate" v-model="birthdate"/>
        </div>
        <!-- 電話 -->
        <div>
            <label for="contact_number">聯絡電話</label>
            <input :disabled="isDisable" type="text" id="contact_number" v-model="contact_number" @blur="validateNumber"/>
            <!-- <input :disabled="isDisable" type="text" id="contact_number" v-model="contact_number"/> -->
        </div>
        <!-- 電子郵件 -->
        <div>
            <label for="email">電子郵件</label>
            <input :disabled="isDisable" type="email" id="email" v-model="email" @blur="validateEmail"/>
            <!-- <input :disabled="isDisable" type="email" id="email" v-model="email" /> -->
        </div>
        <!-- 住址 -->
        <div>
            <label for="address">住址</label>
            <input :disabled="isDisable" type="text" id="address" v-model="address"/>
        </div>
        <button v-show="isEdit === false" @click="edit">編輯</button>
        <button v-show="isEdit === true" @click="save">儲存</button>
        <button v-show="isEdit === true" @click="cancel">取消</button>
        
        <strong>
            <div v-if="nameValid === 0 || idValid === 0 || numberValid === 0 || emailValid === 0">
                <hr>
            </div>
            <div v-if="nameValid === 0" >
                <strong><p class="red-text">X 名字不可空白</p></strong>
            </div>
            <div v-if="idValid === 0" >
                <strong><p class="red-text">X 身分證格式錯誤</p></strong>
            </div>
            <div v-if="numberValid === 0" >
                <strong><p class="red-text">X 聯絡電話格式錯誤</p></strong>
            </div>
            <div v-if="emailValid === 0" >
                <strong><p class="red-text">X 電子郵件格式錯誤</p></strong>
            </div>
        </strong>
    </form>
</template>

<script>
// import { inject } from 'vue';

    export default {
        inject: ['member'],
        data(){return{
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
            isDisable: true,
            isEdit: false,
            originalData: {},   // 存儲原始資料
        }},
        methods: {
            edit(){
                this.isDisable = !this.isDisable
                this.isEdit = !this.isEdit
            },
            save(){
                this.validateName()
                this.validateId()
                this.validateNumber()
                this.validateEmail()
                if(this.nameValid === 0 || this.idValid === 0 || this.numberValid === 0 || this.emailValid === 0){
                    alert("儲存失敗")
                    return
                }
                alert("儲存成功")
                this.isDisable = !this.isDisable
                this.isEdit = !this.isEdit
                // 保存更新
                this.originalData = { ...this.$data };  // 儲存當前表單資料
            },
            cancel(){
                Object.assign(this.$data, this.originalData);
                this.isDisable = true;
                this.isEdit = false;
            },
            validateName() {
                if (this.policyholder_name.trim() === "") {
                    this.nameValid = 0;
                } else {
                    this.nameValid = 1;
                }
            },
            validateId() {
                if (this.id.trim() === "" || this.checkId(this.id) === false) {
                    this.idValid = 0;
                } else {
                    this.idValid = 1;
                }
            },
            validateNumber() {
                if (this.contact_number.trim() === "" || this.checkNumber(this.contact_number) === false) {
                    this.numberValid = 0;
                } else {
                    this.numberValid = 1;
                }
            },
            validateEmail() {
                if (this.email.trim() === "" || this.checkEmail(this.email) === false) {
                    this.emailValid = 0;
                } else {
                    this.emailValid = 1;
                }
            },
            checkId(id) {
                const checkHead = "ABCDEFGHJKLMNPQRSTUVWXYZIO";
                //判斷長度
                if (id.length !== 10) {
                    return false;
                }
                //判斷第一位的字母有沒有在表中&第二位的數字是不是1或2
                let charId = id.toUpperCase().split('');
                if (checkHead.indexOf(charId[0]) === -1 || (charId[1] !== '1' && charId[1] !== '2')) {
                    return false;
                }

                let sum = 0;
                const intId = [];
                intId[0] = checkHead.indexOf(charId[0]) + 10;
                sum += Math.floor(intId[0] / 10);
                intId[0] %= 10;

                for (let i = 1; i < 10; i++) {
                    intId[i] = Number(charId[i]);
                }
                for (let i = 0; i < 9; i++) {
                    intId[i] *= (9 - i);
                    sum += intId[i];
                }
                // sum % 10 == 0 -> 符合驗證
                return (10 - sum % 10) % 10 === intId[9];
            },
            checkNumber(number) {
                // 正則表達式
                // 0XXX-XXX-XXX
                const regex = /^0\d{3}-\d{3}-\d{3}$/;
                if (!regex.test(number)) {
                    return false;
                }
                return true;
            },
            checkEmail(email){
                const regex = /^[^\s@]+@[^\s@]+\.com(\.[^\s@]+)?$/;
                if (!regex.test(email)) {
                    return false;
                }
                return true;
            },
        },
        mounted() {
            this.policyholder_name = this.member.policyholder_name
            this.id = this.member.id
            this.gender = this.member.gender;
            this.birthdate = this.member.birthdate;
            this.contact_number = this.member.contact_number
            this.email = this.member.email
            this.address = this.member.address
            // 儲存初始狀態資料
            this.originalData = { ...this.$data };
        }
    }
</script>

<style scoped>
.red-text{
    color: red;
}
</style>