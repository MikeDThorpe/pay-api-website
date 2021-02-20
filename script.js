let hamburger = document.querySelector(".hamburger");
let close = document.getElementById("nav-close");

function openNavBar() {
    document.querySelector(".mobile-nav").style.display = "block";
}
function closeNavBar() {
    document.querySelector(".mobile-nav").style.display = "none";

}

// contact form submission / vaidation
let contactForm = document.forms["contact-form"]
let formInputs = contactForm.getElementsByTagName("input")
contactForm.addEventListener("submit", (e) => {
    e.preventDefault()
    for(let i = 0; i < formInputs.length; i++) {
        if(formInputs[i].value === "" || formInputs[i].value === null) {
            formInputs[i].style.borderBottom = "2px solid #FF0000"
            formInputs[i].classList.add("ph-error")
            formInputs[i].nextElementSibling.innerHTML = "<small>Required</small>"
        } else if (formInputs[i].style.borderBottom = "2px solid #FF0000") {
            // remove styling if input is completed
            formInputs[i].style.borderBottom = "2px solid var(--san-juan-blue)"
            formInputs[i].nextElementSibling.innerHTML = ""
        }
    }
})