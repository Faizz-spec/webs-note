document.addEventListener("DOMContentLoaded", function () {
    let dropdowns = document.querySelectorAll(".dropdown > a");

    dropdowns.forEach(dropdown => {
        dropdown.addEventListener("click", function (e) {
            e.preventDefault();
            let menu = this.nextElementSibling;

            document.querySelectorAll(".dropdown-menu").forEach(item => {
                if (item !== menu) item.style.display = "none";
            });

            menu.style.display = menu.style.display === "block" ? "none" : "block";
        });
    });

    document.addEventListener("click", function (e) {
        if (!e.target.closest(".dropdown")) {
            document.querySelectorAll(".dropdown-menu").forEach(item => {
                item.style.display = "none";
            });
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slides img");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");

    let currentIndex = 0; // mulai darii nol awal indexx

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? "block" : "none";
        });
    }

    nextButton.addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    });

    prevButton.addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    });

    // Tampilkan slide pertama 
    showSlide(currentIndex);
});
