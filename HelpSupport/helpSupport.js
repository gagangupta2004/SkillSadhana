const hamburgerMenu = document.getElementById("hamburger-menu");
      const navLinks = document.getElementById("nav-links");

      hamburgerMenu.addEventListener("click", () => {
        navLinks.classList.toggle("active");
      });


document.addEventListener("DOMContentLoaded", () => {
    const faqs = document.querySelectorAll(".faq-question");

    faqs.forEach((question) => {
        question.addEventListener("click", () => {
            const answer = question.nextElementSibling;
            if (answer.style.display === "block") {
                answer.style.display = "none";
                question.querySelector("span").textContent = "+";
            } else {
                answer.style.display = "block";
                question.querySelector("span").textContent = "-";
            }
        });
    });
});




