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
        "usage": "Use Planície para gerar mana branca, essencial para conjurar magias e criaturas brancas no campo de batalha.",
        "type": "Terreno",
        "image": "https://cards.scryfall.io/normal/front/1/b/1b499b37-efaf-4484-95e8-a70a9778c804.jpg?1726286908"
    },
    {
        "name": "Island",
        "description": "Terreno Básico — Ilha\n\n(Adicione {U} à sua reserva de mana.)",
        "usage": "Use Ilha para gerar mana azul, importante para conjurar magias e criaturas azuis no campo de batalha.",
        "type": "Terreno",
        "image": "https://cards.scryfall.io/normal/front/9/4/947702ca-d065-4368-9f26-f859d4642cb6.jpg?1726286915"
    },
    {
        "name": "Mountain",
        "description": "Terreno Básico — Montanha\n\n(Adicione {R} à sua reserva de mana.)",
        "usage": "Use Montanha para gerar mana vermelha, essencial para conjurar magias e criaturas vermelhas no campo de batalha.",
        "type": "Terreno",
        "image": "https://cards.scryfall.io/normal/front/a/c/accb56f0-3903-4894-86f0-3965162064d4.jpg?1726286930"
    },
    {
        "name": "Legion Loyalty",
        "description": "As criaturas que você controla têm miríade. (Toda vez que uma criatura com miríade ataca, para cada oponente além do jogador defensor, você pode criar uma ficha que seja uma cópia daquela criatura que está virada e atacando aquele jogador ou um planeswalker que ele controla. Exile as fichas no final do combate.)",
        "usage": "Use Legion Loyalty para obter vantagem no campo de batalha em situações relacionadas a Modern Horizons 3 Commander.",
        "type": "Encantamento",
        "image": "https://cards.scryfall.io/normal/front/2/3/237d2374-9e7c-40c0-9120-82f7e2ed2f67.jpg?1656016837"
    },
    {
        "name": "Filigree Racer",
        "description": "Acelerador Artefato — Veículo\n\nTripular 2 (Vire quaisquer criaturas que você controla com poder total 2 ou mais: Este artefato torna-se uma criatura até o final do turno.)",
        "usage": "Use Filigree Racer como um veículo rápido que pode ser facilmente tripulado e gerar pressão no campo de batalha com poder e resistência consideráveis.",
        "type": "Artefato",
        "image": "https://cards.scryfall.io/normal/front/a/0/a00c289a-646c-4b4c-b028-fa7783adc8f3.jpg?1717189885"
    },
    {
        "name": "Localized Destruction",
        "description": "Localized Destruction é uma carta do set Modern Horizons 3 Commander.",
        "usage": "Use Localized Destruction para obter vantagem no campo de batalha em situações relacionadas a Modern Horizons 3 Commander.",
        "type": "Feitiço",
        "image": "https://cards.scryfall.io/normal/front/d/d/dd64fe7f-2c06-42f8-96ac-47e4c38dc149.jpg?1717189819"
    },
    {
        "name": "Aetherworks Marvel",
        "description": "Toda vez que uma permanente que você controla for colocada no cemitério, ganhe um ponto de energia.\n\nGaste seis pontos de energia: Olhe as seis cartas do topo do seu grimório. Você pode jogar uma mágica dentre elas sem pagar o custo de mana. Coloque as cartas restantes no fundo do seu grimório em uma ordem aleatória.",
        "usage": "Aetherworks Marvel é ideal para decks que geram muita energia. Use sua habilidade para jogar magias poderosas de graça, especialmente em momentos decisivos da partida.",
        "type": "Artefato",
        "image": "https://cards.scryfall.io/normal/front/8/8/884f6948-3e03-48c6-8be2-6f2539386c9d.jpg?171795087"
    },
    {
        "name": "Angel of Invention",
        "description": `Voar, vigilância, vínculo com a vida
  
  Fabricar 2 (Quando esta criatura entrar no campo de batalha, coloque dois marcadores +1/+1 nela ou crie duas fichas de criatura artefato incolor 1/1 do tipo Servo.)
  
  As outras criaturas que você controla recebem +1/+1.`,
        "usage": "O Anjo da Invenção é extremamente versátil. Use-o para fortalecer seu exército de criaturas pequenas ou ganhar vida com ataques poderosos.",
        "type": "Criatura",
        "image": "https://cards.scryfall.io/normal/front/f/3/f3920f7d-8559-40f8-95be-860c16bf7700.jpg?1576380724"
    },
    {
        "name": "Confiscation Coup",
        "description": "Escolha o artefato ou a criatura alvo. Você recebe {E}{E}{E}{E} (quatro marcadores de energia) e, em seguida, pode pagar uma quantidade de {E} igual ao custo de mana convertido daquela permanente. Se fizer isso, ganhe o controle dela.\n" +
            "\n" +
            "“Cidadãos, não resistam. Isso é para sua própria segurança. Tezzeret ordena que vocês entreguem suas invenções. Imediatamente.”",
        "usage": "Use Confiscation Coup para roubar criaturas importantes do seu oponente, garantindo uma vantagem decisiva no campo de batalha.",
        "type": "Feitiço",
        "image": "https://cards.scryfall.io/large/front/e/e/ee49d612-f36b-4fc3-ae67-0a3d0f4e6b74.jpg?1562745268"
    },
    {
        "name": "Aetherstorm Roc",
        "description": "Voar\n\nToda vez que Aetherstorm Roc ou outra criatura entra no campo de batalha sob seu controle, ganhe um ponto de energia. Sempre que Aetherstorm Roc ataca, você pode gastar energia para colocar um marcador +1/+1 nele.",
        "usage": "Use Aetherstorm Roc em decks focados em sinergia de energia, aproveitando para acumular marcadores +1/+1 enquanto controla o campo de batalha com uma criatura voadora.",
        "type": "Criatura",
        "image": "https://cards.scryfall.io/large/front/b/c/bc9c79c3-cd97-4c6d-b805-ebd921950958.jpg?1562742315"
    },
    {
        "name": "Aethersquall Ancient",
        "description": "Voar\n\nNo início da sua manutenção, você ganha 3 pontos de energia.\n\nPague {8} pontos de energia: Devolva todas as outras criaturas para as mãos de seus donos. Ative esta habilidade apenas quando puder conjurar um feitiço.",
        "usage": "Aethersquall Ancient é ideal para decks que geram muita energia. Use-o para controlar o campo de batalha, devolvendo todas as criaturas para as mãos de seus donos e reiniciando a pressão do seu oponente.",
        "type": "Criatura",
        "image": "https://cards.scryfall.io/large/front/f/5/f525f0e5-b584-4b4f-b68b-b1933da1db27.jpg?1562745682"
    },
    {
        "name": "Blaster Hulk",
        "description": "Esta mágica custa {1} a menos para conjurar para cada {E} (contador de energia) que você pagou ou perdeu neste turno.\n\nÍmpeto\n\nToda vez que Blaster Hulk ataca, você ganha {E}{E} (dois contadores de energia), depois pode pagar oito {E}. Quando fizer isso, Blaster Hulk causa 8 pontos de dano divididos como você desejar entre até oito alvos.",
        "usage": "Blaster Hulk é ideal para decks que geram energia, permitindo que você o conjure por menos mana e cause dano massivo a múltiplos alvos ao acumular energia suficiente.",
        "type": "Criatura",
        "image": "https://cards.scryfall.io/large/front/7/8/7853d27d-e860-42ba-b925-8b57dc451059.jpg?1717189879"
    },
    {
        "name": "Temple of Triumph",
        "description": "Temple of Triumph é uma carta do set Modern Horizons 3 Commander.",
        "usage": "Use Temple of Triumph para obter vantagem no campo de batalha em situações relacionadas a Modern Horizons 3 Commander.",
        "type": "Terreno",
        "image": "https://cards.scryfall.io/large/front/0/7/07e73142-a8c0-4bd5-8ab4-cd10e572a975.jpg?1712355192"
    },
    {
        "name": "Silverquill Lecturer",
        "description": "Silverquill Lecturer é uma carta do set Modern Horizons 3 Commander.",
        "usage": "Use Silverquill Lecturer para obter vantagem no campo de batalha em situações relacionadas a Modern Horizons 3 Commander.",
        "type": "Criatura",
        "image": "https://cards.scryfall.io/large/front/5/3/5360b208-76c0-4757-a78f-723662b3353f.jpg?1717189834"
    },
    {
        "name": "Overclocked Electromancer",
        "description": "Overclocked Electromancer é uma carta do set Modern Horizons 3 Commander.",
        "usage": "Use Overclocked Electromancer para obter vantagem no campo de batalha em situações relacionadas a Modern Horizons 3 Commander.",
        "type": "Criatura",
        "image": "https://cards.scryfall.io/large/front/2/6/2670583a-bbd9-4e99-86d9-97e06227dc2a.jpg?1717189893"
    },
    {
        "name": "Professional Face-Breaker",
        "description": "Professional Face-Breaker é uma carta do set Modern Horizons 3 Commander.",
        "usage": "Use Professional Face-Breaker para obter vantagem no campo de batalha em situações relacionadas a Modern Horizons 3 Commander.",
        "type": "Criatura",
        "image": "https://cards.scryfall.io/large/front/a/a/aa004536-4929-4998-9362-801187a1e1e2.jpg?1651567831"
    },
    {
        "name": "Stone Idol Generator",
        "description": "Stone Idol Generator é uma carta do set Modern Horizons 3 Commander.",
        "usage": "Use Stone Idol Generator para obter vantagem no campo de batalha em situações relacionadas a Modern Horizons 3 Commander.",
        "type": "Artefato",
        "image": "https://cards.scryfall.io/large/front/3/8/38c3f277-7cb7-4722-8e04-db8e9eaeabda.jpg?1717189982"
    },
    {
        "name": "Aurora Shifter",
        "description": "Aurora Shifter é uma carta do set Modern Horizons 3 Commander.",
        "usage": "Use Aurora Shifter para obter vantagem no campo de batalha em situações relacionadas a Modern Horizons 3 Commander.",
        "type": "Criatura",
        "image": "https://cards.scryfall.io/large/front/d/7/d76fd397-64ea-4dca-b901-86ce101cb70e.jpg?1717189836"
    },
    {
        "name": "Conversion Apparatus",
        "description": "Conversion Apparatus é uma carta do set Modern Horizons 3 Commander.",
        "usage": "Use Conversion Apparatus para obter vantagem no campo de batalha em situações relacionadas a Modern Horizons 3 Commander.",
        "type": "Artefato",
        "image": "https://cards.scryfall.io/large/front/7/9/79193ac5-bb36-4055-bb94-d7bc0ed2760b.jpg?1717189980"
    },
    {
        "name": "Gonti's Aether Heart",
        "description": "Gonti's Aether Heart é uma carta do set Modern Horizons 3 Commander.",
        "usage": "Use Gonti's Aether Heart para obter vantagem no campo de batalha em situações relacionadas a Modern Horizons 3 Commander.",
        "type": "Artefato",
        "image": "https://cards.scryfall.io/large/front/7/3/735ea00f-1751-421f-93fb-ae2ce24fe4ac.jpg?1562922266"
    },
    {
        "name": "Lightning Runner",
        "description": "Lightning Runner é uma carta do set Modern Horizons 3 Commander.",
        "usage": "Use Lightning Runner para obter vantagem no campo de batalha em situações relacionadas a Modern Horizons 3 Commander.",
        "type": "Criatura",
        "image": "https://cards.scryfall.io/large/front/c/9/c9bf4059-c747-4116-921f-9902e84145f8.jpg?1562942653"
    },
    {
        "name": "Aethertide Whale",
        "description": "Voar\n" +
            "\n" +
            "Quando Baleia-da-maré-etérea entra no campo de batalha, você recebe {E}{E}{E}{E}{E}{E} (seis marcadores de energia).\n" +
            "\n" +
            "Pague {E}{E}{E}{E}: Devolva Baleia-da-maré-etérea para a mão de seu dono.\n" +
            "\n" +
            "“Para sobreviver aqui em cima, precisei aprender a saber quando devo usar o meu arpão e quando devo só apreciar a vista.” — Kadhu, aerobaleeiro",
        "usage": "Use Aethertide Whale para obter vantagem no campo de batalha em situações relacionadas a Modern Horizons 3 Commander.",
        "type": "Criatura",
        "image": "https://cards.scryfall.io/large/front/a/a/aa826070-9adc-4faa-a3ec-3e201ca5f295.jpg?1562935283"
    },
    {
        "name": "Aethergeode Miner",
        "description": "Toda vez que Mineradora do Geodo Etéreo ataca, você recebe {E}{E} (dois marcadores de energia).\n" +
            "\n" +
            "Pague {E}{E}: Exile Mineradora do Geodo Etéreo e, em seguida, devolva-a ao campo de batalha sob o controle de seu dono.",
        "usage": "Use Aethergeode Miner para obter vantagem no campo de batalha em situações relacionadas a Modern Horizons 3 Commander.",
        "type": "Criatura",
        "image": "https://cards.scryfall.io/large/front/b/3/b3bcc07d-8110-4447-94a2-05a228659807.jpg?1562937419"
    },
    {
        "name": "Aethersphere Harvester",
        "description": "Voar\n" +
            "\n" +
            "Quando Segadeira da Eteresfera entra no campo de batalha, você recebe {E}{E} (dois marcadores de energia).\n" +
            "\n" +
            "Pague {E}: Segadeira da Eteresfera ganha vínculo com a vida até o final do turno.\n" +
            "\n" +
            "Tripular 1 (Vire qualquer número de criaturas que você controla com total de poder igual ou superior a 1: Este Veículo se torna uma criatura artefato até o final do turno.)",
        "usage": "Use Aethersphere Harvester para obter vantagem no campo de batalha em situações relacionadas a Modern Horizons 3 Commander.",
        "type": "Artefato",
        "image": "https://cards.scryfall.io/large/front/3/0/30aecb2e-cedb-4811-9bf7-a81384e8a82e.jpg?1562906387"
    },
    {
        "name": "Bident of Thassa",
        "description": "Toda vez que uma criatura que você controla causa dano de combate a um jogador, você pode comprar um card.\n" +
            "\n" +
            "{1}{U}, {T}: As criaturas que seus oponentes controlam atacam neste turno se estiverem aptas.\n" +
            "\n" +
            "As vontades dos mortais mudam como o vai e vem das marés.",
        "usage": "Use Bident of Thassa para obter vantagem no campo de batalha em situações relacionadas a Modern Horizons 3 Commander.",
        "type": "Artefato",
        "image": "https://cards.scryfall.io/large/front/9/d/9d223fd5-88dd-4232-ad8d-a19df264230d.jpg?1703743731"
    },
    {
        "name": "Grenzo, Havoc Raiser",
        "description": "Grenzo, Havoc Raiser é uma carta do set Modern Horizons 3 Commander.",
        "usage": "Use Grenzo, Havoc Raiser para obter vantagem no campo de batalha em situações relacionadas a Modern Horizons 3 Commander.",
        "type": "Criatura",
        "image": "https://cards.scryfall.io/large/front/5/f/5fc99c9d-66f5-4858-91f7-425d4248a0b3.jpg?1712354436"
    },
    {
        "name": "Scurry of Gremlins",
        "description": "Quando Fuga dos Gremlins entrar no campo de batalha, crie duas fichas de criatura Gremlin vermelha 1/1. Em seguida, você recebe uma quantidade de {E} (marcadores de energia) igual ao número de criaturas que você controla.\n" +
            "\n" +
            "Pague {E}{E}{E}{E}: As criaturas que você controla recebem +1/+0 e ganham ímpeto até o final do turno.\n" +
            "\n" +
            "Um sopro de éter faz a horda sair de seu esconderijo.",
        "usage": "Use Fuga dos Gremlins para obter vantagem no campo de batalha em situações relacionadas a Modern Horizons 3.",
        "type": "Encantamento",
        "image": "https://cards.scryfall.io/large/front/3/a/3a828530-67df-487d-9ae7-7f9054877172.jpg?1718707277"
    },
    {
        "name": "Brudiclad, Telchor Engineer",
        "description": "Brudiclad, Telchor Engineer é uma carta do set Modern Horizons 3 Commander.",
        "usage": "Use Brudiclad, Telchor Engineer para obter vantagem no campo de batalha em situações relacionadas a Modern Horizons 3 Commander.",
        "type": "Artefato",
        "image": "https://cards.scryfall.io/large/front/2/5/25eff27a-eb58-4a95-b2df-4a341cf9bef6.jpg?1599707883"
    },
    {
        "name": "Wayfarer's Bauble",
        "description": "{2}, {T}, sacrifique Bijuteria do Viajante: Procure em seu grimório um card de terreno básico, coloque-o no campo de batalha virado e depois embaralhe.",
        "usage": "Use Wayfarer's Bauble para obter vantagem no campo de batalha em situações relacionadas a Modern Horizons 3 Commander.",
        "type": "Artefato",
        "image": "https://cards.scryfall.io/large/front/b/2/b2bb62dd-8991-4d73-9e4e-05100a36bc0d.jpg?1703748257"
    },
    {
        "name": "Swords to Plowshares",
        "description": "Swords to Plowshares é uma carta do set Modern Horizons 3 Commander.",
        "usage": "Use Swords to Plowshares para obter vantagem no campo de batalha em situações relacionadas a Modern Horizons 3 Commander.",
        "type": "Mágica instantãnea",
        "image": "https://cards.scryfall.io/large/front/b/1/b16321b6-3e28-424b-ac72-038cc4ed6458.jpg?1726284598"
    },
    {
        "name": "Hourglass of the Lost",
        "description": "Hourglass of the Lost é uma carta do set Modern Horizons 3 Commander.",
        "usage": "Use Hourglass of the Lost para obter vantagem no campo de batalha em situações relacionadas a Modern Horizons 3 Commander.",
        "type": "Artefato",
        "image": "https://cards.scryfall.io/large/front/1/5/15a5bb8f-cfc5-4afa-870d-a7a7117929b2.jpg?1717189817"
    },
    {
        "name": "Myr Battlesphere",
        "description": "Quando Esfera de Batalha Myr entrar no campo de batalha, crie quatro fichas de criatura artefato Myr incolor 1/1.\n" +
            "\n" +
            "Toda vez que Esfera de Batalha Myr ataca, você pode virar X Myr desvirados que você controla. Se fizer isso, Esfera de Batalha Myr receberá +X/+0 até o final do turno e causará X pontos de dano ao jogador ou planeswalker que ela estiver atacando.",
        "usage": "Use Myr Battlesphere para obter vantagem no campo de batalha em situações relacionadas a Modern Horizons 3 Commander.",
        "type": "Artefato",
        "image": "https://cards.scryfall.io/large/front/2/2/2256b36f-5627-4beb-9600-46e75b1b5459.jpg?1682011602"
    },
    {
        "name": "Razorfield Ripper",
        "description": "Razorfield Ripper é uma carta do set Modern Horizons 3 Commander.",
        "usage": "Use Razorfield Ripper para obter vantagem no campo de batalha em situações relacionadas a Modern Horizons 3 Commander.",
        "type": "Artefato",
        "image": "https://cards.scryfall.io/large/front/2/d/2dc5aa4f-90c0-4a14-8a26-33780c7366c8.jpg?1717189826"
    },
    {
        "name": "Battlefield Forge",
        "description": "Battlefield Forge é uma carta do set Modern Horizons 3 Commander.",
        "usage": "Use Battlefield Forge para obter vantagem no campo de batalha em situações relacionadas a Modern Horizons 3 Commander.",
        "type": "Terreno",
        "image": "https://cards.scryfall.io/large/front/b/c/bc6c3170-9e84-46ea-8311-911145f9c48a.jpg?1712354920"
    },
    {
        "name": "Azorius Chancery",
        "description": "Azorius Chancery é uma carta do set Modern Horizons 3 Commander.",
        "usage": "Use Azorius Chancery para obter vantagem no campo de batalha em situações relacionadas a Modern Horizons 3 Commander.",
        "type": "Terreno",
        "image": "https://cards.scryfall.io/large/front/5/0/50ef0ac3-e911-4d67-a751-8d86160ae843.jpg?1726285357"
    },
    {
        "name": "Izzet Boilerworks",
        "description": "Izzet Boilerworks é uma carta do set Modern Horizons 3 Commander.",
        "usage": "Use Izzet Boilerworks para obter vantagem no campo de batalha em situações relacionadas a Modern Horizons 3 Commander.",
        "type": "Terreno",
        "image": "https://cards.scryfall.io/large/front/b/f/bfac9395-7ca5-48dd-ab83-7c26ada12f61.jpg?1712355049"
    },
    {
        "name": "Salvation Colossus",
        "description": "Salvation Colossus é uma carta do set Modern Horizons 3 Commander.",
        "usage": "Use Salvation Colossus para obter vantagem no campo de batalha em situações relacionadas a Modern Horizons 3 Commander.",
        "type": "Artefato",
        "image": "https://cards.scryfall.io/large/front/3/8/3842803c-2d51-4ee0-88c3-800e2948d32c.jpg?1717189827"
    },
    {
        "name": "Talisman of Conviction",
        "description": "Talisman of Conviction é uma carta do set Modern Horizons 3 Commander.",
        "usage": "Use Talisman of Conviction para obter vantagem no campo de batalha em situações relacionadas a Modern Horizons 3 Commander.",
        "type": "Artefato",
        "image": "https://cards.scryfall.io/large/front/b/0/b0ae2f4d-c0c6-486f-94f6-2375888fcc34.jpg?1706241094"
    },
    {
        "name": "Generatório Izzet",
        "description": "Se você receberia um ou mais {E} (marcadores de energia), você recebe, em vez disso, aquela quantidade mais um {E}.\n" +
            "\n" +
            "{T}: Compre um card. Ative somente se tiver pago ou perdido quatro ou mais {E} neste turno.\n" +
            "\n" +
            "O uso do capacete é obrigatório. O uso de capa isolante não é obrigatório, mas é altamente recomendado.",
        "usage": "Use Generatório Izzet para obter vantagem no campo de batalha em situações relacionadas a Modern Horizons 3.",
        "type": "Artefato",
        "image": "https://cards.scryfall.io/large/front/7/9/79b72c54-2a11-477f-bf0c-b806535205e5.jpg?1718706665"
    },
    {
        "name": "Glimmer of Genius",
        "description": "Use vidência 2 e depois compre dois cards. Você recebe {E}{E} (dois marcadores de energia).\n" +
            "\n" +
            "Os criadores vivem para aquele momento de inspiração: precioso, profundo, perfeito.",
        "usage": "Use Glimmer of Genius para obter vantagem no campo de batalha em situações relacionadas a Modern Horizons 3 Commander.",
        "type": "Mágica instantãnea",
        "image": "https://cards.scryfall.io/large/front/a/c/acb5b520-362a-4a54-abc0-88650b7899cc.jpg?1562741316"
    },
    {
        "name": "Tezzeret's Gambit",
        "description": "Tezzeret's Gambit é uma carta do set Modern Horizons 3 Commander.",
        "usage": "Use Tezzeret's Gambit para obter vantagem no campo de batalha em situações relacionadas a Modern Horizons 3 Commander.",
        "type": "Feitiço",
        "image": "https://cards.scryfall.io/large/front/1/5/15b2188f-06c8-4771-bba6-e6fc531ebc9a.jpg?1712354220"
    },
    {
        "name": "Furycalm Snarl",
        "description": "Furycalm Snarl é uma carta do set Modern Horizons 3 Commander.",
        "usage": "Use Furycalm Snarl para obter vantagem no campo de batalha em situações relacionadas a Modern Horizons 3 Commander.",
        "type": "Terreno",
        "image": "https://cards.scryfall.io/large/front/b/d/bdb27a86-0fbd-4123-9c8e-630c855d5e9e.jpg?1706241163"
    },
    {
        "name": "Midnight Clock",
        "description": "Midnight Clock é uma carta do set Modern Horizons 3 Commander.",
        "usage": "Use Midnight Clock para obter vantagem no campo de batalha em situações relacionadas a Modern Horizons 3 Commander.",
        "type": "Artefato",
        "image": "https://cards.scryfall.io/large/front/0/b/0b3c33b7-5b15-4b61-bfd6-1ffa823eb28a.jpg?1712354156"
    },
    {
        "name": "Farewell",
        "description": "Farewell é uma carta do set Modern Horizons 3 Commander.",
        "usage": "Use Farewell para obter vantagem no campo de batalha em situações relacionadas a Modern Horizons 3 Commander.",
        "type": "Feitiço",
        "image": "https://cards.scryfall.io/large/front/1/1/114d2180-093b-4838-97ad-badbc8ee50b0.jpg?1706240579"
    },
    {
        "name": "Aether Refinery",
        "description": "Aether Refinery é uma carta do set Modern Horizons 3 Commander.",
        "usage": "Use Aether Refinery para obter vantagem no campo de batalha em situações relacionadas a Modern Horizons 3 Commander.",
        "type": "Artefato",
        "image": "https://cards.scryfall.io/large/front/9/4/94553de8-52e8-4209-919a-cdf9289af116.jpg?1718364522"
    },
    {
        "name": "Sphinx of the Revelation",
        "description": "Sphinx of the Revelation é uma carta do set Modern Horizons 3 Commander.",
        "usage": "Use Sphinx of the Revelation para obter vantagem no campo de batalha em situações relacionadas a Modern Horizons 3 Commander.",
        "type": "Artefato",
        "image": "https://cards.scryfall.io/large/front/c/d/cde649e6-1582-4f77-8cff-dcc477140d67.jpg?1717189974"
    },
    {
        "name": "Unstable Amulet",
        "description": "Quando Amuleto Instável entra no campo de batalha, você recebe {E}{E} (dois marcadores de energia).\n" +
            "\n" +
            "Toda vez que você conjura uma mágica vinda de qualquer lugar que não seja sua mão, Amuleto Instável causa 1 ponto de dano a cada oponente.\n" +
            "\n" +
            "{T}, pague {E}{E}: Exile o card do topo de seu grimório. Você pode jogá-lo até exilar outro card com Amuleto Instável.",
        "usage": "Use Amuleto Instável para obter vantagem no campo de batalha em situações relacionadas a Modern Horizons 3.",
        "type": "Artefato",
        "image": "https://cards.scryfall.io/large/front/d/2/d2ce621b-c484-436c-9e07-3398994b39ca.jpg?1718704238"
    },
    {
        "name": "Amped Raptor",
        "description": "Iniciativa\n" +
            "\n" +
            "Quando Raptor Amplificado entra no campo de batalha, você recebe {E}{E} (dois marcadores de energia). Em seguida, se você o tiver conjurado de sua mão, exile cards do topo de seu grimório até exilar um card não de terreno. Você pode conjurar aquele card pagando uma quantidade de {E} igual a seu valor de mana em vez de pagar seu custo de mana.",
        "usage": "Use Raptor Amplificado para obter vantagem no campo de batalha em situações relacionadas a Modern Horizons 3.",
        "type": "Criatura",
        "image": "https://cards.scryfall.io/large/front/4/a/4a0e26c7-11cd-408e-bb77-a11ebf8a2d1b.jpg?1718702917"
    },
    {
        "name": "Bespoke Battlewagon",
        "description": "{T}: Você recebe {E}{E} (dois marcadores de energia).\n" +
            "\n" +
            "{T}, pague {E}{E}: Vire a criatura alvo.\n" +
            "\n" +
            "{T}, pague {E}{E}{E}: Compre um card.\n" +
            "\n" +
            "Pague {E}{E}{E}{E}: Vagão de Batalha Personalizado torna-se uma criatura artefato até o final do turno.\n" +
            "\n" +
            "Tripular 4",
        "usage": "Use Vagão de Batalha Personalizado para obter vantagem no campo de batalha em situações relacionadas a Modern Horizons 3.",
        "type": "Artefato",
        "image": "https://cards.scryfall.io/large/front/4/3/435db414-5c26-4b04-ad16-6da06902ba9d.jpg?1718700159"
    },
    {
        "name": "Roil Cartographer",
        "description": "Aterragem — Toda vez que um terreno entra no campo de batalha sob seu controle, você recebe {E} (um marcador de energia).\n" +
            "\n" +
            "{T}, pague seis {E}: Compre três cards.\n" +
            "\n" +
            "“O mundo muda constantemente, mas isso não quer dizer que não se possa mapeá-lo. Nossos mapas também precisam mudar.”",
        "usage": "Use Cartógrafa do Turbillhão para obter vantagem no campo de batalha em situações relacionadas a Modern Horizons 3.",
        "type": "Criatura",
        "image": "https://cards.scryfall.io/large/front/2/0/20d5e311-c302-4c8b-9c1e-48aa94e4d097.jpg?1718700754"
    },
    {
        "name": "Solar Transformer",
        "description": "Transformador Solar entra no campo de batalha virado.\n" +
            "\n" +
            "Quando Transformador Solar entra no campo de batalha, você recebe {E}{E}{E} (três marcadores de energia).\n" +
            "\n" +
            "{T}: Adicione {C}.\n" +
            "\n" +
            "{T}, pague {E}: Adicione um mana de qualquer cor.",
        "usage": "Use Transformador Solar para obter vantagem no campo de batalha em situações relacionadas a Modern Horizons 3.",
        "type": "Artefato",
        "image": "https://cards.scryfall.io/large/front/d/4/d4eb8c17-5950-40a1-8660-801d78d74602.jpg?1718707699"
    },
    {
        "name": "Shivan Reef",
        "description": "Shivan Reef é uma carta do set Modern Horizons 3 Commander.",
        "usage": "Use Shivan Reef para obter vantagem no campo de batalha em situações relacionadas a Modern Horizons 3 Commander.",
        "type": "Terreno",
        "image": "https://cards.scryfall.io/large/front/9/5/951f28dd-40ff-43f0-af1c-6631b5845309.jpg?1712355128"
    },
    {
        "name": "Talisman of Progress",
        "description": "Talisman of Progress é uma carta do set Modern Horizons 3 Commander.",
        "usage": "Use Talisman of Progress para obter vantagem no campo de batalha em situações relacionadas a Modern Horizons 3 Commander.",
        "type": "Artefato",
        "image": "https://cards.scryfall.io/large/front/e/3/e3238608-a302-4a42-bd8a-5412e4126b14.jpg?1706241103"
    },
    {
        "name": "Command Tower",
        "description": "Command Tower é uma carta do set Modern Horizons 3 Commander.",
        "usage": "Use Command Tower para obter vantagem no campo de batalha em situações relacionadas a Modern Horizons 3 Commander.",
        "type": "Terreno",
        "image": "https://cards.scryfall.io/large/front/1/2/129d1bbd-83ad-4953-bf6d-b55989b2529c.jpg?1726284539"
    },
    {
        "name": "Combustible Gearhulk",
        "description": "Combustible Gearhulk é uma carta do set Modern Horizons 3 Commander.",
        "usage": "Use Combustible Gearhulk para obter vantagem no campo de batalha em situações relacionadas a Modern Horizons 3 Commander.",
        "type": "Artefato",
        "image": "https://cards.scryfall.io/large/front/c/8/c80e620e-bece-4c48-9dd6-7bcdacabf521.jpg?1726284948"
    },
    {
        "name": "Jolted Awake",
        "description": "Escolha até um card de artefato ou criatura alvo em seu cemitério. Você recebe {E}{E} (dois marcadores de energia). Em seguida, você pode pagar uma quantidade de {E} igual ao valor de mana daquele card. Se fizer isso, devolva-o de seu cemitério ao campo de batalha.\n" +
            "\n" +
            "Reciclar {2} ({2}, descarte este card: Compre um card.)",
        "usage": "Use Despertar Sacudido para obter vantagem no campo de batalha em situações relacionadas a Modern Horizons 3.",
        "type": "Feitiço",
        "image": "https://cards.scryfall.io/large/front/c/8/c8ca6501-9e63-446c-aaee-0fbf20464971.jpg?1718699335"
    },
    {
        "name": "Era of Innovation",
        "description": "Toda vez que um artefato ou Artesão entra no campo de batalha sob seu controle, você pode pagar {1}. Se fizer isso, você recebe {E}{E} (dois marcadores de energia).\n" +
            "\n" +
            "Pague {E}{E}{E}{E}{E}{E}, sacrifique Era da Inovação: Compre três cards.",
        "usage": "Use Era of Innovation para obter vantagem no campo de batalha em situações relacionadas a Modern Horizons 3 Commander.",
        "type": "Encantamento",
        "image": "https://cards.scryfall.io/large/front/a/f/afb03d0e-6567-411e-a1dd-3b4549b0b806.jpg?1562741506"
    },
    {
        "name": "Port Town",
        "description": "Port Town é uma carta do set Modern Horizons 3 Commander.",
        "usage": "Use Port Town para obter vantagem no campo de batalha em situações relacionadas a Modern Horizons 3 Commander.",
        "type": "Terreno",
        "image": "https://cards.scryfall.io/large/front/d/1/d15c035d-1309-4286-a758-07517f323f34.jpg?1690006392"
    },
    {
        "name": "Demolition Field",
        "description": "Demolition Field é uma carta do set Modern Horizons 3 Commander.",
        "usage": "Use Demolition Field para obter vantagem no campo de batalha em situações relacionadas a Modern Horizons 3 Commander.",
        "type": "Terreno",
        "image": "https://cards.scryfall.io/large/front/4/7/47994cb6-204a-4fbe-a9d4-5798a70c95ab.jpg?1712354968"
    },
    {
        "name": "Mystic Monastery",
        "description": "Mystic Monastery é uma carta do set Modern Horizons 3 Commander.",
        "usage": "Use Mystic Monastery para obter vantagem no campo de batalha em situações relacionadas a Modern Horizons 3 Commander.",
        "type": "Terreno",
        "image": "https://cards.scryfall.io/large/front/c/2/c26d3961-cc3f-408a-821e-2d9ea025c51e.jpg?1690006324"
    },
    {
        "name": "Talisman of Creativity",
        "description": "Talisman of Creativity é uma carta do set Modern Horizons 3 Commander.",
        "usage": "Use Talisman of Creativity para obter vantagem no campo de batalha em situações relacionadas a Modern Horizons 3 Commander.",
        "type": "Artefato",
        "image": "https://cards.scryfall.io/large/front/8/e/8ebb2086-3d9c-4322-bd3f-1366a4354578.jpg?1690005858"
    },
    {
        "name": "Coalition Relic",
        "description": "Coalition Relic é uma carta do set Modern Horizons 3 Commander.",
        "usage": "Use Coalition Relic para obter vantagem no campo de batalha em situações relacionadas a Modern Horizons 3 Commander.",
        "type": "Artefato",
        "image": "https://cards.scryfall.io/large/front/d/a/da8c1dac-3bd5-467b-9a85-d5e25475d631.jpg?1673231594"
    },
    {
        "name": "Burnished Hart",
        "description": "Burnished Hart é uma carta do set Modern Horizons 3 Commander.",
        "usage": "Use Burnished Hart para obter vantagem no campo de batalha em situações relacionadas a Modern Horizons 3 Commander.",
        "type": "Artefato",
        "image": "https://cards.scryfall.io/large/front/1/8/185660f1-584a-4098-aacd-df50fe5669d5.jpg?1726285290"
    },
    {
        "name": "Whirler Virtuoso",
        "description": "Quando Virtuose dos Turbilinos entra no campo de batalha, você recebe {E}{E}{E} (três marcadores de energia).\n" +
            "\n" +
            "Pague {E}{E}{E}: Crie uma ficha de criatura artefato incolor 1/1 do tipo Tóptero com voar.\n" +
            "\n" +
            "As primeiras batidas hesitantes das asas são como música para sua alma.",
        "usage": "Use Whirler Virtuoso para obter vantagem no campo de batalha em situações relacionadas a Modern Horizons 3 Commander.",
        "type": "Criatura",
        "image": "https://cards.scryfall.io/large/front/f/3/f363456e-7bd7-4872-8a15-1346a55aa7c4.jpg?1562745584"
    },
    {
        "name": "Arcane Signet",
        "description": "Arcane Signet é uma carta do set Modern Horizons 3 Commander.",
        "usage": "Use Arcane Signet para obter vantagem no campo de batalha em situações relacionadas a Modern Horizons 3 Commander.",
        "type": "Artefato",
        "image": "https://cards.scryfall.io/large/front/2/1/211a1d86-7257-4621-ae05-c2b235c063f0.jpg?1726284514"
    },
    {
        "name": "Decoction Module",
        "description": "Toda vez que uma criatura entra no campo de batalha sob seu controle, você recebe {E} (um marcador de energia).\n" +
            "\n" +
            "{4}, {T}: Devolva a criatura alvo que você controla para a mão de seu dono.",
        "usage": "Use Decoction Module para obter vantagem no campo de batalha em situações relacionadas a Modern Horizons 3 Commander.",
        "type": "Artefato",
        "image": "https://cards.scryfall.io/large/front/5/4/5493b4ef-d610-477d-aa2d-485221a36aff.jpg?1562735805"
    },
    {
        "name": "Aether Hub",
        "description": "Quando Núcleo do Éter entra no campo de batalha, você recebe {E} (um marcador de energia).\n" +
            "\n" +
            "{T}: Adicione {C} à sua reserva de mana.\n" +
            "\n" +
            "{T}, Pague {E}: Adicione um mana de qualquer cor à sua reserva de mana.\n" +
            "\n" +
            "Ele alimenta os sonhos de Ghirapur.",
        "usage": "Use Aether Hub para obter vantagem no campo de batalha em situações relacionadas a Modern Horizons 3 Commander.",
        "type": "Terreno",
        "image": "https://cards.scryfall.io/large/front/5/a/5ab752a1-43dd-448c-9a0d-d3bbe1860b7d.jpg?1562736111"
    },
    {
        "name": "Castle Vantress",
        "description": "Castle Vantress é uma carta do set Modern Horizons 3 Commander.",
        "usage": "Use Castle Vantress para obter vantagem no campo de batalha em situações relacionadas a Modern Horizons 3 Commander.",
        "type": "Terreno",
        "image": "https://cards.scryfall.io/large/front/d/e/dead85f7-865c-4f7d-ad6c-014d4e90f8be.jpg?1726285380"
    },
    {
        "name": "Skyclave Apparition",
        "description": "Quando Aparição do Enclave Celeste entrar no campo de batalha, exile até uma permanente alvo com custo de mana convertido igual ou inferior a 4 que você não controla e que não seja terreno nem ficha.\n" +
            "\n" +
            "Quando Aparição do Enclave Celeste deixar o campo de batalha, o dono do card exilado cria uma ficha de criatura azul X/X do tipo Ilusão, sendo X o custo de mana convertido do card exilado.",
        "usage": "Use Skyclave Apparition para obter vantagem no campo de batalha em situações relacionadas a Modern Horizons 3 Commander.",
        "type": "Criatura",
        "image": "https://cards.scryfall.io/large/front/c/7/c730cb59-9c5c-47f2-82be-593f3cd92af5.jpg?1646138756"
    },
    {
        "name": "Prairie Stream",
        "description": "Prairie Stream é uma carta do set Modern Horizons 3 Commander.",
        "usage": "Use Prairie Stream para obter vantagem no campo de batalha em situações relacionadas a Modern Horizons 3 Commander.",
        "type": "Terreno",
        "image": "https://cards.scryfall.io/large/front/c/6/c649f06f-bad5-499b-b70c-47e52cb4a234.jpg?1706241212"
    },
    {
        "name": "Temple of Epiphany",
        "description": "Temple of Epiphany é uma carta do set Modern Horizons 3 Commander.",
        "usage": "Use Temple of Epiphany para obter vantagem no campo de batalha em situações relacionadas a Modern Horizons 3 Commander.",
        "type": "Terreno",
        "image": "https://cards.scryfall.io/large/front/f/a/faf8808a-6a28-419f-a60f-2d1cc4dfa5a7.jpg?1712355168"
    },
    {
        "name": "Solemn Simulacrum",
        "description": "Solemn Simulacrum é uma carta do set Modern Horizons 3 Commander.",
        "usage": "Use Solemn Simulacrum para obter vantagem no campo de batalha em situações relacionadas a Modern Horizons 3 Commander.",
        "type": "Artefato",
        "image": "https://cards.scryfall.io/large/front/9/1/916e0c89-5614-4022-b095-9c714c476d13.jpg?1726285326"
    },
    {
        "name": "Sol Ring",
        "description": "Sol Ring é uma carta do set Modern Horizons 3 Commander.",
        "usage": "Use Sol Ring para obter vantagem no campo de batalha em situações relacionadas a Modern Horizons 3 Commander.",
        "type": "Artefato",
        "image": "https://cards.scryfall.io/large/front/8/2/82f1a8a3-7fdb-49a3-9649-b5c0b4755cd5.jpg?1726284526"
    },
    {
        "name": "Temple of Enlightenment",
        "description": "Temple of Enlightenment é uma carta do set Modern Horizons 3 Commander.",
        "usage": "Use Temple of Enlightenment para obter vantagem no campo de batalha em situações relacionadas a Modern Horizons 3 Commander.",
        "type": "Artefato",
        "image": "https://cards.scryfall.io/large/front/3/d/3dbee324-5df0-470e-96fb-1f87f377cdfc.jpg?1726285528"
    },
    {
        "name": "Mountain",
        "description": "Montanha é uma carta do set Modern Horizons 3.",
        "usage": "Use Montanha para obter vantagem no campo de batalha em situações relacionadas a Modern Horizons 3.",
        "type": "Terreno",
        "image": "https://cards.scryfall.io/large/front/1/f/1faff9e6-c385-448f-8aec-829154f4ccbe.jpg?1718713163"
    },
    {
        "name": "Frostboil Snarl",
        "description": "Frostboil Snarl é uma carta do set Modern Horizons 3 Commander.",
        "usage": "Use Frostboil Snarl para obter vantagem no campo de batalha em situações relacionadas a Modern Horizons 3 Commander.",
        "type": "Terreno",
        "image": "https://cards.scryfall.io/large/front/5/2/5229c275-04aa-4168-9eb3-6c04f9501fd1.jpg?1712355032"
    },
    {
        "name": "Austere Command",
        "description": "Austere Command é uma carta do set Modern Horizons 3 Commander.",
        "usage": "Use Austere Command para obter vantagem no campo de batalha em situações relacionadas a Modern Horizons 3 Commander.",
        "type": "Feitiço",
        "image": "https://cards.scryfall.io/large/front/a/3/a31ffc9e-d21b-4a8f-ac67-695e38e09e3b.jpg?1706240553"
    },
    {
        "name": "Coveted Jewel",
        "description": "Coveted Jewel é uma carta do set Modern Horizons 3 Commander.",
        "usage": "Use Coveted Jewel para obter vantagem no campo de batalha em situações relacionadas a Modern Horizons 3 Commander.",
        "type": "Artefato",
        "image": "https://cards.scryfall.io/large/front/2/7/278e810d-8a4f-4841-a221-39a24b034355.jpg?1682209987"
    },
    {
        "name": "Goldspan Dragon",
        "description": "Goldspan Dragon é uma carta do set Modern Horizons 3 Commander.",
        "usage": "Use Goldspan Dragon para obter vantagem no campo de batalha em situações relacionadas a Modern Horizons 3 Commander.",
        "type": "Criatura",
        "image": "https://cards.scryfall.io/large/front/9/d/9d914868-9000-4df2-a818-0ef8a7f636ae.jpg?1665343456"
    },
    {
        "name": "Mystic Gate",
        "description": "Mystic Gate é uma carta do set Modern Horizons 3 Commander.",
        "usage": "Use Mystic Gate para obter vantagem no campo de batalha em situações relacionadas a Modern Horizons 3 Commander.",
        "type": "Terreno",
        "image": "https://cards.scryfall.io/large/front/6/f/6f99714f-43bc-4048-b650-97dfef4c10fe.jpg?1690006311"
    },
    {
        "name": "Akroma's Will",
        "description": "Akroma's Will é uma carta do set Modern Horizons 3 Commander.",
        "usage": "Use Akroma's Will para obter vantagem no campo de batalha em situações relacionadas a Modern Horizons 3 Commander.",
        "type": "Mágica instantãnea",
        "image": "https://cards.scryfall.io/large/front/6/0/608cdbdb-6f7e-438a-bab0-0e7782435f0f.jpg?1698988079"
    },
    {
        "name": "Adarkar Wastes",
        "description": "Adarkar Wastes é uma carta do set Modern Horizons 3 Commander.",
        "usage": "Use Adarkar Wastes para obter vantagem no campo de batalha em situações relacionadas a Modern Horizons 3 Commander.",
        "type": "Terreno",
        "image": "https://cards.scryfall.io/large/front/3/9/395ed6cd-8027-4b11-a1ce-5f0bbbd2a50b.jpg?1726285347"
    }
];

export default deck;
