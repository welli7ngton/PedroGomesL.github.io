function validarSenha() {
    // A senha deve ter pelo menos 8 caracteres
    // e conter pelo menos uma letra maiúscula, uma letra minúscula e um número

    var senha = document.getElementById('senha')

    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    resultado = re.test(senha);

    if (resultado == false){
        senha.setAttribute('value', 'Senha inválida')
    }
}
