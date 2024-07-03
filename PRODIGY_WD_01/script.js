let ham = document.querySelector(".ham")
let mobView = document.querySelector(".mobile_view")
let closeMenu = document.querySelector(".close-menu")

mobView.style.display = "none"

ham.addEventListener("click", () => {
    if (mobView.style.display === "none") {
        mobView.style.display = "block"
    } else {
        mobView.style.display = "none"
    }
})

closeMenu.addEventListener("click", () => {
    mobView.style.display = "none"
})