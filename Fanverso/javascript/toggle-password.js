function togglePassword() {
    var senhaInput = document.getElementById('senha');
    var tipo = senhaInput.getAttribute('type');
    
    if (tipo == 'password'){
        senhaInput.setAttribute('type', 'text');
    }else if ( tipo == 'text') {
        senhaInput.setAttribute('type', 'password');
    }
}
