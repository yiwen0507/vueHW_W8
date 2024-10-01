<template>
    <div class="policy-card">
      <h2>{{ product.policyName }}</h2>
      <p>{{ product.policyDesc }}</p>
      <ul>
        <li><strong>年繳保費：</strong> {{ product.pricePerYear }}</li>
        <li><strong>保障金額：</strong> {{ product.coverage }}</li>
        <li><strong>售賣起日：</strong> {{ product.startDate }}</li>
        <li><strong>售賣訖日：</strong> {{ product.endDate }}</li>
        <li><strong>保證續保：</strong> {{ product.guaranteedRenewal ? '是' : '否' }}</li>
        <li v-if="product.guaranteedRenewal">
          <strong>提前續保：</strong>
          <button @click="apply">我要申請</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      product: {
        type: Object,
        required: true,
      }
    },
    methods: {
      apply(event) {
        // 按鈕 DOM 元素
        const buttonElement = event.target;
        // 修改按鈕狀態
        buttonElement.textContent = '已申請';
        buttonElement.disabled = true;
        
        this.$emit('apply', this.product);
      }
    }
  };
  </script>
  
  <style scoped>
  </style>
  