<template>
    <div>
      <main>
        <div class="policy-container">
          <div class="policy-card">
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
                <button type="button">我要申請</button>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  </template>
  
  <script>
  export default {};
  </script>
  
  <style lang="scss" scoped>
  .policy-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: flex-start; /* 從左對齊 */
  }
  
  .policy-card {
    background-color: white;
    border-radius: 10px;
    padding: 20px;
    width: 300px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease;
    color: #333;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  
  .policy-card h2 {
    color: #ff9800;
    font-size: 1.2rem;
    margin-bottom: 10px;
  }
  
  .policy-card p {
    font-size: 0.9rem;
    color: #616161;
    margin: 10px 0;
  }
  
  .policy-card ul {
    list-style-type: none;
    padding: 0;
  }
  
  .policy-card li {
    font-size: 0.9rem;
    color: #212121;
    margin: 5px 0;
  }
  
  .policy-card li strong {
    color: #03a9f4; /* 藍色強調 */
  }
  
  .policy-card::before {
    content: "";
    display: block;
    height: 4px;
    width: 100%;
    background: linear-gradient(90deg, #4caf50, #03a9f4); /* 綠藍漸層條 */
    border-radius: 10px 10px 0 0;
    margin-bottom: 10px;
  }
  
  .policy-card:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
  
  @media (max-width: 768px) {
    .policy-card {
      width: 100%; /* 小螢幕時卡片佔滿整行 */
    }
  }
  </style>
  