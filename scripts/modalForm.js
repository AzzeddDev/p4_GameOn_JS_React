////////////////////////////////////////////////
//////                                   ///////
//////         First Name Field          ///////
//////                                   ///////
////////////////////////////////////////////////

//Variables for first field "Prénom" form -> firstName
let firstNameField = document.querySelector("#first");
let firstNameFieldError = document.querySelector("#firstNameError");


// Function for first field "Prénom" form -> firstName
function firstNameFieldControl () {

    if (/^([A-Za-z]{2,20})?([-]{0,1})?([A-Za-z]{2,20})$/.test(firstNameField.value)) {
        firstNameField.style.border = "solid 1px green";
        firstNameFieldError.textContent = "Champ Valide";
        firstNameFieldError.style.color = 'green';
        firstNameFieldError.style.fontSize = '14px';
        firstNameFieldError.style.marginBottom = '5px';
        return true;
    }

    else {
        firstNameField.style.border = "solid 1px red";
        firstNameFieldError.textContent = "Veuillez rentrer 2 caractères minimum";
        firstNameFieldError.style.color = 'red';
        firstNameFieldError.style.fontSize = '14px';
        firstNameFieldError.style.marginBottom = '5px';
        return false;
    }

}

firstNameField.addEventListener('change', () => {
    firstNameFieldControl();
});




////////////////////////////////////////////////
//////                                   ///////
//////         Last Name Field           ///////
//////                                   ///////
////////////////////////////////////////////////

// Variables for first field "Nom" form -> lastName
let lastNameField = document.querySelector("#last");
let lastNameFieldError = document.querySelector("#lastNameError");


// Function for first field "Nom" form -> lastName
function lastNameFieldControl () {

    if (/^([A-Za-z]{2,20})?([-]{0,1})?([A-Za-z]{2,20})$/.test(firstNameField.value)) {
        firstNameField.style.border = "solid 1px green";
        lastNameFieldError.textContent = "Champ Valide";
        lastNameFieldError.style.color = 'green';
        lastNameFieldError.style.fontSize = '14px';
        lastNameFieldError.style.marginBottom = '5px';
        return true;
    }

    else {
        lastNameField.style.border = "solid 1px red";
        lastNameFieldError.textContent = "Veuillez rentrer 2 caractères minimum";
        lastNameFieldError.style.color = 'red';
        lastNameFieldError.style.fontSize = '14px';
        lastNameFieldError.style.marginBottom = '5px';
        return false;
    }

}

firstNameField.addEventListener('change', () => {
    lastNameFieldControl();
});




////////////////////////////////////////////////
//////                                   ///////
//////           Email Field             ///////
//////                                   ///////
////////////////////////////////////////////////

// Variables for email field
let email = document.querySelector("#email");
let emailError = document.querySelector("#emailError");


// Function for email field
function emailFieldControl () {

    if (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email.value)) {
        email.style.border = "solid 2px green";
        emailError.textContent = "Champ Valide";
        emailError.style.fontSize = '14px';
        emailError.style.color = 'green';
        emailError.style.marginBottom = '5px';
        return true;
    }

    else {
        email.style.border = "solid 2px red";
        emailError.textContent = "Veuillez rentrer une adresse email valide";
        emailError.style.fontSize = '14px';
        emailError.style.color = 'red';
        emailError.style.marginBottom = '5px';
        return false;
    }
}

email.addEventListener('change', () => {
    emailFieldControl();
});




////////////////////////////////////////////////
//////                                   ///////
//////          Birthdate Field          ///////
//////                                   ///////
////////////////////////////////////////////////

// Variables for birthdate field
let birthdate = document.querySelector("#birthdate");
let birthdateError = document.querySelector("#birthDateError");


// Function for birthdate field
function birthdateFieldControl () {

    if (/^([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))$/.test(birthdate.value)) {
        birthdate.style.border = "solid 2px green";
        birthdateError.textContent = "Champ Valide";
        birthdateError.style.fontSize = '14px';
        birthdateError.style.marginBottom = '10px';
        birthdateError.style.color = 'green';
        return true;
    }

    else {
        birthdate.style.border = "solid 2px red";
        birthdateError.textContent = "Vous devez entrer votre date de naissance.";
        birthdateError.style.fontSize = '14px';
        birthdateError.style.marginBottom = '10px';
        birthdateError.style.color = 'red';
        return false;
    }

}

birthdate.addEventListener('change', () => {
    birthdateFieldControl();
});




////////////////////////////////////////////////
//////                                   ///////
//////          Quantity Field           ///////
//////                                   ///////
////////////////////////////////////////////////

// Variables for quantity field
let quantity = document.querySelector("#quantity");
let quantityError = document.querySelector("#quantityError");

// Function for quantity field
function quantityFormControl () {

    if (quantity.value >= 0) {
        quantity.style.border = "solid 2px green";
        quantityError.textContent = "Champ Valide";
        quantityError.style.color = "green";
        quantityError.style.fontSize = "14px";
        quantityError.style.marginBottom = '10px';
        return true;
    }

    else {
        quantity.style.border = "solid 2px red";
        quantityError.textContent = "Merci d'indiquer le nombre de tournois";
        quantityError.style.fontSize = '15px';
        quantityError.style.marginBottom = '10px';
        quantityError.style.color = 'red';
        return false;
    }
}

quantity.addEventListener('change', () => {
    quantityFormControl();
});




////////////////////////////////////////////////
//////                                   ///////
//////         Checkboxes Field          ///////
//////                                   ///////
////////////////////////////////////////////////

// Variables for checkboxes field
let checkLocation = document.getElementsByName("location");
let locationError = document.querySelector("#locationError");


// Function for checkboxes field
function checkboxLocationFormControl() {

    for(let i = 0; i < checkLocation.length; i++) {

        if(checkLocation[i].checked) {
            locationError.textContent ='Champ Valide';
            locationError.style.color = 'green';
            locationError.style.fontSize = '15px';
            locationError.style.marginBottom = '10px';
            return true;
        }
    }

    locationError.textContent ='Champ Invalide';
    locationError.style.color = 'red';
    locationError.style.fontSize = '15px';
    locationError.style.marginBottom = '10px';
    return false;
}

checkLocation.forEach((checkLocationInput) => checkLocationInput.addEventListener('change', function() {
    checkboxLocationFormControl();
}));
