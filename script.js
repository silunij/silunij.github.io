function setupCarousel(
    carouselId,
    leftButtonId,
    rightButtonId
) {

    const carousel =
        document.getElementById(carouselId);

    const leftButton =
        document.getElementById(leftButtonId);

    const rightButton =
        document.getElementById(rightButtonId);

    rightButton.addEventListener("click", () => {

        const maxScroll =
            carousel.scrollWidth - carousel.clientWidth;

        if (carousel.scrollLeft >= maxScroll - 10) {

            carousel.scrollTo({
                left: 0,
                behavior: "smooth"
            });

        } else {

            carousel.scrollBy({
                left: 340,
                behavior: "smooth"
            });

        }

    });

    leftButton.addEventListener("click", () => {

        if (carousel.scrollLeft <= 0) {

            carousel.scrollTo({
                left: carousel.scrollWidth,
                behavior: "smooth"
            });

        } else {

            carousel.scrollBy({
                left: -340,
                behavior: "smooth"
            });

        }

    });

}

setupCarousel(
    "projectsCarousel",
    "projectLeft",
    "projectRight"
);

setupCarousel(
    "galleryCarousel",
    "galleryLeft",
    "galleryRight"
);