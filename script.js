
function toggleMenu() {
    document.getElementById("nav-links").classList.toggle("active");
}


You can add this function to your HTML file, like this:


<div class="hamburger-menu" onclick="toggleMenu()">
    <i class="fa-solid fa-bars"></i>
</div>
