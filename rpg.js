// Variáveis Globais
let vida = 30; // Vida inicial do jogador
let inventario = []; // Inventário inicial vazio
let emocoes = ["Determinação", "Experiência", "Inspiração", "Nostalgia", "Alegria","Vergonha"]; // Emoções necessárias para completar o jogo
let locaisExplorados = []; // Locais já explorados
let chances = 6; // Número de chances de explorar
let emocaoPerdida = null; // Emoção perdida
let itemRaroObtido = false; // Indica se o item raro foi obtido

let iniciarCeu = false

// Função para exibir o status atual do jogador
function exibirStatus() {
    
    alert(`\n📊 **Status Atual** 📊\n\n${vida}\n🎒 Inventário: ${inventario.join(', ') || 'Vazio'}\n🔄 Chances restantes: ${chances}\n🎯 Objetivo: Coletar todas as emoções.`);
}
// Função para exibir a história de Yekta
function exibirHistoria() {
    alert(`\n📖 **História de Yekta Jamali** 📖\n\nYekta Jamali é uma atleta dedicada e determinada. Desde jovem, ela sempre sonhou em se destacar no esporte e inspirar outras pessoas. Com muito esforço e perseverança, Yekta conquistou várias medalhas e se tornou uma inspiração para muitos jovens atletas. Sua jornada é marcada por desafios, vitórias e o apoio incondicional de amigos, treinadores e familiares.`);
}

// Função para exibir as regras do jogo
function exibirRegras() {
    alert(`\n📜 **Como Jogar e Regras** 📜\n\nObjetivo do Jogo:\n- Coletar todas as emoções (Determinação, Experiência, Inspiração, Nostalgia, Alegria e Vergonha ) para completar a jornada de Yekta Jamali.\n\nComo Jogar:\n1. Exploração:\n- Você tem 6 chances para explorar diferentes locais: Academia, Competição, Vila Olímpica, Escola, Parque e Biblioteca.\n- Cada local pode ser explorado uma vez.\n- Você pode escolher entre o caminho principal ou um atalho. O atalho oferece a chance de encontrar itens raros, mas também pode resultar em perder uma emoção.\n\n2. Interação com NPCs:\n- Em cada local, você encontrará NPCs (treinador, amigo, repórter, atleta, bibliotecário, mentor) com quem pode interagir.\n- Interagir com NPCs pode resultar em ganhar emoções e vida.\n\n3. Gerenciamento de Vida:\n- Você começa com 30 de vida.\n- Ganhar ou perder vida depende das suas escolhas e interações.\n- Se a vida chegar a 0, o jogo termina.\n\n4. Recuperação de Emoções:\n- Se perder uma emoção, você pode recuperá-la ajudando alguém.\n- Escolha uma tarefa para ajudar e recupere a emoção perdida.\n\n5. Verificação de Emoções:\n- O jogo verifica se todas as emoções foram coletadas para determinar se você completou a jornada.\n\nDicas:\n- Escolha sabiamente entre o caminho principal e o atalho.\n- Interaja com os NPCs para ganhar emoções e vida.\n- Gerencie suas chances de exploração e vida cuidadosamente.\n\nFinal Secreto:\n- Obtenha o item raro para desbloquear um final secreto!\n\nEventos Aleatórios:\n- Durante a exploração, eventos aleatórios podem ocorrer, como encontrar um aliado inesperado ou enfrentar um desafio surpresa.`);
}

