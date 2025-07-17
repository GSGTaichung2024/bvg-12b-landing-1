// Google Analytics 事件追蹤函數
function trackEvent(eventName, eventCategory = 'Landing Page', eventLabel = '') {
    // 檢查 gtag 是否可用
    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, {
            'event_category': eventCategory,
            'event_label': eventLabel,
            'value': 1
        });
        console.log(`GA Event tracked: ${eventName}`);
    } else {
        console.log(`GA not available, would track: ${eventName}`);
    }
}

// 追蹤事件並跳轉到目標網址
function trackAndRedirect(eventName) {
    const targetUrl = 'https://nova88link.com/nvbvg88-2/';
    
    // 追蹤 GA 事件
    trackEvent(eventName, 'Click', 'Casino Landing');
    
    // 延遲跳轉以確保 GA 事件被記錄
    setTimeout(() => {
        window.open(targetUrl, '_blank');
    }, 100);
}

// 頁面載入完成後的初始化
document.addEventListener('DOMContentLoaded', function() {
    // 追蹤頁面載入事件
    trackEvent('page_load', 'Page View', 'Casino Landing Page');
    

    

    
    // 添加觸摸設備的觸覺反饋
    if ('vibrate' in navigator) {
        const vibrateElements = document.querySelectorAll('.cta-button');
        
        vibrateElements.forEach(element => {
            element.addEventListener('touchstart', function() {
                navigator.vibrate(50); // 50ms 振動
            });
        });
    }
    
    // 動態調整跑馬燈速度
    const marqueeText = document.querySelector('.marquee-text');
    if (marqueeText) {
        const textLength = marqueeText.textContent.length;
        const baseSpeed = 15; // 基礎速度（秒）
        const adjustedSpeed = Math.max(10, baseSpeed * (textLength / 100));
        marqueeText.style.animationDuration = `${adjustedSpeed}s`;
    }
    
    // 添加鍵盤支援
    document.addEventListener('keydown', function(event) {
        // 按 Enter 或空白鍵觸發 CTA 按鈕
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            const ctaButton = document.querySelector('.cta-button');
            if (ctaButton) {
                ctaButton.click();
            }
        }
    });
    
    // 添加可見性 API 支援，當頁面重新獲得焦點時追蹤
    document.addEventListener('visibilitychange', function() {
        if (!document.hidden) {
            trackEvent('page_focus', 'Page View', 'Return to page');
        }
    });
    
    // 追蹤用戶在頁面停留時間
    let startTime = Date.now();
    
    window.addEventListener('beforeunload', function() {
        const timeSpent = Math.round((Date.now() - startTime) / 1000);
        trackEvent('time_on_page', 'Engagement', `${timeSpent} seconds`);
    });
    
    // 添加錯誤處理
    window.addEventListener('error', function(event) {
        console.error('頁面錯誤:', event.error);
        trackEvent('page_error', 'Error', event.error?.message || 'Unknown error');
    });
});



// 添加觸摸手勢支援
let touchStartX = 0;
let touchStartY = 0;

document.addEventListener('touchstart', function(event) {
    touchStartX = event.touches[0].clientX;
    touchStartY = event.touches[0].clientY;
});

document.addEventListener('touchend', function(event) {
    const touchEndX = event.changedTouches[0].clientX;
    const touchEndY = event.changedTouches[0].clientY;
    
    const deltaX = touchEndX - touchStartX;
    const deltaY = touchEndY - touchStartY;
    
    // 檢測向上滑動手勢（可能表示用戶想要快速訪問 CTA）
    if (Math.abs(deltaY) > Math.abs(deltaX) && deltaY < -50) {
        trackEvent('swipe_up', 'Gesture', 'Quick access attempt');
        
        // 高亮 CTA 按鈕
        const ctaButton = document.querySelector('.cta-button');
        if (ctaButton) {
            ctaButton.style.animation = 'pulse 0.5s ease-in-out 3';
            setTimeout(() => {
                ctaButton.style.animation = 'pulse 2s infinite';
            }, 1500);
        }
    }
});

// 性能監控
if ('performance' in window) {
    window.addEventListener('load', function() {
        setTimeout(() => {
            const perfData = performance.timing;
            const loadTime = perfData.loadEventEnd - perfData.navigationStart;
            
            if (loadTime > 0) {
                trackEvent('page_load_time', 'Performance', `${Math.round(loadTime)}ms`);
            }
        }, 0);
    });
}