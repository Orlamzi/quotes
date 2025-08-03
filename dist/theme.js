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