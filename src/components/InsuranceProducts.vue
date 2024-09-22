<template>
    <div>
        <main>
        <table class="table table-striped">
            <thead>
                <tr>
                <th>#</th>
                <th>險種號碼</th>
                <th>險種名稱</th>
                <th>保單描述</th>
                <th>年繳保費</th>
                <th>保障金額</th>
                <th>售賣起日</th>
                <th>售賣訖日</th>
                <th>保證續保</th>
                <th>動作</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(product, index) in products" :key="index">
                <td>{{ index + 1 }}</td>
                <td>{{ product.policyCode }}</td>
                <td>{{ product.policyName }}</td>
                <td>{{ product.policyDesc }}</td>
                <td>{{ product.pricePerYear }}</td>
                <td>{{ product.coverage }}</td>
                <td>{{ product.startDate }}</td>
                <td>{{ product.endDate }}</td>
                <td :class="{'green-text': product.guaranteedRenewal === '是', 'red-text': product.guaranteedRenewal === '否'}">
                    {{ product.guaranteedRenewal }}
                </td>
                <td>
                    <button type="button" class="btn btn-primary" @click="goToDetail(product.policyCode, product.policyName)">查看</button>
                    <button type="button" class="btn btn-primary" @click="goToSuccess">購買</button>
                </td>
                </tr>
            </tbody>
        </table>
        </main>
    </div>
</template>

<script>
import '@/assets/myStyle.css';
    export default {
        data() {
            return {
                //保單資料
                products: [
                    {
                        policyCode: '南山人壽新健康終身保險',
                        policyName : '20NNPL',
                        policyDesc: 'for test',
                        pricePerYear: '111NTD',
                        coverage: '123萬',
                        startDate: '2024/10/10',
                        endDate: '2025/10/10',
                        guaranteedRenewal: '是',
                    },
                    {
                        policyCode: '南山人壽意外傷害險',
                        policyName : 'DHI',
                        policyDesc: '意外給付',
                        pricePerYear: '123NTD',
                        coverage: '1000萬',
                        startDate: '2024/10/10',
                        endDate: '2025/10/10',
                        guaranteedRenewal: '否',
                    },
                ]
            };
        },
        methods: {
            goToDetail(policyCode, policyName) {
                this.$router.push({ 
                    path: `/detail`, 
                    query: { 
                        code: policyCode, 
                        name: policyName 
                    } 
                });
            },
            goToSuccess() {
                this.$router.push({ path: `/purchasedsuccess` });
            }
        }
    }
</script>

<style lang="scss" scoped>
.red-text {
    color: red;
}
.green-text{
    color: green;
}
</style>
