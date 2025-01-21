// JavaScript functionality for the portfolio website

document.addEventListener("DOMContentLoaded", function () {
    const sidebarToggle = document.createElement("button");
    sidebarToggle.textContent = "☰";
    sidebarToggle.style.position = "fixed";
    sidebarToggle.style.top = "10px";
    sidebarToggle.style.left = "10px";
    sidebarToggle.style.background = "#4caf50";
    sidebarToggle.style.color = "white";
    sidebarToggle.style.border = "none";
    sidebarToggle.style.padding = "10px 15px";
    sidebarToggle.style.cursor = "pointer";
    sidebarToggle.style.borderRadius = "5px";
    sidebarToggle.style.zIndex = "1000";

    document.body.appendChild(sidebarToggle);

    const sidebar = document.querySelector(".sidebar");
    sidebarToggle.addEventListener("click", function () {
        if (sidebar.style.display === "none" || sidebar.style.display === "") {
            sidebar.style.display = "block";
        } else {
            sidebar.style.display = "none";
        }
    });

    // Smooth scroll for navigation links
    const links = document.querySelectorAll(".sidebar ul li a");
    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: "smooth"
                });
            }
        });
    });

    // Dynamic progress bar animations
    const skillBars = document.querySelectorAll(".skill-bar");
    window.addEventListener("scroll", function () {
        skillBars.forEach(bar => {
            const rect = bar.getBoundingClientRect();
            if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                bar.style.width = bar.getAttribute("data-progress") || "100%";
            }
        });
    });

    // Form submission feedback
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            alert("Thank you for your message! We will get back to you soon.");
            form.reset();
        });
    }
});