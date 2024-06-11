document.addEventListener("DOMContentLoaded", function() {
    var sections = document.querySelectorAll(".IMG-1, .IMG-2, .IMG-3");

    window.addEventListener("scroll", function() {
        sections.forEach(function(section) {
            var scrollPosition = window.scrollY;
            var sectionOffset = section.offsetTop;
            var backgroundPosition = (scrollPosition - sectionOffset) * 0.5; // Adjust the multiplier for desired effect

            section.style.backgroundPosition = "center " + backgroundPosition + "px";
        });
    });
});
