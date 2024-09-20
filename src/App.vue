<template>
  <div class="hello">
    <header>
      <img :src="logo" width="5%" alt="Logo" />
      <nav>
        <a href="#">首頁</a>
        <a href="#">保險商品</a>
        <a href="#">關於我們</a>
        <a href="#">聯絡我們</a>
      </nav>
    </header>

    <div class="breadcrumbs">
      <a href="#">首頁</a> &gt;
      <a href="#">保險商品</a> &gt;
      產品詳情
    </div>

    <div id="container">
      <aside>
        <h2>快速導航</h2>
        <ul>
          <li><RouterLink to="/homepage">首頁</RouterLink></li>
          <li><a href="#">保險商品</a></li>
          <li><a href="#">投資理財</a></li>
          <li><a href="#">最新消息</a></li>
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
  data() {
    return {
      logo: require('@/assets/images/NanShan-Logo.jpeg'), // Image path
    };
  },
};
</script>

<!-- 
<script>
import NanshanIndex from './components/NanshanIndex.vue';

export default {
  name: 'App',
  components: {
    NanshanIndex
  }
}
</script> -->
