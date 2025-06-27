const quotes = [
    "Dont wait for opportunity. Create it.",
    "The best revenge is massive success.",
    "Pain is temporary, pride is forever.",
    "Never complain about a path you refused to leave.",
    "Energy doesnt lie. Protect your vibe.",
    "You become what you repeatedly do."
];

const quoteText = document.getElementById('quote');
const button = document.getElementById('new-quote');

function onClick() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteText.textContent = quotes[randomIndex];
}
button.addEventListener('click', onClick);

// THEME TOGGLE

const themeBtn = document.getElementById('toggle-theme');
const body = document.body;

const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light") {
  body.classList.add("light-mode");
  themeBtn.textContent = "🌚 Dark Mode";
}

themeBtn.addEventListener("click", () => {
    body.classList.toggle("light-mode");
    if (body.classList.contains("light-mode")) {
      themeBtn.textContent = "🌚 Dark Mode";
      localStorage.setItem("theme", "light");
    } else {
      themeBtn.textContent = "🌙 Light Mode";
      localStorage.setItem("theme", "dark");
    }
  });
