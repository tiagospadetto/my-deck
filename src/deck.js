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
        "type": "Criatura Lendária",
        "image": "https://cards.scryfall.io/normal/front/294.jpg"
    },
    {
        "name": "Lightning Runner",
        "description": "Lightning Runner é uma carta do set Modern Horizons 3 Commander.",
        "usage": "Use Lightning Runner para obter vantagem no campo de batalha em situações relacionadas a Modern Horizons 3 Commander.",
        "type": "Criatura Lendária",
        "image": "https://cards.scryfall.io/normal/front/215.jpg"
    },
    {
        "name": "Aethertide Whale",
        "description": "Aethertide Whale é uma carta do set Modern Horizons 3 Commander.",
        "usage": "Use Aethertide Whale para obter vantagem no campo de batalha em situações relacionadas a Modern Horizons 3 Commander.",
        "type": "Criatura Lendária",
        "image": "https://cards.scryfall.io/normal/front/175.jpg"
    },
    {
        "name": "Aethergeode Miner",
        "description": "Aethergeode Miner é uma carta do set Modern Horizons 3 Commander.",
        "usage": "Use Aethergeode Miner para obter vantagem no campo de batalha em situações relacionadas a Modern Horizons 3 Commander.",
        "type": "Criatura Lendária",
        "image": "https://cards.scryfall.io/normal/front/163.jpg"
    },
    {
        "name": "Aethersphere Harvester",
        "description": "Aethersphere Harvester é uma carta do set Modern Horizons 3 Commander.",
        "usage": "Use Aethersphere Harvester para obter vantagem no campo de batalha em situações relacionadas a Modern Horizons 3 Commander.",
        "type": "Criatura Lendária",
        "image": "https://cards.scryfall.io/normal/front/280.jpg"
    },
    {
        "name": "Bident of Thassa",
        "description": "Bident of Thassa é uma carta do set Modern Horizons 3 Commander.",
        "usage": "Use Bident of Thassa para obter vantagem no campo de batalha em situações relacionadas a Modern Horizons 3 Commander.",
        "type": "Criatura Lendária",
        "image": "https://cards.scryfall.io/normal/front/177.jpg"
    },
    {
        "name": "Grenzo, Havoc Raiser",
        "description": "Grenzo, Havoc Raiser é uma carta do set Modern Horizons 3 Commander.",
        "usage": "Use Grenzo, Havoc Raiser para obter vantagem no campo de batalha em situações relacionadas a Modern Horizons 3 Commander.",
        "type": "Criatura Lendária",
        "image": "https://cards.scryfall.io/normal/front/213.jpg"
    },
    {
        "name": "Fuga dos Gremlins",
        "description": "Fuga dos Gremlins é uma carta do set Modern Horizons 3.",
        "usage": "Use Fuga dos Gremlins para obter vantagem no campo de batalha em situações relacionadas a Modern Horizons 3.",
        "type": "Criatura Lendária",
        "image": "https://cards.scryfall.io/normal/front/203.jpg"
    },
    {
        "name": "Brudiclad, Telchor Engineer",
        "description": "Brudiclad, Telchor Engineer é uma carta do set Modern Horizons 3 Commander.",
        "usage": "Use Brudiclad, Telchor Engineer para obter vantagem no campo de batalha em situações relacionadas a Modern Horizons 3 Commander.",
        "type": "Criatura Lendária",
        "image": "https://cards.scryfall.io/normal/front/257.jpg"
    },
    {
        "name": "Wayfarer's Bauble",
        "description": "Wayfarer's Bauble é uma carta do set Modern Horizons 3 Commander.",
        "usage": "Use Wayfarer's Bauble para obter vantagem no campo de batalha em situações relacionadas a Modern Horizons 3 Commander.",
        "type": "Criatura Lendária",
        "image": "https://cards.scryfall.io/normal/front/315.jpg"
    },
    {
        "name": "Swords to Plowshares",
        "description": "Swords to Plowshares é uma carta do set Modern Horizons 3 Commander.",
        "usage": "Use Swords to Plowshares para obter vantagem no campo de batalha em situações relacionadas a Modern Horizons 3 Commander.",
        "type": "Criatura Lendária",
        "image": "https://cards.scryfall.io/normal/front/173.jpg"
    },
    {
        "name": "Hourglass of the Lost",
        "description": "Hourglass of the Lost é uma carta do set Modern Horizons 3 Commander.",
        "usage": "Use Hourglass of the Lost para obter vantagem no campo de batalha em situações relacionadas a Modern Horizons 3 Commander.",
        "type": "Criatura Lendária",
        "image": "https://cards.scryfall.io/normal/front/92.jpg"
    },
    {
        "name": "Myr Battlesphere",
        "description": "Myr Battlesphere é uma carta do set Modern Horizons 3 Commander.",
        "usage": "Use Myr Battlesphere para obter vantagem no campo de batalha em situações relacionadas a Modern Horizons 3 Commander.",
        "type": "Criatura Lendária",
        "image": "https://cards.scryfall.io/normal/front/301.jpg"
    },
    {
        "name": "Razorfield Ripper",
        "description": "Razorfield Ripper é uma carta do set Modern Horizons 3 Commander.",
        "usage": "Use Razorfield Ripper para obter vantagem no campo de batalha em situações relacionadas a Modern Horizons 3 Commander.",
        "type": "Criatura Lendária",
        "image": "https://cards.scryfall.io/normal/front/94.jpg"
    },
    {
        "name": "Battlefield Forge",
        "description": "Battlefield Forge é uma carta do set Modern Horizons 3 Commander.",
        "usage": "Use Battlefield Forge para obter vantagem no campo de batalha em situações relacionadas a Modern Horizons 3 Commander.",
        "type": "Criatura Lendária",
        "image": "https://cards.scryfall.io/normal/front/321.jpg"
    },
    {
        "name": "Azorius Chancery",
        "description": "Azorius Chancery é uma carta do set Modern Horizons 3 Commander.",
        "usage": "Use Azorius Chancery para obter vantagem no campo de batalha em situações relacionadas a Modern Horizons 3 Commander.",
        "type": "Criatura Lendária",
        "image": "https://cards.scryfall.io/normal/front/319.jpg"
    },
    {
        "name": "Izzet Boilerworks",
        "description": "Izzet Boilerworks é uma carta do set Modern Horizons 3 Commander.",
        "usage": "Use Izzet Boilerworks para obter vantagem no campo de batalha em situações relacionadas a Modern Horizons 3 Commander.",
        "type": "Criatura Lendária",
        "image": "https://cards.scryfall.io/normal/front/350.jpg"
    },
    {
        "name": "Salvation Colossus",
        "description": "Salvation Colossus é uma carta do set Modern Horizons 3 Commander.",
        "usage": "Use Salvation Colossus para obter vantagem no campo de batalha em situações relacionadas a Modern Horizons 3 Commander.",
        "type": "Criatura Lendária",
        "image": "https://cards.scryfall.io/normal/front/43.jpg"
    },
    {
        "name": "Talisman of Conviction",
        "description": "Talisman of Conviction é uma carta do set Modern Horizons 3 Commander.",
        "usage": "Use Talisman of Conviction para obter vantagem no campo de batalha em situações relacionadas a Modern Horizons 3 Commander.",
        "type": "Criatura Lendária",
        "image": "https://cards.scryfall.io/normal/front/307.jpg"
    },
    {
        "name": "Generatório Izzet",
        "description": "Generatório Izzet é uma carta do set Modern Horizons 3.",
        "usage": "Use Generatório Izzet para obter vantagem no campo de batalha em situações relacionadas a Modern Horizons 3.",
        "type": "Criatura Lendária",
        "image": "https://cards.scryfall.io/normal/front/191.jpg"
    },
    {
        "name": "Glimmer of Genius",
        "description": "Glimmer of Genius é uma carta do set Modern Horizons 3 Commander.",
        "usage": "Use Glimmer of Genius para obter vantagem no campo de batalha em situações relacionadas a Modern Horizons 3 Commander.",
        "type": "Criatura Lendária",
        "image": "https://cards.scryfall.io/normal/front/187.jpg"
    },
    {
        "name": "Tezzeret's Gambit",
        "description": "Tezzeret's Gambit é uma carta do set Modern Horizons 3 Commander.",
        "usage": "Use Tezzeret's Gambit para obter vantagem no campo de batalha em situações relacionadas a Modern Horizons 3 Commander.",
        "type": "Criatura Lendária",
        "image": "https://cards.scryfall.io/normal/front/194.jpg"
    },
    {
        "name": "Furycalm Snarl",
        "description": "Furycalm Snarl é uma carta do set Modern Horizons 3 Commander.",
        "usage": "Use Furycalm Snarl para obter vantagem no campo de batalha em situações relacionadas a Modern Horizons 3 Commander.",
        "type": "Criatura Lendária",
        "image": "https://cards.scryfall.io/normal/front/345.jpg"
    },
    {
        "name": "Midnight Clock",
        "description": "Midnight Clock é uma carta do set Modern Horizons 3 Commander.",
        "usage": "Use Midnight Clock para obter vantagem no campo de batalha em situações relacionadas a Modern Horizons 3 Commander.",
        "type": "Criatura Lendária",
        "image": "https://cards.scryfall.io/normal/front/189.jpg"
    },
    {
        "name": "Farewell",
        "description": "Farewell é uma carta do set Modern Horizons 3 Commander.",
        "usage": "Use Farewell para obter vantagem no campo de batalha em situações relacionadas a Modern Horizons 3 Commander.",
        "type": "Criatura Lendária",
        "image": "https://cards.scryfall.io/normal/front/170.jpg"
    },
    {
        "name": "Aether Refinery",
        "description": "Aether Refinery é uma carta do set Modern Horizons 3 Commander.",
        "usage": "Use Aether Refinery para obter vantagem no campo de batalha em situações relacionadas a Modern Horizons 3 Commander.",
        "type": "Criatura Lendária",
        "image": "https://cards.scryfall.io/normal/front/106.jpg"
    },
    {
        "name": "Sphinx of the Revelation",
        "description": "Sphinx of the Revelation é uma carta do set Modern Horizons 3 Commander.",
        "usage": "Use Sphinx of the Revelation para obter vantagem no campo de batalha em situações relacionadas a Modern Horizons 3 Commander.",
        "type": "Criatura Lendária",
        "image": "https://cards.scryfall.io/normal/front/127.jpg"
    },
    {
        "name": "Amuleto Instável",
        "description": "Amuleto Instável é uma carta do set Modern Horizons 3.",
        "usage": "Use Amuleto Instável para obter vantagem no campo de batalha em situações relacionadas a Modern Horizons 3.",
        "type": "Criatura Lendária",
        "image": "https://cards.scryfall.io/normal/front/142.jpg"
    },
    {
        "name": "Raptor Amplificado",
        "description": "Raptor Amplificado é uma carta do set Modern Horizons 3.",
        "usage": "Use Raptor Amplificado para obter vantagem no campo de batalha em situações relacionadas a Modern Horizons 3.",
        "type": "Criatura Lendária",
        "image": "https://cards.scryfall.io/normal/front/114.jpg"
    },
    {
        "name": "Vagão de Batalha Personalizado",
        "description": "Vagão de Batalha Personalizado é uma carta do set Modern Horizons 3.",
        "usage": "Use Vagão de Batalha Personalizado para obter vantagem no campo de batalha em situações relacionadas a Modern Horizons 3.",
        "type": "Criatura Lendária",
        "image": "https://cards.scryfall.io/normal/front/52.jpg"
    },
    {
        "name": "Cartógrafa do Turbillhão",
        "description": "Cartógrafa do Turbillhão é uma carta do set Modern Horizons 3.",
        "usage": "Use Cartógrafa do Turbillhão para obter vantagem no campo de batalha em situações relacionadas a Modern Horizons 3.",
        "type": "Criatura Lendária",
        "image": "https://cards.scryfall.io/normal/front/67.jpg"
    },
    {
        "name": "Transformador Solar",
        "description": "Transformador Solar é uma carta do set Modern Horizons 3.",
        "usage": "Use Transformador Solar para obter vantagem no campo de batalha em situações relacionadas a Modern Horizons 3.",
        "type": "Criatura Lendária",
        "image": "https://cards.scryfall.io/normal/front/211.jpg"
    },
    {
        "name": "Shivan Reef",
        "description": "Shivan Reef é uma carta do set Modern Horizons 3 Commander.",
        "usage": "Use Shivan Reef para obter vantagem no campo de batalha em situações relacionadas a Modern Horizons 3 Commander.",
        "type": "Criatura Lendária",
        "image": "https://cards.scryfall.io/normal/front/375.jpg"
    },
    {
        "name": "Talisman of Progress",
        "description": "Talisman of Progress é uma carta do set Modern Horizons 3 Commander.",
        "usage": "Use Talisman of Progress para obter vantagem no campo de batalha em situações relacionadas a Modern Horizons 3 Commander.",
        "type": "Criatura Lendária",
        "image": "https://cards.scryfall.io/normal/front/313.jpg"
    },
    {
        "name": "Command Tower",
        "description": "Command Tower é uma carta do set Modern Horizons 3 Commander.",
        "usage": "Use Command Tower para obter vantagem no campo de batalha em situações relacionadas a Modern Horizons 3 Commander.",
        "type": "Criatura Lendária",
        "image": "https://cards.scryfall.io/normal/front/331.jpg"
    },
    {
        "name": "Combustible Gearhulk",
        "description": "Combustible Gearhulk é uma carta do set Modern Horizons 3 Commander.",
        "usage": "Use Combustible Gearhulk para obter vantagem no campo de batalha em situações relacionadas a Modern Horizons 3 Commander.",
        "type": "Criatura Lendária",
        "image": "https://cards.scryfall.io/normal/front/210.jpg"
    },
    {
        "name": "Despertar Sacudido",
        "description": "Despertar Sacudido é uma carta do set Modern Horizons 3.",
        "usage": "Use Despertar Sacudido para obter vantagem no campo de batalha em situações relacionadas a Modern Horizons 3.",
        "type": "Criatura Lendária",
        "image": "https://cards.scryfall.io/normal/front/392.jpg"
    },
    {
        "name": "Era of Innovation",
        "description": "Era of Innovation é uma carta do set Modern Horizons 3 Commander.",
        "usage": "Use Era of Innovation para obter vantagem no campo de batalha em situações relacionadas a Modern Horizons 3 Commander.",
        "type": "Criatura Lendária",
        "image": "https://cards.scryfall.io/normal/front/183.jpg"
    },
    {
        "name": "Port Town",
        "description": "Port Town é uma carta do set Modern Horizons 3 Commander.",
        "usage": "Use Port Town para obter vantagem no campo de batalha em situações relacionadas a Modern Horizons 3 Commander.",
        "type": "Criatura Lendária",
        "image": "https://cards.scryfall.io/normal/front/364.jpg"
    },
    {
        "name": "Demolition Field",
        "description": "Demolition Field é uma carta do set Modern Horizons 3 Commander.",
        "usage": "Use Demolition Field para obter vantagem no campo de batalha em situações relacionadas a Modern Horizons 3 Commander.",
        "type": "Criatura Lendária",
        "image": "https://cards.scryfall.io/normal/front/335.jpg"
    },
    {
        "name": "Mystic Monastery",
        "description": "Mystic Monastery é uma carta do set Modern Horizons 3 Commander.",
        "usage": "Use Mystic Monastery para obter vantagem no campo de batalha em situações relacionadas a Modern Horizons 3 Commander.",
        "type": "Criatura Lendária",
        "image": "https://cards.scryfall.io/normal/front/360.jpg"
    },
    {
        "name": "Talisman of Creativity",
        "description": "Talisman of Creativity é uma carta do set Modern Horizons 3 Commander.",
        "usage": "Use Talisman of Creativity para obter vantagem no campo de batalha em situações relacionadas a Modern Horizons 3 Commander.",
        "type": "Criatura Lendária",
        "image": "https://cards.scryfall.io/normal/front/308.jpg"
    },
    {
        "name": "Coalition Relic",
        "description": "Coalition Relic é uma carta do set Modern Horizons 3 Commander.",
        "usage": "Use Coalition Relic para obter vantagem no campo de batalha em situações relacionadas a Modern Horizons 3 Commander.",
        "type": "Criatura Lendária",
        "image": "https://cards.scryfall.io/normal/front/286.jpg"
    },
    {
        "name": "Burnished Hart",
        "description": "Burnished Hart é uma carta do set Modern Horizons 3 Commander.",
        "usage": "Use Burnished Hart para obter vantagem no campo de batalha em situações relacionadas a Modern Horizons 3 Commander.",
        "type": "Criatura Lendária",
        "image": "https://cards.scryfall.io/normal/front/284.jpg"
    },
    {
        "name": "Whirler Virtuoso",
        "description": "Whirler Virtuoso é uma carta do set Modern Horizons 3 Commander.",
        "usage": "Use Whirler Virtuoso para obter vantagem no campo de batalha em situações relacionadas a Modern Horizons 3 Commander.",
        "type": "Criatura Lendária",
        "image": "https://cards.scryfall.io/normal/front/278.jpg"
    },
    {
        "name": "Arcane Signet",
        "description": "Arcane Signet é uma carta do set Modern Horizons 3 Commander.",
        "usage": "Use Arcane Signet para obter vantagem no campo de batalha em situações relacionadas a Modern Horizons 3 Commander.",
        "type": "Criatura Lendária",
        "image": "https://cards.scryfall.io/normal/front/283.jpg"
    },
    {
        "name": "Decoction Module",
        "description": "Decoction Module é uma carta do set Modern Horizons 3 Commander.",
        "usage": "Use Decoction Module para obter vantagem no campo de batalha em situações relacionadas a Modern Horizons 3 Commander.",
        "type": "Criatura Lendária",
        "image": "https://cards.scryfall.io/normal/front/288.jpg"
    },
    {
        "name": "Aether Hub",
        "description": "Aether Hub é uma carta do set Modern Horizons 3 Commander.",
        "usage": "Use Aether Hub para obter vantagem no campo de batalha em situações relacionadas a Modern Horizons 3 Commander.",
        "type": "Criatura Lendária",
        "image": "https://cards.scryfall.io/normal/front/317.jpg"
    },
    {
        "name": "Castle Vantress",
        "description": "Castle Vantress é uma carta do set Modern Horizons 3 Commander.",
        "usage": "Use Castle Vantress para obter vantagem no campo de batalha em situações relacionadas a Modern Horizons 3 Commander.",
        "type": "Criatura Lendária",
        "image": "https://cards.scryfall.io/normal/front/327.jpg"
    },
    {
        "name": "Skyclave Apparition",
        "description": "Skyclave Apparition é uma carta do set Modern Horizons 3 Commander.",
        "usage": "Use Skyclave Apparition para obter vantagem no campo de batalha em situações relacionadas a Modern Horizons 3 Commander.",
        "type": "Criatura Lendária",
        "image": "https://cards.scryfall.io/normal/front/172.jpg"
    },
    {
        "name": "Prairie Stream",
        "description": "Prairie Stream é uma carta do set Modern Horizons 3 Commander.",
        "usage": "Use Prairie Stream para obter vantagem no campo de batalha em situações relacionadas a Modern Horizons 3 Commander.",
        "type": "Criatura Lendária",
        "image": "https://cards.scryfall.io/normal/front/365.jpg"
    },
    {
        "name": "Temple of Epiphany",
        "description": "Temple of Epiphany é uma carta do set Modern Horizons 3 Commander.",
        "usage": "Use Temple of Epiphany para obter vantagem no campo de batalha em situações relacionadas a Modern Horizons 3 Commander.",
        "type": "Criatura Lendária",
        "image": "https://cards.scryfall.io/normal/front/387.jpg"
    },
    {
        "name": "Solemn Simulacrum",
        "description": "Solemn Simulacrum é uma carta do set Modern Horizons 3 Commander.",
        "usage": "Use Solemn Simulacrum para obter vantagem no campo de batalha em situações relacionadas a Modern Horizons 3 Commander.",
        "type": "Criatura Lendária",
        "image": "https://cards.scryfall.io/normal/front/306.jpg"
    },
    {
        "name": "Despertar Sacudido",
        "description": "Despertar Sacudido é uma carta do set Modern Horizons 3.",
        "usage": "Use Despertar Sacudido para obter vantagem no campo de batalha em situações relacionadas a Modern Horizons 3.",
        "type": "Criatura Lendária",
        "image": "https://cards.scryfall.io/normal/front/33.jpg"
    },
    {
        "name": "Sol Ring",
        "description": "Sol Ring é uma carta do set Modern Horizons 3 Commander.",
        "usage": "Use Sol Ring para obter vantagem no campo de batalha em situações relacionadas a Modern Horizons 3 Commander.",
        "type": "Criatura Lendária",
        "image": "https://cards.scryfall.io/normal/front/305.jpg"
    },
    {
        "name": "Temple of Enlightenment",
        "description": "Temple of Enlightenment é uma carta do set Modern Horizons 3 Commander.",
        "usage": "Use Temple of Enlightenment para obter vantagem no campo de batalha em situações relacionadas a Modern Horizons 3 Commander.",
        "type": "Criatura Lendária",
        "image": "https://cards.scryfall.io/normal/front/386.jpg"
    },
    {
        "name": "Montanha",
        "description": "Montanha é uma carta do set Modern Horizons 3.",
        "usage": "Use Montanha para obter vantagem no campo de batalha em situações relacionadas a Modern Horizons 3.",
        "type": "Criatura Lendária",
        "image": "https://cards.scryfall.io/normal/front/316.jpg"
    },
    {
        "name": "Crabomination",
        "description": "Crabomination é uma carta do set Modern Horizons 3.",
        "usage": "Use Crabomination para obter vantagem no campo de batalha em situações relacionadas a Modern Horizons 3.",
        "type": "Criatura Lendária",
        "image": "https://cards.scryfall.io/normal/front/452.jpg"
    },
    {
        "name": "Satya, Aetherflux Genius",
        "description": "Satya, Aetherflux Genius é uma carta do set Modern Horizons 3 Commander.",
        "usage": "Use Satya, Aetherflux Genius para obter vantagem no campo de batalha em situações relacionadas a Modern Horizons 3 Commander.",
        "type": "Criatura Lendária",
        "image": "https://cards.scryfall.io/normal/front/146.jpg"
    },
    {
        "name": "Frostboil Snarl",
        "description": "Frostboil Snarl é uma carta do set Modern Horizons 3 Commander.",
        "usage": "Use Frostboil Snarl para obter vantagem no campo de batalha em situações relacionadas a Modern Horizons 3 Commander.",
        "type": "Criatura Lendária",
        "image": "https://cards.scryfall.io/normal/front/344.jpg"
    },
    {
        "name": "Austere Command",
        "description": "Austere Command é uma carta do set Modern Horizons 3 Commander.",
        "usage": "Use Austere Command para obter vantagem no campo de batalha em situações relacionadas a Modern Horizons 3 Commander.",
        "type": "Criatura Lendária",
        "image": "https://cards.scryfall.io/normal/front/167.jpg"
    },
    {
        "name": "Coveted Jewel",
        "description": "Coveted Jewel é uma carta do set Modern Horizons 3 Commander.",
        "usage": "Use Coveted Jewel para obter vantagem no campo de batalha em situações relacionadas a Modern Horizons 3 Commander.",
        "type": "Criatura Lendária",
        "image": "https://cards.scryfall.io/normal/front/287.jpg"
    },
    {
        "name": "Goldspan Dragon",
        "description": "Goldspan Dragon é uma carta do set Modern Horizons 3 Commander.",
        "usage": "Use Goldspan Dragon para obter vantagem no campo de batalha em situações relacionadas a Modern Horizons 3 Commander.",
        "type": "Criatura Lendária",
        "image": "https://cards.scryfall.io/normal/front/212.jpg"
    },
    {
        "name": "Mystic Gate",
        "description": "Mystic Gate é uma carta do set Modern Horizons 3 Commander.",
        "usage": "Use Mystic Gate para obter vantagem no campo de batalha em situações relacionadas a Modern Horizons 3 Commander.",
        "type": "Criatura Lendária",
        "image": "https://cards.scryfall.io/normal/front/359.jpg"
    },
    {
        "name": "Akroma's Will",
        "description": "Akroma's Will é uma carta do set Modern Horizons 3 Commander.",
        "usage": "Use Akroma's Will para obter vantagem no campo de batalha em situações relacionadas a Modern Horizons 3 Commander.",
        "type": "Criatura Lendária",
        "image": "https://cards.scryfall.io/normal/front/165.jpg"
    },
    {
        "name": "Adarkar Wastes",
        "description": "Adarkar Wastes é uma carta do set Modern Horizons 3 Commander.",
        "usage": "Use Adarkar Wastes para obter vantagem no campo de batalha em situações relacionadas a Modern Horizons 3 Commander.",
        "type": "Criatura Lendária",
        "image": "https://cards.scryfall.io/normal/front/316.jpg"
    }
];

export default deck;
