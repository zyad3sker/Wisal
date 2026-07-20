// ==========================================================================
   // Scroll Reveal Animation Module
   // ==========================================================================

export function initReveal() {
    const revealElements = document.querySelectorAll('.reveal');

    if (revealElements.length === 0) return;

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                
                // Check if element has sibling cards to stagger the animation
                const parent = target.parentElement;
                const siblings = Array.from(parent.querySelectorAll('.reveal'));
                
                if (siblings.length > 1 && (parent.classList.contains('service-container') || parent.classList.contains('why-container') || parent.classList.contains('team-container') || parent.classList.contains('testimonial-container') || parent.classList.contains('stats'))) {
                    const index = siblings.indexOf(target);
                    const delay = index * 120; // Staggered delays
                    
                    setTimeout(() => {
                        target.classList.add('visible');
                    }, delay);
                } else {
                    target.classList.add('visible');
                }
                
                revealObserver.unobserve(target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
}