// Função para explorar locais
function explorar() {
    if (chances <= 0) {
        alert("Você não tem mais chances de explorar.");
        return;
    }

    let escolha = prompt(`\n🌍 **Menu de Exploração** 🌍\n\n1️⃣ Academia\n2️⃣ Competição\n3️⃣ Vila Olímpica\n4️⃣ Escola\n5️⃣ Parque\n6️⃣ Biblioteca\n7️⃣ Ver Status\n8️⃣ Ver História\n9️⃣ Recuperar Emoção\n\nEscolha um local ou opção:`);

    if (escolha === null) {
        alert("Escolha cancelada.");
        return;
    }

    if (escolha == 7) {
        exibirStatus();
        return;
    } else if (escolha == 8) {
        exibirHistoria();
        return;
    } else if (escolha == 9) {
        recuperarEmocao();
        return;
    }

    if (locaisExplorados.includes(escolha)) {
        alert("Você já explorou este local e não pode voltar.");
        return;
    }

    if (escolha == 1) {
        alert("Explorando a academia...");
        locaisExplorados.push(escolha);
        caminhoAcademia();
    } else if (escolha == 2) {
        alert("Explorando a competição...");
        locaisExplorados.push(escolha);
        caminhoCompeticao();
    } else if (escolha == 3) {
        alert("Explorando a vila olímpica...");
        locaisExplorados.push(escolha);
        caminhoVilaOlimpica();
    } else if (escolha == 4) {
        alert("Explorando a escola...");
        locaisExplorados.push(escolha);
        caminhoEscola();
    } else if (escolha == 5) {
        alert("Explorando o parque...");
        locaisExplorados.push(escolha);
        caminhoParque();
    } else if (escolha == 6) {
        alert("Explorando a biblioteca...");
        locaisExplorados.push(escolha);
        caminhoBiblioteca();
    } else {
        alert("Escolha inválida. Tente novamente.");
    }

    chances--;

    // Eventos Aleatórios
    if (Math.random() < 0.3) { // 30% de chance de um evento aleatório ocorrer
        eventoAleatorio();
    }
}

// Funções para diferentes caminhos
function caminhoAcademia() {
    let escolha = prompt("Você decidiu ir para a academia. Escolha um caminho: (1) Caminho principal, (2) Atalho (chance de encontrar um item raro)");

    if (escolha == 1) {
        interagirComNPC("treinador");
    } else if (escolha == 2) {
        alert("Você escolheu o atalho...");
        if (Math.random() < 0.2) { // Tornando o item raro mais difícil de obter
            alert("Você encontrou uma parte de você uma emoção chamada medo!");
            coletarItem("Medo");
            itemRaroObtido = true;
        } else {
            alert("Você encontrou bandidos! Eles roubaram uma emoção sua.");
            perderEmocao();
        }
        interagirComNPC("treinador"); // Permitir interação com NPC mesmo após encontrar bandidos
    } else {
        alert("Escolha inválida. Tente novamente.");
        caminhoAcademia();
    }
}

function caminhoCompeticao() {
    let escolha = prompt("Você decidiu ir para a competição. Escolha um caminho: (1) Caminho principal, (2) Atalho (chance de encontrar um item raro)");

    if (escolha == 1) {
        interagirComNPC("repórter");
    } else if (escolha == 2) {
        alert("Você escolheu o atalho...");
        if (Math.random() < 0.2) { // Tornando o item raro mais difícil de obter
            alert("Você encontrou uma emoção unica Amor!");
            coletarItem("Amor");
            itemRaroObtido = true;
        } else {
            alert("Você encontrou bandidos! Eles roubaram uma emoção sua.");
            perderEmocao();
        }
        interagirComNPC("repórter"); // Permitir interação com NPC mesmo após encontrar bandidos
    } else {
        alert("Escolha inválida. Tente novamente.");
        caminhoCompeticao();
    }
}

function caminhoVilaOlimpica() {
    let escolha = prompt("Você decidiu ir para a vila olímpica. Escolha um caminho: (1) Caminho principal, (2) Atalho (chance de encontrar um item raro)");

    if (escolha == 1) {
        interagirComNPC("atleta");
    } else if (escolha == 2) {
        alert("Você escolheu o atalho...");
        if (Math.random() < 0.2) { // Tornando o item raro mais difícil de obter
            alert("Você encontrou uma emoção unica empatia");
            coletarItem("Empatia");
            itemRaroObtido = true;
        } else {
            alert("Você encontrou bandidos! Eles roubaram uma emoção sua.");
            perderEmocao();
        }
        interagirComNPC("atleta"); // Permitir interação com NPC mesmo após encontrar bandidos
    } else {
        alert("Escolha inválida. Tente novamente.");
        caminhoVilaOlimpica();
    }
}
function caminhoEscola() {
    let escolha = prompt("Você decidiu ir para a escola. Escolha um caminho: (1) Caminho principal, (2) Atalho (chance de encontrar um item raro)");

    if (escolha == 1) {
        interagirComNPC("amigo");
    } else if (escolha == 2) {
        alert("Você escolheu o atalho...");
        if (Math.random() < 0.2) { // Tornando o item raro mais difícil de obter
            alert("Você encontrou uma emoção inedita competitividade!");
            coletarItem("Competitividade");
            itemRaroObtido = true;
        } else {
            alert("Você encontrou bandidos! Eles roubaram uma emoção sua.");
            perderEmocao();
        }
        interagirComNPC("amigo"); // Permitir interação com NPC mesmo após encontrar bandidos
    } else {
        alert("Escolha inválida. Tente novamente.");
        caminhoEscola();
    }
}

