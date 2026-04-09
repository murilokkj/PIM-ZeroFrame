console.log("Alternador de temas carregado com sucesso.");

let modoEscuro = localStorage.getItem('modoescuro');
const themeToggle = document.getElementById('toggle-button');

function ativarModoEscuro() {
    document.body.classList.add('modoescuro');
    localStorage.setItem('modoescuro', 'active');
}

function desativarModoEscuro() {
    document.body.classList.remove('modoescuro');
    localStorage.setItem('modoescuro', null);
}

if (modoEscuro === 'active') {
    ativarModoEscuro();
} else {
    desativarModoEscuro();
}

themeToggle.addEventListener('click', () => {
    console.log("Botão de alternância de tema clicado.");
    modoEscuro = localStorage.getItem('modoescuro')
    if (modoEscuro !== 'active') {
        ativarModoEscuro();
    }
    else {
        desativarModoEscuro();
    }
})