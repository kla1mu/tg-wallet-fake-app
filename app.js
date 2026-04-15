const WebApp = window.Telegram.WebApp;
WebApp.ready();
WebApp.expand();

// Переключение табов с анимацией слайдера
function switchTab(el, type) {
    const tabs = document.querySelectorAll('.tab-item');
    const slider = document.querySelector('.tab-slider');
    
    tabs.forEach(t => t.classList.remove('active'));
    el.classList.add('active');
    
    if (type === 'ton') {
        slider.style.transform = 'translateX(100%)';
    } else {
        slider.style.transform = 'translateX(0%)';
    }
    
    // Виброотклик Telegram
    WebApp.HapticFeedback.impactOccurred('light');
}

// Редактирование баланса
function editBalance() {
    const current = document.getElementById('int-part').innerText;
    const newVal = prompt("Установи целое значение баланса:", current);
    
    if (newVal !== null) {
        document.getElementById('int-part').innerText = newVal;
        WebApp.HapticFeedback.notificationOccurred('success');
    }
}

// Установка цвета статус-бара в тон приложению
WebApp.setHeaderColor(WebApp.themeParams.bg_color || '#212121');