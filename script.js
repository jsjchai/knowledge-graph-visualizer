/**
 * 主脚本文件 - knowledge-graph-visualizer
 * 处理页面交互效果
 */

document.addEventListener('DOMContentLoaded', function() {
    console.log('知识库可视化系统已加载');
    
    // 为所有卡片添加点击效果
    const cards = document.querySelectorAll('.year-card, .stat-card, .feature');
    cards.forEach(card => {
        card.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
    
    // 滚动动画
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);
    
    // 观察所有部分
    document.querySelectorAll('.section').forEach(section => {
        observer.observe(section);
    });
    
    // 观察页脚
    const footer = document.querySelector('footer');
    if (footer) {
        observer.observe(footer);
    }
    
    // 添加键盘导航支持
    document.addEventListener('keydown', function(e) {
        // 按ESC键重置所有卡片
        if (e.key === 'Escape') {
            cards.forEach(card => {
                card.style.transform = '';
            });
        }
    });
    
    // 添加触摸设备优化
    if ('ontouchstart' in window) {
        document.body.classList.add('touch-device');
        
        // 为触摸设备优化悬停效果
        cards.forEach(card => {
            card.addEventListener('touchstart', function() {
                this.classList.add('touch-active');
            });
            
            card.addEventListener('touchend', function() {
                this.classList.remove('touch-active');
            });
        });
    }
    
    // 页面加载完成后的初始化
    setTimeout(() => {
        console.log('页面初始化完成');
        
        // 检查早期项目部分是否存在
        const earlyProjectsSection = document.querySelector('section:has(h2 i.fa-history)');
        if (earlyProjectsSection) {
            console.log('早期项目部分已找到:', earlyProjectsSection);
            
            // 检查早期项目卡片
            const earlyProjectCards = document.querySelectorAll('.year-card.early-project');
            console.log(`找到 ${earlyProjectCards.length} 个早期项目卡片`);
            
            earlyProjectCards.forEach((card, index) => {
                console.log(`早期项目卡片 ${index + 1}:`, {
                    text: card.textContent.trim(),
                    href: card.getAttribute('href'),
                    visible: card.offsetParent !== null
                });
            });
        } else {
            console.warn('未找到早期项目部分');
        }
    }, 100);
});

/**
 * 工具函数：检查元素是否在视口中
 */
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

/**
 * 工具函数：添加CSS类（兼容性处理）
 */
function addClass(element, className) {
    if (element.classList) {
        element.classList.add(className);
    } else {
        element.className += ' ' + className;
    }
}

/**
 * 工具函数：移除CSS类（兼容性处理）
 */
function removeClass(element, className) {
    if (element.classList) {
        element.classList.remove(className);
    } else {
        element.className = element.className.replace(
            new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' '
        );
    }
}

// 导出函数供其他脚本使用（如果有）
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        isElementInViewport,
        addClass,
        removeClass
    };
}