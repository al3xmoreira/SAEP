const questions = [
  {
    "id": "SAEP_79185",
    "text": "Qual é uma característica distintiva da Interface de Linha de Comando (CLI) em comparação com a Interface Gráfica do Usuário (GUI)?",
    "options": [
      "Oferece uma representação visual dos processos em execução.",
      "Utiliza ícones e botões para a realização de tarefas.",
      "Permite a manipulação de arquivos por meio de cliques e arrastar e soltar.",
      "Facilita a interação com o sistema por meio de comandos de texto.",
      "Depender do uso de janelas e menus suspensos."
    ],
    "correct": 3,
    "explanation": "A CLI baseia-se em comandos de texto, enquanto a GUI utiliza elementos visuais como ícones e janelas."
  },
  {
    "id": "SAEP_79165",
    "text": "Analise o código lógico. Qual operação retorna VERDADEIRO?",
    "options": [
      "01 < 20 E 02 > 20",
      "01 > 20 E 02 == 20",
      "01 > 20 OU 02 >= 20",
      "01 > 20 OU 02 > (40/2)",
      "01 > 20 OU (40/2) == 20"
    ],
    "correct": 4,
    "explanation": "Na última opção, (40/2) == 20 é Verdadeiro. No operador OU, se uma parte for verdadeira, o resultado é verdadeiro."
  },
  {
    "id": "SAEP_57500",
    "text": "Qual opção NÃO descreve uma qualidade de um líder no gerenciamento de equipes?",
    "options": [
      "Ser egocêntrico.",
      "Saber reconhecer o mérito da equipe.",
      "Reconhecer os limites pessoais.",
      "Ter habilidades de comunicação."
    ],
    "correct": 0,
    "explanation": "O egocentrismo é prejudicial à liderança, que deve ser focada no coletivo e nos objetivos da equipe."
  },
  {
    "id": "SAEP_44619",
    "text": "Sensores que detectam a presença de algum objeto, ser humano ou animal sem contato físico são denominados:",
    "options": [
      "Sensor de Imagem",
      "Sensor de Proximidade",
      "Sensor de Movimento",
      "Sensor de Pressão",
      "Sensor Óptico"
    ],
    "correct": 1,
    "explanation": "Sensores de proximidade detectam a presença de objetos em uma determinada distância sem contato."
  },
  {
    "id": "SAEP_60378",
    "text": "Em um sistema crítico (estação espacial) usando linguagem estruturada, qual recurso permite integração de hardware/sensores IoT?",
    "options": [
      "Suporte a programação orientada a objetos.",
      "Gerenciamento automático de memória.",
      "Sistema de tipos dinâmicos.",
      "Manipulação direta de ponteiros."
    ],
    "correct": 3,
    "explanation": "Em linguagens como C, ponteiros permitem o acesso direto à memória e registradores de hardware."
  },
  {
    "id": "SAEP_75271",
    "text": "Para armazenar valores de temperatura coletados por sensores em tempo real em sistema embarcado, deve-se usar:",
    "options": [
      "fila.",
      "vetor.",
      "árvore binária.",
      "lista encadeada."
    ],
    "correct": 1,
    "explanation": "Vetores (arrays) são eficientes para armazenamento contínuo e rápido acesso em sistemas embarcados."
  },
  {
    "id": "SAEP_40344",
    "text": "Qual instrução SQL exibe o nome do professor e o nome da disciplina?",
    "image": "MODELO RELACIONAL (Professor x Disciplina)",
    "options": [
      "select nome_disciplina, professor_id from disciplina;",
      "select nome_disciplina, professor_id from disciplina, professor on (professor_id = cpf);",
      "select d.nome_disciplina, p.nome_professor from disciplina d, professor p on (d.professor_id = p.cpf);",
      "select d.nome_disciplina, p.nome_professor from disciplina d inner join professor p on (d.professor_id = p.cpf);"
    ],
    "correct": 3,
    "explanation": "O INNER JOIN é a forma padrão de unir tabelas baseadas em chaves relacionadas."
  },
  {
    "id": "SAEP_60070",
    "text": "Estrutura ideal para grandes volumes de dados em tempo real com busca, inserção e remoção rápidas:",
    "options": [
      "Pilha",
      "Tabela Hash",
      "Fila",
      "Lista Sequencial"
    ],
    "correct": 1,
    "explanation": "Tabelas Hash oferecem complexidade O(1) média para busca, sendo ideais para alto desempenho."
  },
  {
    "id": "SAEP_57479",
    "text": "No algoritmo, se numerol=5 e numero2=7, e a linha 10 é: total <-- (numerol + numero2 * numerol), qual o total?",
    "options": [
      "O total é: 12",
      "O total é: 35",
      "O total é: 40",
      "O total é: 60"
    ],
    "correct": 2,
    "explanation": "Cálculo: 5 + (7 * 5) = 5 + 35 = 40. A multiplicação tem precedência."
  },
  {
    "id": "SAEP_57350",
    "text": "No diagrama de Caso de Uso, qual ação pode ser executada por todos os atores (Colaborador, Gerente e Admin)?",
    "options": [
      "Efetuar login no sistema.",
      "Incluir colaborador.",
      "Gerenciar contas.",
      "Editar dados de colaborador."
    ],
    "correct": 0,
    "explanation": "O login é uma funcionalidade básica herdada por todos os tipos de usuários no sistema."
  },
  {
    "id": "SAEP_41650",
    "text": "Estrutura de dados para armazenar produtos e suas quantidades (chave e valor):",
    "options": [
      "Lista",
      "Tupla",
      "Dicionário",
      "Pilha"
    ],
    "correct": 2,
    "explanation": "Dicionários permitem associar uma chave (produto) a um valor (quantidade)."
  },
  {
    "id": "SAEP_82320",
    "text": "No paradigma de Orientação a Objetos, qual técnica protege os atributos contra acesso direto?",
    "options": [
      "Declarar atributos como públicos.",
      "Usar comandos de repetição.",
      "Implantar métodos get e set (Encapsulamento).",
      "Usar modificadores privados sem métodos de acesso."
    ],
    "correct": 2,
    "explanation": "O encapsulamento usa métodos getter e setter para controlar o acesso aos dados da classe."
  },
  {
    "id": "SAEP_79673",
    "text": "Comando Linux para backup lógico completo de um banco PostgreSQL 'financeiro_db':",
    "options": [
      "pg_dump financeiro_db > backup.sql",
      "psql financeiro_db < backup.sql",
      "cp /var/lib/postgresql/data backup.sql",
      "pg_restore financeiro_db backup.sql"
    ],
    "correct": 0,
    "explanation": "O utilitário pg_dump é usado para extrair um banco de dados PostgreSQL para um arquivo de script."
  },
  {
    "id": "SAEP_79683",
    "text": "Identifique o protocolo de IOT que pertence à categoria de Protocolos de Dados (baixa potência):",
    "options": [
      "HTTP",
      "ZigBee",
      "Bluetooth",
      "MQTT"
    ],
    "correct": 3,
    "explanation": "MQTT é um protocolo de transporte de mensagens leve, ideal para sensores de baixa potência."
  },
  {
    "id": "SAEP_38146",
    "text": "A resistência elétrica é calculada interpretando as cores das faixas. Qual a função principal do resistor?",
    "options": [
      "Armazenar energia elétrica.",
      "Aumentar a tensão do circuito.",
      "Repelir elétrons (limitar a corrente).",
      "Transformar AC em DC."
    ],
    "correct": 2,
    "explanation": "Resistores limitam o fluxo de corrente elétrica, dissipando energia em forma de calor."
  },
  {
    "id": "SAEP_75499",
    "text": "Em normalização de banco de dados, a Terceira Forma Normal (3NF) exige que:",
    "options": [
      "Não existam grupos repetidos.",
      "Todos os campos dependam apenas da chave primária.",
      "Nenhuma coluna não chave dependa de outra coluna não chave.",
      "A tabela tenha pelo menos uma chave estrangeira."
    ],
    "correct": 2,
    "explanation": "A 3NF elimina dependências transitivas entre colunas que não são chaves."
  },
  {
    "id": "SAEP_41649",
    "text": "Sobre alocação de memória, qual a diferença entre memória Estática e Dinâmica?",
    "options": [
      "Estática muda durante a execução.",
      "Estática é definida em tempo de compilação; Dinâmica em tempo de execução.",
      "Dinâmica é mais rápida que a estática.",
      "Memória estática não ocupa espaço no hardware."
    ],
    "correct": 1,
    "explanation": "Alocação estática reserva tamanho fixo antes da execução; a dinâmica permite crescer conforme o uso."
  },
  {
    "id": "SAEP_57497",
    "text": "As etapas cronológicas corretas de um processo de implantação de software são:",
    "options": [
      "Treinamento, Codificação, Testes.",
      "Codificação, Manutenção, Requisitos.",
      "Requisitos, Codificação, Testes, Implantação, Manutenção.",
      "Instalação, Configuração, Treinamento, Operação."
    ],
    "correct": 3,
    "explanation": "O fluxo lógico após o desenvolvimento é instalar, configurar, treinar o usuário e iniciar a operação."
  },
  {
    "id": "SAEP_79683_OTA",
    "text": "O processo de atualização OTA (over-the-air) atômico significa que:",
    "options": [
      "A atualização ocorre por partes.",
      "O sistema para de funcionar durante o download.",
      "A nova versão só é aplicada se o download for concluído com sucesso.",
      "A atualização é feita via cabo USB."
    ],
    "correct": 2,
    "explanation": "Atomicidade garante que a atualização seja 'tudo ou nada', evitando corrupção se o download falhar."
  },
  {
    "id": "SAEP_GIT",
    "text": "Qual o comando Git utilizado para enviar as alterações locais para o repositório remoto?",
    "options": [
      "git pull",
      "git commit",
      "git push",
      "git checkout"
    ],
    "correct": 2,
    "explanation": "O 'push' envia os commits do repositório local para o servidor remoto."
  },
  {
    "id": "SAEP_43779",
    "text": "Sobre o Plano de Teste de software, é correto afirmar:",
    "options": [
      "Visa planejar as atividades a serem realizadas no processo de teste.",
      "É feito apenas após o software ser entregue ao cliente.",
      "Não precisa ser documentado, apenas executado.",
      "Serve apenas para testar a velocidade do sistema."
    ],
    "correct": 0,
    "explanation": "O plano de teste descreve o escopo, abordagem, recursos e cronograma das atividades de teste."
  },
  {
    "id": "SAEP_EXCEL",
    "text": "Qual fórmula de Excel retorna 'Aprovado' se a média (G4) for maior ou igual a 6 E a frequência (F4) maior ou igual a 7?",
    "options": [
      "=SE(OU(G4>=6;F4>=7); 'Aprovado'; 'Reprovado')",
      "=SE(E(G4>=6;F4>=7); 'Aprovado'; 'Reprovado')",
      "=SE(G4>=6; 'Aprovado')",
      "=MEDIA(G4;F4)"
    ],
    "correct": 1,
    "explanation": "A função E() exige que todos os critérios sejam verdadeiros simultaneamente."
  },
  {
    "id": "SAEP_38201",
    "text": "Identifique o tipo de sistema que organiza, coleta, processa e dissemina dados para apoio à decisão:",
    "options": [
      "Sistema Operacional",
      "Sistema de Informação",
      "Sistema de Hardware",
      "Sistema de Compilação"
    ],
    "correct": 1,
    "explanation": "Sistemas de Informação integram componentes para gerenciar dados em uma organização."
  },
  {
    "id": "SAEP_81767",
    "text": "No estoque, para verificar se a quantidade atual é SUFICIENTE para o pedido, a regra lógica deve ser:",
    "options": [
      "estoque < pedido",
      "estoque == pedido",
      "estoque >= pedido",
      "estoque != pedido"
    ],
    "correct": 2,
    "explanation": "Suficiência significa ter o mesmo valor ou mais do que o solicitado."
  },
  {
    "id": "SAEP_67505",
    "text": "Qual a importância da documentação técnica para a manutenção de sistemas?",
    "options": [
      "Nenhuma, o código se explica sozinho.",
      "Facilita a compreensão do sistema por outros desenvolvedores.",
      "Aumenta o custo do projeto sem benefícios.",
      "Serve apenas para o usuário final ler."
    ],
    "correct": 1,
    "explanation": "Documentação técnica é vital para que futuras manutenções sejam feitas com segurança e rapidez."
  },
  {
    "id": "SAEP_60140",
    "text": "A eficiência de um algoritmo (notação Big O) mede principalmente:",
    "options": [
      "A beleza do código.",
      "O consumo de tempo e memória em relação ao tamanho da entrada.",
      "A quantidade de comentários no arquivo.",
      "A cor do tema usado no editor de código."
    ],
    "correct": 1,
    "explanation": "Complexidade de algoritmo analisa como os recursos escalam conforme os dados aumentam."
  },
  {
    "id": "SAEP_79172",
    "text": "Qual algoritmo de ordenação utiliza a estratégia 'Dividir para Conquistar'?",
    "options": [
      "Bubble Sort",
      "QuickSort",
      "Selection Sort",
      "Insertion Sort"
    ],
    "correct": 1,
    "explanation": "QuickSort divide o array em torno de um pivô e ordena as partes recursivamente."
  },
  {
    "id": "SAEP_IOT_PROTO",
    "text": "Protocolo de rede sem fio de baixa potência e curto alcance muito usado em domótica:",
    "options": [
      "Ethernet",
      "ZigBee",
      "Fiber Optic",
      "SATA"
    ],
    "correct": 1,
    "explanation": "ZigBee é um padrão global para redes mesh de baixa potência em IoT."
  },
  {
    "id": "SAEP_DB_BACKUP",
    "text": "Um backup 'incremental' difere de um backup 'full' porque:",
    "options": [
      "Copia tudo novamente todos os dias.",
      "Copia apenas o que foi alterado desde o último backup.",
      "Não pode ser restaurado.",
      "É mais lento que o backup full."
    ],
    "correct": 1,
    "explanation": "Backups incrementais economizam tempo e espaço ao salvar apenas modificações."
  },
  {
    "id": "SAEP_SCRUM",
    "text": "No framework Scrum, quem é o responsável por priorizar o Backlog do Produto?",
    "options": [
      "Scrum Master",
      "Desenvolvedor",
      "Product Owner (PO)",
      "Cliente"
    ],
    "correct": 2,
    "explanation": "O PO é a voz do cliente e decide o que é mais importante ser entregue primeiro."
  },
  {
    "id": "E1",
    "text": "Qual tag HTML é usada para criar um link?",
    "options": [
      "link",
      "a",
      "href",
      "url"
    ],
    "correct": 1,
    "explanation": "A tag <a> (anchor) define um hiperlink."
  },
  {
    "id": "E2",
    "text": "Em CSS, como selecionar um elemento com id 'topo'?",
    "options": [
      ".topo",
      "#topo",
      "*topo",
      "topo"
    ],
    "correct": 1,
    "explanation": "'#' é o seletor para IDs no CSS."
  },
  {
    "id": "E3",
    "text": "Qual comando Javascript exibe uma mensagem no console?",
    "options": [
      "alert()",
      "print()",
      "console.log()",
      "document.write()"
    ],
    "correct": 2,
    "explanation": "console.log() é a ferramenta padrão de depuração."
  },
  {
    "id": "E4",
    "text": "O que significa a sigla SQL?",
    "options": [
      "Simple Query Language",
      "Structured Query Language",
      "Standard Quality Logic",
      "System Query Level"
    ],
    "correct": 1,
    "explanation": "Linguagem de Consulta Estruturada."
  },
  {
    "id": "E5",
    "text": "Qual dispositivo de rede conecta diferentes redes de computadores?",
    "options": [
      "Hub",
      "Switch",
      "Roteador",
      "Placa de rede"
    ],
    "correct": 2,
    "explanation": "Roteadores encaminham pacotes entre redes distintas."
  },
  {
    "id": "E6",
    "text": "Qual o principal objetivo do teste de usabilidade?",
    "options": [
      "Encontrar erros de lógica.",
      "Verificar a facilidade de uso do sistema.",
      "Testar a segurança do banco de dados.",
      "Medir a velocidade do processador."
    ],
    "correct": 1,
    "explanation": "Usabilidade foca na experiência do usuário final."
  },
  {
    "id": "E7",
    "text": "Um sistema legado é aquele que:",
    "options": [
      "Foi criado recentemente.",
      "Usa tecnologias obsoletas mas ainda é essencial.",
      "Não tem código-fonte.",
      "Só funciona em smartphones."
    ],
    "correct": 1,
    "explanation": "Sistemas legados são sistemas antigos que continuam em operação."
  },
  {
    "id": "E8",
    "text": "Qual unidade de medida representa a velocidade de transmissão de dados?",
    "options": [
      "Hertz",
      "Bytes",
      "Bits por segundo (bps)",
      "Pixels"
    ],
    "correct": 2,
    "explanation": "Bps indica quantos bits trafegam por segundo."
  },
  {
    "id": "E9",
    "text": "A sigla API significa:",
    "options": [
      "Application Programming Interface",
      "Advanced Protocol Internet",
      "Apple Program Instruction",
      "Auto Process Integration"
    ],
    "correct": 0,
    "explanation": "Interface de Programação de Aplicações."
  },
  {
    "id": "E10",
    "text": "No desenvolvimento web, o que faz o Backend?",
    "options": [
      "Cuida do design e cores.",
      "Gere o servidor, banco de dados e lógica de negócio.",
      "É responsável apenas pelo SEO.",
      "É o navegador do usuário."
    ],
    "correct": 1,
    "explanation": "Backend é a parte 'atrás das cortinas' que processa os dados."
  }
];

