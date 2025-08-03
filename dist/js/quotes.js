// Comprehensive quotes database
const quotesDatabase = {
    motivation: [
        {
            text: "The only way to do great work is to love what you do.",
            author: "Steve Jobs"
        },
        {
            text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
            author: "Winston Churchill"
        },
        {
            text: "The future belongs to those who believe in the beauty of their dreams.",
            author: "Eleanor Roosevelt"
        },
        {
            text: "It is during our darkest moments that we must focus to see the light.",
            author: "Aristotle"
        },
        {
            text: "Believe you can and you're halfway there.",
            author: "Theodore Roosevelt"
        },
        {
            text: "The only impossible journey is the one you never begin.",
            author: "Tony Robbins"
        },
        {
            text: "Your limitation—it's only your imagination.",
            author: "Unknown"
        },
        {
            text: "Push yourself, because no one else is going to do it for you.",
            author: "Unknown"
        },
        {
            text: "Great things never come from comfort zones.",
            author: "Unknown"
        },
        {
            text: "Dream it. Wish it. Do it.",
            author: "Unknown"
        },
        {
            text: "Success doesn't just find you. You have to go out and get it.",
            author: "Unknown"
        },
        {
            text: "The harder you work for something, the greater you'll feel when you achieve it.",
            author: "Unknown"
        },
        {
            text: "Dream bigger. Do bigger.",
            author: "Unknown"
        },
        {
            text: "Don't stop when you're tired. Stop when you're done.",
            author: "Unknown"
        },
        {
            text: "Wake up with determination. Go to bed with satisfaction.",
            author: "Unknown"
        }
    ],
    love: [
        {
            text: "The best thing to hold onto in life is each other.",
            author: "Audrey Hepburn"
        },
        {
            text: "Love is not about how many days, months, or years you have been together. Love is about how much you love each other every single day.",
            author: "Unknown"
        },
        {
            text: "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.",
            author: "Lao Tzu"
        },
        {
            text: "The greatest happiness of life is the conviction that we are loved; loved for ourselves, or rather, loved in spite of ourselves.",
            author: "Victor Hugo"
        },
        {
            text: "Love is composed of a single soul inhabiting two bodies.",
            author: "Aristotle"
        },
        {
            text: "In all the world, there is no heart for me like yours. In all the world, there is no love for you like mine.",
            author: "Maya Angelou"
        },
        {
            text: "Love doesn't make the world go 'round. Love is what makes the ride worthwhile.",
            author: "Franklin P. Jones"
        },
        {
            text: "The best love is the kind that awakens the soul and makes us reach for more.",
            author: "Nicholas Sparks"
        },
        {
            text: "Love is when the other person's happiness is more important than your own.",
            author: "H. Jackson Brown Jr."
        },
        {
            text: "To love and be loved is to feel the sun from both sides.",
            author: "David Viscott"
        },
        {
            text: "Love is not finding someone to live with. It's finding someone you can't live without.",
            author: "Rafael Ortiz"
        },
        {
            text: "The real lover is the man who can thrill you by kissing your forehead or smiling into your eyes or just staring into space.",
            author: "Marilyn Monroe"
        },
        {
            text: "Love is friendship that has caught fire.",
            author: "Ann Landers"
        },
        {
            text: "Where there is love there is life.",
            author: "Mahatma Gandhi"
        },
        {
            text: "Love recognizes no barriers. It jumps hurdles, leaps fences, penetrates walls to arrive at its destination full of hope.",
            author: "Maya Angelou"
        }
    ],
    success: [
        {
            text: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
            author: "Albert Schweitzer"
        },
        {
            text: "The way to get started is to quit talking and begin doing.",
            author: "Walt Disney"
        },
        {
            text: "Don't be afraid to give up the good to go for the great.",
            author: "John D. Rockefeller"
        },
        {
            text: "Innovation distinguishes between a leader and a follower.",
            author: "Steve Jobs"
        },
        {
            text: "The successful warrior is the average man with laser-like focus.",
            author: "Bruce Lee"
        },
        {
            text: "Success is walking from failure to failure with no loss of enthusiasm.",
            author: "Winston Churchill"
        },
        {
            text: "The only place where success comes before work is in the dictionary.",
            author: "Vidal Sassoon"
        },
        {
            text: "Success is not how high you have climbed, but how you make a positive difference to the world.",
            author: "Roy T. Bennett"
        },
        {
            text: "Don't let yesterday take up too much of today.",
            author: "Will Rogers"
        },
        {
            text: "You learn more from failure than from success. Don't let it stop you. Failure builds character.",
            author: "Unknown"
        },
        {
            text: "If you are working on something that you really care about, you don't have to be pushed. The vision pulls you.",
            author: "Steve Jobs"
        },
        {
            text: "Success is the sum of small efforts repeated day in and day out.",
            author: "Robert Collier"
        },
        {
            text: "The difference between ordinary and extraordinary is that little extra.",
            author: "Jimmy Johnson"
        },
        {
            text: "Success is not just about accomplishing your goals, but about who you become in the process.",
            author: "Unknown"
        },
        {
            text: "The road to success and the road to failure are almost exactly the same.",
            author: "Colin R. Davis"
        }
    ],
    wisdom: [
        {
            text: "The only true wisdom is in knowing you know nothing.",
            author: "Socrates"
        },
        {
            text: "In the middle of difficulty lies opportunity.",
            author: "Albert Einstein"
        },
        {
            text: "Life is what happens to you while you're busy making other plans.",
            author: "John Lennon"
        },
        {
            text: "The journey of a thousand miles begins with one step.",
            author: "Lao Tzu"
        },
        {
            text: "Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.",
            author: "Bill Keane"
        },
        {
            text: "Be yourself; everyone else is already taken.",
            author: "Oscar Wilde"
        },
        {
            text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
            author: "Albert Einstein"
        },
        {
            text: "You only live once, but if you do it right, once is enough.",
            author: "Mae West"
        },
        {
            text: "Be the change that you wish to see in the world.",
            author: "Mahatma Gandhi"
        },
        {
            text: "In three words I can sum up everything I've learned about life: it goes on.",
            author: "Robert Frost"
        },
        {
            text: "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
            author: "J.K. Rowling"
        },
        {
            text: "The fool doth think he is wise, but the wise man knows himself to be a fool.",
            author: "William Shakespeare"
        },
        {
            text: "Whenever you find yourself on the side of the majority, it is time to pause and reflect.",
            author: "Mark Twain"
        },
        {
            text: "The only way to make sense out of change is to plunge into it, move with it, and join the dance.",
            author: "Alan Watts"
        },
        {
            text: "Life is really simple, but we insist on making it complicated.",
            author: "Confucius"
        }
    ]
};

// Get all quotes from all categories
function getAllQuotes() {
    const allQuotes = [];
    Object.values(quotesDatabase).forEach(categoryQuotes => {
        allQuotes.push(...categoryQuotes);
    });
    return allQuotes;
}

// Get quotes by category
function getQuotesByCategory(category) {
    return quotesDatabase[category] || [];
}

// Get random quote from all categories
function getRandomQuote() {
    const allQuotes = getAllQuotes();
    const randomIndex = Math.floor(Math.random() * allQuotes.length);
    return allQuotes[randomIndex];
}

// Get random quote from specific category
function getRandomQuoteFromCategory(category) {
    const categoryQuotes = getQuotesByCategory(category);
    if (categoryQuotes.length === 0) return null;
    
    const randomIndex = Math.floor(Math.random() * categoryQuotes.length);
    return categoryQuotes[randomIndex];
}

// Shuffle array function
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        quotesDatabase,
        getAllQuotes,
        getQuotesByCategory,
        getRandomQuote,
        getRandomQuoteFromCategory,
        shuffleArray
    };
}