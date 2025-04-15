
document.addEventListener("DOMContentLoaded", function () {
    // Adiciona transição suave entre as páginas
    const links = document.querySelectorAll('nav ul li a');

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();  // Impede o comportamento padrão do link
            document.body.classList.add('fade-out');  // Adiciona a classe de animação
            const href = this.getAttribute('href');  // Pega o destino do link

            setTimeout(function () {
                window.location.href = href;  // Após a animação, redireciona para a nova página
            }, 600);  // Tempo para completar a animação antes de mudar de página (600ms)
        });
    });
});







// Coloque as animações fora de DOMContentLoaded para que rodem em todas as páginas
function gerarCoracao() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '💖';
    document.body.appendChild(heart);

    // Posicionamento aleatório
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 6 + 6 + 's'; // Duração da animação entre 3s e 5s

    // Remover o coração após a animação
    setTimeout(() => {
        heart.remove();
    }, 5000); // Tempo de vida do coração

    // Gerar corações a cada 1 segundo
    setTimeout(gerarCoracao, 1000);
}

function gerarEstrela() {
    const star = document.createElement('div');
    star.classList.add('star');
    document.body.appendChild(star);

    // Posicionamento aleatório no fundo
    star.style.left = Math.random() * 100 + 'vw';
    star.style.top = Math.random() * 100 + 'vh';

    // Remover a estrela após um tempo aleatório
    setTimeout(() => {
        star.remove();
    }, 10000); // As estrelas desaparecem após 10 segundos

    // Gerar estrelas continuamente
    setTimeout(gerarEstrela, 500);
}

// Iniciar animações diretamente
gerarCoracao();
gerarEstrela();

