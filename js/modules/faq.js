// ==========================================================================
   // FAQ Accordion Module
   // ==========================================================================

export function initFaq() {
    const faqHeaders = document.querySelectorAll('.faq-header');

    faqHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const currentItem = header.parentElement;
            const isOpen = currentItem.classList.contains('active');

            // Close all FAQ items first
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
            });

            // If the clicked one wasn't open, open it
            if (!isOpen) {
                currentItem.classList.add('active');
            }
        });
    });
}
