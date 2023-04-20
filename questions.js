export default [
  {
    question: "Um processo pode ser iniciado e terminado. O sistema operacional sabe se o processo está em execução ou não, por meio da técnica de troca de estados. Considerando o texto acima e que os processos possuem tipos de estados que podem se encontrar, selecione a alternativa que apresente todos os tipos de estados válidos:",
    answers: [
      { option: "Novo, em heap, em processamento, pronto", correct: false },
      { option: "Em heap, em processamento, pronto, aguardando", correct: false },
      { option: "Em memória, em processamento, pronto, em heap", correct: false },
      { option: "Novo, em espera, pronto, em execução", correct: true },
      { option: "Novo, pronto, inicial, em memória", correct: false },
    ],
  },
  {
    question: "Um processo pode ser considerado um programa em execução. Por exemplo: imagine que desejamos ler um livro em nosso computador (os chamados e-books). O livro somente poderá ser lido quando ele estiver em execução e para isto é necessário clicar duas vezes sob ele para a sua abertura. Com isto, um processador de texto será aberto. A partir deste momento temos um processo em execução (no caso o processador de texto com o e-book sendo exibido). Considerando o texto acima e no que diz respeito aos processos de um sistema operacional é correto afirmar que:",
    answers: [
      { option: "Para a execução de um processo se faz necessário recursos como: tempo de CPU, dispositivos de entrada e saída, alocação de memória e arquivos", correct: true },
      { option: "Os processos são estruturas físicas que os operadores devem reproduzir com os computadores", correct: false },
      { option: " São estruturas abstratas que são executados apenas em ambientes na nuvem", correct: false },
      { option: "São estruturas que utilizam o uso do processador e da memória de um computador", correct: false },
      { option: "  São estruturas físicas em que se pode expandir a capacidade do hardware para a execução paralela", correct: false },
    ],
  },
  {
    question: "Com o desenvolvimento da nanotecnologia, os computadores estão cada vez menores. Podemos citar como precursor desta tecnologia portátil o computa- dor do tipo PDA (Personal Digital Assistant) que era um pequeno computador com um número limitado de funções. Ele era um computador de bolso e a empresa referência neste tipo de produto é a PALM, utilizando o PALM OS.  Atualmente os PDA perderam espaço para os smatphones e tablets. O primeiro consiste em um aparelho celular com diversas funções e o segundo consiste em um computador em formato de prancheta. As diversas funcionalidades destes dois aparelhos são ofertadas a partir do uso de um sistema operacional. Os mais utilizados são o iOS e Android. ​Com base no texto acima e considerando o Sistema Operacional Android é correto afirmar:",
    answers: [
      { option: "É um sistema operacional servidor que é baseado em Linux e foi desenvolvido pelo Google", correct: false },
      { option: "É um sistema operacional embarcado que é focado em dispositivos de Internet das Coisas e sua interface gráfica é baseada no Linux", correct: false },
      { option: "É um sistema operacional para dispositivos móveis que teve seu desenvolvimento a partir do kernel do Linux", correct: true },
      { option: "É um sistema operacional embarcado que é focado em dispositivos móveis e sua interface gráfica é baseada no Linux ", correct: false },
      { option: "É um sistema operacional para dispositivos móveis que teve seu desenvolvimento a partir do kernel do Windows", correct: false },
    ],
  },
  {
    question: "Você já deve ter percebido que os processos de alguma maneira têm que se comunicar com outros. Cabe ao sistema operacional garantir esta comunicação de forma bem estruturada e sem interrupções. Considerando o texto acima e pensando sobre a solução de Peterson é correto afirmar",
    answers: [
      { option: "É uma solução para facilitar o processo de instalação de múltiplos sistemas operacionais em um computador", correct: false },
      { option: "É responsável pela melhor utilização da memória em sistemas operacionais de 64 bits", correct: false },
      { option: "Está diretamente ligado com a virtualização de ambientes e na criação de máquinas virtuais", correct: false },
      { option: "Consiste em um algoritmo, inicialmente para dois processos, que controla a lista de processos interessados em acessar a região crítica", correct: true },
      { option: "Nenhuma das anteriores", correct: false },
    ],
  },
  {
    question:"Muitas vezes, a memória principal se encontra toda ocupada ou o espaço disponível na mesma não é suficiente para comportar um novo processo ou aplicação sendo aberta, utiliza-se a chamada memória virtual."
    +"A partir da ideia de memória virtual, observe as afirmativas a seguir I – O controle do uso de memória para a troca de processos armazenados temporariamente realiza trocas de processos na memória (swapping). " 
    +"II – Um dos algoritmos para controle do swapping retira conteúdos de páginas de memória principal menos utilizados e os coloca em memória virtual para que um novo conteúdo seja colocado."
    +"III – Conteúdos de páginas de memória em uso são prioridade para serem alocados em memória virtual nos algoritmos de controle de swapping."
  +"Assinale a alternativa que contenha apenas afirmativas corretas."  
    ,
    answers: [
      { option: "I, apenas.", correct: false },
      { option: "II, apenas", correct: false },
      { option: "III, apenas", correct: false },
      { option: "I e II, apenas", correct: true },
      { option: "II e III, apenas", correct: false },
    ],
  },
  {
    question: "O sistema operacional possuiu um conjunto grande de algoritmos de escalonamento que podem ser utilizados. Eles são divididos em: algoritmos de escalonamento preemptivo: o processo é executado por um tempo máximo fixado; e algoritmos de escalonamento não preemptivo: o processo é executado até que seja bloqueado.Com base no texto acima e que o escalonamento consiste em utilizar algoritmos para decidir qual processo deve ser utilizado. Um dos algoritmos mais simples de escalonamento é o chamado FCFS. Selecione a alternativa que apresenta uma definição correta sobre esse algoritmo:",
    answers: [
      { option: "São conhecidos como Pilhas e a ideia é que o último processo a entrar é o primeiro a sair", correct: false },
      { option: "O algoritmo FCFS consegue gerenciar os processos de modo que os menores sempre sejam executados primeiro", correct: false },
      { option: "O algoritmo FCFS (first come, first served) implementa o conceito de Fila, onde o primeiro a entrar é o primeiro a sair", correct: true },
      { option: "São conhecidos como Hash e a ideia é que o último processo a entrar é o primeiro a sair", correct: false },
      { option: "O algoritmo FPS consegue gerenciar os processos de modo que os menores sempre sejam executados primeiro", correct: false },
    ],
  },
  {
    question: "Um processo pode ser considerado um programa em execução. Por exemplo: imagine que desejamos ler um livro em nosso computador (os chamados e-books). O livro somente poderá ser lido quando ele estiver em execução e para isto é necessário clicar duas vezes sob ele para a sua abertura. Com isto, um processador de texto será aberto. A partir deste momento temos um processo em execução (no caso o processador de texto com o e-book sendo exibido).Sobre os processos de um Sistema Operacional, selecione a alternativa que apresente as quatro grandes áreas que o compõe?",
    answers: [
      { option: "Seção de dados, seção de informações, heap e pilha", correct: false },
      { option: "Seção de texto, seção de dados, heap e fila", correct: false },
      { option: "Seção de texto, seção de dados, máquina virtual e pilha", correct: false },
      { option: "Seção de memória, seção de dados, fila e pilha", correct: false },
      { option: "Seção de texto, seção de dados, heap e pilha", correct: true },
    ],
  },
  {
    question: "Podemos descrever a função do sistema operacional como: gerenciar o uso dos componentes (hardware) de um computador, garantindo disponibilidade do hardware e armazenamento correto de dados; fornecer uma camada de abstração para utilização e desenvolvimento de outros softwares; e fornecer uma interface de acesso para dispositivos com tecnologias distintas como USB e IDE. Considerando o texto descrito a cima e sabendo que existem vários tipos de Sistemas Operacionais, selecione a alternativa que apresente tipos reais:",
    answers: [
      { option: "SO de servidores, SO de Backend, SO embarcado;", correct: false },
      { option: "SO de servidores, SO de Computadores Pessoais, SO embarcado", correct: true },
      { option: "SO de potência, SO de Computadores Impessoais, SO embarcado", correct: true },
      { option: "SO de Aplicação, SO de Threads, SO embarcado", correct: false },
      { option: "SO de servidores, SO de Computadores Pessoais, SO de Threads", correct: true },
    ],
  },
  {
    question: "Todo processo precisa de um espaço em memória durante a sua execução e um pedaço desta memória é compartilhado entre outros processos. Este compartilhamento é chamado de região crítica. A melhor maneira para que não ocorra condição de corrida é realizando a exclusão mútua.Com base no texto acima e no que diz respeito a comunicação entre processos e sobre a exclusão mútua, selecione a alternativa que represente um critério que se deve considerar numa proposta de solução:",
    answers: [
      { option: "Todo processo deve esperar eternamente para entrar em sua região crítica", correct: false },
      { option: "Dois processos nunca podem estar simultaneamente em suas regiões críticas", correct: true },
      { option: "Tudo pode ser afirmado sobre a velocidade ou sobre o número de CPUs", correct: false },
      { option: "Todo processo executando fora de sua região crítica pode bloquear outros processos.", correct: false },
      { option: "Nenhuma das anteriores", correct: false },
    ],
  },
  {
    question: "I – Memória ROM ou de massa é usada para armazenamento de quantidades maiores de dados de forma permanente."
    +"II – Memória RAM se refere à memória temporária básica de trabalho onde os softwares abertos são inicialmente alocados."
    +"III – Memória cache se refere a um tipo de memória de pequena capacidade para dados de uso mais imediato pelo processador."
    , answers: [
    
      { option: "70", correct: false },
      { option: "56", correct: false },
      { option: "49", correct: true },
    ],
  },
 
];

