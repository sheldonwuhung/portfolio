//MAIIN PROPERTIES
let width = window.innerWidth;
let height = window.innerHeight;
let change = false;
let change650 = false;
let htmlLoaded = false;

//NAV BUTTONS
const aboutMeButton = document.getElementById("AboutMe");
const projectButton = document.getElementById("Projects");
const graphicsButton = document.getElementById("Graphics");
const contactButton = document.getElementById("ContactMe");
const menuButton = document.getElementById("Menu");
const menuButtonImage = menuButton.querySelector("img");

//DROPDOWN BUTTONS
const aboutMeButtonD = document.getElementById("AboutMeD");
const projectButtonD = document.getElementById("ProjectsD");
const graphicsButtonD = document.getElementById("GraphicsD");
const contactButtonD = document.getElementById("ContactMeD");


//HEADER LOCATIONS
const section1Header = document.getElementById("Section1");
const section2Header = document.getElementById("Section2");
const section3Header = document.getElementById("Section3");

//ABOUT ME DOWN ARROW
const downArrow = document.getElementById("downArrow");
const circles = document.getElementById("circles");

//TOP BUTTONS
const linkedinOpen = document.getElementById("linkedinOpen");
const githubOpen = document.getElementById("githubOpen");
const mailOpen = document.getElementById("mailOpenI");
const mClose = document.getElementById("mailCloseI");
const cClose = document.getElementById("confirmationCloseI");

//IMAGE OF ME
const imageOfMe = document.getElementById("imgOfMe");
const iom1 = new Image(); iom1.src = "images/AboutMe/Me1Down.png"
const iom2 = new Image(); iom2.src = "images/AboutMe/Me2Down.png"
const iom3 = new Image(); iom3.src = "images/AboutMe/Me3Down.png"
let iomIndex = 1; //second element

//TOP BUTTON IMAGES
const limg1 = new Image(); limg1.src = "images/TopButtons/lightlinkedin.png";
const limg2 = new Image(); limg2.src = "images/TopButtons/linkedin.png";

const gimg1 = new Image(); gimg1.src = "images/TopButtons/lightgithub.png";
const gimg2 = new Image(); gimg2.src = "images/TopButtons/github.png";

const mimg1 = new Image(); mimg1.src = "images/TopButtons/lightmail.png";
const mimg2 = new Image(); mimg2.src = "images/TopButtons/mail.png";

const cimg1 = new Image(); cimg1.src = "images/TopButtons/lightclose.png";
const cimg2 = new Image(); cimg2.src = "images/TopButtons/close.png";

const meimg1 = new Image(); meimg1.src = "images/Navbar/lightMenu.png";
const meimg2 = new Image(); meimg2.src = "images/Navbar/Menu.png";

const moeimg1 = new Image(); moeimg1.src = "images/Navbar/lightMenuOpen.png";
const moeimg2 = new Image(); moeimg2.src = "images/Navbar/MenuOpen.png";

//CLOSE BUTTONS
const mailClose = document.getElementById("mailClose");
const confirmationClose = document.getElementById("confirmationClose");

//OTHER DISPLAY LAYERS
const mailDisplay = document.getElementById("mailSection");
const confirmationDisplay = document.getElementById("confirmationDisplay");
const menuDropdownDisplay = document.getElementById("menuDropdown");

//FORM
const form = document.getElementById("googleForm");
const iFrame = document.getElementById("hidden_iframe");

//ARRAYS
const iomCycle = [iom3, iom2, iom1];
const imageChangeButtons = [linkedinOpen, githubOpen, mailOpen, mClose, cClose];
const normalImages = [limg1, gimg1, mimg1, cimg1, cimg1, meimg1, moeimg1];
const lightImages = [limg2, gimg2, mimg2, cimg2, cimg2, meimg2, moeimg2];

const positionChangeButtons = [aboutMeButton, aboutMeButtonD, projectButton, projectButtonD, graphicsButton, graphicsButtonD, downArrow];
const openButtons = [mailOpen, contactButton, contactButtonD, null, menuButton];
const closeButtons = [mailClose, null, null, confirmationClose, null];
const projectDisplays = [mailDisplay, mailDisplay, mailDisplay, confirmationDisplay, null];
const navButtons = [aboutMeButton, projectButton, graphicsButton, contactButton];

