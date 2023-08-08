const hNav = document.querySelectorAll(".header__nav ul.nav li");
hNav.forEach((nav) => {
    nav.addEventListener("click", () => {
        removeActiveNav();
        nav.classList.add("active");
		nav.style = "transition:.5s ease";
    });
});

function removeActiveNav() {
    hNav.forEach((nav) => {
        nav.classList.remove("active");
    });
}


const headerNav = document.querySelector('.header__nav');
const toggleMenu = document.querySelector('.toggle__menu');
const shade = document.querySelector('.buhok');
toggleMenu.addEventListener('click', () => {
	toggleMenu.classList.toggle('open');
	headerNav.classList.toggle('open');
	shade.classList.toggle('open');
});


