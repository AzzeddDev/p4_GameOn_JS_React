// Const
const modalBg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const closeBtn = document.querySelector(".close");

// Responsive Nav
function editNav() {
  let x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// Fonction ouverture du modal
modalBtn.forEach((btn) => btn.addEventListener("click", () => {
  modalBg.style.display = "block";
}));

//Fonction pour fermer la modale
closeBtn.addEventListener("click", () => {
  modalBg.style.display = "none";
});