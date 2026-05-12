const projectButton = document.getElementById("projectButton");

projectButton.addEventListener("click", () => {

    document
        .getElementById("projects")
        .scrollIntoView({
            behavior: "smooth"
        });

});

const projectsGrid = document.querySelector(".projects-grid");

const leftArrow = document.getElementById("leftArrow");
const rightArrow = document.getElementById("rightArrow");

rightArrow.addEventListener("click", () => {

    const maxScroll =
        projectsGrid.scrollWidth - projectsGrid.clientWidth;

    if (projectsGrid.scrollLeft >= maxScroll - 10) {

        projectsGrid.scrollTo({
            left: 0,
            behavior: "smooth"
        });

    } else {

        projectsGrid.scrollBy({
            left: 340,
            behavior: "smooth"
        });

    }

});

leftArrow.addEventListener("click", () => {

    if (projectsGrid.scrollLeft <= 0) {

        projectsGrid.scrollTo({
            left: projectsGrid.scrollWidth,
            behavior: "smooth"
        });

    } else {

        projectsGrid.scrollBy({
            left: -340,
            behavior: "smooth"
        });

    }

});