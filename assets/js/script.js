let  menuToggleBtn = document.querySelector("[menu-toggle-btn]");
let  header = document.querySelector(".header");

menuToggleBtn.onclick = () => {
    header.classList.toggle("active");
}
