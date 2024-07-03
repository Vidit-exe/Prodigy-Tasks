var tablinks = document.querySelectorAll(".tab-links");
var tabcontents = document.querySelectorAll(".tab-contents");

function opentab(tabname) {
  for (const tablink of tablinks) {
    tablink.classList.remove("active-link");
  }

  for (const tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }

  event.currentTarget.classList.add("active-link")
  document.getElementById(tabname).classList.add("active-tab")
}

const text = document.getElementsByTagName("span")

const textLoad = () => {
  setTimeout(() => {
    text.textContent = "UI/UX Designer"
  }, 0);
  
  setTimeout(() => {
    text.textContent = "Android Developer"
  }, 4000);

  setTimeout(() => {
    text.textContent = "IOS Developer"
  }, 8000);
}

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