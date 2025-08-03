// Main JavaScript for homepage functionality
document.addEventListener('DOMContentLoaded', function() {
    // Initialize quote functionality
    initializeQuoteDisplay();
    
    // Initialize animations
    initializeAnimations();
    
    // Initialize share functionality
    initializeShareFunctionality();
});

function initializeQuoteDisplay() {
    const quoteText = document.getElementById('quote-text');
    const quoteAuthor = document.getElementById('quote-author');
    const newQuoteBtn = document.getElementById('new-quote-btn');
    
    if (!quoteText || !quoteAuthor || !newQuoteBtn) return;
    
    // Set initial quote
    displayRandomQuote();
    
    // Add click event for new quote button
    newQuoteBtn.addEventListener('click', function() {
        // Add loading state
        newQuoteBtn.classList.add('loading');
        newQuoteBtn.disabled = true;
        
        // Simulate loading delay for better UX
        setTimeout(() => {
            displayRandomQuote();
            newQuoteBtn.classList.remove('loading');
            newQuoteBtn.disabled = false;
        }, 500);
    });
}

function displayRandomQuote() {
    const quoteText = document.getElementById('quote-text');
    const quoteAuthor = document.getElementById('quote-author');
    
    if (!quoteText || !quoteAuthor) return;
    
    // Get random quote
    const quote = getRandomQuote();
    
    if (quote) {
        // Add fade out effect
        quoteText.style.opacity = '0';
        quoteAuthor.style.opacity = '0';
        
        setTimeout(() => {
            quoteText.textContent = `"${quote.text}"`;
            quoteAuthor.textContent = `- ${quote.author}`;
            
            // Add fade in effect
            quoteText.style.opacity = '1';
            quoteAuthor.style.opacity = '1';
        }, 200);
    }
}

function initializeAnimations() {
    // Add fade-in animation to elements when they come into view
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.category-card, .stat-item, .info-card');
    animatedElements.forEach(el => observer.observe(el));
}

function initializeShareFunctionality() {
    const shareBtn = document.getElementById('share-quote-btn');
    
    if (!shareBtn) return;
    
    shareBtn.addEventListener('click', function() {
        const quoteText = document.getElementById('quote-text');
        const quoteAuthor = document.getElementById('quote-author');
        
        if (!quoteText || !quoteAuthor) return;
        
        const quote = quoteText.textContent;
        const author = quoteAuthor.textContent;
        const shareText = `${quote} ${author}\n\nShared from Orlamzi's Quotes`;
        
        // Try to use Web Share API if available
        if (navigator.share) {
            navigator.share({
                title: 'Inspiring Quote',
                text: shareText,
                url: window.location.href
            }).catch(err => {
                console.log('Error sharing:', err);
                fallbackShare(shareText);
            });
        } else {
            fallbackShare(shareText);
        }
    });
}

function fallbackShare(text) {
    // Copy to clipboard as fallback
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(() => {
            showNotification('Quote copied to clipboard!');
        }).catch(err => {
            console.log('Error copying to clipboard:', err);
            showNotification('Unable to copy quote');
        });
    } else {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        
        try {
            document.execCommand('copy');
            showNotification('Quote copied to clipboard!');
        } catch (err) {
            console.log('Error copying to clipboard:', err);
            showNotification('Unable to copy quote');
        }
        
        document.body.removeChild(textArea);
    }
}

function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--primary-color);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        box-shadow: var(--shadow-lg);
        z-index: 1000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Smooth scrolling for anchor links
document.addEventListener('click', function(e) {
    if (e.target.matches('a[href^="#"]')) {
        e.preventDefault();
        const target = document.querySelector(e.target.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
});

// Add loading states to buttons
document.addEventListener('click', function(e) {
    if (e.target.matches('.btn') || e.target.closest('.btn')) {
        const btn = e.target.matches('.btn') ? e.target : e.target.closest('.btn');
        
        // Add click animation
        btn.style.transform = 'scale(0.98)';
        setTimeout(() => {
            btn.style.transform = '';
        }, 150);
    }
});