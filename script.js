
/* ==========================
   PART 1: NAVIGATION
========================== */

// Select all navigation links
const navLinks = document.querySelectorAll(".nav-links a");

// Smooth scrolling
navLinks.forEach(link => {

    link.addEventListener("click", function(event) {

        const targetId = this.getAttribute("href");

        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            event.preventDefault();

            targetSection.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});


// Highlight active navigation link
window.addEventListener("scroll", function() {

    let currentSection = "";

    document.querySelectorAll("section[id]").forEach(section => {

        const sectionTop = section.offsetTop;

        if (window.scrollY >= sectionTop - 150) {
            currentSection = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }

    });

});

/* ==========================
   PART 2: BUTTON INTERACTION
========================== */

// START NOW button
const startButton = document.querySelector(".start-btn");

if (startButton) {

    startButton.addEventListener("click", function() {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


// Reveal sections while scrolling
const revealSections = document.querySelectorAll(
    ".about, .skills, .projects, .contact, .start-section"
);

const revealObserver = new IntersectionObserver(function(entries) {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("visible");

            revealObserver.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.15
});

revealSections.forEach(section => {

    section.classList.add("reveal");

    revealObserver.observe(section);

});

/* ==========================
   PART 3: FOOTER YEAR
========================== */

const footerText = document.querySelector("footer p");

if (footerText) {

    footerText.innerHTML =
        "© " + new Date().getFullYear() +
        " Priyanka. All Rights Reserved.";

}


/* ==========================
   SCROLL TO TOP BUTTON
========================== */

// Create button
const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.className = "top-btn";

topButton.setAttribute("aria-label", "Scroll to top");

document.body.appendChild(topButton);


// Show button while scrolling
window.addEventListener("scroll", function() {

    if (window.scrollY > 300) {

        topButton.classList.add("show");

    } else {

        topButton.classList.remove("show");

    }

});


// Scroll to top
topButton.addEventListener("click", function() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});
