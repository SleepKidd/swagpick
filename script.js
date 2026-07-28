document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Нуарный прелоадер: плавно скрываем экран загрузки после сборки страницы
    const preloader = document.getElementById("preloader");
    window.addEventListener("load", () => {
        setTimeout(() => {
            preloader.style.opacity = "0";
            setTimeout(() => {
                preloader.style.display = "none";
            }, 700);
        }, 500);
    });

    // 2. Шапка: добавляем плотность фона при скролле страницы
    const navbar = document.querySelector(".navbar");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.style.padding = "18px 0";
            navbar.style.background = "rgba(7, 7, 9, 0.95)";
            navbar.style.boxShadow = "0 10px 40px rgba(0,0,0,0.5)";
        } else {
            navbar.style.padding = "25px 0";
            navbar.style.background = "rgba(7, 7, 9, 0.7)";
            navbar.style.boxShadow = "none";
        }
    });

    // 3. Скролл-анимации проявления (Scroll Reveal)
    const revealElements = document.querySelectorAll(".reveal");
    
    const checkReveal = () => {
        const triggerBottom = window.innerHeight * 0.85;
        
        revealElements.forEach(el => {
            const elTop = el.getBoundingClientRect().top;
            if (elTop < triggerBottom) {
                el.classList.add("active");
            }
        });
    };

    window.addEventListener("scroll", checkReveal);
    checkReveal(); // Проверяем блоки сразу при старте страницы

    // 4. Логика нуар-аккордеона FAQ: плавное открытие вкладок по клику
    const faqItems = document.querySelectorAll(".faq-noir-item");

    faqItems.forEach(item => {
        const question = item.querySelector(".faq-noir-question");
        
        question.addEventListener("click", () => {
            const isOpen = item.classList.contains("active");
            
            // Схлопываем остальные вкладки, чтобы интерфейс оставался аккуратным
            faqItems.forEach(i => i.classList.remove("active"));
            
            // Если кликнули на закрытую — плавно активируем её
            if (!isOpen) {
                item.classList.add("active");
            }
        });
    });
});