function caminhoParque() {
    let escolha = prompt("Você decidiu ir para o parque. Escolha um caminho: \n(1) Caminho principal, (2) Atalho (chance de encontrar um item raro)");

    if (escolha == 1) {
        interagirComNPC("mentor");
    } else if (escolha == 2) {
        alert("Você escolheu o atalho...");
        if (Math.random() < .2) { // Tornando o item raro mais difícil de obter
            alert("Você encontrou uma emoção determinação!");
            coletarItem("Determinação");
            itemRaroObtido = true;
        } else {
            alert("Você encontrou bandidos! Eles roubaram uma emoção sua.");
            perderEmocao();
        }
        interagirComNPC("mentor"); // Permitir interação com NPC mesmo após encontrar bandidos
    } else {
        alert("Escolha inválida. Tente novamente.");
        caminhoParque();
    }
}

function caminhoBiblioteca() {
    let escolha = prompt("Você decidiu ir para a biblioteca. Escolha um caminho: \n(1) Caminho principal, \n(2) Atalho (chance de encontrar um item raro)");

    if (escolha == 1) {
        interagirComNPC("bibliotecário");
    } else if (escolha == 2) {
        alert("Você escolheu o atalho...");
        if (Math.random() < 0.2) { // Tornando o item raro mais difícil de obter
            alert("Você encontrou uma emoção chamada de esperança!");
            coletarItem("Esperança");
            itemRaroObtido = true;
        } else {
            alert("Você encontrou bandidos! Eles roubaram uma emoção sua.");
            perderEmocao();
        }
        interagirComNPC("bibliotecário"); // Permitir interação com NPC mesmo após encontrar bandidos
    } else {
        alert("Escolha inválida. Tente novamente.");
        caminhoBiblioteca();
    }
}

