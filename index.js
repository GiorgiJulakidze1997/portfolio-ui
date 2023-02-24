"use strict";

const btn = document.querySelector(".mobile-primary-menu");
btn.addEventListener('click', () => {
    // 👇️ hide button
    const mobile = document.querySelector(".mobile-primary-menu");
    mobile.style.display = "none";

    // 👇️ show menu
    const desktop = document.querySelector(".primary-menu");
    desktop.style.display = "block";
});