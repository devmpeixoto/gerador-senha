// sliderElement: É uma variável que guarda a referência para o elemento HTML com o id "slider". Ele será usado para controlar o tamanho da senha gerada.
let sliderElement = document.querySelector("#slider");

// buttonElement: É uma variável que guarda a referência para o elemento HTML com o id "button". Ele será usado para acionar a geração da senha.
let buttonElement = document.querySelector("#button");

// sizePassword: É uma variável que guarda a referência para o elemento HTML com o id "valor". Ele será usado para exibir o tamanho da senha escolhido pelo usuário.
let sizePassword = document.querySelector("#valor");

// password: É uma variável que guarda a referência para o elemento HTML com o id "password". Ele será usado para exibir a senha gerada.
let password = document.querySelector("#password");

// containerPassword: É uma variável que guarda a referência para o elemento HTML com o id "container-password". Ele será usado para mostrar ou ocultar a div que contém a senha gerada.
let containerPassword = document.querySelector("#container-password");

// charset: É uma variável que guarda uma string com os caracteres permitidos para a senha. Neste caso, são letras minúsculas, letras maiúsculas, números e alguns caracteres especiais.
let charset =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*";

// novaSenha: É uma variável que guarda a senha gerada.
let novaSenha = "";

sizePassword.innerHTML = sliderElement.value;

slider.oninput = function () {
  // slider.oninput = function() está puxando do ID SLIDER no HTML. Esse bloco de código irá alterar o VALUE conforme desliza
  sizePassword.innerHTML = this.value;
};

function generatePassword() {
  let pass = ""; //Aqui irá armazenar a senha gerada

  for (i = 0, n = charset.length; i < sliderElement.value; i++) {
    //sliderElement é o valor numérico que aparece ao deslizar a barra do RANGE
    pass += charset.charAt(Math.floor(Math.random() * n));
  }
  containerPassword.classList.remove("hide");
  password.innerHTML = pass;
  novaSenha = pass;
}

function copyPassword() {
  navigator.clipboard.writeText(novaSenha);
  alert("Senha copiada com sucesso!!!");
}