// Função para interagir com NPCs
function interagirComNPC(npc) {
    alert(`Você encontrou um ${npc}. Deseja falar com ele?`);
    let resposta = prompt("Digite 'sim' ou 'não': ");

    if (resposta.toLowerCase() === 'sim') {
        if (npc === "treinador") {
            alert("Treinador: Yekta sempre foi dedicada e determinada. Você quer saber mais sobre seu treinamento?");
            let respostaTreinador = prompt("Digite 'sim' ou 'não': ");
            if (respostaTreinador.toLowerCase() === 'sim') {
                alert("Treinador: Yekta, parabéns por tudo que fez até hoje, por todas as quedas e vitórias. Mesmo nos momentos mais difíceis, você foi capaz de se levantar e lutar por aquilo que quer. Estou muito orgulhoso de você.\nYekta: Muito obrigado, treinador! Eu quem digo que foi um favor estar ao seu lado.");
                coletarItem("Determinação");
                ganharVida(10);
            } else {
                alert("Você decidiu não saber mais sobre o treinamento.");
            }
        } else if (npc === "amigo") {
            alert("Amigo de infância: Parabéns, Yekta, por tudo que você conquistou até agora. Você é um ídolo para nossa escola. Se tiver algum tempo, gostaria de falar com os outros depois.");
            let respostaAmigo = prompt("Digite 'sim' ou 'não': ");
            if (respostaAmigo.toLowerCase() === 'sim') {
                alert("Amigo: Quanto tempo, hein? Todos estávamos com saudades e orgulhosos de você.");
                coletarItem("Nostalgia");
                ganharVida(10);
            } else {
                alert("Você decidiu não falar mais com seu amigo.");
            }
        } else if (npc === "repórter") {
            alert("Repórter: Yekta, você fez história nos Jogos Asiáticos. Poderia me contar mais sobre sua jornada até aqui?");
            let respostaReporter = prompt("Digite 'sim' ou 'não': ");
            if (respostaReporter.toLowerCase() === 'sim') {
                alert("Repórter: Yekta ganhou várias medalhas e inspirou muitos jovens atletas.\nComo você se sente sendo uma inspiração para diversas pessoas?\nYekta: Eu me sinto muito grata e feliz por todos que me deram incentivo até aqui.");
                coletarItem("Experiência");
                ganharVida(10);
            } else {
                alert("Você decidiu não contar mais sobre sua jornada.");
            }
        } else if (npc === "atleta") {
            alert("Atleta: Yekta, você é uma inspiração para todos nós. Podemos conversar mais depois sobre como você me inspirou a ser quem eu sou?");
            let respostaAtleta = prompt("Digite 'sim' ou 'não': ");
            if (respostaAtleta.toLowerCase() === 'sim') {
                alert("Atleta: Yekta sempre ajuda e motiva seus colegas. Eu sabia que você toparia. Até depois.");
                coletarItem("Inspiração");
                ganharVida(10);
            } else {
                alert("Você decidiu não conversar mais com o atleta.");
            }
        } else if (npc === "bibliotecário") {
            alert("Bibliotecário: Yekta, você sempre foi uma ávida leitora. Gostaria de recomendar um livro que pode te inspirar ainda mais.");
            let respostaBibliotecario = prompt("Digite 'sim' ou 'não': ");
            if (respostaBibliotecario.toLowerCase() === 'sim') {
                alert("Bibliotecário: Este livro fala sobre a jornada de um atleta que superou muitos desafios. Espero que te inspire.");
                coletarItem("Alegria");
                ganharVida(10);
            } else {
                alert("Você decidiu não pegar o livro.");
            }
        } else if (npc === "mentor") {
            alert("Mentor: Yekta, você tem um potencial incrível. Gostaria de compartilhar algumas dicas que podem te ajudar.");
            let respostaMentor = prompt("Digite 'sim' ou 'não': ");
            if (respostaMentor.toLowerCase() === 'sim') {
                alert("Mentor: Sempre acredite em si mesma e nunca desista, mesmo nos momentos mais difíceis.");
                coletarItem("Vergonha");
                ganharVida(10);
            } else {
                alert("Você decidiu não ouvir as dicas do mentor.");
            }
        }
    } else {
        alert(`Você decidiu não falar com o ${npc}. Você não poderá voltar a este local e perdeu 10 de vida.`);
        perderVida(10);
    }
}


// Funções para ações
function ganharVida(valor) {
    vida += valor;
    vida = Math.min(vida, 30); // Garantir que a vida não ultrapasse 30
    exibirStatus();
    alert(`Você ganhou ${valor} de vida. Vida atual: ${vida}/30.`);
}

function perderVida(valor) {
    vida = Math.max(0, vida - valor);
    exibirStatus();
    alert(`Você perdeu ${valor} de vida. Vida atual: ${vida}/30.`);
}

function coletarItem(item) {
    inventario.push(item);
    alert(`${item} coletado!`);
}

function perderEmocao() {
    if (inventario.length > 0) {
        emocaoPerdida = inventario.pop();
        alert(`Você perdeu a emoção: ${emocaoPerdida}. Para recuperá-la, você precisa ajudar alguém.`);
    } else {
        perderVida(10);
        alert("Você não tinha emoções para perder, então perdeu 10 de vida.");
    }
}

