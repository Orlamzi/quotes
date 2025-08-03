// Contact form functionality
document.addEventListener('DOMContentLoaded', function() {
    initializeContactForm();
    initializeFormValidation();
});

function initializeContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (validateForm()) {
            handleFormSubmission();
        }
    });
}

function initializeFormValidation() {
    const formInputs = document.querySelectorAll('#contact-form input, #contact-form select, #contact-form textarea');
    
    formInputs.forEach(input => {
        // Real-time validation
        input.addEventListener('blur', function() {
            validateField(this);
        });
        
        // Clear validation on focus
        input.addEventListener('focus', function() {
            clearFieldValidation(this);
        });
    });
}

function validateForm() {
    const form = document.getElementById('contact-form');
    const formData = new FormData(form);
    let isValid = true;
    
    // Validate name
    const name = formData.get('name');
    if (!name || name.trim().length < 2) {
        showFieldError('name', 'Please enter a valid name (at least 2 characters)');
        isValid = false;
    }
    
    // Validate email
    const email = formData.get('email');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
        showFieldError('email', 'Please enter a valid email address');
        isValid = false;
    }
    
    // Validate subject
    const subject = formData.get('subject');
    if (!subject) {
        showFieldError('subject', 'Please select a subject');
        isValid = false;
    }
    
    // Validate message
    const message = formData.get('message');
    if (!message || message.trim().length < 10) {
        showFieldError('message', 'Please enter a message (at least 10 characters)');
        isValid = false;
    }
    
    return isValid;
}

function validateField(field) {
    const value = field.value.trim();
    const fieldName = field.name;
    
    clearFieldValidation(field);
    
    switch (fieldName) {
        case 'name':
            if (!value || value.length < 2) {
                showFieldError(fieldName, 'Please enter a valid name (at least 2 characters)');
                return false;
            }
            break;
            
        case 'email':
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!value || !emailRegex.test(value)) {
                showFieldError(fieldName, 'Please enter a valid email address');
                return false;
            }
            break;
            
        case 'subject':
            if (!value) {
                showFieldError(fieldName, 'Please select a subject');
                return false;
            }
            break;
            
        case 'message':
            if (!value || value.length < 10) {
                showFieldError(fieldName, 'Please enter a message (at least 10 characters)');
                return false;
            }
            break;
    }
    
    showFieldSuccess(field);
    return true;
}

function showFieldError(fieldName, message) {
    const field = document.getElementById(fieldName);
    const formGroup = field.closest('.form-group');
    
    // Remove existing validation classes
    formGroup.classList.remove('success');
    formGroup.classList.add('error');
    
    // Remove existing error message
    const existingError = formGroup.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }
    
    // Add error message
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    errorDiv.style.cssText = `
        color: #ef4444;
        font-size: 0.875rem;
        margin-top: 0.25rem;
    `;
    
    formGroup.appendChild(errorDiv);
    
    // Style the field
    field.style.borderColor = '#ef4444';
}

function showFieldSuccess(field) {
    const formGroup = field.closest('.form-group');
    
    // Remove error state
    formGroup.classList.remove('error');
    formGroup.classList.add('success');
    
    // Style the field
    field.style.borderColor = '#10b981';
}

function clearFieldValidation(field) {
    const formGroup = field.closest('.form-group');
    
    // Remove validation classes
    formGroup.classList.remove('error', 'success');
    
    // Remove error message
    const errorMessage = formGroup.querySelector('.error-message');
    if (errorMessage) {
        errorMessage.remove();
    }
    
    // Reset field style
    field.style.borderColor = '';
}

function handleFormSubmission() {
    const submitBtn = document.querySelector('#contact-form button[type="submit"]');
    const form = document.getElementById('contact-form');
    const formData = new FormData(form);
    
    // Show loading state
    submitBtn.classList.add('loading');
    submitBtn.disabled = true;
    const originalText = submitBtn.querySelector('span').textContent;
    submitBtn.querySelector('span').textContent = 'Sending...';
    
    // Simulate form submission (replace with actual form handling)
    setTimeout(() => {
        // In a real application, you would send the data to your server here
        console.log('Form data:', Object.fromEntries(formData));
        
        // Show success message
        showSuccessMessage();
        
        // Reset form
        form.reset();
        clearAllValidation();
        
        // Reset button
        submitBtn.classList.remove('loading');
        submitBtn.disabled = false;
        submitBtn.querySelector('span').textContent = originalText;
        
    }, 2000);
}

function showSuccessMessage() {
    const successMessage = document.createElement('div');
    successMessage.className = 'success-notification';
    successMessage.innerHTML = `
        <div style="
            background: #10b981;
            color: white;
            padding: 1.5rem;
            border-radius: 0.75rem;
            margin: 2rem 0;
            text-align: center;
            box-shadow: var(--shadow-lg);
        ">
            <h4 style="margin: 0 0 0.5rem 0; font-size: 1.125rem;">Message Sent Successfully!</h4>
            <p style="margin: 0; opacity: 0.9;">Thank you for reaching out. I'll get back to you within 24-48 hours.</p>
        </div>
    `;
    
    const form = document.getElementById('contact-form');
    form.parentNode.insertBefore(successMessage, form);
    
    // Scroll to success message
    successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
    
    // Remove success message after 5 seconds
    setTimeout(() => {
        if (successMessage.parentNode) {
            successMessage.parentNode.removeChild(successMessage);
        }
    }, 5000);
}

function clearAllValidation() {
    const formGroups = document.querySelectorAll('#contact-form .form-group');
    formGroups.forEach(group => {
        group.classList.remove('error', 'success');
        const errorMessage = group.querySelector('.error-message');
        if (errorMessage) {
            errorMessage.remove();
        }
        
        const field = group.querySelector('input, select, textarea');
        if (field) {
            field.style.borderColor = '';
        }
    });
}

// Character counter for textarea
document.addEventListener('input', function(e) {
    if (e.target.matches('#message')) {
        const textarea = e.target;
        const currentLength = textarea.value.length;
        const minLength = 10;
        
        // Remove existing counter
        const existingCounter = textarea.parentNode.querySelector('.char-counter');
        if (existingCounter) {
            existingCounter.remove();
        }
        
        // Add character counter
        const counter = document.createElement('div');
        counter.className = 'char-counter';
        counter.style.cssText = `
            font-size: 0.75rem;
            color: var(--text-muted);
            text-align: right;
            margin-top: 0.25rem;
        `;
        
        if (currentLength < minLength) {
            counter.textContent = `${minLength - currentLength} more characters needed`;
            counter.style.color = '#ef4444';
        } else {
            counter.textContent = `${currentLength} characters`;
            counter.style.color = '#10b981';
        }
        
        textarea.parentNode.appendChild(counter);
    }
});