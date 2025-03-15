document.addEventListener("DOMContentLoaded", function() {

    const project1Open = document.getElementById("popupOpenProject1");
    const project2Open = document.getElementById("popupOpenProject2");
    const project3Open = document.getElementById("popupOpenProject3");

    const project1Close = document.getElementById("popupCloseProject1");
    const project2Close = document.getElementById("popupCloseProject2");
    const project3Close = document.getElementById("popupCloseProject3");

    const project1Display = document.getElementById("popupProject1")
    const project2Display = document.getElementById("popupProject2")
    const project3Display = document.getElementById("popupProject3")

    const openButtons = [project1Open, project2Open, project3Open];
    const closeButtons = [project1Close, project2Close, project3Close];
    const projectDisplays = [project1Display, project2Display, project3Display];

    function togglePopup(element, state) {
        element.classList.toggle(state)
    }

    for (let i=0; i<openButtons.length; i++) {
        openButtons[i].addEventListener("click", function() {
            togglePopup(projectDisplays[i], "show");
        });
    }

    for (let i=0; i<closeButtons.length; i++) {
        closeButtons[i].addEventListener("click", function() {
            togglePopup(projectDisplays[i], "show");
        });
    }

});

