// Variables
const btnSubmit = document.querySelector(".btn-submit");
const modalConfirmation = document.querySelector(".formConfirmation");
const form = document.querySelector('form');


// Function send input fields and confirmation popup
btnSubmit.addEventListener('click', e => {
    e.preventDefault();

    if(firstNameFieldControl() && lastNameFieldControl() && emailFieldControl() && birthdateFieldControl() && quantityFormControl() && checkboxLocationFormControl() && conditionCheckboxFormControl()){
        modalConfirmation.style.display = "flex";
        form.style.display = 'none';
    } else {
        alert('Merci de remplir correctement votre inscription.');
    }
})