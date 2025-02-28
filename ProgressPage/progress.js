
document.querySelectorAll(".course-card").forEach((card) => {
    let slider = card.querySelector(".progress-slider");
    let progress = card.querySelector(".progress");
    let percentageText = card.querySelector(".progress-percentage");

    function updateProgress() {
        let value = slider.value;
        progress.style.width = value + "%";
        percentageText.textContent = value + "%";
    }

    slider.addEventListener("input", updateProgress);
    updateProgress(); // Initialize on load
});




const hamburgerMenu = document.getElementById("hamburger-menu");
      const navLinks = document.getElementById("nav-links");

      hamburgerMenu.addEventListener("click", () => {
        navLinks.classList.toggle("active");
      });
    


