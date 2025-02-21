
document.addEventListener("DOMContentLoaded", () => {
    const progressBars = document.querySelectorAll(".progress");

    progressBars.forEach((bar) => {
        const width = bar.closest(".course-card").dataset.progress;
        bar.style.width = width + "%";
    });
});



      const hamburgerMenu = document.getElementById("hamburger-menu");
      const navLinks = document.getElementById("nav-links");

      hamburgerMenu.addEventListener("click", () => {
        navLinks.classList.toggle("active");
      });
    


