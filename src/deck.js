import symbols from './symbols';

const replaceSymbolsWithImages = (text) => {
    return text.split(/({.*?})/g).map((part, index) => {
        if (part.match(/{.*?}/)) {
            const symbolData = symbols[0].data.find(symbol => symbol.symbol === part);

            return symbolData ? (
                <img
                    key={index}
                    src={symbolData.svg_uri}
                    alt={symbolData.english}
                    style={{ width: '20px', height: '20px' }}
                />
            ) : part;
        } else {
            return part;
        }
    });
};

const deck = [
    {
        "name": "Satya, Aetherflux Genius",
        "description": "Ameaçar, ímpeto\n\nToda vez que Satya, Aetherflux Genius ataca, crie uma ficha virada e atacando que seja uma cópia de até uma outra criatura que não seja ficha que você controla. Você ganha {E}{E} (dois contadores de energia). No final do turno, sacrifique essa ficha, a menos que você pague uma quantidade de energia igual ao seu valor de mana.",
        "usage": "Satya, Aetherflux Genius é uma carta poderosa em estratégias que utilizam criaturas com efeitos de entrada no campo de batalha (ETB). Use-a para criar cópias temporárias de criaturas importantes e ganhar contadores de energia. Seu ímpeto e a habilidade de ameaçar garantem que seja difícil de bloquear e traz uma pressão constante ao oponente.",
        "type": "Comandante",
        "image": "https://cards.scryfall.io/normal/front/3/b/3b964bbe-54cc-425c-9cc6-c877f82af7ba.jpg?1727175658"
    },
    {
        "name": "Cayth, Famed Mechanist",
        "description": "Quando Cayth, Famed Mechanist entra no campo de batalha, você pode procurar um artefato no topo do seu grimório e colocá-lo na sua mão. Se for um artefato de custo baixo, você pode colocá-lo diretamente no campo de batalha.",
        "usage": "Cayth é perfeito para decks focados em sinergias com artefatos. Use sua habilidade para acelerar seu jogo, buscando artefatos importantes ou colocando-os diretamente no campo de batalha para obter vantagem rápida.",
        "type": "Criatura",
        "image": "https://cards.scryfall.io/normal/front/5/f/5f8e6e5d-63d8-48c3-93a0-e7de1d75f5ca.jpg?1727175647"
    },
    {
        "name": "Plains",
        "description": "Terreno Básico — Planície\n\n(Adicione {W} à sua reserva de mana.)",
        "usage": "Utilize Planície para gerar mana branca, que é crucial para conjurar magias e criaturas brancas em seus decks.",
        "type": "Terreno",
        "image": "https://cards.scryfall.io/normal/front/1/b/1b499b37-efaf-4484-95e8-a70a9778c804.jpg?1726286908"
    },
    {
        "name": "Island",
        "description": "Terreno Básico — Ilha\n\n(Adicione {U} à sua reserva de mana.)",
        "usage": "Use Island para gerar mana azul, essencial para controlar o jogo com magias e criaturas azuis.",
        "type": "Terreno",
        "image": "https://cards.scryfall.io/normal/front/9/4/947702ca-d065-4368-9f26-f859d4642cb6.jpg?1726286915"
    },
    {
        "name": "Mountain",
        "description": "Terreno Básico — Montanha\n\n(Adicione {R} à sua reserva de mana.)",
        "usage": "Mountain é uma fonte de mana vermelha, essencial para feitiços e criaturas agressivas em decks vermelhos.",
        "type": "Terreno",
        "image": "https://cards.scryfall.io/normal/front/a/c/accb56f0-3903-4894-86f0-3965162064d4.jpg?1726286930"
    },
    {
        "name": "Legion Loyalty",
        "description": "As criaturas que você controla têm miríade. (Toda vez que uma criatura com miríade ataca, para cada oponente além do jogador defensor, você pode criar uma ficha que seja uma cópia daquela criatura que está virada e atacando aquele jogador ou um planeswalker que ele controla. Exile as fichas no final do combate.)",
        "usage": "Legion Loyalty é excelente para decks multiplayer, permitindo pressionar todos os oponentes com múltiplos ataques simultâneos.",
        "type": "Encantamento",
        "image": "https://cards.scryfall.io/normal/front/2/3/237d2374-9e7c-40c0-9120-82f7e2ed2f67.jpg?1656016837"
    },
    {
        "name": "Filigree Racer",
        "description": "Acelerador Artefato — Veículo\n\nTripular 2 (Vire quaisquer criaturas que você controla com poder total 2 ou mais: Este artefato torna-se uma criatura até o final do turno.)",
        "usage": "Use Filigree Racer como um veículo que pode gerar ataques poderosos rapidamente com suas habilidades de tripulação.",
        "type": "Artefato",
        "image": "https://cards.scryfall.io/normal/front/a/0/a00c289a-646c-4b4c-b028-fa7783adc8f3.jpg?1717189885"
    },
    {
        "name": "Localized Destruction",
        "description": "Você ganha {E} (um marcador de energia), depois pode pagar um ou mais {E}. Se fizer isso, cada criatura que você controla com poder igual ao número de {E} pagos desta forma ganha indestrutível até o final do turno.\n\nDestrua todas as criaturas.\n\nOs detonadores imperiais são calibrados para maximizar a devastação enquanto minimizam os danos colaterais.",
        "usage": "Localized Destruction é perfeito para decks de energia, oferecendo uma forma de proteção e destruição total das criaturas.",
        "type": "Feitiço",
        "image": "https://cards.scryfall.io/normal/front/d/d/dd64fe7f-2c06-42f8-96ac-47e4c38dc149.jpg?1717189819"
    },
    {
        "name": "Aetherworks Marvel",
        "description": "Toda vez que uma permanente que você controla for colocada no cemitério, ganhe um ponto de energia.\n\nGaste seis pontos de energia: Olhe as seis cartas do topo do seu grimório. Você pode jogar uma mágica dentre elas sem pagar o custo de mana. Coloque as cartas restantes no fundo do seu grimório em uma ordem aleatória.",
        "usage": "Use Aetherworks Marvel para utilizar energia acumulada e conjurar mágicas poderosas sem pagar o custo de mana.",
        "type": "Artefato",
        "image": "https://cards.scryfall.io/normal/front/8/8/884f6948-3e03-48c6-8be2-6f2539386c9d.jpg?171795087"
    },
    {
        "name": "Angel of Invention",
        "description": "Voar, vigilância, vínculo com a vida\n\nFabricar 2 (Quando esta criatura entrar no campo de batalha, coloque dois marcadores +1/+1 nela ou crie duas fichas de criatura artefato incolor 1/1 do tipo Servo.)\n\nAs outras criaturas que você controla recebem +1/+1.",
        "usage": "Angel of Invention oferece flexibilidade, seja fortalecendo suas criaturas ou criando tokens para controle de campo.",
        "type": "Criatura",
        "image": "https://cards.scryfall.io/normal/front/f/3/f3920f7d-8559-40f8-95be-860c16bf7700.jpg?1576380724"
    },
    {
        "name": "Confiscation Coup",
        "description": "Escolha o artefato ou a criatura alvo. Você recebe {E}{E}{E}{E} (quatro marcadores de energia) e, em seguida, pode pagar uma quantidade de {E} igual ao custo de mana convertido daquela permanente. Se fizer isso, ganhe o controle dela.\n\n“Cidadãos, não resistam. Isso é para sua própria segurança. Tezzeret ordena que vocês entreguem suas invenções. Imediatamente.”",
        "usage": "Use Confiscation Coup para roubar criaturas ou artefatos poderosos do oponente, virando o jogo a seu favor.",
        "type": "Feitiço",
        "image": "https://cards.scryfall.io/large/front/e/e/ee49d612-f36b-4fc3-ae67-0a3d0f4e6b74.jpg?1562745268"
    },
    {
        "name": "Aetherstorm Roc",
        "description": "Voar\n\nToda vez que Aetherstorm Roc ou outra criatura entra no campo de batalha sob seu controle, ganhe um ponto de energia. Sempre que Aetherstorm Roc ataca, você pode gastar energia para colocar um marcador +1/+1 nele.",
        "usage": "Aetherstorm Roc acumula energia enquanto cresce em poder, ideal para decks de controle com criaturas voadoras.",
        "type": "Criatura",
        "image": "https://cards.scryfall.io/large/front/b/c/bc9c79c3-cd97-4c6d-b805-ebd921950958.jpg?1562742315"
    },
    {
        "name": "Aethersquall Ancient",
        "description": "Voar\n\nNo início da sua manutenção, você ganha 3 pontos de energia.\n\nPague {8} pontos de energia: Devolva todas as outras criaturas para as mãos de seus donos. Ative esta habilidade apenas quando puder conjurar um feitiço.",
        "usage": "Aethersquall Ancient permite limpar o campo de batalha com facilidade, devolvendo todas as criaturas adversárias para as mãos.",
        "type": "Criatura",
        "image": "https://cards.scryfall.io/large/front/f/5/f525f0e5-b584-4b4f-b68b-b1933da1db27.jpg?1562745682"
    },
    {
        "name": "Blaster Hulk",
        "description": "Esta mágica custa {1} a menos para conjurar para cada {E} (contador de energia) que você pagou ou perdeu neste turno.\n\nÍmpeto\n\nToda vez que Blaster Hulk ataca, você ganha {E}{E} (dois contadores de energia), depois pode pagar oito {E}. Quando fizer isso, Blaster Hulk causa 8 pontos de dano divididos como você desejar entre até oito alvos.",
        "usage": "Blaster Hulk é perfeito para decks focados em gerar energia e causar grandes quantidades de dano distribuído entre múltiplos alvos.",
        "type": "Criatura",
        "image": "https://cards.scryfall.io/large/front/7/8/7853d27d-e860-42ba-b925-8b57dc451059.jpg?1717189879"
    },
    {
        "name": "Temple of Triumph",
        "description": "Temple of Triumph entra no campo de batalha virado.\n\nQuando Temple of Triumph entra, use vidência 1.\n\n{T}: Adicione {R} ou {W}.",
        "usage": "Use Temple of Triumph para ajustar o topo do seu grimório e garantir mana vermelha ou branca em seus turnos iniciais.",
        "type": "Terreno",
        "image": "https://cards.scryfall.io/large/front/0/7/07e73142-a8c0-4bd5-8ab4-cd10e572a975.jpg?1712355192"
    },
    {
        "name": "Silverquill Lecturer",
        "description": "As mágicas de criatura que você conjura têm demonstrar. (Sempre que você conjurar uma mágica de criatura, você pode copiá-la. Se fizer isso, escolha um oponente para também copiá-la. Cada cópia se torna uma ficha.)\n\n“Você trouxe o suficiente para compartilhar com o resto da classe?”",
        "usage": "Silverquill Lecturer é ótimo para gerar múltiplas cópias de criaturas, incentivando um estilo de jogo agressivo.",
        "type": "Criatura",
        "image": "https://cards.scryfall.io/large/front/5/3/5360b208-76c0-4757-a78f-723662b3353f.jpg?1717189834"
    },
    {
        "name": "Overclocked Electromancer",
        "description": "No início do combate no seu turno, você pode pagar {E}{E}{E}. Se fizer isso, coloque um marcador +1/+1 em Overclocked Electromancer.\n\nToda vez que Overclocked Electromancer ataca, dobre seu poder até o final do turno.\n\nSempre que Overclocked Electromancer causar dano de combate a uma criatura, se essa criatura tiver recebido dano em excesso neste turno, você ganha X {E}, onde X é esse dano em excesso.",
        "usage": "Use Overclocked Electromancer para acumular energia e potencializar seus ataques, dobrando o poder da criatura.",
        "type": "Criatura",
        "image": "https://cards.scryfall.io/large/front/2/6/2670583a-bbd9-4e99-86d9-97e06227dc2a.jpg?1717189893"
    },
    {
        "name": "Professional Face-Breaker",
        "description": "Ameaçar\n\nToda vez que uma ou mais criaturas que você controla causarem dano de combate a um jogador, crie uma ficha de Tesouro.\n\nSacrifique um Tesouro: Exile o card do topo do seu grimório. Você pode jogar aquele card neste turno.",
        "usage": "Professional Face-Breaker é excelente para gerar fichas de Tesouro, dando acesso a mais recursos durante o jogo.",
        "type": "Criatura",
        "image": "https://cards.scryfall.io/large/front/a/a/aa004536-4929-4998-9362-801187a1e1e2.jpg?1651567831"
    },
    {
        "name": "Stone Idol Generator",
        "description": "Toda vez que uma criatura que você controla atacar, você ganha {E} (um marcador de energia).\n\n{T}, Pague seis {E}: Crie uma ficha de criatura artefato incolor 6/12 do tipo Constructo com atropelar. Ative esta habilidade apenas como feitiço.\n\n“Como as ambições do meu povo, é ao mesmo tempo inspirador e inacabado.” —Nahiri",
        "usage": "Use Stone Idol Generator para criar criaturas gigantes de energia e dominar o campo de batalha.",
        "type": "Artefato",
        "image": "https://cards.scryfall.io/large/front/3/8/38c3f277-7cb7-4722-8e04-db8e9eaeabda.jpg?1717189982"
    },
    {
        "name": "Aurora Shifter",
        "description": "Toda vez que Aurora Shifter causar dano de combate a um jogador, você ganha aquela quantidade de {E}.\n\nNo início do combate no seu turno, você pode pagar {E}{E}. Se fizer isso, Aurora Shifter se torna uma cópia de outra criatura alvo que você controla, exceto que ela tem esta habilidade e “Toda vez que esta criatura causar dano de combate a um jogador, você ganha aquela quantidade de {E}.”",
        "usage": "Aurora Shifter é uma carta versátil que pode copiar criaturas e acumular energia em quantidades consideráveis.",
        "type": "Criatura",
        "image": "https://cards.scryfall.io/large/front/d/7/d76fd397-64ea-4dca-b901-86ce101cb70e.jpg?1717189836"
    },
    {
        "name": "Conversion Apparatus",
        "description": "{T}: Adicione {C}.\n\n{3}, {T}: Você ganha {E}{E}{E} (três marcadores de energia).\n\n{T}, Pague {E}{E}{E}: Adicione três manas em qualquer combinação de cores.\n\n“Os objetos mais úteis realmente deveriam ser os mais bonitos.” —Saheeli",
        "usage": "Conversion Apparatus transforma energia em mana, sendo perfeito para decks que precisam de flexibilidade de cores.",
        "type": "Artefato",
        "image": "https://cards.scryfall.io/large/front/7/9/79193ac5-bb36-4055-bb94-d7bc0ed2760b.jpg?1717189980"
    },
    {
        "name": "Gonti's Aether Heart",
        "description": "Toda vez que o Coração de Éter de Gonti ou outro artefato que você controla entrar no campo de batalha, você ganha {E}{E} (dois marcadores de energia).\n\nPague oito {E}, Exile o Coração de Éter de Gonti: Jogue um turno extra após este.\n\nApesar da magia que sustenta a vida de Gonti, o senhor do crime é frequentemente descrito como sem coração.",
        "usage": "Use Gonti's Aether Heart para obter turnos extras ao acumular energia através de artefatos.",
        "type": "Artefato",
        "image": "https://cards.scryfall.io/large/front/7/3/735ea00f-1751-421f-93fb-ae2ce24fe4ac.jpg?1562922266"
    },
    {
        "name": "Lightning Runner",
        "description": "Golpe duplo, ímpeto\n\nToda vez que Lightning Runner atacar, você ganha {E}{E} (dois marcadores de energia), depois pode pagar oito {E}. Se pagar, desvira todas as criaturas que você controla, e após esta fase, haverá uma fase de combate adicional.\n\n“Pegue-me se puder.”",
        "usage": "Use Lightning Runner para acumular energia e ativar fases de combate adicionais, aumentando a pressão sobre o oponente.",
        "type": "Criatura",
        "image": "https://cards.scryfall.io/large/front/c/9/c9bf4059-c747-4116-921f-9902e84145f8.jpg?1562942653"
    },
    {
        "name": "Aethertide Whale",
        "description": "Voar\n\nQuando Baleia-da-maré-etérea entra no campo de batalha, você recebe {E}{E}{E}{E}{E}{E} (seis marcadores de energia).\n\nPague {E}{E}{E}{E}: Devolva Baleia-da-maré-etérea para a mão de seu dono.\n\n“Para sobreviver aqui em cima, precisei aprender a saber quando devo usar o meu arpão e quando devo só apreciar a vista.” — Kadhu, aerobaleeiro",
        "usage": "Use Aethertide Whale para acumular grandes quantidades de energia e escapar de situações perigosas devolvendo-a para sua mão.",
        "type": "Criatura",
        "image": "https://cards.scryfall.io/large/front/a/a/aa826070-9adc-4faa-a3ec-3e201ca5f295.jpg?1562935283"
    },
    {
        "name": "Aethergeode Miner",
        "description": "Toda vez que Mineradora do Geodo Etéreo atacar, você ganha {E}{E} (dois marcadores de energia).\n\nPague {E}{E}: Exile Mineradora do Geodo Etéreo e, em seguida, devolva-a ao campo de batalha sob o controle de seu dono.",
        "usage": "Use Aethergeode Miner para gerar energia e evitar remoções, exilando e retornando ao campo de batalha conforme necessário.",
        "type": "Criatura",
        "image": "https://cards.scryfall.io/large/front/b/3/b3bcc07d-8110-4447-94a2-05a228659807.jpg?1562937419"
    },
    {
        "name": "Aethersphere Harvester",
        "description": "Voar\n\nQuando Segadeira da Eteresfera entra no campo de batalha, você ganha {E}{E} (dois marcadores de energia).\n\nPague {E}: Segadeira da Eteresfera ganha vínculo com a vida até o final do turno.\n\nTripular 1 (Vire qualquer número de criaturas que você controla com total de poder igual ou superior a 1: Este Veículo se torna uma criatura artefato até o final do turno.)",
        "usage": "Use Aethersphere Harvester para gerar energia e ganhar vida com facilidade em decks baseados em veículos.",
        "type": "Artefato",
        "image": "https://cards.scryfall.io/large/front/3/0/30aecb2e-cedb-4811-9bf7-a81384e8a82e.jpg?1562906387"
    },
    {
        "name": "Bident of Thassa",
        "description": "Toda vez que uma criatura que você controla causar dano de combate a um jogador, você pode comprar um card.\n\n{1}{U}, {T}: As criaturas que seus oponentes controlam atacam neste turno se estiverem aptas.\n\n“As vontades dos mortais mudam como o vai e vem das marés.”",
        "usage": "Use Bident of Thassa para gerar card advantage com criaturas evasivas e forçar seus oponentes a ataques desfavoráveis.",
        "type": "Artefato",
        "image": "https://cards.scryfall.io/large/front/9/d/9d223fd5-88dd-4232-ad8d-a19df264230d.jpg?1703743731"
    },
    {
        "name": "Grenzo, Havoc Raiser",
        "description": "Toda vez que uma criatura que você controla causar dano de combate a um jogador, escolha uma —\n\n• Instigue uma criatura alvo que aquele jogador controla.\n\n• Exile o card do topo do grimório daquele jogador. Até o final do turno, você pode conjurar aquele card, e pode gastar mana como se fosse de qualquer cor para conjurá-lo.\n\n“Você queima. Eu pilho.”",
        "usage": "Use Grenzo, Havoc Raiser para criar caos no campo de batalha, obrigando o oponente a atacar ou roubando cartas de seu grimório.",
        "type": "Criatura",
        "image": "https://cards.scryfall.io/large/front/5/f/5fc99c9d-66f5-4858-91f7-425d4248a0b3.jpg?1712354436"
    },
    {
        "name": "Scurry of Gremlins",
        "description": "Quando Fuga dos Gremlins entrar no campo de batalha, crie duas fichas de criatura Gremlin vermelha 1/1. Em seguida, você ganha uma quantidade de {E} (marcadores de energia) igual ao número de criaturas que você controla.\n\nPague {E}{E}{E}{E}: As criaturas que você controla recebem +1/+0 e ganham ímpeto até o final do turno.\n\nUm sopro de éter faz a horda sair de seu esconderijo.",
        "usage": "Use Scurry of Gremlins para encher o campo com criaturas e ganhar energia rapidamente, fortalecendo seu exército com ímpeto.",
        "type": "Encantamento",
        "image": "https://cards.scryfall.io/large/front/3/a/3a828530-67df-487d-9ae7-7f9054877172.jpg?1718707277"
    },
    {
        "name": "Brudiclad, Telchor Engineer",
        "description": "As fichas de criatura que você controla têm ímpeto.\n\nNo início do combate no seu turno, crie uma ficha de criatura artefato azul 2/1 do tipo Phyrexian Myr. Depois, você pode escolher uma ficha que você controla. Se fizer isso, cada outra ficha que você controla se torna uma cópia daquela ficha.",
        "usage": "Use Brudiclad, Telchor Engineer para transformar suas fichas em poderosas cópias e dar ímpeto a todas elas.",
        "type": "Artefato",
        "image": "https://cards.scryfall.io/large/front/2/5/25eff27a-eb58-4a95-b2df-4a341cf9bef6.jpg?1599707883"
    },
    {
        "name": "Wayfarer's Bauble",
        "description": "{2}, {T}, sacrifique Bijuteria do Viajante: Procure em seu grimório um card de terreno básico, coloque-o no campo de batalha virado e depois embaralhe.",
        "usage": "Use Wayfarer's Bauble para acelerar a obtenção de terrenos e garantir que você nunca fique sem mana.",
        "type": "Artefato",
        "image": "https://cards.scryfall.io/large/front/b/2/b2bb62dd-8991-4d73-9e4e-05100a36bc0d.jpg?1703748257"
    },
    {
        "name": "Swords to Plowshares",
        "description": "Exile a criatura alvo. Seu controlador ganha vida igual ao poder dela.\n\n“O arco da minha lâmina traçou um caminho de luz para a paz que virá em seguida.”",
        "usage": "Use Swords to Plowshares para exilar as criaturas mais poderosas do oponente, enfraquecendo sua defesa.",
        "type": "Mágica instantânea",
        "image": "https://cards.scryfall.io/large/front/b/1/b16321b6-3e28-424b-ac72-038cc4ed6458.jpg?1726284598"
    },
    {
        "name": "Hourglass of the Lost",
        "description": "{T}: Adicione {W}. Coloque um marcador de tempo em Hourglass of the Lost.\n\n{T}, Remova X marcadores de tempo de Hourglass of the Lost e exile-a: Devolva cada card de permanente que não seja terreno com valor de mana X do seu cemitério para o campo de batalha. Ative esta habilidade apenas como feitiço.",
        "usage": "Use Hourglass of the Lost para recuperar permanentes importantes do seu cemitério e reestabelecer sua presença no campo.",
        "type": "Artefato",
        "image": "https://cards.scryfall.io/large/front/1/5/15a5bb8f-cfc5-4afa-870d-a7a7117929b2.jpg?1717189817"
    },
    {
        "name": "Myr Battlesphere",
        "description": "Quando Esfera de Batalha Myr entrar no campo de batalha, crie quatro fichas de criatura artefato Myr incolor 1/1.\n\nToda vez que Esfera de Batalha Myr ataca, você pode virar X Myr desvirados que você controla. Se fizer isso, Esfera de Batalha Myr receberá +X/+0 até o final do turno e causará X pontos de dano ao jogador ou planeswalker que ela estiver atacando.",
        "usage": "Use Myr Battlesphere para criar um grande exército de Myrs e causar dano massivo ao oponente com sua habilidade de ataque.",
        "type": "Artefato",
        "image": "https://cards.scryfall.io/large/front/2/2/2256b36f-5627-4beb-9600-46e75b1b5459.jpg?1682011602"
    },
    {
        "name": "Razorfield Ripper",
        "description": "Toda vez que Razorfield Ripper ou a criatura equipada atacar, você ganha {E} (um marcador de energia), e ela recebe +X/+X até o final do turno, onde X é a quantidade de {E} que você tem.\n\nReconfigurar — Pague {2} ou {E}{E}{E}. (Pague {2} ou {E}{E}{E}: Anexe à criatura alvo que você controla; ou desanexe de uma criatura. Reconfigurar apenas como feitiço. Enquanto anexado, isso não é uma criatura.)",
        "usage": "Use Razorfield Ripper para aumentar o poder de sua criatura equipada e gerar energia rapidamente.",
        "type": "Artefato",
        "image": "https://cards.scryfall.io/large/front/2/d/2dc5aa4f-90c0-4a14-8a26-33780c7366c8.jpg?1717189826"
    },
    {
        "name": "Battlefield Forge",
        "description": "{T}: Adicione {C}.\n\n{T}: Adicione {R} ou {W}. Battlefield Forge causa 1 ponto de dano a você.\n\n“À medida que as minas de Terisiare secaram, a sucata metálica tornou-se cada vez mais abundante.” —A Guerra das Antiguidades",
        "usage": "Use Battlefield Forge para obter mana vermelha ou branca com uma leve penalidade, acelerando seu jogo.",
        "type": "Terreno",
        "image": "https://cards.scryfall.io/large/front/b/c/bc6c3170-9e84-46ea-8311-911145f9c48a.jpg?1712354920"
    },
    {
        "name": "Azorius Chancery",
        "description": "Azorius Chancery entra virado.\n\nQuando Azorius Chancery entrar no campo de batalha, devolva um terreno que você controla para a mão de seu dono.\n\n{T}: Adicione {W}{U}.",
        "usage": "Use Azorius Chancery para gerar mana azul e branca enquanto ajusta sua base de terrenos.",
        "type": "Terreno",
        "image": "https://cards.scryfall.io/large/front/5/0/50ef0ac3-e911-4d67-a751-8d86160ae843.jpg?1726285357"
    },
    {
        "name": "Izzet Boilerworks",
        "description": "Izzet Boilerworks entra virado.\n\nQuando Izzet Boilerworks entrar no campo de batalha, devolva um terreno que você controla para a mão de seu dono.\n\n{T}: Adicione {U}{R}.",
        "usage": "Use Izzet Boilerworks para gerar mana azul e vermelha, ajustando sua base de terrenos.",
        "type": "Terreno",
        "image": "https://cards.scryfall.io/large/front/b/f/bfac9395-7ca5-48dd-ab83-7c26ada12f61.jpg?1712355049"
    },
    {
        "name": "Salvation Colossus",
        "description": "Voar, vigilância, atropelar\n\nToda vez que você atacar, outras criaturas que você controla recebem +2/+2 e ganham indestrutível até o final do turno.\n\nDesenterrar — Pague oito {E}. (Pague oito marcadores de energia: Devolva este card do seu cemitério ao campo de batalha. Ele ganha ímpeto. Exile-o no início do próximo passo final ou se ele deixar o campo de batalha. Desenterrar apenas como feitiço.)",
        "usage": "Use Salvation Colossus para fortalecer seu exército de criaturas e dominar o campo de batalha com poder e resiliência.",
        "type": "Artefato",
        "image": "https://cards.scryfall.io/large/front/3/8/3842803c-2d51-4ee0-88c3-800e2948d32c.jpg?1717189827"
    },
    {
        "name": "Talisman of Conviction",
        "description": "{T}: Adicione {C}.\n\n{T}: Adicione {R} ou {W}. Talisman of Conviction causa 1 ponto de dano a você.\n\n“O sol afasta a escuridão todas as manhãs. Eu também me levantarei com tal certeza.” —Huatli",
        "usage": "Use Talisman of Conviction para gerar mana vermelha ou branca rapidamente, mesmo com um pequeno custo de vida.",
        "type": "Artefato",
        "image": "https://cards.scryfall.io/large/front/b/0/b0ae2f4d-c0c6-486f-94f6-2375888fcc34.jpg?1706241094"
    },
    {
        "name": "Generatório Izzet",
        "description": "Se você receberia um ou mais {E} (marcadores de energia), você recebe, em vez disso, aquela quantidade mais um {E}.\n\n{T}: Compre um card. Ative somente se tiver pago ou perdido quatro ou mais {E} neste turno.\n\nO uso do capacete é obrigatório. O uso de capa isolante não é obrigatório, mas é altamente recomendado.",
        "usage": "Use Generatório Izzet para obter mais energia e aumentar a eficiência de seus turnos, comprando cartas quando necessário.",
        "type": "Artefato",
        "image": "https://cards.scryfall.io/large/front/7/9/79b72c54-2a11-477f-bf0c-b806535205e5.jpg?1718706665"
    },
    {
        "name": "Glimmer of Genius",
        "description": "Use vidência 2 e depois compre dois cards. Você recebe {E}{E} (dois marcadores de energia).\n\nOs criadores vivem para aquele momento de inspiração: precioso, profundo, perfeito.",
        "usage": "Use Glimmer of Genius para melhorar sua mão e ganhar energia ao mesmo tempo, acelerando suas jogadas.",
        "type": "Mágica instantânea",
        "image": "https://cards.scryfall.io/large/front/a/c/acb5b520-362a-4a54-abc0-88650b7899cc.jpg?1562741316"
    },
    {
        "name": "Tezzeret's Gambit",
        "description": "({U/P} pode ser pago com {U} ou 2 pontos de vida.)\n\nCompre dois cards, depois prolifere. (Escolha qualquer número de permanentes e/ou jogadores, depois dê a cada um outro marcador de cada tipo já presente.)",
        "usage": "Use Tezzeret's Gambit para comprar cartas e proliferar, ampliando sua vantagem no campo de batalha.",
        "type": "Feitiço",
        "image": "https://cards.scryfall.io/large/front/1/5/15b2188f-06c8-4771-bba6-e6fc531ebc9a.jpg?1712354220"
    },
    {
        "name": "Furycalm Snarl",
        "description": "Quando Furycalm Snarl entrar no campo de batalha, você pode revelar um card de Montanha ou Planície da sua mão. Se não fizer isso, Furycalm Snarl entra no campo de batalha virado.\n\n{T}: Adicione {R} ou {W}.\n\nUm locus fervilhante de raiva reverente.",
        "usage": "Use Furycalm Snarl para gerar mana vermelha ou branca sem perder velocidade, se tiver a carta correta na mão.",
        "type": "Terreno",
        "image": "https://cards.scryfall.io/large/front/b/d/bdb27a86-0fbd-4123-9c8e-630c855d5e9e.jpg?1706241163"
    },
    {
        "name": "Midnight Clock",
        "description": "{T}: Adicione {U}.\n\n{2}{U}: Coloque um marcador de hora em Midnight Clock.\n\nNo início de cada manutenção, coloque um marcador de hora em Midnight Clock.\n\nQuando o décimo segundo marcador de hora for colocado em Midnight Clock, embaralhe sua mão e cemitério no seu grimório, depois compre sete cards. Exile Midnight Clock.",
        "usage": "Use Midnight Clock para garantir uma renovação completa de sua mão, enquanto acumula recursos lentamente durante o jogo.",
        "type": "Artefato",
        "image": "https://cards.scryfall.io/large/front/0/b/0b3c33b7-5b15-4b61-bfd6-1ffa823eb28a.jpg?1712354156"
    },
    {
        "name": "Farewell",
        "description": "Escolha um ou mais —\n\n• Exile todos os artefatos.\n\n• Exile todas as criaturas.\n\n• Exile todos os encantamentos.\n\n• Exile todos os cemitérios.",
        "usage": "Use Farewell para limpar o campo de batalha de ameaças e restaurar o controle da partida.",
        "type": "Feitiço",
        "image": "https://cards.scryfall.io/large/front/1/1/114d2180-093b-4838-97ad-badbc8ee50b0.jpg?1706240579"
    },
    {
        "name": "Aether Refinery",
        "description": "Se você receberia um ou mais {E} (marcadores de energia), você recebe o dobro dessa quantidade de {E}.\n\n{T}: Você recebe {E}, depois você pode pagar uma quantidade de {E}. Se fizer isso, crie uma ficha de criatura Aetherborn preta X/X, onde X é a quantidade de {E} paga desta maneira.\n\nA invenção de Avaati Vya estabilizou o éter bruto, mas nem ela sabia que isso também criaria vida.",
        "usage": "Use Aether Refinery para dobrar sua produção de energia e criar criaturas poderosas no campo de batalha.",
        "type": "Artefato",
        "image": "https://cards.scryfall.io/large/front/9/4/94553de8-52e8-4209-919a-cdf9289af116.jpg?1718364522"
    },
    {
        "name": "Sphinx of the Revelation",
        "description": "Voar, vínculo com a vida\n\nToda vez que você ganhar vida, você ganha essa quantidade de {E} (marcadores de energia).\n\n{W}{U}{U}, {T}, Pague X {E}: Compre X cards.\n\nCriado a partir da lei absoluta. Executor da ordem absoluta.",
        "usage": "Use Sphinx of the Revelation para acumular energia ao ganhar vida e usá-la para comprar cartas, aumentando sua vantagem.",
        "type": "Artefato",
        "image": "https://cards.scryfall.io/large/front/c/d/cde649e6-1582-4f77-8cff-dcc477140d67.jpg?1717189974"
    },
    {
        "name": "Unstable Amulet",
        "description": "Quando Amuleto Instável entrar no campo de batalha, você recebe {E}{E} (dois marcadores de energia).\n\nToda vez que você conjura uma mágica vinda de qualquer lugar que não seja sua mão, Amuleto Instável causa 1 ponto de dano a cada oponente.\n\n{T}, pague {E}{E}: Exile o card do topo de seu grimório. Você pode jogá-lo até exilar outro card com Amuleto Instável.",
        "usage": "Use Unstable Amulet para gerar energia e causar dano enquanto conjura magias de outras zonas que não sua mão.",
        "type": "Artefato",
        "image": "https://cards.scryfall.io/large/front/d/2/d2ce621b-c484-436c-9e07-3398994b39ca.jpg?1718704238"
    },
    {
        "name": "Amped Raptor",
        "description": "Iniciativa\n\nQuando Raptor Amplificado entra no campo de batalha, você recebe {E}{E} (dois marcadores de energia). Em seguida, se você o tiver conjurado de sua mão, exile cards do topo de seu grimório até exilar um card não de terreno. Você pode conjurar aquele card pagando uma quantidade de {E} igual ao valor de mana dele em vez de pagar seu custo de mana.",
        "usage": "Use Amped Raptor para gerar energia e conjurar cards do seu grimório sem pagar o custo de mana.",
        "type": "Criatura",
        "image": "https://cards.scryfall.io/large/front/4/a/4a0e26c7-11cd-408e-bb77-a11ebf8a2d1b.jpg?1718702917"
    },
    {
        "name": "Bespoke Battlewagon",
        "description": "{T}: Você recebe {E}{E} (dois marcadores de energia).\n\n{T}, pague {E}{E}: Vire a criatura alvo.\n\n{T}, pague {E}{E}{E}: Compre um card.\n\nPague {E}{E}{E}{E}: Vagão de Batalha Personalizado torna-se uma criatura artefato até o final do turno.\n\nTripular 4.",
        "usage": "Use Bespoke Battlewagon para gerar energia e ativar suas habilidades de controle e card draw.",
        "type": "Artefato",
        "image": "https://cards.scryfall.io/large/front/4/3/435db414-5c26-4b04-ad16-6da06902ba9d.jpg?1718700159"
    },
    {
        "name": "Roil Cartographer",
        "description": "Aterragem — Toda vez que um terreno entrar no campo de batalha sob seu controle, você recebe {E} (um marcador de energia).\n\n{T}, pague seis {E}: Compre três cards.\n\n“O mundo muda constantemente, mas isso não quer dizer que não se possa mapeá-lo. Nossos mapas também precisam mudar.”",
        "usage": "Use Roil Cartographer para aproveitar a sinergia com terrenos e obter card draw massivo ao acumular energia.",
        "type": "Criatura",
        "image": "https://cards.scryfall.io/large/front/2/0/20d5e311-c302-4c8b-9c1e-48aa94e4d097.jpg?1718700754"
    },
    {
        "name": "Solar Transformer",
        "description": "Transformador Solar entra no campo de batalha virado.\n\nQuando Transformador Solar entra no campo de batalha, você recebe {E}{E}{E} (três marcadores de energia).\n\n{T}: Adicione {C}.\n\n{T}, pague {E}: Adicione um mana de qualquer cor.",
        "usage": "Use Solar Transformer para gerar energia e converter essa energia em mana de qualquer cor, ajudando a flexibilidade do seu deck.",
        "type": "Artefato",
        "image": "https://cards.scryfall.io/large/front/d/4/d4eb8c17-5950-40a1-8660-801d78d74602.jpg?1718707699"
    },
    {
        "name": "Shivan Reef",
        "description": "{T}: Adicione {C}.\n\n{T}: Adicione {U} ou {R}. Shivan Reef causa 1 ponto de dano a você.\n\nOs mares ferventes ao redor de Shiv forneciam uma camada de proteção bem-vinda para o Mana Rig recuperado.",
        "usage": "Use Shivan Reef para gerar mana azul ou vermelho rapidamente, com um custo de dano mínimo.",
        "type": "Terreno",
        "image": "https://cards.scryfall.io/large/front/9/5/951f28dd-40ff-43f0-af1c-6631b5845309.jpg?1712355128"
    },
    {
        "name": "Talisman of Progress",
        "description": "{T}: Adicione {C}.\n\n{T}: Adicione {W} ou {U}. Talisman of Progress causa 1 ponto de dano a você.",
        "usage": "Use Talisman of Progress para gerar mana azul ou branca de forma eficiente, aceitando um pequeno custo de vida.",
        "type": "Artefato",
        "image": "https://cards.scryfall.io/large/front/e/3/e3238608-a302-4a42-bd8a-5412e4126b14.jpg?1706241103"
    },
    {
        "name": "Command Tower",
        "description": "{T}: Adicione um mana de qualquer cor da identidade de cor do seu comandante.\n\n“É o forte especial meu e do Gribble. Nenhuma das coisas ruins pode nos pegar lá dentro.” —Toby",
        "usage": "Use Command Tower para gerar mana de qualquer cor da identidade de cor do seu comandante sem restrições.",
        "type": "Terreno",
        "image": "https://cards.scryfall.io/large/front/1/2/129d1bbd-83ad-4953-bf6d-b55989b2529c.jpg?1726284539"
    },
    {
        "name": "Combustible Gearhulk",
        "description": "Iniciativa\n\nQuando Gigante Engrenado Combustível entrar no campo de batalha, o oponente alvo pode permitir que você compre três cards. Se ele não fizer isso, você coloca três cards no cemitério, e Gigante Engrenado Combustível causa uma quantidade de dano a esse jogador igual ao valor total de mana desses cards.",
        "usage": "Use Combustible Gearhulk para forçar seu oponente a tomar decisões difíceis, seja deixando você comprar cards ou sofrendo dano direto.",
        "type": "Artefato",
        "image": "https://cards.scryfall.io/large/front/c/8/c80e620e-bece-4c48-9dd6-7bcdacabf521.jpg?1726284948"
    },
    {
        "name": "Jolted Awake",
        "description": "Escolha até um card de artefato ou criatura alvo em seu cemitério. Você recebe {E}{E} (dois marcadores de energia). Em seguida, você pode pagar uma quantidade de {E} igual ao valor de mana daquele card. Se fizer isso, devolva-o de seu cemitério ao campo de batalha.\n\nReciclar {2} ({2}, descarte este card: Compre um card.)",
        "usage": "Use Jolted Awake para devolver criaturas ou artefatos importantes do cemitério ao campo de batalha, aproveitando a energia acumulada.",
        "type": "Feitiço",
        "image": "https://cards.scryfall.io/large/front/c/8/c8ca6501-9e63-446c-aaee-0fbf20464971.jpg?1718699335"
    },
    {
        "name": "Era of Innovation",
        "description": "Toda vez que um artefato ou Artesão entra no campo de batalha sob seu controle, você pode pagar {1}. Se fizer isso, você recebe {E}{E} (dois marcadores de energia).\n\nPague {E}{E}{E}{E}{E}{E}, sacrifique Era da Inovação: Compre três cards.",
        "usage": "Use Era of Innovation para acumular energia com facilidade e, quando necessário, sacrificar para obter uma grande vantagem em card draw.",
        "type": "Encantamento",
        "image": "https://cards.scryfall.io/large/front/a/f/afb03d0e-6567-411e-a1dd-3b4549b0b806.jpg?1562741506"
    },
    {
        "name": "Port Town",
        "description": "Quando Port Town entra no campo de batalha, você pode revelar um card de Planície ou Ilha da sua mão. Se não fizer isso, Port Town entra no campo de batalha virado.\n\n{T}: Adicione {W} ou {U}.",
        "usage": "Use Port Town para gerar mana azul ou branca, com flexibilidade de entrada no campo de batalha.",
        "type": "Terreno",
        "image": "https://cards.scryfall.io/large/front/d/1/d15c035d-1309-4286-a758-07517f323f34.jpg?1690006392"
    },
    {
        "name": "Demolition Field",
        "description": "{T}: Adicione {C}.\n\n{2}, {T}, Sacrifique Demolition Field: Destrua um terreno não básico que um oponente controla. O controlador daquele terreno pode procurar em seu grimório um card de terreno básico, colocá-lo no campo de batalha e depois embaralhar. Você pode fazer o mesmo.",
        "usage": "Use Demolition Field para remover terrenos não básicos problemáticos do oponente e ao mesmo tempo buscar terrenos básicos para você.",
        "type": "Terreno",
        "image": "https://cards.scryfall.io/large/front/4/7/47994cb6-204a-4fbe-a9d4-5798a70c95ab.jpg?1712354968"
    },
    {
        "name": "Mystic Monastery",
        "description": "Mystic Monastery entra virado.\n\n{T}: Adicione {U}, {R}, ou {W}.\n\nQuando perguntaram quantos caminhos levam à iluminação, o monge chutou um monte de areia. “Conte”, ele sorriu, “e então encontre mais grãos.”",
        "usage": "Use Mystic Monastery para garantir mana colorida em decks que utilizam azul, vermelho ou branco.",
        "type": "Terreno",
        "image": "https://cards.scryfall.io/large/front/c/2/c26d3961-cc3f-408a-821e-2d9ea025c51e.jpg?1690006324"
    },
    {
        "name": "Talisman of Creativity",
        "description": "{T}: Adicione {C}.\n\n{T}: Adicione {U} ou {R}. Talisman of Creativity causa 1 ponto de dano a você.\n\n“Ideias boas não levam tempo. Elas precisam de muitas ideias ruins antes.” —Ral Zarek",
        "usage": "Use Talisman of Creativity para acelerar sua curva de mana, obtendo azul ou vermelho com um pequeno custo de vida.",
        "type": "Artefato",
        "image": "https://cards.scryfall.io/large/front/8/e/8ebb2086-3d9c-4322-bd3f-1366a4354578.jpg?1690005858"
    },
    {
        "name": "Coalition Relic",
        "description": "{T}: Adicione um mana de qualquer cor.\n\n{T}: Coloque um marcador de carga em Coalition Relic.\n\nNo início da sua fase principal, remova todos os marcadores de carga de Coalition Relic. Adicione um mana de qualquer cor para cada marcador removido desta maneira.",
        "usage": "Use Coalition Relic para armazenar mana e utilizá-lo em turnos críticos, acelerando suas jogadas.",
        "type": "Artefato",
        "image": "https://cards.scryfall.io/large/front/d/a/da8c1dac-3bd5-467b-9a85-d5e25475d631.jpg?1673231594"
    },
    {
        "name": "Burnished Hart",
        "description": "{3}, Sacrifique Burnished Hart: Procure em seu grimório até dois cards de terreno básico, coloque-os no campo de batalha virados e depois embaralhe.\n\nForjado por mãos divinas para vagar pelos reinos mortais.",
        "usage": "Use Burnished Hart para acelerar seu desenvolvimento de terrenos, garantindo mais recursos para o final do jogo.",
        "type": "Artefato",
        "image": "https://cards.scryfall.io/large/front/1/8/185660f1-584a-4098-aacd-df50fe5669d5.jpg?1726285290"
    },
    {
        "name": "Whirler Virtuoso",
        "description": "Quando Virtuose dos Turbilinos entra no campo de batalha, você recebe {E}{E}{E} (três marcadores de energia).\n\nPague {E}{E}{E}: Crie uma ficha de criatura artefato incolor 1/1 do tipo Tóptero com voar.\n\nAs primeiras batidas hesitantes das asas são como música para sua alma.",
        "usage": "Use Whirler Virtuoso para gerar fichas de Tóptero com voar, acumulando energia e aumentando sua presença aérea no campo de batalha.",
        "type": "Criatura",
        "image": "https://cards.scryfall.io/large/front/f/3/f363456e-7bd7-4872-8a15-1346a55aa7c4.jpg?1562745584"
    },
    {
        "name": "Arcane Signet",
        "description": "{T}: Adicione um mana de qualquer cor da identidade de cor do seu comandante.\n\nÀs vezes, a segurança é um lugar. Às vezes, é uma pessoa. Às vezes, é uma lembrança tangível de que, mesmo na escuridão, a esperança persiste.",
        "usage": "Use Arcane Signet para produzir mana em qualquer cor que corresponda à identidade do seu comandante.",
        "type": "Artefato",
        "image": "https://cards.scryfall.io/large/front/2/1/211a1d86-7257-4621-ae05-c2b235c063f0.jpg?1726284514"
    },
    {
        "name": "Decoction Module",
        "description": "Toda vez que uma criatura entra no campo de batalha sob seu controle, você recebe {E} (um marcador de energia).\n\n{4}, {T}: Devolva a criatura alvo que você controla para a mão de seu dono.",
        "usage": "Use Decoction Module para acumular energia com a entrada de criaturas no campo e para proteger criaturas importantes retornando-as à sua mão.",
        "type": "Artefato",
        "image": "https://cards.scryfall.io/large/front/5/4/5493b4ef-d610-477d-aa2d-485221a36aff.jpg?1562735805"
    },
    {
        "name": "Aether Hub",
        "description": "Quando Núcleo do Éter entra no campo de batalha, você recebe {E} (um marcador de energia).\n\n{T}: Adicione {C} à sua reserva de mana.\n\n{T}, Pague {E}: Adicione um mana de qualquer cor à sua reserva de mana.\n\nEle alimenta os sonhos de Ghirapur.",
        "usage": "Use Aether Hub para flexibilidade de mana ao acumular energia e utilizá-la para gerar mana de qualquer cor.",
        "type": "Terreno",
        "image": "https://cards.scryfall.io/large/front/5/a/5ab752a1-43dd-448c-9a0d-d3bbe1860b7d.jpg?1562736111"
    },
    {
        "name": "Castle Vantress",
        "description": "Castle Vantress entra virado, a menos que você controle uma Ilha.\n\n{T}: Adicione {U}.\n\n{2}{U}{U}, {T}: Use vidência 2.\n\nSem o conhecimento de Vantress, o reino se perderia na escuridão.",
        "usage": "Use Castle Vantress para vidência e controle do seu deck, filtrando cartas desnecessárias nos turnos seguintes.",
        "type": "Terreno",
        "image": "https://cards.scryfall.io/large/front/d/e/dead85f7-865c-4f7d-ad6c-014d4e90f8be.jpg?1726285380"
    },
    {
        "name": "Skyclave Apparition",
        "description": "Quando Aparição do Enclave Celeste entrar no campo de batalha, exile até uma permanente alvo com custo de mana convertido igual ou inferior a 4 que você não controla e que não seja terreno nem ficha.\n\nQuando Aparição do Enclave Celeste deixar o campo de batalha, o dono do card exilado cria uma ficha de criatura azul X/X do tipo Ilusão, sendo X o custo de mana convertido do card exilado.",
        "usage": "Use Skyclave Apparition para remover ameaças importantes do oponente, exilando permanentes de baixo custo sem gerar fichas.",
        "type": "Criatura",
        "image": "https://cards.scryfall.io/large/front/c/7/c730cb59-9c5c-47f2-82be-593f3cd92af5.jpg?1646138756"
    },
    {
        "name": "Prairie Stream",
        "description": "({T}: Adicione {W} ou {U}.)\n\nPrairie Stream entra virado, a menos que você controle dois ou mais terrenos básicos.\n\nO continente de Ondu é um vasto planalto cortado por trincheiras profundas e rios sinuosos.",
        "usage": "Use Prairie Stream para obter acesso a mana branca e azul, especialmente útil em decks com foco em terrenos básicos.",
        "type": "Terreno",
        "image": "https://cards.scryfall.io/large/front/c/6/c649f06f-bad5-499b-b70c-47e52cb4a234.jpg?1706241212"
    },
    {
        "name": "Temple of Epiphany",
        "description": "Templo da Epifania entra virado.\n\nQuando Templo da Epifania entrar no campo de batalha, use vidência 1.\n\n{T}: Adicione {U} ou {R}.",
        "usage": "Use Temple of Epiphany para ajustar sua mão com vidência enquanto gera mana azul ou vermelho.",
        "type": "Terreno",
        "image": "https://cards.scryfall.io/large/front/f/a/faf8808a-6a28-419f-a60f-2d1cc4dfa5a7.jpg?1712355168"
    },
    {
        "name": "Solemn Simulacrum",
        "description": "Quando Simulacro Solene entra no campo de batalha, você pode procurar em seu grimório por um card de terreno básico, colocá-lo no campo de batalha virado e depois embaralhar.\n\nQuando Simulacro Solene morrer, você pode comprar um card.",
        "usage": "Use Solemn Simulacrum para acelerar o desenvolvimento de terrenos e obter card advantage ao mesmo tempo.",
        "type": "Artefato",
        "image": "https://cards.scryfall.io/large/front/9/1/916e0c89-5614-4022-b095-9c714c476d13.jpg?1726285326"
    },
    {
        "name": "Sol Ring",
        "description": "{T}: Adicione {C}{C}.\n\n“Eu não estou dizendo que tenho certeza de que é uma armadilha. Estou apenas dizendo que ele não estava lá ontem e tenho quase certeza de que o ouvi sussurrar meu nome. Se você está tão curioso, você toca.” —Angus, explorador sobrevivente",
        "usage": "Use Sol Ring para gerar mana incolor rapidamente, acelerando suas jogadas mais poderosas no início do jogo.",
        "type": "Artefato",
        "image": "https://cards.scryfall.io/large/front/8/2/82f1a8a3-7fdb-49a3-9649-b5c0b4755cd5.jpg?1726284526"
    },
    {
        "name": "Temple of Enlightenment",
        "description": "Templo da Iluminação entra virado.\n\nQuando Templo da Iluminação entrar no campo de batalha, use vidência 1.\n\n{T}: Adicione {W} ou {U}.",
        "usage": "Use Temple of Enlightenment para ajustar sua mão com vidência e obter acesso a mana branca ou azul.",
        "type": "Terreno",
        "image": "https://cards.scryfall.io/large/front/3/d/3dbee324-5df0-470e-96fb-1f87f377cdfc.jpg?1726285528"
    },
    {
        "name": "Frostboil Snarl",
        "description": "Quando Frostboil Snarl entra no campo de batalha, você pode revelar um card de Ilha ou Montanha da sua mão. Se não fizer isso, Frostboil Snarl entra virado.\n\n{T}: Adicione {U} ou {R}.\n\nUma tempestade fumegante de fogo gelado.",
        "usage": "Use Frostboil Snarl para gerar mana azul ou vermelho, garantindo flexibilidade ao jogar com terrenos temáticos.",
        "type": "Terreno",
        "image": "https://cards.scryfall.io/large/front/5/2/5229c275-04aa-4168-9eb3-6c04f9501fd1.jpg?1712355032"
    },
    {
        "name": "Austere Command",
        "description": "Escolha dois —\n\n• Destrua todos os artefatos.\n\n• Destrua todos os encantamentos.\n\n• Destrua todas as criaturas com valor de mana 3 ou menos.\n\n• Destrua todas as criaturas com valor de mana 4 ou mais.",
        "usage": "Use Austere Command para remover ameaças específicas com flexibilidade, ajustando-se ao estado do campo de batalha.",
        "type": "Feitiço",
        "image": "https://cards.scryfall.io/large/front/a/3/a31ffc9e-d21b-4a8f-ac67-695e38e09e3b.jpg?1706240553"
    },
    {
        "name": "Coveted Jewel",
        "description": "Quando Joia Cobiçada entra no campo de batalha, compre três cards.\n\n{T}: Adicione três manas de qualquer cor.\n\nToda vez que uma ou mais criaturas que um oponente controla atacarem você e não forem bloqueadas, aquele jogador compra três cards e ganha o controle de Joia Cobiçada. Desvire-a.",
        "usage": "Use Coveted Jewel para gerar uma grande quantidade de mana e comprar cartas, mas esteja atento para não perder o controle da Joia.",
        "type": "Artefato",
        "image": "https://cards.scryfall.io/large/front/2/7/278e810d-8a4f-4841-a221-39a24b034355.jpg?1682209987"
    },
    {
        "name": "Goldspan Dragon",
        "description": "Voar, ímpeto\n\nToda vez que Dragão Dourado atacar ou se tornar alvo de uma mágica, crie uma ficha de Tesouro.\n\nTesouros que você controla têm “{T}, Sacrifique este artefato: Adicione dois manas de qualquer cor.”",
        "usage": "Use Goldspan Dragon para criar Tesouros que geram mais mana e possibilitar jogadas explosivas, especialmente em decks de Tesouro.",
        "type": "Criatura",
        "image": "https://cards.scryfall.io/large/front/9/d/9d914868-9000-4df2-a818-0ef8a7f636ae.jpg?1665343456"
    },
    {
        "name": "Mystic Gate",
        "description": "{T}: Adicione {C}.\n\n{W/U}, {T}: Adicione {W}{W}, {W}{U}, ou {U}{U}.\n\nO portão de cada kithkin doun é uma armadilha astuta, destinada a derramar visitantes em um calabouço do qual não há escapatória.",
        "usage": "Use Mystic Gate para flexibilidade em gerar mana azul e branco em combinações diversas, garantindo suporte para cartas exigentes.",
        "type": "Terreno",
        "image": "https://cards.scryfall.io/large/front/6/f/6f99714f-43bc-4048-b650-97dfef4c10fe.jpg?1690006311"
    },
    {
        "name": "Akroma's Will",
        "description": "Escolha uma. Se você controlar um comandante ao conjurar esta mágica, você pode escolher as duas em vez de uma.\n\n• As criaturas que você controla ganham voar, vigilância e golpe duplo até o final do turno.\n\n• As criaturas que você controla ganham vínculo com a vida, indestrutível e proteção contra todas as cores até o final do turno.",
        "usage": "Use Akroma's Will para impulsionar suas criaturas com múltiplas habilidades poderosas, seja como ofensiva ou defesa, especialmente quando controlando um comandante.",
        "type": "Mágica instantânea",
        "image": "https://cards.scryfall.io/large/front/6/0/608cdbdb-6f7e-438a-bab0-0e7782435f0f.jpg?1698988079"
    },
    {
        "name": "Adarkar Wastes",
        "description": "{T}: Adicione {C}.\n\n{T}: Adicione {W} ou {U}. Wastes de Adarkar causa 1 ponto de dano a você.\n\nDeixado estéril pela Guerra dos Irmãos, ele se mantém como um lembrete marcante do provável destino de Dominária se a Coalizão falhar.",
        "usage": "Use Adarkar Wastes para gerar mana azul ou branco com um leve custo de vida, sendo útil em decks que demandam cores variadas.",
        "type": "Terreno",
        "image": "https://cards.scryfall.io/large/front/3/9/395ed6cd-8027-4b11-a1ce-5f0bbbd2a50b.jpg?1726285347"
    }
];

export { deck, replaceSymbolsWithImages };
