<template>
    <div>
      <main>
        <div class="header-container">
          <h1>保單詳情-【{{ productCode }}_{{ productName }}】</h1>
          <button type="button" class="btn btn-primary" @click="goBack">回前頁</button>
        </div>
        <div>
          <ul v-for="(detail, index) in details" :key="index">
            <p>{{ detail }}</p>
          </ul>
        </div>
      </main>
    </div>
  </template>
  
  <script>
  import '@/assets/myStyle.css';
  export default {
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
      details() {
        const detail_1 = this.$route.query.detail_1 || '';
        const detail_2 = this.$route.query.detail_2 || '';
        const detail_3 = this.$route.query.detail_3 || '';
        return [detail_1, detail_2, detail_3].filter(detail => detail !== '');
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
  