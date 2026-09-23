const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");



const perguntas = [
    {
        enunciado: "Assim que saiu da escola, você se depara com uma nova tecnologia: um chat que consegue responder praticamente todas as dúvidas que uma pessoa pode ter. Além disso, ele também é capaz de gerar imagens e áudios extremamente realistas. Diante dessa descoberta, qual é o seu primeiro pensamento?",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacoes: [
                    "Uma tecnologia capaz de criar conteúdos tão realistas pode ser utilizada de maneiras que ainda não conseguimos prever.",
                    "É preciso ter cuidado, pois nem sempre aquilo que uma Inteligência Artificial produz representa informações verdadeiras."
                ]
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacoes: [
                    "Uma tecnologia capaz de responder dúvidas e produzir diferentes tipos de conteúdo pode ajudar as pessoas em diversas atividades.",
                    "A Inteligência Artificial pode abrir novas possibilidades para aprender, criar e resolver problemas."
                ]
            }
        ]
    },

    {
        enunciado: "Com a descoberta dessa tecnologia, chamada Inteligência Artificial (IA), uma professora de tecnologia da escola decidiu fazer uma sequência de aulas sobre o assunto. No fim de uma das aulas, ela pede que você escreva um trabalho sobre o uso da tecnologia em sala de aula. Qual atitude você toma?",
        alternativas: [
            {
                texto: "Utilizar uma ferramenta de busca na internet que utiliza IA para ajudar a encontrar informações relevantes para o trabalho e explicar o conteúdo em uma linguagem que facilite o entendimento.",
                afirmacoes: [
                    "A Inteligência Artificial pode ser utilizada como uma ferramenta para auxiliar na pesquisa e na compreensão de novos conteúdos.",
                    "Mesmo utilizando a IA, é importante verificar as informações encontradas e compreender aquilo que será utilizado no trabalho."
                ]
            },
            {
                texto: "Escrever o trabalho com base nas conversas que teve com colegas, em algumas pesquisas na internet e nos conhecimentos que possui sobre o tema.",
                afirmacoes: [
                    "Pesquisar em diferentes fontes e conversar com outras pessoas pode ajudar a ampliar os conhecimentos sobre determinado assunto.",
                    "Utilizar os próprios conhecimentos permite construir um trabalho com ideias e interpretações pessoais."
                ]
            }
        ]
    },

    {
        enunciado: "Após a elaboração do trabalho, a professora realizou um debate entre a turma para entender como cada estudante realizou a pesquisa e escreveu seu trabalho. Durante a conversa, também foi levantado um ponto muito importante: como a Inteligência Artificial pode impactar o trabalho do futuro. Nesse debate, como você se posiciona?",
        alternativas: [
            {
                texto: "Você se preocupa com as pessoas que poderão perder seus empregos para as máquinas e defende a importância de proteger os trabalhadores.",
                afirmacoes: [
                    "A utilização de máquinas e sistemas de Inteligência Artificial pode modificar a maneira como algumas atividades profissionais são realizadas.",
                    "É importante pensar em formas de preparar e proteger os trabalhadores diante das transformações provocadas pelas novas tecnologias."
                ]
            },
            {
                texto: "Você defende a ideia de que a IA pode criar novas oportunidades de emprego e ajudar a melhorar as habilidades humanas.",
                afirmacoes: [
                    "O surgimento de novas tecnologias também pode criar novas profissões e transformar as atividades existentes.",
                    "A utilização da Inteligência Artificial pode ajudar as pessoas a desenvolver novas habilidades e realizar determinadas tarefas."
                ]
            }
        ]
    },

    {
        enunciado: "Ao final da discussão, a professora propõe uma nova atividade. Você precisa criar uma imagem no computador que represente aquilo que pensa sobre a Inteligência Artificial. E agora, como você fará isso?",
        alternativas: [
            {
                texto: "Criar uma imagem utilizando uma plataforma de desenho, como o Paint.",
                afirmacoes: [
                    "Você pode utilizar suas próprias habilidades de desenho para representar visualmente aquilo que pensa sobre a Inteligência Artificial.",
                    "A criação manual permite escolher diretamente cada elemento da imagem e construir uma representação própria."
                ]
            },
            {
                texto: "Criar uma imagem utilizando um gerador de imagens de Inteligência Artificial.",
                afirmacoes: [
                    "Um gerador de imagens por IA pode transformar uma descrição escrita em uma representação visual.",
                    "A ferramenta permite experimentar diferentes ideias e possibilidades para representar aquilo que você pensa sobre a Inteligência Artificial."
                ]
            }
        ]
    },

    {
        enunciado: "Você tem um trabalho em grupo de Biologia para entregar na semana seguinte. O andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decide fazê-lo com a ajuda de uma Inteligência Artificial. O problema é que o trabalho está totalmente igual ao texto produzido pelo chat. O que você faz?",
        alternativas: [
            {
                texto: "Você considera que o chat pode ser uma tecnologia muito avançada, mas entende que é preciso manter a atenção, pois toda máquina pode apresentar erros. Por isso, decide revisar o trabalho e contribuir com as perspectivas pessoais do grupo.",
                afirmacoes: [
                    "Mesmo sendo uma tecnologia avançada, a Inteligência Artificial pode apresentar erros ou informações que precisam ser verificadas.",
                    "Revisar o conteúdo e acrescentar as ideias e conhecimentos dos integrantes do grupo torna o trabalho mais autoral e significativo."
                ]
            },
            {
                texto: "Você considera que escrever comandos para o chat já é uma forma de contribuir com o trabalho e entende que não há problema em utilizar o texto inteiro produzido pela Inteligência Artificial.",
                afirmacoes: [
                    "Elaborar comandos para uma Inteligência Artificial exige que o usuário saiba explicar aquilo que deseja obter.",
                    "A utilização de um texto produzido pela IA pode facilitar a realização do trabalho, mesmo quando o conteúdo é utilizado praticamente sem alterações."
                ]
            }
        ]
    }
];



let atual = 0; 
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = ""; 
}

mostraPergunta();
