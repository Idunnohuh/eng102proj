document.querySelectorAll(".accordion").forEach(accordion => {
  const headers = accordion.querySelectorAll(".accordion-header");

  headers.forEach(header => {
    header.addEventListener("click", () => {
      const item = header.parentElement;

      // close siblings ONLY inside this accordion
      accordion.querySelectorAll(".accordion-item").forEach(other => {
        if (other !== item) {
          other.classList.remove("active");
        }
      });

      item.classList.toggle("active");
    });
  });
});