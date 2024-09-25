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
                <button v-show="product.applyClick === '否'" @click="goToApply(product)">我要申請</button>
                <button disabled v-show="product.applyClick === '是'">已申請</button>
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
      /**
       * 更新sessionStorage
       * 顯示申請成功資訊
       */
      goToApply(product) {
        const updatedPolicies = this.products.map((p) => {
          if (p.policyCode === product.policyCode) {
            p.applyClick = '是';
          }
          return p;
        });
        sessionStorage.setItem('purchasedPolicies', JSON.stringify(updatedPolicies));

        this.$router.push(
          { name: 'apply',
            query:{
              name: product.policyName
            }
          });
      }
    }
};
  </script>