function togglePopup(element, state) {element.classList.toggle(state);}
function toggleMenu(action) {
    for (const button of navButtons) {togglePopup(button, action);}
}
function toggleMenuImage() {
    if (menuButtonImage.src==moeimg1.src) {
        menuButtonImage.src=meimg1.src;
        if (menuDropdownDisplay.classList.contains("slide-in")) {
            menuDropdownDisplay.classList.remove("slide-in");
            menuDropdownDisplay.classList.add("slide-out")
        }
    }
    else if (menuButtonImage.src==meimg1.src) {
        menuButtonImage.src=moeimg1.src;
        if (menuDropdownDisplay.classList.contains("slide-out")) {
            menuDropdownDisplay.classList.remove("slide-out");
            menuDropdownDisplay.classList.add("slide-in")
        }}
    else if (menuButtonImage.src==moeimg2.src) {menuButtonImage.src=meimg2.src;}
    else if (menuButtonImage.src==meimg2.src) {menuButtonImage.src=moeimg2.src;}
}

function toggleImageOfMe() {
    if (iomIndex>iomCycle.length-1) {iomIndex = 0;}
    imageOfMe.src = iomCycle[iomIndex++].src;

}

function changeMenuBasedOnDimensions() {
    const navShow = aboutMeButton.classList.contains("show");
    const menuShow = menuDropdownDisplay.classList.contains("show");
    const circlesShow = circles.classList.contains("show");

    width = window.innerWidth;
    height = window.innerHeight;

    if (change650 & !circlesShow & width>650) {
        change650 = false;
        circles.classList.add("show");
    }
    else if (!change650 & circlesShow & width<=650) {
        change650 = true;
        circles.classList.remove("show");
    }

    if (change & width>770) {
        change = false;
        if (!navShow) {
            for (const button of navButtons) {button.classList.add("show");}
        }
        if (menuShow) {menuDropdownDisplay.classList.remove("show");}
        menuButtonImage.src = moeimg1.src;
    }
    else if (!change & width<=770) {
        change = true;
        if (navShow) {
            for (const button of navButtons) {button.classList.remove("show");}
        }

        menuButtonImage.src = meimg1.src;
    }

}

function mouseHoverChangeImage(element, img) {element.src = img.src;}

function submitEvent(event) {
    event.preventDefault();
    form.submit();
    form.reset();
    togglePopup(confirmationDisplay, "show");
    togglePopup(mailDisplay, "show");
    console.log('done');
}

function moveToPosition(element) {

    let y = 0;
    let sectionRect = null;

    if (element==aboutMeButton || element==aboutMeButtonD) sectionRect = section1Header.getBoundingClientRect();
    else if (element==projectButton || element==projectButtonD || element==downArrow) sectionRect = section2Header.getBoundingClientRect();
    else if (element==graphicsButton || element==graphicsButtonD) sectionRect = section3Header.getBoundingClientRect();

    if (sectionRect != null) {
        y = sectionRect.top + window.scrollY - 100;
        window.scrollTo(0, y);
    }

}

function loaded() {
    htmlLoaded = true;
    changeMenuBasedOnDimensions();
    menuDropdownDisplay.classList.remove("show");
}

function addEvents(array, action) {
    for (let i=0; i<array.length; i++) {
        if (array[i]!=null) {

            if (action=="addImg") {
                array[i].addEventListener("mouseover", function() {
                    mouseHoverChangeImage(array[i], lightImages[i]);
                });
                array[i].addEventListener("mouseout", function() {
                    mouseHoverChangeImage(array[i], normalImages[i]);
                });
            }
            else if (action=="hideElement") {
                array[i].addEventListener("click", function() {
                    if (array[i]!=menuButton) {
                        togglePopup(projectDisplays[i], "show");
                    }
                    else {
                        toggleMenuImage();
                        if (!change) {toggleMenu("show");}
                        else {togglePopup(menuDropdownDisplay, "show");}
                    }
                });
            }
            else if (action=="changePosition") {
                array[i].addEventListener("click", function() {
                    moveToPosition(array[i]);
                });
            }
            else if (action=="iomCycle") {
                array[i].addEventListener("click", function() {
                    toggleImageOfMe();
                });
            }
            
        }
    }
}

addEvents(openButtons, "hideElement");
addEvents(closeButtons, "hideElement");
addEvents(imageChangeButtons, "addImg");
addEvents(positionChangeButtons, "changePosition");
addEvents([imageOfMe], "iomCycle");

form.addEventListener("submit", submitEvent);
window.addEventListener("resize", changeMenuBasedOnDimensions);
document.addEventListener("DOMContentLoaded", loaded)

