<template>
  <div class="hello">
    <header>
      <img :src="logo" width="5%" alt="Logo" />
      <nav>
        <RouterLink to="/homepage">首頁</RouterLink>
        <RouterLink to="/products">保險商品</RouterLink>
        <RouterLink to="/about">關於我們</RouterLink>
        <a href="#">聯絡我們</a>
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
  data() {
    return {
      logo: require('@/assets/images/NanShan-Logo.jpeg'), // Image path
    };
  },
};
</script>