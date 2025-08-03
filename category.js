const quotesByCategory = {
    motivation: [
        "Discipline weighs ounces, regret weighs tons.",
        "Some days you win. Other days you learn.",
        "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        "The only impossible journey is the one you never begin.",
        "Your potential is endless when you believe in yourself.",
        "Champions are made when nobody's watching."
    ],
    love: [
        "Real love stays even when no one else does.",
        "Love doesn't find you. You create it with effort.",
        "The best relationships are built on friendship, trust, and mutual respect.",
        "Love is not about finding the perfect person, but learning to see an imperfect person perfectly.",
        "In a world full of temporary things, you are a perpetual feeling.",
        "True love is when someone accepts your past, supports your present, and encourages your future."
    ],
    pain: [
        "Pain is a reminder that you're still alive - use it as fuel for growth.",
        "Even scars have stories worth telling.",
        "The strongest people are not those who show strength in front of us, but those who win battles we know nothing about.",
        "Sometimes you need to be broken down to be built back up stronger.",
        "Your current situation is not your final destination.",
        "Healing doesn't mean the damage never existed. It means the damage no longer controls your life."
    ],
    hustle: [
        "Hustle in silence, let success make the noise.",
        "Work until your signature becomes an autograph.",
        "Dreams don't work unless you do.",
        "The grind never stops, but neither does the growth.",
        "Success is the sum of small efforts repeated day in and day out.",
        "Your work ethic today determines your lifestyle tomorrow."
    ]
  };
  
  const categorySelect = document.getElementById("categorySelect");
  const quoteList = document.getElementById("quoteList");
  
  function displayQuotes(category) {
    quoteList.innerHTML = "";
    
    // Add category description
    const categoryDescriptions = {
        motivation: "Fuel your ambition and drive with these powerful motivational quotes.",
        love: "Discover the beauty and wisdom of love through these heartfelt quotes.",
        pain: "Find strength and resilience in these quotes about overcoming challenges.",
        hustle: "Get inspired to work harder and achieve your goals with these hustle quotes."
    };
    
    const description = document.createElement("p");
    description.className = "category-description";
    description.textContent = categoryDescriptions[category];
    quoteList.appendChild(description);
    
    quotesByCategory[category].forEach((q) => {
      const p = document.createElement("p");
      p.className = "category-quote";
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
  