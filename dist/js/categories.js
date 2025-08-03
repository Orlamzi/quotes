// Categories page functionality
document.addEventListener('DOMContentLoaded', function() {
    initializeCategoryTabs();
    initializeQuotesDisplay();
    initializeRandomQuote();
    initializeLoadMore();
    
    // Check for category parameter in URL
    const urlParams = new URLSearchParams(window.location.search);
    const categoryParam = urlParams.get('category');
    if (categoryParam && quotesDatabase[categoryParam]) {
        switchToCategory(categoryParam);
    }
});

let currentCategory = 'motivation';
let displayedQuotes = [];
let quotesPerPage = 6;

function initializeCategoryTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    
    tabButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            switchToCategory(category);
        });
    });
}

function switchToCategory(category) {
    currentCategory = category;
    
    // Update active tab
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-category="${category}"]`).classList.add('active');
    
    // Update category info
    updateCategoryHeader(category);
    
    // Reset and load quotes
    displayedQuotes = [];
    loadQuotesForCategory(category);
}

function updateCategoryHeader(category) {
    const categoryTitle = document.getElementById('category-title');
    const categoryDescription = document.getElementById('category-description');
    
    const categoryInfo = {
        motivation: {
            title: 'Motivation Quotes',
            description: 'Fuel your ambition and drive with these powerful motivational quotes that inspire action and perseverance.'
        },
        love: {
            title: 'Love & Life Quotes',
            description: 'Discover the beauty and wisdom of love through these heartfelt quotes about relationships and life.'
        },
        success: {
            title: 'Success Quotes',
            description: 'Get inspired to achieve your goals and dreams with these powerful quotes about success and achievement.'
        },
        wisdom: {
            title: 'Wisdom Quotes',
            description: 'Find profound insights and life lessons in these timeless quotes from great thinkers and philosophers.'
        }
    };
    
    const info = categoryInfo[category];
    if (info && categoryTitle && categoryDescription) {
        categoryTitle.textContent = info.title;
        categoryDescription.textContent = info.description;
    }
}

function loadQuotesForCategory(category) {
    const quotesGrid = document.getElementById('quotes-grid');
    const loadMoreBtn = document.getElementById('load-more-btn');
    
    if (!quotesGrid) return;
    
    const categoryQuotes = getQuotesByCategory(category);
    const shuffledQuotes = shuffleArray(categoryQuotes);
    
    // Clear existing quotes
    quotesGrid.innerHTML = '';
    displayedQuotes = [];
    
    // Load initial batch
    loadMoreQuotes(shuffledQuotes);
    
    // Show/hide load more button
    if (loadMoreBtn) {
        loadMoreBtn.style.display = displayedQuotes.length < shuffledQuotes.length ? 'flex' : 'none';
    }
}

function loadMoreQuotes(allQuotes) {
    const quotesGrid = document.getElementById('quotes-grid');
    const loadMoreBtn = document.getElementById('load-more-btn');
    
    if (!quotesGrid) return;
    
    const startIndex = displayedQuotes.length;
    const endIndex = Math.min(startIndex + quotesPerPage, allQuotes.length);
    const newQuotes = allQuotes.slice(startIndex, endIndex);
    
    newQuotes.forEach((quote, index) => {
        const quoteElement = createQuoteElement(quote);
        quoteElement.style.animationDelay = `${index * 0.1}s`;
        quotesGrid.appendChild(quoteElement);
        displayedQuotes.push(quote);
    });
    
    // Update load more button
    if (loadMoreBtn) {
        loadMoreBtn.style.display = displayedQuotes.length < allQuotes.length ? 'flex' : 'none';
    }
    
    // Animate new quotes
    const newElements = quotesGrid.querySelectorAll('.quote-item:not(.animated)');
    newElements.forEach(el => {
        el.classList.add('fade-in', 'animated');
    });
}

function createQuoteElement(quote) {
    const quoteDiv = document.createElement('div');
    quoteDiv.className = 'quote-item';
    
    quoteDiv.innerHTML = `
        <blockquote>"${quote.text}"</blockquote>
        <cite>- ${quote.author}</cite>
    `;
    
    // Add click to copy functionality
    quoteDiv.addEventListener('click', function() {
        const text = `"${quote.text}" - ${quote.author}`;
        copyToClipboard(text);
        
        // Visual feedback
        this.style.transform = 'scale(0.98)';
        setTimeout(() => {
            this.style.transform = '';
        }, 150);
    });
    
    return quoteDiv;
}

function initializeLoadMore() {
    const loadMoreBtn = document.getElementById('load-more-btn');
    
    if (!loadMoreBtn) return;
    
    loadMoreBtn.addEventListener('click', function() {
        const categoryQuotes = getQuotesByCategory(currentCategory);
        const shuffledQuotes = shuffleArray(categoryQuotes);
        
        // Add loading state
        this.classList.add('loading');
        this.disabled = true;
        
        setTimeout(() => {
            loadMoreQuotes(shuffledQuotes);
            this.classList.remove('loading');
            this.disabled = false;
        }, 500);
    });
}

function initializeRandomQuote() {
    const randomQuoteText = document.getElementById('random-quote');
    const randomQuoteAuthor = document.getElementById('random-author');
    const randomQuoteBtn = document.getElementById('random-quote-btn');
    
    if (!randomQuoteText || !randomQuoteAuthor || !randomQuoteBtn) return;
    
    // Set initial random quote
    updateRandomQuote();
    
    // Add click event
    randomQuoteBtn.addEventListener('click', function() {
        // Add loading state
        this.classList.add('loading');
        this.disabled = true;
        
        setTimeout(() => {
            updateRandomQuote();
            this.classList.remove('loading');
            this.disabled = false;
        }, 500);
    });
}

function updateRandomQuote() {
    const randomQuoteText = document.getElementById('random-quote');
    const randomQuoteAuthor = document.getElementById('random-author');
    
    if (!randomQuoteText || !randomQuoteAuthor) return;
    
    const quote = getRandomQuote();
    
    if (quote) {
        // Add fade effect
        randomQuoteText.style.opacity = '0';
        randomQuoteAuthor.style.opacity = '0';
        
        setTimeout(() => {
            randomQuoteText.textContent = `"${quote.text}"`;
            randomQuoteAuthor.textContent = `- ${quote.author}`;
            
            randomQuoteText.style.opacity = '1';
            randomQuoteAuthor.style.opacity = '1';
        }, 200);
    }
}

function copyToClipboard(text) {
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