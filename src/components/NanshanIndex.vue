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
            <li><a href="#">首頁</a></li>
            <li><a href="#">保險商品</a></li>
            <li><a href="#">投資理財</a></li>
            <li><a href="#">最新消息</a></li>
          </ul>
        </aside>
  
        <button type="button" id="toggle-sidebar">&lt;&lt;</button>
  
        <main>
          <h1>專業保險服務</h1>
          <p>
            南山人壽致力於為客戶提供專業的保險服務與投資理財建議。我們的產品涵蓋了壽險、醫療險、意外險等多種保險方案，滿足您和家人的需求。
          </p>
          <p>
            我們重視每一位客戶，並以客戶為中心，為您提供貼心的服務與支持。
          </p>
        </main>
      </div>
  
      <footer>
        © 2024 南山人壽. 保留所有權利.【By Roger Lo】
      </footer>
    </div>
  </template>
  
  <script>
  // Import the CSS file here
  import '@/assets/myStyle.css'; // Adjust the path if necessary
  
  export default {
    data() {
      return {
        logo: require('@/assets/images/NanShan-Logo.jpeg'), // Image path
      };
    },
  };
  </script>
  
  <!-- No need for style section here as you're importing CSS -->
  