// ==========================================================================
   // Navigation Module - handles header, hamburger menu, scroll behaviors
   // ==========================================================================

export function initNavigation() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const header = document.getElementById('header');
    const scrollTopBtn = document.getElementById('scrollTop');
    const sections = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('.nav-links li a');

    // 1. Hamburger Mobile Toggle
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('open');
            navLinks.classList.toggle('open');
        });

        // Close menu when clicking a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('open');
                navLinks.classList.remove('open');
            });
        });
    }

    // 2. Scroll Event - Header styling & Scroll Top button display
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;

        // Header scrolled class
        if (header) {
            if (scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }

        // Scroll-to-top button visibility
        if (scrollTopBtn) {
            if (scrollY > 400) {
                scrollTopBtn.classList.add('visible');
            } else {
                scrollTopBtn.classList.remove('visible');
            }
        }

        // Active Navigation Link Highlighting on Scroll
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            if (scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href');
            if (href === '#' + current || (current === '' && href === '#')) {
                link.classList.add('active');
            }
        });
    });

    // 3. Scroll to Top Action
    if (scrollTopBtn) {
        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}
