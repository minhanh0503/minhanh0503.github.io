// Typing Effect
document.addEventListener("DOMContentLoaded", () => {
  const typingText = document.getElementById("typing-text");
  const phrases = [
    "Coding with glitter.",
    "Building pretty things.",
    "Solving puzzles.",
    "Learning something new every day.",
  ];

  // ... rest of your code
});

// const typingText = document.getElementById("typing-text");
// const phrases = [
//   "Coding with glitter.",
//   "Building pretty things.",
//   "Solving puzzles.",
//   "Learning something new every day.",
// ];
let i = 0;
let j = 0;
let currentPhrase = [];
let isDeleting = false;
let isEnd = false;

function loop() {
  isEnd = false;
  typingText.innerHTML = currentPhrase.join("");

  if (i < phrases.length) {
    if (!isDeleting && j <= phrases[i].length) {
      currentPhrase.push(phrases[i][j]);
      j++;
      typingText.innerHTML = currentPhrase.join("");
    }

    if (isDeleting && j <= phrases[i].length) {
      currentPhrase.pop(phrases[i][j]);
      j--;
      typingText.innerHTML = currentPhrase.join("");
    }

    if (j == phrases[i].length) {
      isEnd = true;
      isDeleting = true;
    }

    if (isDeleting && j === 0) {
      currentPhrase = [];
      isDeleting = false;
      i++;
      if (i === phrases.length) {
        i = 0;
      }
    }
  }
  const spedUp = Math.random() * (80 - 50) + 50;
  const normalSpeed = Math.random() * (200 - 150) + 150;
  const time = isEnd ? 2000 : isDeleting ? spedUp : normalSpeed;
  setTimeout(loop, time);
}

loop();
function toggleMenu() {
  document.getElementById("mobileMenu").classList.toggle("hidden");
}

// Scroll Reveal effect (simple manual version)
window.addEventListener("scroll", () => {
  const cards = document.querySelectorAll(".glass-card");
  cards.forEach((card) => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < window.innerHeight - 50) {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }
  });
});

// Initialize cards state
document.querySelectorAll(".glass-card").forEach((card) => {
  card.style.opacity = "1"; // Keeping it visible for demo, but can set to 0 for reveal
  card.style.transition = "all 0.6s ease-out";
});

function toggleMenu() {
  // Mobile menu logic can go here
  console.log("Toggle menu clicked");
}
