// document.addEventListener("DOMContentLoaded", function() {

//TOP BUTTONS
const linkedinOpen = document.getElementById("linkedinOpen");
const githubOpen = document.getElementById("githubOpen");
const mailOpen = document.getElementById("mailOpenI");
const mClose = document.getElementById("mailCloseI");
const cClose = document.getElementById("confirmationCloseI");

//TOP BUTTON IMAGES
const limg1 = new Image(); limg1.src = "images/TopButtons/linkedin.png";
const limg2 = new Image(); limg2.src = "images/TopButtons/lightlinkedin.png";

const gimg1 = new Image(); gimg1.src = "images/TopButtons/github.png";
const gimg2 = new Image(); gimg2.src = "images/TopButtons/lightgithub.png";

const mimg1 = new Image(); mimg1.src = "images/TopButtons/mail.png";
const mimg2 = new Image(); mimg2.src = "images/TopButtons/lightmail.png";

const cimg1 = new Image(); cimg1.src = "images/TopButtons/close.png";
const cimg2 = new Image(); cimg2.src = "images/TopButtons/lightclose.png";

//CLOSE BUTTONS
const mailClose = document.getElementById("mailClose");
const confirmationClose = document.getElementById("confirmationClose");

//OTHER DISPLAY LAYERS
const mailDisplay = document.getElementById("mailSection")
const confirmationDisplay = document.getElementById("confirmationDisplay")

//FORM
const form = document.getElementById("googleForm");
const iFrame = document.getElementById("hidden_iframe");

//ARRAYS
const imageChangeButtons = [linkedinOpen, githubOpen, mailOpen, mClose, cClose];
const normalImages = [limg1, gimg1, mimg1, cimg1, cimg1];
const lightImages = [limg2, gimg2, mimg2, cimg2, cimg2];

const openButtons = [mailOpen];
const closeButtons = [mailClose, confirmationClose];
const projectDisplays = [mailDisplay, confirmationDisplay];

function togglePopup(element, state) {element.classList.toggle(state)}
function mouseHoverChangeImage(element, img) {element.src = img.src;}

function submitEvent(event) {
    event.preventDefault();
    form.submit();
    form.reset();
    togglePopup(confirmationDisplay, "show");
    togglePopup(mailDisplay, "show");
    console.log('done');
}

function hideElement(array) {
    for (let i=0; i<array.length; i++) {
        if (array[i] != null) {
            array[i].addEventListener("click", function() {
                togglePopup(projectDisplays[i], "show");
            });
        }
    }
}

function addImgChangeEvents(array) {
    for (let i=0; i<array.length; i++) {
        if (array[i] != null) {
            array[i].addEventListener("mouseover", function() {
                mouseHoverChangeImage(array[i], lightImages[i]);
            });
            array[i].addEventListener("mouseout", function() {
                mouseHoverChangeImage(array[i], normalImages[i]);
            });
        }
    }
}

hideElement(openButtons);
hideElement(closeButtons);
addImgChangeEvents(imageChangeButtons);

form.addEventListener("submit", submitEvent);

// });

