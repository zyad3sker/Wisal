// ==========================================================================
   // Interactive Booking Form Module
   // ==========================================================================

export function initBooking() {
    const bookingForm = document.getElementById('bookingForm');
    
    if (!bookingForm) return;

    bookingForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const submitBtn = bookingForm.querySelector('.submit-btn');
        const originalBtnText = submitBtn.innerHTML;
        
        // Show loading state
        const isRtl = document.documentElement.dir === 'rtl';
        submitBtn.disabled = true;
        submitBtn.innerHTML = isRtl 
            ? '<i class="fa-solid fa-spinner fa-spin"></i> جاري الإرسال...' 
            : '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';

        // Gather Form Data
        const formData = new FormData(bookingForm);
        
        try {
            const response = await fetch(bookingForm.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                // Success message
                showFormAlert(
                    isRtl ? 'تم إرسال طلبك بنجاح! سنتواصل معك في أقرب وقت.' : 'Your booking request sent successfully! We will contact you soon.', 
                    'success'
                );
                bookingForm.reset();
            } else {
                throw new Error('Response error');
            }
        } catch (error) {
            // Error message
            showFormAlert(
                isRtl ? 'عذراً، حدث خطأ أثناء إرسال الطلب. حاول مرة أخرى.' : 'Sorry, an error occurred. Please try again.',
                'error'
            );
        } finally {
            // Reset button state
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalBtnText;
        }
    });
}

function showFormAlert(message, type) {
    // Check if alert box already exists
    let alertBox = document.getElementById('formAlert');
    if (!alertBox) {
        alertBox = document.createElement('div');
        alertBox.id = 'formAlert';
        alertBox.style.padding = '15px';
        alertBox.style.borderRadius = '8px';
        alertBox.style.marginTop = '20px';
        alertBox.style.fontWeight = '600';
        alertBox.style.textAlign = 'center';
        alertBox.style.fontSize = '15px';
        alertBox.style.transition = 'all 0.3s ease';
        
        const bookingFormBox = document.querySelector('.booking-form-box');
        bookingFormBox.appendChild(alertBox);
    }
    
    // Style based on type
    if (type === 'success') {
        alertBox.style.backgroundColor = '#e6f9f0';
        alertBox.style.color = '#2ec4b6';
        alertBox.style.border = '1px solid #c2f0db';
    } else {
        alertBox.style.backgroundColor = '#fff0f0';
        alertBox.style.color = '#ff3b30';
        alertBox.style.border = '1px solid #ffd1d1';
    }
    
    alertBox.textContent = message;
    alertBox.style.opacity = '1';
    
    // Auto hide after 6 seconds
    setTimeout(() => {
        alertBox.style.opacity = '0';
        setTimeout(() => alertBox.remove(), 300);
    }, 6000);
}
