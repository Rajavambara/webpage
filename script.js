// script.js
document.addEventListener("DOMContentLoaded", function() {
    const btn = document.getElementById("alertBtn");
    const output = document.getElementById("output");
    const cover = document.getElementById("cover");

    btn.addEventListener("click", function() {
        alert("Thanks for clicking! This book inspires us more.");
        output.textContent = "You clicked the button — nice! Here's a short message : Read a little every day.";
    });

    // small extra: change image when hovered
    cover.addEventListener("mouseenter", () => {
        cover.style.transform = "scale(1.02)";
        cover.style.transition = "transform 200ms ease";
    });
    cover.addEventListener("mouseleave", () => {
        cover.style.transform = "none";
    });
});