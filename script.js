/*
加載整個html
    找到按鈕
    找到body
    添加點擊事件的監聽器
        當被點擊時切換到夜間模式
*/
document.addEventListener('DOMContentLoaded', function() {
    const toggleModeButton = document.querySelector('#toggleModeButton');
    const body = document.querySelector('body');

    toggleModeButton.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
    });
});
