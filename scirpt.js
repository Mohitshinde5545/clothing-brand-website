  const bar = document.getElementById("bar");
const navbar = document.getElementById("navbar");

if (bar) {
    bar.addEventListener("click", () => {
        navbar.classList.toggle("active");
    });
}

    if (close) {
        close.addEventListener("click", () => {
            navbar.classList.remove("active");
        });
    }


const MainImg = document.getElementById("MainImg");
const smallImgs = document.querySelectorAll(".small-img");
const lens = document.querySelector(".lens");
const box = document.querySelector(".inspect-box");

/* Thumbnail click inspect */
smallImgs.forEach(img => {
    img.addEventListener("click", () => {
        MainImg.src = img.src;

        smallImgs.forEach(i => i.classList.remove("active"));
        img.classList.add("active");
    });
});

/* Magnifier inspect */
box.addEventListener("mousemove", (e) => {
    lens.style.display = "block";

    const rect = box.getBoundingClientRect();
    let x = e.clientX - rect.left - lens.offsetWidth / 2;
    let y = e.clientY - rect.top - lens.offsetHeight / 2;

    x = Math.max(0, Math.min(x, box.offsetWidth - lens.offsetWidth));
    y = Math.max(0, Math.min(y, box.offsetHeight - lens.offsetHeight));

    lens.style.left = x + "px";
    lens.style.top = y + "px";

    MainImg.style.transformOrigin =
        `${(x / box.offsetWidth) * 100}% ${(y / box.offsetHeight) * 100}%`;
});

/* Hide lens */
box.addEventListener("mouseleave", () => {
    lens.style.display = "none";
    MainImg.style.transformOrigin = "center";
});

// Thumbnail click to change main image
smallImgs.forEach(img => {
    img.addEventListener("click", () => {
        MainImg.src = img.src;
        smallImgs.forEach(i => i.classList.remove("active"));
        img.classList.add("active");
    });
});

// Magnifier / lens effect
box.addEventListener("mousemove", (e) => {
    lens.style.display = "block";

    const rect = box.getBoundingClientRect();
    let x = e.clientX - rect.left - lens.offsetWidth / 2;
    let y = e.clientY - rect.top - lens.offsetHeight / 2;

    x = Math.max(0, Math.min(x, box.offsetWidth - lens.offsetWidth));
    y = Math.max(0, Math.min(y, box.offsetHeight - lens.offsetHeight));

    lens.style.left = x + "px";
    lens.style.top = y + "px";

    MainImg.style.transformOrigin =
        `${(x / box.offsetWidth) * 100}% ${(y / box.offsetHeight) * 100}%`;
});

// Hide lens when mouse leaves
box.addEventListener("mouseleave", () => {
    lens.style.display = "none";
    MainImg.style.transformOrigin = "center";
});