let score = 0;
let answered = 0;

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function renderQuiz(data) {
    const container = document.getElementById('quiz-container');
    container.innerHTML = '';
    
    data.forEach((q, index) => {
        const card = document.createElement('div');
        card.className = 'question-card';
        card.id = `q-${index}`;

        let imgHtml = q.image ? `<div class="q-image-placeholder">[IMAGEM: ${q.image}]</div>` : '';
        
        // Shuffle alternatives
        let indices = q.options.map((_, i) => i);
        shuffleArray(indices);

        card.innerHTML = `
            <div class="q-header">${index + 1}. ${q.text}</div>
            ${imgHtml}
            <div class="options-list" id="opts-${index}">
                ${indices.map(i => `
                    <div class="option-item">
                        <button class="option-btn" onclick="checkAnswer(${index}, ${i}, ${q.correct}, this)">
                            ${q.options[i]}
                        </button>
                    </div>
                `).join('')}
            </div>
            <div class="feedback" id="fb-${index}"></div>
        `;
        container.appendChild(card);
    });
}

window.checkAnswer = function(qIdx, selectedIdx, correctIdx, btn) {
    const optsDiv = document.getElementById(`opts-${qIdx}`);
    const fbDiv = document.getElementById(`fb-${qIdx}`);
    const buttons = optsDiv.querySelectorAll('button');
    
    buttons.forEach(b => b.disabled = true);
    
    const isCorrect = selectedIdx === correctIdx;
    
    if(isCorrect) {
        btn.classList.add('correct');
        fbDiv.innerHTML = `<strong>Correto!</strong> ${questions[qIdx].explanation}`;
        fbDiv.className = 'feedback show correct-f';
        score++;
    } else {
        btn.classList.add('wrong');
        // Find and highlight correct button
        buttons.forEach(b => {
             if(b.innerText === questions[qIdx].options[correctIdx]) {
                 b.classList.add('correct');
             }
        });
        fbDiv.innerHTML = `<strong>Incorreto.</strong> ${questions[qIdx].explanation}`;
        fbDiv.className = 'feedback show wrong-f';
    }
    
    answered++;
    document.getElementById('count').innerText = answered;
    
    if(answered === questions.length) {
        showResults();
    }
}

function showResults() {
    document.getElementById('results').classList.remove('hidden');
    document.getElementById('score-text').innerText = `Você acertou ${score} de ${questions.length} questões!`;
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
}

window.shuffleQuiz = function() {
    score = 0;
    answered = 0;
    document.getElementById('count').innerText = 0;
    document.getElementById('results').classList.add('hidden');
    shuffleArray(questions);
    renderQuiz(questions);
}

// Init
renderQuiz(questions);
