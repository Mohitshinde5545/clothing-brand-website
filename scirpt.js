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

