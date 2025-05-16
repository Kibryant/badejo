import { drinks } from './drinks'

export type MenuItem = {
  number: string
  name: string
  description: string
  price: string | number
}

type MenuData = {
  starters: MenuItem[]
  portions: MenuItem[]
  moquecas: MenuItem[]
  combineds: MenuItem[]
  bobos: MenuItem[]
  grilledFried: MenuItem[]
  specials: MenuItem[]
  individuals: MenuItem[]
  alternatives: MenuItem[]
  optionalAddOns: MenuItem[]
  drinks: typeof drinks
}

export const menuData: MenuData = {
  starters: [
    {
      number: '01',
      name: 'Couvert Mix',
      price: '119,00',
      description:
        'Um combinado variado de entradas deliciosas, contendo iscas de peixe, lulas em anéis, bolinhos de bacalhau, camarões empanados e mexilhões ao vinagrete.',
    },
    {
      number: '02',
      name: 'Casquinha de Siri ou Aratu',
      price: '39,00',
      description: 'Puro catado de marisco',
    },
    {
      number: '03',
      name: 'Casquinha de Lagosta Gratinada',
      price: '59,00',
      description:
        'Pedaços de lagosta fatiados, grelhados com queijo parmesão.',
    },
    {
      number: '04',
      name: 'Mexilhões ao Vinagrete (250g)',
      price: '59,00',
      description: 'Mexilhões frescos ao vinagrete com um toque de limão.',
    },
    {
      number: '05',
      name: 'Frigideira de Mexilhões (250g)',
      price: '59,00',
      description: 'Mexilhões salteados e temperados, puxados na frigideira.',
    },
    {
      number: '06 - A',
      name: 'Vinagrete de Lagosta com Lula',
      price: '129,00',
      description:
        'Pedaços de Lagosta e lulas frescas servidas com vinagrete especial.',
    },
    {
      number: '06 - B',
      name: 'Vinagrete de Polvo e Lagosta',
      price: '199,00',
      description:
        'Combinação premium de polvo e lagosta, servidos com vinagrete.',
    },
    {
      number: '06 - C',
      name: 'Vinagrete de Lula com Mexilhões',
      price: '99,00',
      description: 'Lulas e mexilhões frescos marinados em vinagrete saboroso.',
    },
    {
      number: '07',
      name: 'Ostras Gratinadas (12un)',
      price: '98,00',
      description: 'Ostras gratinadas com queijo e temperos especiais.',
    },
    {
      number: '08',
      name: 'Lulas à Provençal (400g)',
      price: '65,00',
      description: 'Lulas grelhadas à provençal com alho e salsa.',
    },
    {
      number: '09',
      name: 'Salada Mista',
      price: '47,00',
      description: 'Salada fresca com uma combinação de folhas e legumes.',
    },
    {
      number: '10',
      name: 'Salada de Lagosta',
      price: '89,00',
      description: 'Salada leve e refrescante com pedaços de lagosta.',
    },
    {
      number: '11',
      name: 'Camarões Rosa à Paulista (200g)',
      price: '99,00',
      description: 'Camarões rosa preparados à paulista, com alho e azeite.',
    },
    {
      number: '12',
      name: 'Mexilhões Empanados (250g)',
      price: '65,00',
      description: 'Mexilhões empanados e fritos.',
    },
    {
      number: '13',
      name: 'Camarões Rosa ao Catupiry (200g)',
      price: '119,00',
      description: 'Camarões rosa gratinados com catupiry.',
    },
    {
      number: '14',
      name: 'Caldo de Sururu',
      price: '39,00',
      description: 'Caldo saboroso feito com sururu, ideal para aquecer.',
    },
  ],
  portions: [
    {
      number: '15',
      name: 'Ostras Frescas (6un)',
      price: '49,00',
      description:
        'Deliciosas ostras frescas, acompanhadas por limão e servidas sobre cubos de gelo.',
    },
    {
      number: '16',
      name: 'Iscas de Linguado (200g)',
      price: '75,00',
      description:
        'Pedaços crocantes de linguado, levemente empanados e fritos à perfeição.',
    },
    {
      number: '17',
      name: 'Iscas de Badejo (200g)',
      price: '99,00',
      description:
        'Porção generosa de badejo fresco em iscas, empanadas e douradas.',
    },
    {
      number: '18',
      name: 'Lulas em Anéis (250g)',
      price: '54,00',
      description:
        'Anéis de lula frescos, crocantes por fora e macios por dentro.',
    },
    {
      number: '19',
      name: 'Bolinhos de Bacalhau (6un)',
      price: '39,00',
      description:
        'Bolinhos tradicionais de bacalhau, preparados com uma receita autêntica.',
    },
    {
      number: '20',
      name: 'Camarões Empanados (200g)',
      price: '99,00',
      description:
        'Camarões empanados crocantes, servidos em uma porção de 200g.',
    },
    {
      number: '21',
      name: 'Batata Frita',
      price: '39,00',
      description: 'Clássica porção de batata frita, crocante e dourada.',
    },
    {
      number: '22',
      name: 'Mandioca Frita',
      price: '39,00',
      description:
        'Mandioca frita crocante, ideal para acompanhar qualquer prato.',
    },
    {
      number: '23',
      name: 'Pastel de Camarão ou Carne (6un)',
      price: '38,00',
      description:
        'Seis pastéis recheados com camarão ou carne, fritos e dourados.',
    },
    {
      number: '24',
      name: 'Camarão Frito (250g)',
      price: '69,00',
      description: 'Porção de camarão frito, preparado com temperos especiais.',
    },
  ],
  moquecas: [
    {
      number: '25 - A',
      name: 'De Badejo (200g) 1P',
      description: 'Postas de badejo cozidos, preparados à tradição capixaba',
      price: '125,00',
    },
    {
      number: '25 - B',
      name: 'De Badejo (400g) 2P',
      description: 'Postas de badejo cozidos, preparados à tradição capixaba',
      price: '249,00',
    },
    {
      number: '26 - A',
      name: 'De Camarões Rosinha (200g) 1P',
      description:
        'Moqueca preparada com camarões rosinha frescos, combinando sabores do mar com temperos brasileiros.',
      price: '110,00',
    },
    {
      number: '26 - B',
      name: 'De Camarões Rosinha (400g) 2P',
      description:
        'Moqueca preparada com camarões rosinha frescos, combinando sabores do mar com temperos brasileiros.',
      price: '220,00',
    },
    {
      number: '27 - A',
      name: 'De Camarões Rosa (200g) 1P',
      description: 'Moqueca de camarões rosa selecionados',
      price: '125,00',
    },
    {
      number: '27 - B',
      name: 'De Camarões Rosa (400g) 2P',
      description: 'Moqueca de camarões rosa selecionados',
      price: '249,00',
    },
    {
      number: '28 - A',
      name: 'De Lagosta (200g) 1P',
      description:
        'Moqueca luxuosa feita com lagosta fresca, ideal para os amantes de frutos do mar sofisticados.',
      price: '140.0',
    },
    {
      number: '28 - B',
      name: 'De Lagosta (400g) 2P',
      description:
        'Moqueca luxuosa feita com lagosta fresca, ideal para os amantes de frutos do mar sofisticados.',
      price: '280.0',
    },
    {
      number: '29 - A',
      name: 'De Siri (200g) 1P',
      description:
        'Moqueca de siri com temperos brasileiros, rica em sabor e frescor.',
      price: '119.0',
    },
    {
      number: '29 - B',
      name: 'De Siri (400g) 2P',
      description:
        'Moqueca de siri com temperos brasileiros, rica em sabor e frescor.',
      price: '238.0',
    },
    {
      number: '30 - A',
      name: 'De Peixe (200g) 1P',
      description: 'Moqueca clássica de peixes da estação',
      price: '110.0',
    },
    {
      number: '30 - B',
      name: 'De Peixe (400g) 2P',
      description: 'Moqueca clássica de peixes da estação',
      price: '220.0',
    },
  ],
  combineds: [
    {
      number: '31',
      name: 'De Badejo (400g) com Camarões Rosinha (200g)',
      description:
        'Combinação deliciosa de badejo com camarões rosinha para uma experiência completa de frutos do mar.',
      price: 278.0,
    },
    {
      number: '32',
      name: 'De Badejo (400g) com Camarões Rosa (200g)',
      description:
        'Combinação sofisticada de badejo com camarões rosa, perfeita para quem busca sabor e frescor.',
      price: 298.0,
    },
    {
      number: '33',
      name: 'De Badejo (400g) com Lagosta (200g)',
      description:
        'Luxuosa combinação de badejo com lagosta, uma verdadeira festa para os paladares exigentes.',
      price: 320.0,
    },
    {
      number: '34',
      name: 'De Lagosta (200g) com Camarões Rosa (200g)',
      description:
        'Lagosta e camarões rosa em uma combinação irresistível de frutos do mar frescos e suculentos.',
      price: 249.0,
    },
  ],
  bobos: [
    {
      number: '49',
      name: 'De Camarões Rosinha (200g) 1P',
      description:
        'Bobó de camarão rosinha, uma deliciosa mistura de camarões com purê de mandioca e leite de coco.',
      price: 110.0,
    },
    {
      number: '50',
      name: 'De Camarões Rosinha (400g) 2P',
      description:
        'Bobó de camarões rosinha em porção generosa, perfeito para compartilhar.',
      price: 220.0,
    },
    {
      number: '51',
      name: 'De Camarões Rosa (200g) 1P',
      description:
        'Bobó feito com camarões rosa, trazendo um toque de sofisticação à receita tradicional.',
      price: 125.0,
    },
    {
      number: '52',
      name: 'De Camarões Rosa (400g) 2P',
      description:
        'Bobó de camarões rosa em porção maior, ideal para quem busca sabor e quantidade.',
      price: 249.0,
    },
    {
      number: '53',
      name: 'De Camarões Rosa (200g) e Rosinha (200g)',
      description:
        'Bobó que combina camarões rosa e rosinha, uma deliciosa mistura de sabores.',
      price: 220.0,
    },
  ],
  grilledFried: [
    {
      number: '54',
      name: 'Com Purê de Batata e Arroz (200g)',
      description:
        'Prato de badejo ou abadejo frito ou grelhado, acompanhado de purê de batata e arroz.',
      price: 125.0,
    },
    {
      number: '55',
      name: 'Com Purê de Batata e Arroz (400g)',
      description:
        'Versão maior do prato com badejo ou abadejo, servido com purê de batata e arroz.',
      price: 249.0,
    },
    {
      number: '56',
      name: 'Com Legumes (200g)',
      description:
        'Badejo ou abadejo frito ou grelhado, servido com legumes frescos.',
      price: 125.0,
    },
    {
      number: '57',
      name: 'Com Legumes (400g)',
      description:
        'Prato maior de badejo ou abadejo, acompanhado de uma porção generosa de legumes.',
      price: 249.0,
    },
    {
      number: '58',
      name: 'Ao molho de Camarões Rosinha',
      description:
        'Badejo ou abadejo ao molho de camarões rosinha, uma opção deliciosa e rica em frutos do mar.',
      price: 278.0,
    },
    {
      number: '59',
      name: 'Ao molho de Camarões Rosa',
      description:
        'Badejo ou abadejo ao molho de camarões rosa, um prato refinado e cheio de sabor.',
      price: 298.0,
    },
    {
      number: '60',
      name: 'Salmão com Alcaparras e Arroz com Brócolis (200g)',
      description:
        'Salmão grelhado com alcaparras, acompanhado de arroz com brócolis.',
      price: 99.0,
    },
    {
      number: '61',
      name: 'Salmão com Alcaparras e Arroz com Brócolis (400g)',
      description:
        'Versão maior do salmão grelhado com alcaparras, servido com arroz com brócolis.',
      price: 198.0,
    },
  ],
  specials: [
    {
      number: '38',
      name: 'Moqueca à Moda da Casa',
      description:
        'Badejo (600g), Lagosta (400g), Camarões Rosa (400g), Camarões Rosinha (200g), Lulas (400g) e Mexilhões (200g). Um prato completo e farto para quem deseja desfrutar de uma autêntica moqueca com frutos do mar variados.',
      price: '768,00',
    },
    {
      number: '39',
      name: '1/2 Moqueca à Moda da Casa',
      description:
        'Badejo (300g), Lagosta (200g), Camarões Rosa (200g), Camarões Rosinha (100g), Lulas (200g) e Mexilhões (100g). A versão reduzida do prato tradicional, perfeita para grupos menores.',
      price: '448,00',
    },
    {
      number: '40',
      name: 'Paella para 4 Pessoas',
      description:
        'Uma paella rica em sabores do mar, perfeita para compartilhar com a família ou amigos.',
      price: '558,00',
    },
    {
      number: '41',
      name: 'Paella para 2 Pessoas',
      description:
        'Abadejo, Bacalhau, Camarões Rosa, Camarões Rosinha, Lulas e Mexilhões. Decorado com Camarões Rosa Inteiros e Caudas de Lagosta. Ideal para um jantar especial a dois. Tempo de preparo: ~ 50 minutos.',
      price: '339,00',
    },
    {
      number: '42',
      name: 'Titanic para 4 Pessoas',
      description:
        'Um prato grandioso de frutos do mar, feito para surpreender e satisfazer todos à mesa.',
      price: '568,00',
    },
    {
      number: '43',
      name: 'Titanic para 2 Pessoas',
      description:
        'Filé de Abadejo grelhado acompanhado de Camarões Rosa empanados ao molho de camarões. Uma combinação perfeita para dois.',
      price: '339,00',
    },
    {
      number: '44',
      name: 'Peixe na Telha',
      description:
        'Um prato tradicional servido em telha de barro, garantindo um sabor autêntico e rústico.',
      price: '279,00',
    },
    {
      number: '45',
      name: 'Peixe na Telha com Camarões Rosa',
      description:
        'O clássico peixe na telha com um toque especial de camarões rosa, para os amantes de frutos do mar.',
      price: '329,00',
    },
    {
      number: '46',
      name: 'Peixe na Telha com Lagosta',
      description:
        'Peixe servido na telha com o toque refinado de lagosta. Uma escolha sofisticada e deliciosa.',
      price: '349,00',
    },
    {
      number: '47',
      name: 'Bacalhau à Moda Capixaba (450g)',
      description:
        'Bacalhau preparado ao estilo capixaba, trazendo sabores autênticos e bem temperados.',
      price: '298,00',
    },
    {
      number: '48',
      name: 'Bacalhau ao Forno (450g)',
      description:
        'Bacalhau assado no forno, suculento e saboroso, perfeito para uma refeição completa.',
      price: '298,00',
    },
  ],
  individuals: [
    {
      number: '62',
      name: 'Truta com Legumes no Vapor',
      description:
        'Truta servida com uma saudável porção de legumes preparados no vapor.',
      price: '89,00',
    },
    {
      number: '63',
      name: 'Truta com Arroz de Brócolis e Alcaparras',
      description:
        'Truta grelhada acompanhada de arroz de brócolis e alcaparras, um prato leve e saboroso.',
      price: '89,00',
    },
    {
      number: '64',
      name: 'Truta com Purê ou Batata Sauté',
      description:
        'Deliciosa truta servida com a opção de purê cremoso ou batata sauté.',
      price: '89,00',
    },
    {
      number: '65',
      name: 'Risoto de Camarões Rosinha',
      description:
        'Risoto acompanhado de camarões rosinha, ideal para quem aprecia frutos do mar.',
      price: '109,00',
    },
    {
      number: '66',
      name: 'Risoto de Camarões Rosa',
      description:
        'Risoto com camarões rosa, trazendo sabores intensos e marcantes.',
      price: '129,00',
    },
    {
      number: '67',
      name: 'Arroz de Polvo',
      description:
        'Polvo suculento servido com arroz temperado, uma escolha perfeita para os fãs de frutos do mar.',
      price: '179,00',
    },
    {
      number: '68',
      name: 'Espaguete com Camarões Rosa e Rosinha',
      description:
        'Espaguete combinado com camarões rosa e rosinha, ideal para quem gosta de uma massa leve e saborosa.',
      price: '99,00',
    },
    {
      number: '69',
      name: 'Espaguete com Frutos do Mar',
      description:
        'Espaguete servido com uma variedade de frutos do mar frescos.',
      price: '110,00',
    },
  ],
  alternatives: [
    {
      number: '70',
      name: 'Peito de Frango Grelhado (Purê ou Fritas)',
      description:
        'Peito de frango grelhado, servido com a opção de purê ou fritas, uma escolha leve e saborosa.',
      price: '59,00',
    },
    {
      number: '71',
      name: 'Filé Mignon com Fritas',
      description: 'Filé mignon grelhado acompanhado de batatas fritas.',
      price: '99,00',
    },
    {
      number: '72',
      name: 'Filé à Parmegiana',
      description:
        'Clássico filé à parmegiana, com molho de tomate e queijo derretido.',
      price: '99,00',
    },
    {
      number: '73',
      name: 'Espaguete com Picadinho de Filé Mignon ao Sugo',
      description:
        'Espaguete servido com picadinho de filé mignon ao molho sugo, uma refeição completa e saborosa.',
      price: '69,00',
    },
    {
      number: '74',
      name: 'Filé Mignon com Arroz e Purê',
      description:
        'Filé mignon grelhado, servido com arroz e purê, uma combinação clássica.',
      price: '120,00',
    },
  ],
  optionalAddOns: [
    {
      number: '35',
      name: 'Lulas',
      description:
        'Porção de lulas frescas, perfeitas para acompanhar as moquecas.',
      price: 59.0,
    },
    {
      number: '36',
      name: 'Mexilhões',
      description:
        'Mexilhões frescos para incrementar ainda mais seu prato de frutos do mar.',
      price: 59.0,
    },
    {
      number: '37',
      name: 'Banana da Terra',
      description:
        'Banana da terra frita, um acompanhamento doce e perfeito para contrastar com os sabores das moquecas.',
      price: 39.0,
    },
  ],
  drinks,
}
