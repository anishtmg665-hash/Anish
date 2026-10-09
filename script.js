
const recipientName = "Babe";

const reducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

document.title = `Happy Birthday, ${recipientName} 💗`;
document.getElementById("year").textContent =
  new Date().getFullYear();

// Toast notification
const toast = document.getElementById("toast");
let toastTimeout;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(toastTimeout);

  toastTimeout = setTimeout(() => {
    toast.classList.remove("show");
  }, 2800);
}

// Falling hearts and confetti
function confetti(count = 90) {
  if (reducedMotion) return;

  const colors = [
    "#f28ca8",
    "#ffc4d4",
    "#e8c29d",
    "#fff0e9",
    "#b94b75"
  ];

  for (let i = 0; i < count; i++) {
    const piece = document.createElement("span");

    piece.className = "confetti";

    piece.textContent =
      Math.random() > 0.65 ? "♥" : "";

    piece.style.left = `${Math.random() * 100}vw`;

    piece.style.width =
      `${5 + Math.random() * 7}px`;

    piece.style.height =
      `${8 + Math.random() * 10}px`;

    piece.style.color =
      colors[Math.floor(Math.random() * colors.length)];

    piece.style.background = piece.textContent
      ? "transparent"
      : colors[Math.floor(Math.random() * colors.length)];

    piece.style.setProperty(
      "--drift",
      `${Math.random() * 180 - 90}px`
    );

    piece.style.animationDuration =
      `${2.4 + Math.random() * 3}s`;

    piece.style.animationDelay =
      `${Math.random() * 0.4}s`;

    document.body.appendChild(piece);

    setTimeout(() => {
      piece.remove();
    }, 5800);
  }
}

// Celebrate button
document
  .getElementById("celebrateButton")
  .addEventListener("click", () => {
    confetti(110);

    showToast(
      `Happy Birthday, ${recipientName}! Make a beautiful wish. 💗`
    );
  });

// Heart button
document
  .getElementById("heartButton")
  .addEventListener("click", () => {
    confetti(45);
    showToast("A little extra love, just for you. ♥");
  });

// Final birthday surprise
document
  .getElementById("finalButton")
  .addEventListener("click", () => {
    confetti(130);
    showToast("Sending you the biggest birthday hug! 💋");
  });

// Reveal the hidden message
document
  .getElementById("surpriseButton")
  .addEventListener("click", () => {
    const note = document.getElementById("hiddenNote");

    note.hidden = !note.hidden;

    const button =
      document.getElementById("surpriseButton");

    button.innerHTML = note.hidden
      ? "One last little surprise ↗"
      : "Keep this little note close ♥";

    if (!note.hidden) {
      confetti(35);
    }
  });

// Mobile navigation menu
const menuToggle =
  document.getElementById("menuToggle");

const navLinks =
  document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");

  menuToggle.setAttribute(
    "aria-expanded",
    String(open)
  );
});

// Close menu when a navigation link is clicked
document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");

    menuToggle.setAttribute(
      "aria-expanded",
      "false"
    );

    document
      .querySelectorAll(".nav-link")
      .forEach(item => {
        item.classList.remove("active");
      });

    link.classList.add("active");
  });
});

// Back-to-top button
const backTop = document.getElementById("backTop");

window.addEventListener(
  "scroll",
  () => {
    backTop.classList.toggle(
      "visible",
      window.scrollY > 450
    );
  },
  { passive: true }
);

backTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// Small welcome celebration when the page opens
window.addEventListener("load", () => {
  setTimeout(() => {
    confetti(35);
  }, 700);
});