const projectButton = document.getElementById("projectButton");

projectButton.addEventListener("click", () => {

    document
        .getElementById("projects")
        .scrollIntoView({
            behavior: "smooth"
        });

});