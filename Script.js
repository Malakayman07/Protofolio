// =========================================
// Portfolio Website JavaScript
// Author: Malak Ayman
// =========================================

// Wait until the HTML page is fully loaded
document.addEventListener("DOMContentLoaded", () => {

    // =========================================
    // Get HTML Elements
    // =========================================

    const projectFilter = document.querySelector(".hire-me");
    const projectCards = document.querySelectorAll(".projects-card");

    const searchInput = document.querySelector(".search-box input");
    const searchButton = document.querySelector(".search-box button");

    const navLinks = document.querySelectorAll(".links a");

    const heroTitle = document.querySelector(".nameing h1");



    // =========================================
    // 1. Typing Animation
    // =========================================

    const originalText = heroTitle.textContent;

    let index = 0;

    heroTitle.textContent = "";

    function typeWriter() {

        if (index < originalText.length) {

            heroTitle.textContent += originalText.charAt(index);

            index++;

            setTimeout(typeWriter, 90);
        }

    }

    typeWriter();



    // =========================================
    // 2. Filter Projects
    // =========================================

    projectFilter.addEventListener("change", () => {

        const selectedCategory = projectFilter.value;

        projectCards.forEach(card => {

            const category = card.dataset.category;

            if (selectedCategory === "all" || category === selectedCategory) {

                card.style.display = "flex";

            }

            else {

                card.style.display = "none";

            }

        });

    });



    // =========================================
    // 3. Search Projects
    // =========================================

    function searchProjects() {

        const searchValue = searchInput.value.toLowerCase();

        projectCards.forEach(card => {

            const title = card.querySelector("h2").textContent.toLowerCase();

            const type = card.querySelector("p").textContent.toLowerCase();

            if (
                title.includes(searchValue) ||
                type.includes(searchValue)
            ) {

                card.style.display = "flex";

            }

            else {

                card.style.display = "none";

            }

        });

    }

    searchButton.addEventListener("click", searchProjects);

    searchInput.addEventListener("keyup", function (event) {

        if (event.key === "Enter") {

            searchProjects();

        }

    });



    // =========================================
    // 4. Smooth Navigation
    // =========================================

    navLinks.forEach(link => {

        link.addEventListener("click", function (e) {

            const href = this.getAttribute("href");

            if (href.startsWith("#")) {

                e.preventDefault();

                const section = document.querySelector(href);

                if (section) {

                    section.scrollIntoView({

                        behavior: "smooth"

                    });

                }

            }

        });

    });



    // =========================================
    // 5. Scroll Reveal Animation
    // =========================================

    const revealElements = document.querySelectorAll(

        ".projects-card, .skill, .photo-card"

    );

    function revealOnScroll() {

        const windowHeight = window.innerHeight;

        revealElements.forEach(element => {

            const position = element.getBoundingClientRect().top;

            if (position < windowHeight - 120) {

                element.style.opacity = "1";

                element.style.transform = "translateY(0)";

            }

        });

    }

    revealElements.forEach(element => {

        element.style.opacity = "0";

        element.style.transform = "translateY(50px)";

        element.style.transition = "0.7s";

    });

    window.addEventListener("scroll", revealOnScroll);

    revealOnScroll();



    // =========================================
    // 6. Project Card Animation
    // =========================================

    projectCards.forEach(card => {

        card.addEventListener("mouseenter", () => {

            card.style.transform = "translateY(-10px) scale(1.03)";

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform = "translateY(0) scale(1)";

        });

    });



    // =========================================
    // 7. Skills Hover Effect
    // =========================================

    const skills = document.querySelectorAll(".skill");

    skills.forEach(skill => {

        skill.addEventListener("mouseenter", () => {

            skill.style.transform = "scale(1.15) rotate(5deg)";

        });

        skill.addEventListener("mouseleave", () => {

            skill.style.transform = "";

        });

    });



    // =========================================
    // 8. Header Shadow on Scroll
    // =========================================

    const header = document.querySelector(".head");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            header.style.boxShadow =
                "0 8px 25px rgba(0,0,0,.4)";

        }

        else {

            header.style.boxShadow = "";

        }

    });



    // =========================================
    // 9. Create Back To Top Button
    // =========================================

    const topButton = document.createElement("button");

    topButton.innerHTML = "↑";

    topButton.id = "topButton";

    document.body.appendChild(topButton);



    // Style the button using JavaScript

    topButton.style.position = "fixed";

    topButton.style.bottom = "30px";

    topButton.style.right = "30px";

    topButton.style.width = "55px";

    topButton.style.height = "55px";

    topButton.style.borderRadius = "50%";

    topButton.style.border = "none";

    topButton.style.background = "#101827";

    topButton.style.color = "#C99A54";

    topButton.style.fontSize = "24px";

    topButton.style.cursor = "pointer";

    topButton.style.display = "none";

    topButton.style.boxShadow = "0 0 15px rgba(0,0,0,.3)";



    // Show button after scrolling

    window.addEventListener("scroll", () => {

        if (window.scrollY > 400) {

            topButton.style.display = "block";

        }

        else {

            topButton.style.display = "none";

        }

    });



    // Scroll to top

    topButton.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });



    // =========================================
    // 10. Button Ripple Effect
    // =========================================

    const buttons = document.querySelectorAll("button");

    buttons.forEach(button => {

        button.addEventListener("click", () => {

            button.style.transform = "scale(.95)";

            setTimeout(() => {

                button.style.transform = "scale(1)";

            }, 150);

        });

    });



    // =========================================
    // 11. Welcome Message
    // =========================================

    console.log("Welcome to Malak Ayman's Portfolio!");

});