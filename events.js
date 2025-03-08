document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById("LinkedInButton");

    function clicked() {
        window.open("https://www.linkedin.com/in/sheldon-hung-384334243/");
    }

    button.addEventListener("click", clicked);
})
