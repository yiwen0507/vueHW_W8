<template>
    <div>
      <main>
        <div class="header-container">
          <h1>保單詳情-【{{ productCode }}_{{ productName }}】</h1>
          <button type="button" class="btn btn-primary" @click="goBack">回前頁</button>
        </div>
        <div>
          <ul v-for="(detail, index) in productDetails" :key="index">
            <main><strong>{{ detail }}</strong></main>
          </ul>
        </div>
      </main>
    </div>
  </template>
  
  <script>
  import '@/assets/myStyle.css';
  export default {
    inject:['details'],
    methods: {
      goBack() {
        this.$router.push({ path: `/insuranceproduct` });
      }
    },
    computed: {
      productCode() {
        return this.$route.query.code;
      },
      productName() {
        return this.$route.query.name;
      },
      productDetails() {
        const product = this.details.find(p => p.policyCode === this.productCode);
        // 確認是否找到該保單，如果有則返回它的細節
        return product ? product.claimDetails : [];
      }
    }
  }
  </script>
  
  <style lang="scss" scoped>
  .header-container {
    display: flex;
    justify-content: space-between; /* 标题与按钮两端对齐 */
    align-items: center; /* 垂直居中对齐 */
    margin-bottom: 20px;
  }
  
  .header-container h1 {
    margin: 0; /* 清除默认的外边距 */
  }
  
  .header-container button {
    margin-left: 300px;
  }
  </style>
  