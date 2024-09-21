<template>
    <div>
      <main>
        <div class="policy-container">
          <div class="policy-card">
            <RouterView></RouterView>

            <h2>20NNPL - 南山人壽新康順終身保險</h2>
            <p>一般壽險/投保年齡0-60歲/保障終身</p>
            <ul>
              <li><strong>年繳保費：</strong> 321 元</li>
              <li><strong>保障金額：</strong> 1000000 元</li>
              <li><strong>售賣起日：</strong> 2021-01-01</li>
              <li><strong>售賣訖日：</strong> 2026-01-01</li>
              <li><strong>保證續保：</strong> 否</li>
              <li>
                <strong>提前續保：</strong>
                 <button><RouterLink to="/applysuccess">我要申請</RouterLink></button>
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
  };
  </script>