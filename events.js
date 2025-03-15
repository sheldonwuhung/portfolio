document.addEventListener("DOMContentLoaded", function() {

    const mailOpen = document.getElementById("mailOpen");
    const mailClose = document.getElementById("mailClose");
    const mailDisplay = document.getElementById("mailSection")

    const sendEmail = document.getElementById("sendEmail");

    const openButtons = [mailOpen];
    const closeButtons = [mailClose, sendEmail];
    const projectDisplays = [mailDisplay, mailDisplay];

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

    console.log(projectDisplays);
});

