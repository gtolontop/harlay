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

    // observe chaque compteur : quand il est visible à 50% dans l'écran, on lance l'animation
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // parseInt pour convertir le data-target (string) en nombre entier
                animateCounter(entry.target, parseInt(entry.target.dataset.target, 10));
                // on arrête d'observer une fois lancé pour pas relancer à chaque scroll
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(el => counterObserver.observe(el));

    function animateCounter(el, target) {
        const duration = 1800; // durée totale de l'animation en ms
        const start = performance.now(); // timestamp de départ (précis à la ms)

        function tick(now) {
            // progress va de 0 à 1 sur la durée, Math.min bloque à 1 max
            const progress = Math.min((now - start) / duration, 1);

            // easing : accélère au début et ralentit à la fin (courbe en puissance 4)
            // quand progress=0 → ease=0, quand progress=1 → ease=1
            const ease = 1 - Math.pow(1 - progress, 4);

            // affiche le chiffre arrondi, formaté façon française (espace pour les milliers)
            el.textContent = Math.round(target * ease).toLocaleString('fr-FR');

            // tant qu'on n'est pas à 1, on demande un nouveau frame au navigateur
            if (progress < 1) requestAnimationFrame(tick);
        }

        requestAnimationFrame(tick); // lance la boucle
    }

})();