function recuperarEmocao() {
    if (emocaoPerdida) {
        alert("Para recuperar sua emoção perdida, você precisa ajudar alguém.");
        let tarefa = prompt("Escolha uma tarefa para ajudar: (1) Ajudar a treinar, (2) Ajudar na padaria");

        if (tarefa == 1) {
            alert("Você ajudou alguém a treinar e recuperou sua emoção!");
            inventario.push(emocaoPerdida);
            emocaoPerdida = null;
        } else if (tarefa == 2) {
            alert("Você ajudou na padaria e recuperou sua emoção!");
            inventario.push(emocaoPerdida);
            emocaoPerdida = null;
        } else {
            alert("Escolha inválida. Tente novamente.");
            recuperarEmocao();
        }
    } else {
        alert("Você não tem nenhuma emoção perdida para recuperar.");
    }
}

// Função para verificar se todas as emoções foram coletadas
function verificarEmocoes() {
    for (let emocao of emocoes) {
        if (!inventario.includes(emocao)) {
            return false;
        }
    }
    return true;
}

// Função para eventos aleatórios
function eventoAleatorio() {
    let evento = Math.floor(Math.random() * 3); // Três tipos de eventos aleatórios

    if (evento === 0) {
        alert("Você encontrou um aliado inesperado que te ajudou a recuperar 10 de vida!");
        ganharVida(10);
    } else if (evento === 1) {
        alert("Você encontrou um desafio surpresa e perdeu 10 de vida.");
        perderVida(10);
    } else if (evento === 2) {
        alert("Você encontrou uma emoção secreta resiliência!");
        coletarItem("Item Especial");
    }
}

// Função para iniciar o jogo
function iniciarJogo() {
    exibirRegras();
    alert("Bem-vindo à jornada de Yekta Jamali!");

    while (vida > 0 && !verificarEmocoes() && chances > 0) {
        explorar();
    }

    if (verificarEmocoes()) {
        if (itemRaroObtido) {
            alert("Parabéns! Você coletou todas as emoções e encontrou o item raro, desbloqueando o final secreto da jornada de Yekta Jamali.");
            alert("Final Secreto: Com o item raro, Yekta descobre um novo talento oculto que a ajuda a alcançar ainda mais sucesso em sua carreira. Ela se torna uma lenda no esporte, inspirando gerações futuras com sua determinação e conquistas.");
            iniciarCeu = true
        } else {
            alert("Parabéns! Você coletou todas as emoções e completou a jornada de Yekta Jamali.");
        
        alert('Feito por: Guilherme Fortes');}
    
    } 
    else if (inventario.length >= 4){
        alert('Parabéns! Você coletou emoções o suficientes para Yekta ficar tranquila')
        iniciarCeu = true
    }
    else if (inventario.length <= 2) {
        alert("Infelizmente, você não conseguiu coletar todas as emoções. Yekta se sente incompleta e triste por não ter conseguido falar com todos que a apoiaram.");
    } else {
        alert("Você não conseguiu completar a jornada de Yekta Jamali. Tente novamente.");
    }
    exibirStatus();
}

// Novo mundo
while(iniciarCeu === false){
    iniciarJogo();
}
ceu()

