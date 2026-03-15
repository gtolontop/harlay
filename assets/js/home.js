(function () {

    // animer les éléments .reveal quand ils entrent dans l'écran
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



    // récupère tous les éléments qui ont un attribut data-target (la valeur finale du compteur)
    const counters = document.querySelectorAll('.spec-number[data-target]');

    // observe chaque compteur quand visible à moitié on lance l'animation
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // data-target c'est un string donc on convertit en nombre
                animateCounter(entry.target, parseInt(entry.target.dataset.target, 10));
                // stop d'observer sinon ça relance à chaque scroll
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(el => counterObserver.observe(el));

    function animateCounter(el, target) {
        const duration = 1800; // durée en ms
        const start = performance.now();

        function tick(now) {
            // de 0 à 1 selon le temps écoulé
            const progress = Math.min((now - start) / duration, 1);

            // courbe pour que ça ralentisse à la fin
            const ease = 1 - Math.pow(1 - progress, 4);

            // format français avec espace pour les milliers
            el.textContent = Math.round(target * ease).toLocaleString('fr-FR');

            if (progress < 1) requestAnimationFrame(tick);
        }

        requestAnimationFrame(tick);
    }

})();
