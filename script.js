function openav() {
    document.getElementById("thisBar").style.height = "14rem";
    document.getElementById("openbtn").style.display = "none";
    document.getElementById("closebtn").style.display = "inline";

}

function closenav() {
    document.getElementById("thisBar").style.height = "0";
    document.getElementById("closebtn").style.display = "none";
    document.getElementById("openbtn").style.display = "inline";
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else entry.target.classList.remove("show");
    })
})
const expandDiv = document.querySelectorAll(".expand");
expandDiv.forEach((el) =>
    observer.observe(el)
);



const dotobserver = new IntersectionObserver((entries) => {
    entries.forEach((dotEntry) => {
        console.log(dotEntry);
        if (dotEntry.isIntersecting) {
            dotEntry.target.classList.add("dotShow");
        } else dotEntry.target.classList.remove("dotShow");
    })
})
const dot = document.querySelectorAll(".dot");
dot.forEach((de) => {
    dotobserver.observe(de);
})




var typed = new Typed(".typed0", {
    strings: ["leoDivine:)", "leo_divine", "LeoDivine", "leodivine"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
})
var typed = new Typed(".typed1", {
    strings: ["about_me", "my_profile", "profile_view", "get_to_know_me"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
})
var typed = new Typed(".typed2", {
    strings: ["my_works", "my_projects", "slogs"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
})
var typed = new Typed(".typed3", {
    strings: ["contact_me", "get_in_touch", "lets_talk"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
})




// // Get all sections that have an ID defined
// const sections = document.querySelectorAll("section[id]");

// // Add an event listener listening for scroll
// window.addEventListener("scroll", navHighlighter);

// function navHighlighter() {

//   // Get current scroll position
//   let scrollY = window.pageYOffset;

//   // Now we loop through sections to get height, top and ID values for each
//   sections.forEach(current => {
//     const sectionHeight = current.offsetHeight;
//     const sectionTop = current.offsetTop - 50;
//     sectionId = current.getAttribute("id");

//     /*
//     - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
//     - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
//     */
//     if (
//       scrollY > sectionTop &&
//       scrollY <= sectionTop + sectionHeight
//     ){
//       document.querySelector(".navigation a[href*=" + sectionId + "]").classList.add("active");
//     } else {
//       document.querySelector(".navigation a[href*=" + sectionId + "]").classList.remove("active");
//     }
//   });
// }