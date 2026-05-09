// QUOTE FORM

document.getElementById("quoteForm").addEventListener("submit", function(e) {
    e.preventDefault();

    alert("Thank you! Your quote request has been submitted.");

    this.reset();
});

// JOB APPLICATION FORM

document.getElementById("jobForm").addEventListener("submit", function(e) {
    e.preventDefault();

    alert("Application submitted successfully!");

    this.reset();
});

// SMOOTH SCROLL

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });

    });

});