function ceu(){
// Variáveis Iniciais
let pontoDeVida = 30; // Vida de Yekta
let ataque = 5; // Dano que Yekta causa ao oponente

let slimeCompanheiro = false; // Verifica se o slime é companheiro
let espadaEmUso = false; // Verifica se a espada foi usada na rodada atual

// Monstros
let monstros = {
    'slime': {
        nome: 'Slime',
        vida: 20,
        ataque: 3,
        
    },
    'goblin': {
        nome: 'Goblin',
        vida: 25,
        ataque: 4,
       
    },
    'dragao': {
        nome: 'Dragão',
        vida: 40,
        ataque: 8,
        
    },
    'lordeDemoniaco': {
        nome: 'Lorde Demônio',
        vida: 100,
        ataque: 10,
        
    }
};

// Inventário com itens
let inventario = {
    'pocaoDeVida': 2, // Cada poção restaura 10 pontos de vida
    'espada': 1 // Espada aumenta o ataque em 5
};

// Função para exibir o inventário
function abrirInventario() {
    let itens = "Inventário:\n";
    for (let item in inventario) {
        itens += `${item}: ${inventario[item]}\n`;
    }
    alert(itens);
}

// Função para usar itens
function usarItem(opcao) {
    switch (opcao) {
        case '1': // Poção de Vida
            if (inventario.pocaoDeVida > 0) {
                pontoDeVida += 10;
                inventario.pocaoDeVida--;
                alert(`Você usou uma Poção de Vida e recuperou 10 pontos de vida. Você tem ${inventario.pocaoDeVida} poções restantes.`);
            } else {
                alert('Você não tem mais Poções de Vida.');
            }
            break;
        case '2': // Espada
            if (inventario.espada > 0 && !espadaEmUso) {
                ataque += 5; // Aumenta o ataque em 5
                inventario.espada--;
                espadaEmUso = true; // Marca a espada como usada na rodada atual
                alert(`Você equipou a Espada e aumentou seu ataque em 5 pontos. Você tem ${inventario.espada} espadas restantes.`);
            } else if (espadaEmUso) {
                alert('Você já usou a Espada nesta rodada.');
            } else {
                alert('Você não tem mais Espadas.');
            }
            break;
        default:
            alert('Opção inválida.');
    }
}

// Função para causar dano ao oponente e oponente atacar simultaneamente
function atacarEReceberDano(monstro) {
    monstro.vida -= ataque;
    pontoDeVida -= monstro.ataque;
    alert(`Você causou ${ataque} de dano ao ${monstro.nome}. Vida do ${monstro.nome}: ${monstro.vida}`);
    alert(`O ${monstro.nome} te atacou e causou ${monstro.ataque} de dano. Sua vida: ${pontoDeVida}`);

    // Reverte o ataque se a espada foi usada nesta rodada
    if (espadaEmUso) {
        ataque -= 5;
        espadaEmUso = false; // Reseta o uso da espada para a próxima rodada
    }
}





// Função para interagir com NPCs
function encontrarNPC(npc) {
    switch (npc) {
        case 'mercador':
            alert(`Você encontrou um mercador. Ele não tem mais itens para vender, pois foi atacado pelo dragão.`);
    
            break;
        case 'sabio':
            alert('Você encontrou um sábio. Ele te dá conselhos sobre sua jornada.');
            alert('"A força é importante, mas a sabedoria é a chave para a verdadeira vitória."');
            break;
        default:
            alert('Você encontrou um estranho. Ele não parece querer falar.');
    }
}

// Função para batalhar com monstros
function batalhar(monstro) {
    while (pontoDeVida > 0 && monstro.vida > 0) {
        let acao = prompt(`Você está enfrentando um ${monstro.nome}! Escolha uma ação: \n1. Atacar \n2. Abrir Inventário`);
        switch (acao) {
            case '1':
                atacarEReceberDano(monstro);
                break;
            case '2':
                abrirInventario();
                let itemEscolhido = prompt('Escolha um item para usar: \n1. Poção de Vida \n2. Espada');
                usarItem(itemEscolhido);
                break;
            default:
                alert('Escolha inválida. Tente novamente.');
        }

        // Verifica se o oponente foi derrotado
        if (monstro.vida <= 0) {
            alert(`Você venceu a batalha contra o ${monstro.nome}!`);
            
            break;
        }

        // Verifica se o personagem foi derrotado
        if (pontoDeVida <= 0) {
            alert('Você foi derrotado...');
            break;
        }
    }
}

// Função para lutar contra o Lorde Demônio (incluindo o slime ajudando)
function lutarContraLordeDemoniaco() {
    let monstro = monstros.lordeDemoniaco;

    while (pontoDeVida > 0 && monstro.vida > 0) {
        let acao = prompt(`Você está enfrentando o ${monstro.nome}! Escolha uma ação: \n1. Atacar \n2. Abrir Inventário`);
        switch (acao) {
            case '1':
                atacarEReceberDano(monstro);
                if (slimeCompanheiro && pontoDeVida > 0) {
                    pontoDeVida += 5; // O slime cura 5 pontos de vida
                    alert('Seu slime companheiro te curou em 5 pontos de vida!');
                }
                break;
            case '2':
                abrirInventario();
                let itemEscolhido = prompt('Escolha um item para usar: \n1. Poção de Vida \n2. Espada');
                usarItem(itemEscolhido);
                break;
            default:
                alert('Escolha inválida. Tente novamente.');
        }

        // Verifica se o Lorde Demônio foi derrotado
        if (monstro.vida <= 0) {
            alert('Você derrotou o Lorde Demônio e salvou o mundo!');
            
            desfechoFinal();
            break;
        }

        // Verifica se o personagem foi derrotado
        while (pontoDeVida <= 0) {
            alert('Você foi derrotado pelo Lorde Demônio...');
            lutarContraLordeDemoniaco();
        }
    }
}

// Função para o desfecho final do jogo
function desfechoFinal() {
    alert('Com a derrota do Lorde Demônio, a paz retorna ao mundo. Os habitantes de Ãri te celebram como a grande heroína que salvou a todos.');
    alert('No entanto, rumores começam a se espalhar sobre uma nova ameaça nas terras distantes...');
    alert('Será este o fim ou apenas o começo de uma nova aventura?');
    alert('FIM - Obrigado por jogar!\nFeito por Guilherme Fortes Stefani ');
}

// Função para continuar a história
function continuarHistoria() {
    
     
    alert('Sua jornada continua...');
    let escolha = prompt('Você vê uma pequena aldeia à distância. Deseja: \n1. Visitar a aldeia \n2. Continuar pela floresta \n3. Explorar a caverna \n4. Enfrentar o Lorde Demônio');

    if (escolha === '1') {
        alert('Você chega na aldeia e vê pessoas vivendo pacificamente.');
        encontrarNPC('mercador');
            document.body.style.backgroundImage = "url('https://i.pinimg.com/736x/57/50/f3/5750f33940d0d8f8645fdbcd46668d66.jpg')";
        
        continuarHistoria();
    } else if (escolha === '2') {
        alert('Você continua pela floresta e encontra um Goblin selvagem!');
        batalhar(monstros.goblin);
        continuarHistoria();
    } else if (escolha === '3') {
        alert('Você entra na caverna e depara-se com um Dragão feroz!');
        batalhar(monstros.dragao);
        continuarHistoria();
    } else if (escolha === '4') {
        lutarContraLordeDemoniaco();
    } else {
        alert('Escolha inválida.');
        continuarHistoria();
    }
}

// Função para iniciar a batalha
function iniciarBatalha() {
    alert('Yekta Jamali, eu sou Elaria, Deusa da Harmonia. O destino te trouxe até mim, pois teu valor e tua coragem são necessários em um mundo distante.\nUm grande mal, o Rei Demônio, ameaça mergulhar este mundo em escuridão. Sua força cresce a cada dia, e poucos são capazes de enfrentá-lo. Por isso, foste escolhida. Tua missão é simples, mas vital: proteger este mundo e derrotar o Rei Demônio.\nAgora, te levarei à floresta nos arredores de Ãri. Ali, tua jornada começa. Este mundo é vasto e cheio de perigos, mas também de aliados e segredos que precisarás descobrir.\nConfio em ti, Yekta. Que tua força seja um farol para os que precisam de esperança. Prepare-se, pois tua nova vida começa agora.');

    let querer = prompt('Você avista algo pela floresta pequeno mas poderoso, você se aproxima e percebe que era um slime selvagem, você deseja lutar com ele, escolha:\n(1) para Sim\n(2) para Não');
    
    if (querer === '1') {
        batalhar(monstros.slime);
        continuarHistoria();
    } else {
        let slimeEstimacao = prompt('O slime no momento que avistou você ele deixou de ser selvagem e ficou bonzinho, deseja ter o slime como bichinho de estimação, escolha\n(1) para Sim\n(2) para Não');
        if (slimeEstimacao === '1') {
            slimeCompanheiro = true;
            alert('O slime agora é seu companheiro de jornada!');
        } else {
            alert('Você decide deixar o slime em paz e seguir seu caminho.');
        }
        continuarHistoria();
    }
}

// Iniciar a aventura
iniciarBatalha();
}