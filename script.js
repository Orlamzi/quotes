const quotes = [
    "You are your thoughts, your mindset, and your actions - not your appearance.",
    "The best revenge is massive success.",
    "Your own experience is your best teacher, not others' opinions.",
    "Never complain about a path you refused to leave.",
    "Energy doesn't lie. Protect your vibe.",
    "You become what you repeatedly do.",
    "When someone walks away, they've simply stopped tolerating what no longer serves them.",
    "Set boundaries. People who respect them belong in your life.",
    "History doesn't equal destiny.",
    "Just because they were there at the beginning doesn't mean they're meant for the rest of the journey.",
    "Growth means knowing when it's time to stop forcing what's no longer flowing.",
    "Let it go and let peace in.",
    "Stay sharp, cut ties clean, and move with purpose.",
    "Success often comes to those who manage their time and priorities well.",
    "What goes around comes around - choose your actions wisely.",
    "Every lesson comes at a price.",
    "Growth is more valuable than nostalgia.",
    "Stay authentic, protect your peace, and keep moving forward without dead weight.",
    "The only impossible journey is the one you never begin.",
    "Your potential is endless when you believe in yourself.",
];

const quoteText = document.getElementById('quote');
const button = document.getElementById('new-quote');

function onClick() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteText.textContent = quotes[randomIndex];
    
    // Add a subtle animation effect
    quoteText.style.opacity = '0.7';
    setTimeout(() => {
        quoteText.style.opacity = '1';
    }, 200);
}

// THEME TOGGLE

// const themeBtn = document.getElementById('toggle-theme');
// const body = document.body;

// const savedTheme = localStorage.getItem("theme");
// if (savedTheme === "light") {
//   body.classList.add("light-mode");
//   themeBtn.textContent = "🌚 Dark Mode";
// }

// themeBtn.addEventListener("click", () => {
//     body.classList.toggle("light-mode");
//     if (body.classList.contains("light-mode")) {
//       themeBtn.textContent = "🌚 Dark Mode";
//       localStorage.setItem("theme", "light");
//     } else {
//       themeBtn.textContent = "🌙 Light Mode";
//       localStorage.setItem("theme", "dark");
//     }
//   });
