// 自 body 向下綁定 click 事件
document.body.addEventListener('click', (event) => {
  // 確保事件是發生在目標元素上
  const targetElement = event.target;

  // 確認點擊的元素是切換側邊欄的按鈕
  if (targetElement.id === 'toggle-sidebar') {
      const container = document.getElementById('container');
      const aside = document.querySelector('aside');
      
      // 切換收合狀態
      container.classList.toggle('collapsed');
      aside.classList.toggle('collapsed');
      
      // 更新按鈕文字
      if (container.classList.contains('collapsed')) {
          targetElement.textContent = '>>';
      } else {
          targetElement.textContent = '<<';
      }
  }
});