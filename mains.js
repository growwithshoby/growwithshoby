document.addEventListener("DOMContentLoaded", () => {
    const words = ["SEO", "SEM", "Web", "Design", "Social Media"];
    const el = document.getElementById("dynamic-word");

    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
      const currentWord = words[wordIndex];
      const visibleText = currentWord.substring(0, charIndex);

      el.textContent = visibleText;

      if (!isDeleting && charIndex < currentWord.length) {
        charIndex++;
        setTimeout(type, 120);
      } else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(type, 60);
      } else {
        if (!isDeleting) {
          isDeleting = true;
          setTimeout(type, 1000); // pause after full word
        } else {
          isDeleting = false;
          wordIndex = (wordIndex + 1) % words.length;
          setTimeout(type, 200);
        }
      }
    }

    type();
  });