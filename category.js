const quotesByCategory = {
    motivation: [
      "Discipline weighs ounces, regret weighs tons.",
      "Some days you win. Other days you learn."
    ],
    love: [
      "Real love stays even when no one else does.",
      "Love doesn’t find you. You create it with effort."
    ],
    pain: [
      "Pain is a reminder that you're still alive — use it.",
      "Even scars have stories worth telling."
    ],
    hustle: [
      "Hustle in silence, let success make the noise.",
      "Work until your signature becomes an autograph."
    ]
  };
  
  const categorySelect = document.getElementById("categorySelect");
  const quoteList = document.getElementById("quoteList");
  
  function displayQuotes(category) {
    quoteList.innerHTML = "";
    quotesByCategory[category].forEach((q) => {
      const p = document.createElement("p");
      p.textContent = `"${q}"`;
      quoteList.appendChild(p);
    });
  }
  
  // Load default
  displayQuotes(categorySelect.value); /* This line says: As soon as the page
   loads, show quotes for whatever category is selected by default in the
    dropdown...So categorySelect.value gets the currently selected value, e.g.,"motivation". */
  
  categorySelect.addEventListener("change", (e) => {
    displayQuotes(e.target.value);
  });
  