document.addEventListener("DOMContentLoaded", function () {
    let respostasCorretas = 0; // Contador de respostas corretas
    const totalPerguntas = 7; // Total de perguntas no quiz

    // Função genérica para desabilitar os botões após a resposta correta
    function disableButtons(allButtons) {
        allButtons.forEach(button => {
            button.disabled = true; // Desabilita os botões
        });
    }

    // Função para exibir a mensagem final se todas as respostas estiverem corretas
    function verificarConclusao() {
        if (respostasCorretas === totalPerguntas) {
            const mensagemFinal = document.createElement("p");
            mensagemFinal.id = "mensagemFinal";
            mensagemFinal.innerHTML = "Parabéns amor! Você acertou todas as perguntas! Let's go! 🥳";
            mensagemFinal.style.color = "green";
            mensagemFinal.style.fontSize = "1.5rem";
            mensagemFinal.style.marginTop = "2rem";
            document.body.appendChild(mensagemFinal);
        }
    }

    // Função para configurar uma pergunta
    function configurarPergunta(respostaElement, btnCerta, btnErradas, allButtons) {
        if (respostaElement && btnCerta && btnErradas) {
            function respostaCerta() {
                respostaElement.innerHTML = "Boa minha xoxinha! 🥰";
                respostaElement.style.color = "green";
                respostaElement.style.opacity = 1;

                // Adiciona a classe 'resposta-certa' ao botão correto
                btnCerta.classList.add("resposta-certa");

                // Desabilita os botões apenas da pergunta atual
                disableButtons(allButtons);

                // Incrementa o contador de respostas corretas
                respostasCorretas++;

                // Verifica se todas as respostas estão corretas
                verificarConclusao();
            }

            function respostaErrada(event) {
                respostaElement.innerHTML = "A cocozinha errou 😢";
                respostaElement.style.color = "red";
                respostaElement.style.opacity = 1;

                // Adiciona a classe 'resposta-errada' ao botão clicado
                event.target.classList.add("resposta-errada");
            }

            // Adiciona o evento de clique na resposta certa
            btnCerta.addEventListener("click", respostaCerta);

            // Aplica o evento de clique para todos os botões errados
            btnErradas.forEach(btn => {
                btn.addEventListener("click", respostaErrada);
            });
        }
    }

    // Configurar as perguntas
    const perguntas = [
        { respostaElement: document.getElementById("resposta"), btnCerta: document.getElementById("btnCerta"), btnErradas: document.querySelectorAll(".pergunta1 .btnErrada") },
        { respostaElement: document.getElementById("resposta2"), btnCerta: document.getElementById("btnCerta2"), btnErradas: document.querySelectorAll(".pergunta2 .btnErrada") },
        { respostaElement: document.getElementById("resposta3"), btnCerta: document.getElementById("btnCerta3"), btnErradas: document.querySelectorAll(".pergunta3 .btnErrada") },
        { respostaElement: document.getElementById("resposta4"), btnCerta: document.getElementById("btnCerta4"), btnErradas: document.querySelectorAll(".pergunta4 .btnErrada") },
        { respostaElement: document.getElementById("resposta5"), btnCerta: document.getElementById("btnCerta5"), btnErradas: document.querySelectorAll(".pergunta5 .btnErrada") },
        { respostaElement: document.getElementById("resposta6"), btnCerta: document.getElementById("btnCerta6"), btnErradas: document.querySelectorAll(".pergunta6 .btnErrada") },
        { respostaElement: document.getElementById("resposta7"), btnCerta: document.getElementById("btnCerta7"), btnErradas: document.querySelectorAll(".pergunta7 .btnErrada") },
        { respostaElement: document.getElementById("resposta8"), btnCerta: document.getElementById("btnCerta8"), btnErradas: document.querySelectorAll(".pergunta8 .btnErrada") },
        { respostaElement: document.getElementById("resposta9"), btnCerta: document.getElementById("btnCerta9"), btnErradas: document.querySelectorAll(".pergunta9 .btnErrada") },
        { respostaElement: document.getElementById("resposta10"), btnCerta: document.getElementById("btnCerta10"), btnErradas: document.querySelectorAll(".pergunta10 .btnErrada") },
        { respostaElement: document.getElementById("resposta11"), btnCerta: document.getElementById("btnCerta11"), btnErradas: document.querySelectorAll(".pergunta11 .btnErrada") }
    ];

    perguntas.forEach(pergunta => {
        const allButtons = document.querySelectorAll(`.pergunta${perguntas.indexOf(pergunta) + 1} button`);
        configurarPergunta(pergunta.respostaElement, pergunta.btnCerta, pergunta.btnErradas, allButtons);
    });





    // Função para alternar entre carta fechada e aberta (carta.html)
    const imagemCarta = document.getElementById("imagemCarta");
    const textoCarta = document.getElementById("textoCarta");

    if (imagemCarta && textoCarta) {
        imagemCarta.addEventListener("click", function () {
            if (imagemCarta.src.includes("carta_fechada.png")) {
                imagemCarta.src = "imagens/carta_aberta.png";
                textoCarta.classList.add("mostrar");
            } else {
                imagemCarta.src = "imagens/carta_fechada.png";
                textoCarta.classList.remove("mostrar");
            }
        });
    }

    // Funções relacionadas ao Jogo (jogo.html)
    const naoButton = document.getElementById("nao");
    const simButton = document.getElementById("sim");
    const heart = document.getElementById("heart");
    const somSim = document.getElementById("som_sim");



    if (naoButton && simButton && heart) {
        naoButton.addEventListener("mouseover", function () {
            const viewportWidth = window.innerWidth;
            const viewportHeight = window.innerHeight;
            const buttonWidth = naoButton.offsetWidth;
            const buttonHeight = naoButton.offsetHeight;
            const header = document.querySelector("header");
            const headerHeight = header.offsetHeight;
            const margin = 20;

            const minX = margin;
            const maxX = viewportWidth - buttonWidth - margin;
            const minY = headerHeight + margin;
            const maxY = viewportHeight - buttonHeight - margin;

            const randomX = Math.floor(Math.random() * (maxX - minX + 1)) + minX;
            const randomY = Math.floor(Math.random() * (maxY - minY + 1)) + minY;

            naoButton.style.position = "absolute";
            naoButton.style.left = randomX + "px";
            naoButton.style.top = randomY + "px";
        });

        simButton.addEventListener("click", function () {
            if (somSim) {
                somSim.play();
            }
            heart.classList.add("mostrar-coracao");

            setTimeout(function () {
                heart.classList.add("esconder-coracao");

                setTimeout(function () {
                    heart.classList.remove("mostrar-coracao", "esconder-coracao");
                }, 1000);
            }, 1500);
        });
    }

    // Define a data de início do relacionamento (substitua com sua data real)
    const dataInicio = new Date('2024-08-13'); // Exemplo: 13 de Maio de 2022

    // Função para calcular a diferença de dias
    function calcularDiasJuntos() {
        const dataAtual = new Date(); // Obtém a data atual
        const diferencaEmMilissegundos = dataAtual - dataInicio; // Diferença em milissegundos

        // Converte de milissegundos para dias
        const diasJuntos = Math.floor(diferencaEmMilissegundos / (1000 * 60 * 60 * 24));

        // Exibe a quantidade de dias juntos no elemento com id "diasJuntos"
        document.getElementById("diasJuntos").textContent = diasJuntos;
    }

    // Chama a função para exibir os dias juntos
    calcularDiasJuntos();
});


