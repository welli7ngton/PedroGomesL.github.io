const email = document.getElementById('email')

function validarEmail() {
    if (!email.value || email.value.indexOf('@') === -1 || email.value.indexOf('.') === -1) {
      return emailInvalido();
    }else if (email.value.startsWith('.') || email.value.endsWith('.')) {
      return emailInvalido();
    }else if (email.value.includes('..')) {
      return emailInvalido();
    }else if (/\s/.test(email.value)) {
      return emailInvalido();
    }
    return emailValido();
}

function emailInvalido() {
    email.setAttribute('value', 'Email inválido');
    email.setAttribute('style', 'border-color: red')
    email.setAttribute('style', 'color: red')
}

function emailValido() {
    email.setAttribute('style', 'border-color: black')
    email.setAttribute('style', 'color: black')
}