<template>
    <div>
        <h1>已購買保單</h1>
        <RouterView></RouterView>
        <div class="policy-container">
          <div class="policy-card" v-for="(product, index) in products" :key="index">
            <h2>{{ product.policyName }}</h2>
            <p>{{ product.policyDesc }}</p>
            <ul >
              <li><strong>年繳保費：</strong> {{ product.pricePerYear }}</li>
              <li><strong>保障金額：</strong> {{ product.coverage }}</li>
              <li><strong>售賣起日：</strong> {{ product.startDate }}</li>
              <li><strong>售賣訖日：</strong> {{ product.endDate }}</li>
              <li><strong>保證續保：</strong> {{ product.guaranteedRenewal ? '是' : '否' }}</li>
              <li v-show="product.guaranteedRenewal === true">
                <strong>提前續保：</strong>
                <button @click="(event) => goToApply(product, event)">我要申請</button>
              </li>
            </ul>
          </div>
        </div>
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
      goToApply(product, event) {
        // 按鈕 DOM 元素
        const buttonElement = event.target;
        // 修改按鈕狀態
        buttonElement.textContent = '已申請';
        buttonElement.disabled = true;

        this.$router.push(
          { 
            name: 'apply',
            query:{
              name: product.policyName
            }
        });
      }
    }
};
  </script>