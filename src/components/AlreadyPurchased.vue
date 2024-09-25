<template>
    <div>
      <main>
        <h1>已購買保單</h1>
        <RouterView></RouterView>
        <div class="policy-container">
          <div class="policy-card" v-for:="(product, index) in products" :key="index">
            <h2>{{ product.policyName }}</h2>
            <p>{{ product.policyDesc }}</p>
            <ul >
              <li><strong>年繳保費：</strong> {{ product.pricePerYear }}</li>
              <li><strong>保障金額：</strong> {{ product.coverage }}</li>
              <li><strong>售賣起日：</strong> {{ product.startDate }}</li>
              <li><strong>售賣訖日：</strong> {{ product.endDate }}</li>
              <li><strong>保證續保：</strong> {{ product.guaranteedRenewal }}</li>
              <li v-show="product.guaranteedRenewal === '是'">
                <strong>提前續保：</strong>
                <button @click="goToApply(product.policyName)">我要申請</button>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  </template>
  
  <script>
  import '@/assets/cardStyle.css';
  export default {
    data(){
      return {
        // //保單資料
        // products: [
        //     {
        //         policyCode: '20NNPL',
        //         policyName : '南山人壽新健康終身保險',
        //         policyDesc: '一般壽險/投保年齡0-60歲/保障終身',
        //         pricePerYear: '321 元',
        //         coverage: '1000000 元',
        //         startDate: '2021-01-01',
        //         endDate: '2026-01-01',
        //         guaranteedRenewal: '是',
        //     },
        //     {
        //         policyCode: 'DHI',
        //         policyName : '南山人壽意外傷害險',
        //         policyDesc: '意外給付',
        //         pricePerYear: '123NTD',
        //         coverage: '1000萬',
        //         startDate: '2024/10/10',
        //         endDate: '2025/10/10',
        //         guaranteedRenewal: '否',
        //     },
        // ]

        products: []
      };
    },
    /**
     * 從sessionStorage中取得purchasedPolicies
     * 更新products
     */
    mounted(){
      const purchasedPolicies = JSON.parse(sessionStorage.getItem('purchasedPolicies')) || [];
      this.products = purchasedPolicies;
    },
    methods: {
      goToApply(policyName) {
        this.$router.push(
          { name: 'apply',
            query:{
              name: policyName
            }
          });
      }
    }
};
  </script>