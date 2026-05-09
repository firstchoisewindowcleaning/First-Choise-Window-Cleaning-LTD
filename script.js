document.addEventListener("DOMContentLoaded", function () {
    const quoteForm = document.getElementById("quoteForm");

    if (quoteForm) {
        quoteForm.addEventListener("submit", function (e) {
            e.preventDefault();
            alert("Quote submitted successfully!");
            this.reset();
        });
    }

    const jobForm = document.getElementById("jobForm");

    if (jobForm) {
        jobForm.addEventListener("submit", function (e) {
            e.preventDefault();
            alert("Application submitted successfully!");
            this.reset();
        });
    }
});
