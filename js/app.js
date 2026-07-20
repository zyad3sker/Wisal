// ==========================================================================
   // Wisal Care Community - Main App Entry Point (ES Module)
   // ==========================================================================

import { initNavigation } from './modules/navigation.js';
import { initFaq } from './modules/faq.js';
import { initBooking } from './modules/booking.js';
import { initReveal } from './modules/reveal.js';

document.addEventListener('DOMContentLoaded', () => {
    // Initialize Navigation & Header behaviors
    initNavigation();
    
    // Initialize FAQ Accordion logic
    initFaq();
    
    // Initialize AJAX Booking form
    initBooking();
    
    // Initialize Intersection Observer animations
    initReveal();
});
