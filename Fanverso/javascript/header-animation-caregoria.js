let div_categorias = document.querySelector("#categorias");
let div_conteudo = document.querySelector("#menu .itens-menu");

const add_active_to_contente = () => {
    div_conteudo.classList.toggle("active");
}

div_categorias.addEventListener("click", add_active_to_contente);
