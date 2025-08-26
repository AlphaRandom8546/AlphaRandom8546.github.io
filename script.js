// 添加悬停弹跳效果
document.addEventListener('DOMContentLoaded', function() {
    // 获取所有图标元素
    const bilibiliIcon = document.getElementById('bilibili-icon').querySelector('i');
    const qqIcon = document.getElementById('qq-icon').querySelector('i');
    const tiktokIcon = document.getElementById('tiktok-icon').querySelector('i');
    const githubIcon = document.getElementById('github-icon').querySelector('i');
    
    // 为每个图标添加鼠标悬停事件
    [bilibiliIcon, qqIcon, tiktokIcon, githubIcon].forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.classList.add('fa-bounce');
        });
        
        icon.addEventListener('mouseleave', function() {
            this.classList.remove('fa-bounce');
        });
    });

    // 添加点击状态框跳转功能
    const states = document.querySelectorAll('.state');
    states.forEach(state => {
        state.addEventListener('click', function(e) {
            // 如果点击的是QR按钮或QR容器，不触发跳转
            if (e.target.classList.contains('qr-btn') || 
                e.target.classList.contains('qr-container') ||
                e.target.closest('.qr-container')) {
                return;
            }
                    
            // 获取链接并跳转
            const link = this.querySelector('a');
            if (link) {
                window.open(link.href, '_blank');
            }
        });
    });
});