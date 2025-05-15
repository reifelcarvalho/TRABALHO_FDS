document.getElementById('botaoMensagem').addEventListener('click', function() {
    const mensagens = [
        "Você é incrível!",
        "Tenha um ótimo dia!",
        "Continue progredindo!",
        "Seu potencial é ilimitado!",
        "Acredite em você mesmo!"
    ];
    
    const mensagemAleatoria = mensagens[Math.floor(Math.random() * mensagens.length)];
    document.getElementById('mensagem').textContent = mensagemAleatoria;
});