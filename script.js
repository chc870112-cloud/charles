// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 平滑滚动效果
    initSmoothScroll();
    
    // 图片懒加载
    initLazyLoading();
    
    // 动画效果
    initAnimations();
    
    // 微信分享优化
    initWeChatSharing();
});

// 平滑滚动
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// 图片懒加载
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// 动画效果
function initAnimations() {
    const animatedElements = document.querySelectorAll('.feature-card, .reason-item, .screenshot-item');
    
    const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        animationObserver.observe(el);
    });
}

// 微信分享优化
function initWeChatSharing() {
    // 检测是否在微信环境中
    function isWeChat() {
        return /micromessenger/i.test(navigator.userAgent);
    }
    
    // 设置微信分享信息
    if (isWeChat()) {
        // 在微信环境中，可以添加特殊的分享处理逻辑
        console.log('检测到微信环境，优化分享体验');
        
        // 可以在这里添加微信JS-SDK的配置
        // 注意：需要后端支持获取微信签名
    }
    
    // 添加分享按钮点击事件
    const shareButtons = document.querySelectorAll('.share-btn');
    shareButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            
            if (navigator.share) {
                // 使用原生分享API
                navigator.share({
                    title: '小小理财 - 个人财务管理专家',
                    text: '专业的个人财务管理应用，轻松管理收支、记录账单、分析财务状况',
                    url: window.location.href
                }).catch(err => {
                    console.log('分享失败:', err);
                    fallbackShare();
                });
            } else {
                fallbackShare();
            }
        });
    });
}

// 备用分享方法
function fallbackShare() {
    // 复制链接到剪贴板
    if (navigator.clipboard) {
        navigator.clipboard.writeText(window.location.href).then(() => {
            showToast('链接已复制到剪贴板');
        }).catch(() => {
            showToast('请手动复制链接分享');
        });
    } else {
        showToast('请手动复制链接分享');
    }
}

// 显示提示信息
function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(0, 0, 0, 0.8);
        color: white;
        padding: 12px 24px;
        border-radius: 6px;
        z-index: 10000;
        font-size: 14px;
        opacity: 0;
        transition: opacity 0.3s ease;
    `;
    
    document.body.appendChild(toast);
    
    // 显示动画
    setTimeout(() => {
        toast.style.opacity = '1';
    }, 100);
    
    // 自动隐藏
    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 300);
    }, 2000);
}

// 页面性能优化
function optimizePerformance() {
    // 预加载关键资源
    const criticalImages = [
        './images/app-icon.png',
        './images/homepage-screenshot.png'
    ];
    
    criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
    });
}

// 错误处理
window.addEventListener('error', function(e) {
    console.error('页面错误:', e.error);
    // 可以在这里添加错误上报逻辑
});

// 页面可见性变化处理
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        // 页面隐藏时暂停动画
        document.body.style.animationPlayState = 'paused';
    } else {
        // 页面显示时恢复动画
        document.body.style.animationPlayState = 'running';
    }
});

// 初始化性能优化
optimizePerformance();

// 添加键盘导航支持
document.addEventListener('keydown', function(e) {
    // ESC键关闭模态框等
    if (e.key === 'Escape') {
        // 可以在这里添加关闭模态框的逻辑
    }
    
    // 空格键或回车键激活按钮
    if ((e.key === ' ' || e.key === 'Enter') && e.target.tagName === 'BUTTON') {
        e.preventDefault();
        e.target.click();
    }
});

// 添加触摸设备支持
if ('ontouchstart' in window) {
    document.body.classList.add('touch-device');
    
    // 优化触摸体验
    const touchElements = document.querySelectorAll('.feature-card, .reason-item, .screenshot-item');
    touchElements.forEach(el => {
        el.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.98)';
        });
        
        el.addEventListener('touchend', function() {
            this.style.transform = 'scale(1)';
        });
    });
}

// 添加深色模式支持（可选）
function initDarkMode() {
    const darkModeToggle = document.querySelector('.dark-mode-toggle');
    
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');
            localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
        });
        
        // 恢复用户偏好
        if (localStorage.getItem('darkMode') === 'true') {
            document.body.classList.add('dark-mode');
        }
    }
}

// 初始化深色模式
initDarkMode();

// 添加搜索功能（如果需要）
function initSearch() {
    const searchInput = document.querySelector('.search-input');
    
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const query = this.value.toLowerCase();
            const searchableElements = document.querySelectorAll('.feature-card, .reason-item');
            
            searchableElements.forEach(el => {
                const text = el.textContent.toLowerCase();
                if (text.includes(query)) {
                    el.style.display = 'block';
                } else {
                    el.style.display = 'none';
                }
            });
        });
    }
}

// 初始化搜索
initSearch();

// 添加打印样式支持
window.addEventListener('beforeprint', function() {
    document.body.classList.add('printing');
});

window.addEventListener('afterprint', function() {
    document.body.classList.remove('printing');
});

// 添加PWA支持（如果需要）
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('./sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}
