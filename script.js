document.getElementById('shareButton').addEventListener('click', event => {
    if (navigator.share) {
        navigator.share({
            title: 'Ouça "Na sua rede" de Ana Ferreira!',
            text: 'Minha nova música "Na sua rede" será lançada em 24 de Outubro! Não perca!',
            url: window.location.href // Compartilha o link da sua própria página
        })
        .then(() => console.log('Conteúdo compartilhado com sucesso!'))
        .catch(error => console.error('Erro ao compartilhar:', error));
    } else {
        // Fallback para navegadores que não suportam a API de compartilhamento
        alert('Seu navegador não suporta a função de compartilhamento. Copie o link: ' + window.location.href);
    }
});