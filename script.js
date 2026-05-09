const quoteForm = document.getElementById("quoteForm");

if (quoteForm) {
    quoteForm.addEventListener("submit", function () {
        alert("Quote submitted successfully!");
    });
}

const jobForm = document.getElementById("jobForm");

if (jobForm) {
    jobForm.addEventListener("submit", function () {
        alert("Application submitted successfully!");
    });
}
