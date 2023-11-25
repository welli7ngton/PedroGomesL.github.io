function validarEmail() {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var email = document.getElementById('email')
    
    var emailValido = re.test(String(email));
    console.log(emailValido)
    if (emailValido == false) {
        email.setAttribute('value', 'Email inválido')
    }
  }
  