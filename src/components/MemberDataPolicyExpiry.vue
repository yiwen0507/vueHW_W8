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
                <th>保單號碼</th>
                <th>到期日</th>
            </thead>
            <tbody v-for="(policy_expiry_date, index) in member.policy_expiry_dates" :key="index">
                <td>{{ policy_expiry_date.policy_number }}</td>
                <td :class="{'red-text': policy_expiry_date.expiry_date === minExpiryDate}">
                    {{ policy_expiry_date.expiry_date }}
                </td>
            </tbody>
        </table>
    </form>
</template>

<script>
    export default {
        inject:['member'],
        data() {return {
            minExpiryDate: ""   // 紀錄最快到期日
        }},
        methods: {
            ASC() {
                this.member.policy_expiry_dates.sort((a, b) => {
                    // 将日期字符串转为 Date 对象进行比较
                    const dateA = new Date(a.expiry_date);
                    const dateB = new Date(b.expiry_date);
                    return dateA - dateB; // 升序排序
                });
            },
            DESC() {
                this.member.policy_expiry_dates.sort((a, b) => {
                    // 将日期字符串转为 Date 对象进行比较
                    const dateA = new Date(a.expiry_date);
                    const dateB = new Date(b.expiry_date);
                    return dateB - dateA; // 升序排序
                });
            },
            findMinExpiryDate() {
                let minDate = this.member.policy_expiry_dates[0].expiry_date;
                this.member.policy_expiry_dates.forEach(policy => {
                    if (new Date(policy.expiry_date) < new Date(minDate)) {
                        minDate = policy.expiry_date;
                    }
                });
                // 将最小的日期存储为 minExpiryDate
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