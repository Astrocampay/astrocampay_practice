// 마우스를 올렸을 때 서브 메뉴 슬라이드 효과를 구현하는 자바스크립트 코드
window.addEventListener('load', function() {
    var menuItems = document.querySelectorAll('.menu-item');
    for (var i = 0; i < menuItems.length; i++) {
      var menuItem = menuItems[i];
      var submenu = menuItem.querySelector('.submenu');
      if (submenu) {
        menuItem.addEventListener('mouseenter', function() {
          submenu.style.display = 'block';
        });
        menuItem.addEventListener('mouseleave', function() {
          submenu.style.display = 'none';
        });
      }
    }
  });