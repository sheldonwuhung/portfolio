document.addEventListener("DOMContentLoaded", function() {

    const mailOpen = document.getElementById("mailOpen");
    const mailClose = document.getElementById("mailClose");
    const confirmationClose = document.getElementById("confirmationClose");

    const mailDisplay = document.getElementById("mailSection")
    const confirmationDisplay = document.getElementById("confirmationDisplay")

    const form = document.getElementById("googleForm");

    const openButtons = [mailOpen];
    const closeButtons = [mailClose, confirmationClose];
    const projectDisplays = [mailDisplay, confirmationDisplay];

    function togglePopup(element, state) {
        element.classList.toggle(state)
    }

    function hideElement(array) {
        for (let i=0; i<array.length; i++) {
            if (array[i] != null) {
                array[i].addEventListener("click", function() {
                    togglePopup(projectDisplays[i], "show");
                    form.reset();
                });
            }
        }
    }

    hideElement(openButtons);
    hideElement(closeButtons);

    form.addEventListener("submit", function() {
        togglePopup(confirmationDisplay, "show");
        form.reset();
        console.log('done');
    });

});

