<template>
  <div>
    <h1>已購買保單</h1>
    <div class="red-background">
      <strong><p v-show="showSuccess === true" class="red-text">已申請提前續保:【"{{productName}}"】，請等待專人聯繫</p></strong>
    </div>
    <!-- <RouterView></RouterView> -->
    <div class="policy-container">
      <AlreadyPurchasedProduct
        v-for="(product, index) in products"
        :key="index"
        :product="product"
        @apply="goToApply"
      />
    </div>
  </div>
</template>
  
<script>
import '@/assets/myStyle.css';
import '@/assets/cardStyle.css';
import AlreadyPurchasedProduct from './AlreadyPurchasedProduct.vue';

export default {
  components: {
    AlreadyPurchasedProduct
  },
  data() {
    return {
      products: [],
      showSuccess: false,
      productName:""
    };
  },
  /**
   * 從sessionStorage中取得purchasedPolicies
   * 更新products
   */
  mounted() {
    const purchasedPolicies = JSON.parse(sessionStorage.getItem('purchasedPolicies')) || [];
    this.products = purchasedPolicies;
  },
  methods: {
    /**
     * 跳轉到申請頁面
     */
    goToApply(product) {
      // this.$router.push({ 
      //   name: 'apply',
      //   query: {
      //     name: product.policyName
      //   }
      // });
      this.showSuccess = true
      this.productName = product.policyName
    }
  }
};
</script>

<style scoped>
.policy-container {
  display: flex;
  flex-direction: row;
  gap: 1rem; /* 增加卡片之間的間距 */
}

.red-text {
    color: red;
}

.red-background{
  background-color: rgb(255, 227, 231);
}
</style>
