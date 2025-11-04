const words = ["Home", "Space", "Future"];
  let index = 0;
  const changingWord = document.querySelector(".changing-word");

  window.onload = () => {
  setInterval(() => {
    // fade out
    changingWord.classList.add("fade-out");

    setTimeout(() => {
      // change word
      index = (index + 1) % words.length;
      changingWord.textContent = words[index];

      // fade in
      changingWord.classList.remove("fade-out");
      changingWord.classList.add("fade-in");

      // reset fade-in after it finishes
      setTimeout(() => changingWord.classList.remove("fade-in"), 600);
    }, 600);
  }, 2500); // change every 2.5 seconds
};