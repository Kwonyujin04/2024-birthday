// 팝업 관련 요소 선택
const menuPosition = document.querySelector('.menu_position');
const menuToggle = document.querySelector('#menu_toggle');

menuToggle.addEventListener('click', function () {
    menuPosition.classList.toggle('active'); // active 클래스가 있으면 제거하고, 없으면 추가
});