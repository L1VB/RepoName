// navigation bar
let lastScrollTop = 0;
const menuBar = document.getElementById('menu-bar');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        menuBar.style.top = '-50px'; 
    } else {
        menuBar.style.top = '0';
    }
    lastScrollTop = scrollTop;
});

function toggleMenu() {
    var menu = document.querySelector('.menu');
    var hamburgerMenu = document.querySelector('.hamburger-menu');
    var body = document.body;
    
    menu.classList.toggle('active');
    
    hamburgerMenu.classList.toggle('active');
    
    body.classList.toggle('no-scroll');

    document.addEventListener('click', closeMenuOutside);
}

function closeMenuOutside(event) {
    var menu = document.querySelector('.menu');
    var hamburgerMenu = document.querySelector('.hamburger-menu');
    var body = document.body;

    if (!menu.contains(event.target) && !hamburgerMenu.contains(event.target)) {
        menu.classList.remove('active');
        hamburgerMenu.classList.remove('active');
        
        body.classList.remove('no-scroll');

        document.removeEventListener('click', closeMenuOutside);
    }
}




        
// dropdown for 'news articles'
document.querySelectorAll('.dropdown-btn').forEach(button => {
        button.addEventListener('click', () => {
            const dropdownContent = button.nextElementSibling;
            if (dropdownContent.style.display === "none" || dropdownContent.style.display === "") {
                dropdownContent.style.display = "block";
            } else {
                dropdownContent.style.display = "none";
            }
        });
});

