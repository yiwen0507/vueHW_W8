<template>
  <div class="hello">
    <header>
      <img :src="logo" width="5%" alt="Logo" />
      <nav>
        <RouterLink to="/homepage">首頁</RouterLink>
        <RouterLink to="/products">保險商品</RouterLink>
        <RouterLink to="/about">關於我們</RouterLink>
        <RouterLink to="/contact">聯絡我們</RouterLink>
      </nav>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    </header>

    <div class="breadcrumbs">
      <RouterLink to="/homepage">首頁</RouterLink> &gt;
      <RouterLink to="/products">保險商品</RouterLink> &gt;
      產品詳情
    </div>

    <div id="container">
      <aside>
        <h2>快速導航</h2>
        <ul>
          <li><RouterLink to="/homepage">首頁</RouterLink></li>
          <li><RouterLink to="/products">保險商品</RouterLink></li>
          <li><RouterLink to="/alreadypurchased">已購保單</RouterLink></li>
          <li><RouterLink to="/member">保戶園地</RouterLink></li>
          <li><RouterLink to="/news">最新消息</RouterLink></li>
          <li><RouterLink to="/about">關於南山</RouterLink></li>
        </ul>
      </aside>

      <button type="button" id="toggle-sidebar">&lt;&lt;</button>
      <!-- 初始為收合狀態的按鈕 -->

      <RouterView></RouterView>
    </div>

    <footer>
      © 2024 南山人壽. 保留所有權利.【By Roger Lo】
    </footer>
  </div>
</template>

<script>
//CSS
import '@/assets/myStyle.css';
export default {
  provide() {
    return {
      products: this.products,
      details: this.details
    };
  },
  data() {
    return {
      logo: require('@/assets/images/NanShan-Logo.jpeg'), // Image path
      products: [
        {
          policyCode: '20NNPL',
          policyName: '南山人壽新健康終身保險',
          policyDesc: '一般壽險/投保年齡0-60/保障終身',
          pricePerYear: '1200 元',
          coverage: '1230000 元',
          startDate: '2020-10-10',
          endDate: '2030-10-10',
          guaranteedRenewal: true,
        },
        {
          policyCode: 'DHI',
          policyName: '南山人壽意外傷害險',
          policyDesc: '意外日額/投保年齡0-64/最高保障至75歲',
          pricePerYear: '1400 元',
          coverage: '2000000 元',
          startDate: '2022-10-10',
          endDate: '2025-10-10',
          guaranteedRenewal: false,
        }
      ],
      details: [
        {
          policyCode: '20NNPL',
          policyName: '南山人壽新健康終身保險',
          claimDetails: [
            "身故給付，保障金額100萬",
            "意外身故給付，保障金額為200萬",
            "全殘給付，保障金額為220萬"
          ]
        },
        {
          policyCode: 'DHI',
          policyName: '南山人壽意外傷害險',
          claimDetails: [
            "意外身故保險金或喪葬費用保險金，保障金額200萬",
            "意外重大燒燙傷保險金，保障金額50萬",
            "天然災害意外身故保險金或喪葬費用保險金，保障金額200萬",
            "特定交通事故重大創傷保險金，保障金額20萬"
          ]
        }
      ]
    };
  }
};
</script>

