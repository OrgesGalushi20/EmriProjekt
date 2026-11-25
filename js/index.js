const currentYear = document.querySelector(".viti");
if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}

const newsletterForm = document.querySelector("#newsletter-form");
const newsletterFeedback = document.querySelector("#newsletter-feedback");

if (newsletterForm && newsletterFeedback) {
    newsletterForm.addEventListener("submit", (event) => {
        event.preventDefault();
        newsletterFeedback.textContent = "Thanks for your interest! Newsletter sign-up is coming soon.";
    });
}