const quotes = [
    "You are your thoughts, your mindset; and sometimes your deed, your age.. Not your look",
    "The best revenge is massive success.",
    "Your own experience is your best teacher. Not really others'",
    "Never complain about a path you refused to leave.",
    "Energy doesnt lie. Protect your vibe.",
    "You become what you repeatedly do.",
    "If someone walks away from you because they've had enough of your nonsense, it means they've stopped tolerating it.",
    "People who tolerate nonsense tend to attract more of it.",
    "History doesn't equal destiny.",
    "Just because they were there at the beginning doesn't mean they're meant for the rest of the journey",
    "Growth means knowing when it's time to stop forcing what's no longer flowing.",
    "Let it go man! and let peace tf in...",
    "yktv; Gotta stay sharp, cut ties clean, and move with purpose.",
    "It's no wonder to me folks with bad time management and priority made it, cos 'LUCK IS NO JOKE FAM!'",
    "Bad deeds usually don't end well for those who do 'em",
    "Every lesson comes at a price.",
    "Growth>>>>>Nostalgia💯",
    "All day💥 stay real, protect your peace, and keep it moving.No dead weight in the next chapter. Lfg🚀🔥",
];

const quoteText = document.getElementById('quote');
const button = document.getElementById('new-quote');

function onClick() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteText.textContent = quotes[randomIndex];
}
button.addEventListener('click', onClick);

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
