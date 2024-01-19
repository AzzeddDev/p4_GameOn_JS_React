// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));


// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//Fonction pour fermer la modale
function closeModal() {
  modalbg.style.display = "none"; }
document.querySelector('.close').addEventListener("click",closeModal);