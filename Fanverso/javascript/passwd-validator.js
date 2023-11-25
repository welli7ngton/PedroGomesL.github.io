const senha = document.getElementById('senha');

function validarSenha() {

    if (senha.value.length < 8) {
      return senhaFraca();
    } else if (!/[A-Z]/.test(senha.value)){
      return senhaFraca();
    } else if (!/[a-z]/.test(senha.value)) {
      return senhaFraca();
    } else if (!/\d/.test(senha.value)) {
      return senhaFraca();
    } else if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(senha.value)) {
      return senhaFraca();
    }
    return senhaForte();
  }

function senhaFraca() {
    senha.setAttribute('type', 'text');
    senha.value = 'Senha inválida';
    senha.style.color('red');
}

function senhaForte() {
    senha.style.color('Black');
}