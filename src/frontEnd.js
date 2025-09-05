const lixeirinha = document.getElementById('excluirProduto');
const editar = document.getElementById('editarProduto');
const adicionarProduto = document.querySelector('.adicionarProduto');
const formularioAdicionar = document.getElementById('relatorioAdicionar');
const body = document.body
const maisProduto = document.getElementById('maisProduto');

lixeirinha.addEventListener('mouseenter', function() {
    lixeirinha.src = './imagens/lata de lixo vermelha.png';
});

lixeirinha.addEventListener('mouseleave', function() {
    lixeirinha.src = './imagens/lata de lixo cinza.png';
});

editar.addEventListener('mouseenter', function() {
    editar.src = './imagens/editar azul.png';
});

editar.addEventListener('mouseleave', function() {
    editar.src = './imagens/editar cinza.png';
});

adicionarProduto.addEventListener('click' , function() {
    adicionarProduto.classList.toggle('open');
    if (adicionarProduto.classList.contains ('open')){
        openBotaoMais()
    }
    else{
        closeBotaoMais()
    }
});

function openBotaoMais() {
    formularioAdicionar.classList.toggle('visivel')
    body.classList.toggle('fundoEscuro')
    listagemProdutos.classList.toggle('modoEscuro');
    maisProduto.classList.toggle('maisProdutoSair');
    adicionarProduto.classList.toggle('adicionarProdutoAberto');
    maisProduto.src = './imagens/adicionarItem azul.png'
}