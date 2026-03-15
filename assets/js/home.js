/* ============================================
   HARLEY B600 — HOME INTERACTIONS
   ============================================ */

(function () {
    // ---- Scroll reveal ----
    const reveals = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    reveals.forEach(el => revealObserver.observe(el));

    // ---- Hero parallax on scroll ----
    const heroBg = document.getElementById('heroBg');
    const scrollInd = document.getElementById('scrollInd');

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        const vh = window.innerHeight;

        if (heroBg && scrollY < vh) {
            heroBg.style.transform = `translateY(${scrollY * 0.3}px) scale(${1 + scrollY * 0.0003})`;
        }

        if (scrollInd) {
            scrollInd.style.opacity = Math.max(0, 1 - scrollY / 200);
        }
    }, { passive: true });

    // ---- Counter animation ----
    const counters = document.querySelectorAll('.spec-number[data-target]');

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseInt(el.dataset.target, 10);
                animateCounter(el, target);
                counterObserver.unobserve(el);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(el => counterObserver.observe(el));

    function animateCounter(el, target) {
        const duration = 1800;
        const start = performance.now();

        function tick(now) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const ease = 1 - Math.pow(1 - progress, 4);
            el.textContent = Math.round(target * ease).toLocaleString('fr-FR');
            if (progress < 1) requestAnimationFrame(tick);
        }

        requestAnimationFrame(tick);
    }

    // ---- Navbar style on scroll ----
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 80) {
                navbar.style.borderBottomColor = 'rgba(255,255,255,0.06)';
                navbar.style.backgroundColor = 'rgba(10,10,10,0.95)';
            } else {
                navbar.style.borderBottomColor = 'rgba(255,255,255,0.1)';
                navbar.style.backgroundColor = 'rgba(26,26,26,0.8)';
            }
        }, { passive: true });
    }
})();
