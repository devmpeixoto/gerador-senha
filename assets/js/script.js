let sizePassword = document.querySelector('#valor');
let sliderElement = document.querySelector('#slider');
let containerPassword = document.querySelector('#container-password');
let passwordElement = document.querySelector('#password');
let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*";
let newPassword = "";

sizePassword.innerHTML = sliderElement.value;

sliderElement.oninput = function () {
    sizePassword.innerHTML = this.value;
}

function generatePassword() {
    let pass = "";
    for (i = 0, n = charset.length; i < sliderElement.value; i++) {
        pass += charset.charAt(Math.floor(Math.random() * n));
    }

    containerPassword.classList.remove("hide");
    passwordElement.innerHTML = pass;
    newPassword = pass;
}

function copyPassword(){
    navigator.clipboard.writeText(newPassword);
    alert("..:: SENHA COPIADA COM SUCESSO ::..")
}