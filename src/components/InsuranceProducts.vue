<template>
    <div>
        <main>
        <table class="table table-bordered">
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
                <td><p>{{ index + 1 }}</p></td>
                <td><p>{{ product.policyCode }}</p></td>
                <td><p>{{ product.policyName }}</p></td>
                <td><p>{{ product.policyDesc }}</p></td>
                <td><p>{{ product.pricePerYear }}</p></td>
                <td><p>{{ product.coverage }}</p></td>
                <td><p>{{ product.startDate }}</p></td>
                <td><p>{{ product.endDate }}</p></td>
                <td :class="{'green-text': product.guaranteedRenewal === '是', 'red-text': product.guaranteedRenewal === '否'}">
                    {{ product.guaranteedRenewal }}
                </td>
                <td>
                    <button type="button" class="btn btn-primary" @click="goToDetail(product)">查看</button>
                    <button type="button" class="btn btn-primary" @click="goToSuccess(product)">購買</button>
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
                products: [
                    {
                        policyCode: '20NNPL',
                        policyName : '南山人壽新健康終身保險',
                        policyDesc: '一般壽險/投保年齡0-60/保障終身',
                        pricePerYear: '111NTD',
                        coverage: '123萬',
                        startDate: '2024/10/10',
                        endDate: '2025/10/10',
                        guaranteedRenewal: '是',
                        policyDetail:[
                            "身故給付，保障金額100萬",
                            "意外身故給付，保障金額為200萬",
                            "全殘給付，保障金額為220萬",
                        ]
                    },
                    {
                        policyCode: 'DHI',
                        policyName : '南山人壽意外傷害險',
                        policyDesc: '意外日額/投保年齡0-64/最高保障至75歲',
                        pricePerYear: '123NTD',
                        coverage: '1000萬',
                        startDate: '2024/10/10',
                        endDate: '2025/10/10',
                        guaranteedRenewal: '否',
                        policyDetail:[
                            "1111",
                            "2222",
                            "3333",
                            "4444"
                        ]
                    },
                ]
            };
        },
        methods: {
            goToDetail(product) {
                this.$router.push({ 
                    path: `/detail`, 
                    query: { 
                        code: product.policyCode, 
                        name: product.policyName ,
                        details: product.policyDetail
                    } 
                });
            },
            /**
             * 先取得當前的session內容 -> sessionStorage.getItem()
             * 使用 JSON.parse() 將這個字串轉換回 JavaScript 的物件或陣列
             * session只能存字串 -> 需要將物件先轉字串再存進session
             * JSON.stringify() 將 JavaScript 的物件或陣列轉換成 JSON 格式的字串
             * 將新增後的狀態存入session -> sessionStorage.setItem
             */
            goToSuccess(product) {
                let purchasedPolicies = JSON.parse(sessionStorage.getItem('purchasedPolicies')) || [];
                purchasedPolicies.push(product);
                sessionStorage.setItem('purchasedPolicies', JSON.stringify(purchasedPolicies));

                this.$router.push({ 
                    path: `/purchasedsuccess`,
                    query:{
                        name: product.policyName,
                    }
                });
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
