const lixeirinha = document.getElementById('excluirProduto');

lixeirinha.addEventListener('mouseenter', function() {
    lixeirinha.src = '/src/imagens/lata de lixo vermelha.png';
});

lixeirinha.addEventListener('mouseleave', function() {
    lixeirinha.src = '/src/imagens/lata de lixo cinza.png';
});