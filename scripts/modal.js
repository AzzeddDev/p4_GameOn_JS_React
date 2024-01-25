// Const
const modalBg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const closeBtn = document.querySelector(".close");


// Fonction ouverture du modal
modalBtn.forEach((btn) => btn.addEventListener("click", () => {
  modalBg.style.display = "block";
}));

//Fonction pour fermer la modale
closeBtn.addEventListener("click", () => {
  modalBg.style.display = "none";
});