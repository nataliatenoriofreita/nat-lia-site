// Função para mostrar informações quando clicar nos cards
function mostrarInfo(tipo) {
    const caixa = document.getElementById('caixa-info');
    const titulo = document.getElementById('info-titulo');
    const texto = document.getElementById('info-texto');
    
    // Remove a classe escondido para exibir a caixa
    caixa.classList.remove('escondido');

    // Altera o texto baseado no card clicado
    if (tipo === 'campo') {
        titulo.innerText = "🚜 O Mundo do Campo";
        texto.innerText = "No campo, a tecnologia e a natureza se unem. É de lá que vem nossa alimentação saudável e as matérias-primas que movimentam o planeta!";
    } else if (tipo === 'sustentabilidade') {
        titulo.innerText = "♻️ Atitudes Sustentáveis";
        texto.innerText = "Pequenas ações mudam o mundo: economize água, separe o lixo reciclável, proteja as árvores e colabore para um amanhã mais limpo.";
    } else if (tipo === 'cidade') {
        titulo.innerText = "🏢 Conexão com a Cidade";
        texto.innerText = "A cidade consome o que o campo produz e devolve ferramentas, serviços e tecnologia. Um não vive sem o outro!";
    } else if (tipo === 'desafios') {
        titulo.innerText = "💡 Solte sua Imaginação";
        texto.innerText = "Mostre o seu talento no Concurso Agrinho! Crie desenhos, redações ou projetos práticos e concorra a prêmios incríveis.";
    }

    // Faz a página rolar suavemente até a caixa de texto aberta
    caixa.scrollIntoView({ behavior: 'smooth' });
}

// Função para fechar a caixa de informação
function fecharInfo() {
    const caixa = document.getElementById('caixa-info');
    caixa.classList.add('escondido');
}

// Função interativa extra para o botão principal da capa
function jogarQuiz() {
    alert("Inscrições abertas! Prepare seu projeto, fale com seu professor e faça a diferença em 2026! 🌱");
}
