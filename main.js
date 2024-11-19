//scroll into view
let ScrollButton1 = document.getElementById('scroll-service');
let Target1 = document.getElementById('services')

scrollButton1.addEventListener('click', function() {
    target1.scrollIntoView({
        behavior: 'smooth'
    });
});

//toggle Responsive
const navSlide = () => {
    const burger = document.querySelector(".burger");
    const navLists = document.querySelector("nav");

    burger.addEventListener("click", () => {
        navLists.classList.toggle("nav-active");
        burger.classList.toggle("toggle-burger");
    });
};

navSlide();

//clear form before unload
window.onbeforeunload = () => {
    for (const form of document.getElementsByTagName("form")) {
        form.reset();
    }
};