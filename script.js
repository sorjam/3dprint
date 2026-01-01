document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. مدیریت تم (Dark/Light Mode) ---
    const themeToggleBtn = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;
    
    // چک کردن تنظیمات ذخیره شده در مرورگر
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        htmlElement.setAttribute('data-theme', savedTheme);
    }

    if(themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const currentTheme = htmlElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            htmlElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme); // ذخیره انتخاب کاربر
        });
    }

    // --- 2. انیمیشن متن هیرو ---
    const heroText = document.getElementById('heroText');
    if(heroText) {
        heroText.style.opacity = '0';
        heroText.style.transform = 'translateY(20px)';
        heroText.style.transition = 'opacity 1s ease, transform 1s ease';

        setTimeout(() => {
            heroText.style.opacity = '1';
            heroText.style.transform = 'translateY(0)';
        }, 200);
    }

    // --- 3. انیمیشن خط فرآیند (Process Line) ---
    const processSection = document.getElementById('process');
    const lineFill = document.getElementById('lineFill');

    if(processSection && lineFill) {
        window.addEventListener('scroll', () => {
            const sectionPos = processSection.getBoundingClientRect().top;
            const screenPos = window.innerHeight / 1.3;

            if(sectionPos < screenPos) {
                if(window.innerWidth > 768) {
                    lineFill.style.width = '100%';
                } else {
                    lineFill.style.height = '100%';
                }
            }
        });
    }
});