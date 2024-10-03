<template>
    <form class="policy-card" v-on:submit.prevent>
        <h5>繳費及到期日資訊</h5>
        <hr>
        <strong><p>繳費頻率:{{ member.premium_payment_frequency }}</p></strong>
        <strong><p>近期保單到期日:</p></strong>
        <button @click="ASC">ASC</button>
        <button @click="DESC">DESC</button>
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>保單號碼</th>
                    <th>到期日</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(policy_expiry_date, index) in member.policy_expiry_dates" :key="index">
                    <td>{{ policy_expiry_date.policy_number }}</td>
                    <td :class="{'red-text': policy_expiry_date.expiry_date === minExpiryDate}">
                        {{ policy_expiry_date.expiry_date }}
                    </td>
                </tr>
            </tbody>
        </table>
    </form>
</template>

<script>
    export default {
        inject:['member'],
        data() {return {
            minExpiryDate: ""
        }},
        methods: {
            ASC() {
                this.member.policy_expiry_dates.sort((a, b) => {
                    const dateA = new Date(a.expiry_date);
                    const dateB = new Date(b.expiry_date);
                    // 升序排序
                    return dateA - dateB; 
                });
            },
            DESC() {
                this.member.policy_expiry_dates.sort((a, b) => {
                    const dateA = new Date(a.expiry_date);
                    const dateB = new Date(b.expiry_date);
                    // 降序排序
                    return dateB - dateA; 
                });
            },
            findMinExpiryDate() {
                let minDate = this.member.policy_expiry_dates[0].expiry_date;
                this.member.policy_expiry_dates.forEach(policy => {
                    if (new Date(policy.expiry_date) < new Date(minDate)) {
                        minDate = policy.expiry_date;
                    }
                });
                // 紀錄minExpiryDate
                this.minExpiryDate = minDate;
            }
        },
        mounted() {
            // 找到最小的日期
            this.findMinExpiryDate();
        }
    }
</script>

<style scoped>
.red-text{
    color: red;
}
</style>