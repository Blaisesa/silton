document.addEventListener("DOMContentLoaded", () => {
  const words = ["Home", "Space", "Future"];
  const el = document.querySelector(".changing-word");
  let index = 0;
  let isAnimating = false;

  function changeWord() {
    if (isAnimating) return;
    isAnimating = true;
    el.classList.add("fade-out");

    setTimeout(() => {
      index = (index + 1) % words.length;
      el.textContent = words[index];
      el.classList.remove("fade-out");
      el.classList.add("fade-in");

      setTimeout(() => {
        el.classList.remove("fade-in");
        isAnimating = false;
      }, 600);
    }, 600);
  }

  // Start loop
  setInterval(changeWord, 3000);
});