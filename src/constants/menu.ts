type MenuItem = {
  name: string
  description: string
  price?: string | number
  smallPortionPrice?: number
  largePortionPrice?: number
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
}

export const menuData: MenuData = {
  starters: [
    {
      name: 'Couvert Mix',
      price: 'R$119,00',
      description:
        'Um combinado variado de entradas deliciosas para começar a refeição.',
    },
    {
      name: 'Casquinha de Siri ou Aratu',
      price: 'R$39,00',
      description: 'Casquinha crocante recheada com siri ou aratu temperado.',
    },
    {
      name: 'Casquinha de Lagosta Gratinada',
      price: 'R$59,00',
      description: 'Lagosta suculenta gratinada em uma casquinha crocante.',
    },
    {
      name: 'Mexilhões ao Vinagrete (250g)',
      price: 'R$59,00',
      description: 'Mexilhões frescos ao vinagrete com um toque de limão.',
    },
    {
      name: 'Frigideira de Mexilhões (250g)',
      price: 'R$59,00',
      description:
        'Mexilhões salteados e temperados, servidos diretamente na frigideira.',
    },
    {
      name: 'Vinagrete de Lagosta com Lula',
      price: 'R$129,00',
      description: 'Lagosta e lulas frescas servidas com vinagrete especial.',
    },
    {
      name: 'Vinagrete de Polvo e Lagosta',
      price: 'R$199,00',
      description:
        'Combinação premium de polvo e lagosta, servidos com vinagrete.',
    },
    {
      name: 'Vinagrete de Lula com Mexilhões',
      price: 'R$99,00',
      description: 'Lulas e mexilhões frescos marinados em vinagrete saboroso.',
    },
    {
      name: 'Ostras Gratinadas (12un)',
      price: 'R$98,00',
      description: 'Ostras gratinadas com queijo e temperos especiais.',
    },
    {
      name: 'Lulas à Provençal (400g)',
      price: 'R$99,00',
      description: 'Lulas grelhadas à provençal com alho e salsa.',
    },
    {
      name: 'Salada Mista',
      price: 'R$65,00',
      description: 'Salada fresca com uma combinação de folhas e legumes.',
    },
    {
      name: 'Salada de Lagosta',
      price: 'R$47,00',
      description: 'Salada leve e refrescante com pedaços de lagosta.',
    },
    {
      name: 'Camarões Rosa à Paulista (200g)',
      price: 'R$89,00',
      description: 'Camarões rosa preparados à paulista, com alho e azeite.',
    },
    {
      name: 'Mexilhões Empanados (250g)',
      price: 'R$99,00',
      description: 'Mexilhões crocantes empanados e fritos.',
    },
    {
      name: 'Camarões Rosa ao Catupiry (200g)',
      price: 'R$65,00',
      description: 'Camarões rosa gratinados com catupiry.',
    },
    {
      name: 'Caldo de Sururu',
      price: 'R$39,00',
      description: 'Caldo saboroso feito com sururu, ideal para aquecer.',
    },
  ],
  portions: [
    {
      name: 'Ostras Frescas (6un)',
      price: '49,00',
      description:
        'Deliciosas ostras frescas, servidas em meia dúzia com acompanhamentos clássicos.',
    },
    {
      name: 'Iscas de Linguado (200g)',
      price: '75,00',
      description:
        'Pedaços crocantes de linguado, levemente empanados e fritos à perfeição.',
    },
    {
      name: 'Iscas de Badejo (200g)',
      price: '99,00',
      description:
        'Porção generosa de badejo fresco em iscas, empanadas e douradas.',
    },
    {
      name: 'Lulas em Anéis (250g)',
      price: '54,00',
      description:
        'Anéis de lula frescos, crocantes por fora e macios por dentro.',
    },
    {
      name: 'Bolinhos de Bacalhau (6un)',
      price: '39,00',
      description:
        'Bolinhos tradicionais de bacalhau, preparados com uma receita autêntica.',
    },
    {
      name: 'Camarões Empanados (200g)',
      price: '99,00',
      description:
        'Camarões empanados crocantes, servidos em uma porção de 200g.',
    },
    {
      name: 'Batata Frita',
      price: '39,00',
      description: 'Clássica porção de batata frita, crocante e dourada.',
    },
    {
      name: 'Mandioca Frita',
      price: '39,00',
      description:
        'Mandioca frita crocante, ideal para acompanhar qualquer prato.',
    },
    {
      name: 'Pastel de Camarão ou Carne (6un)',
      price: '38,00',
      description:
        'Seis pastéis recheados com camarão ou carne, fritos e dourados.',
    },
    {
      name: 'Camarão Frito (250g)',
      price: '69,00',
      description: 'Porção de camarão frito, preparado com temperos especiais.',
    },
  ],
  moquecas: [
    {
      name: 'De Badejo',
      description:
        'Moqueca tradicional com badejo, cozido em leite de coco e temperos típicos da culinária paulista.',
      smallPortionPrice: 125.0,
      largePortionPrice: 249.0,
    },
    {
      name: 'De Camarões Rosinha',
      description:
        'Moqueca preparada com camarões rosinha frescos, combinando sabores do mar com temperos brasileiros.',
      smallPortionPrice: 110.0,
      largePortionPrice: 220.0,
    },
    {
      name: 'De Camarões Rosa',
      description:
        'Moqueca de camarões rosa de grande porte, em um molho rico de leite de coco e dendê.',
      smallPortionPrice: 125.0,
      largePortionPrice: 249.0,
    },
    {
      name: 'De Lagosta',
      description:
        'Moqueca luxuosa feita com lagosta fresca, ideal para os amantes de frutos do mar sofisticados.',
      smallPortionPrice: 140.0,
      largePortionPrice: 280.0,
    },
    {
      name: 'De Siri',
      description:
        'Moqueca de siri com temperos brasileiros, rica em sabor e frescor.',
      smallPortionPrice: 119.0,
      largePortionPrice: 238.0,
    },
    {
      name: 'De Peixe',
      description:
        'Moqueca clássica com peixe fresco, cozido em leite de coco e azeite de dendê.',
      smallPortionPrice: 110.0,
      largePortionPrice: 220.0,
    },
  ],
  combineds: [
    {
      name: 'De Badejo (400g) com Camarões Rosinha (200g)',
      description:
        'Combinação deliciosa de badejo com camarões rosinha para uma experiência completa de frutos do mar.',
      price: 278.0,
    },
    {
      name: 'De Badejo (400g) com Camarões Rosa (200g)',
      description:
        'Combinação sofisticada de badejo com camarões rosa, perfeita para quem busca sabor e frescor.',
      price: 298.0,
    },
    {
      name: 'De Badejo (400g) com Lagosta (200g)',
      description:
        'Luxuosa combinação de badejo com lagosta, uma verdadeira festa para os paladares exigentes.',
      price: 320.0,
    },
    {
      name: 'De Lagosta (200g) com Camarões Rosa (200g)',
      description:
        'Lagosta e camarões rosa em uma combinação irresistível de frutos do mar frescos e suculentos.',
      price: 249.0,
    },
  ],
  bobos: [
    {
      name: 'De Camarões Rosinha (200g)',
      description:
        'Bobó de camarão rosinha, uma deliciosa mistura de camarões com purê de mandioca e leite de coco.',
      price: 110.0,
    },
    {
      name: 'De Camarões Rosinha (400g)',
      description:
        'Bobó de camarões rosinha em porção generosa, perfeito para compartilhar.',
      price: 220.0,
    },
    {
      name: 'De Camarões Rosa (200g)',
      description:
        'Bobó feito com camarões rosa, trazendo um toque de sofisticação à receita tradicional.',
      price: 125.0,
    },
    {
      name: 'De Camarões Rosa (400g)',
      description:
        'Bobó de camarões rosa em porção maior, ideal para quem busca sabor e quantidade.',
      price: 249.0,
    },
    {
      name: 'De Camarões Rosa (200g) e Rosinha (200g)',
      description:
        'Bobó que combina camarões rosa e rosinha, uma deliciosa mistura de sabores.',
      price: 220.0,
    },
  ],
  grilledFried: [
    {
      name: 'Com Purê de Batata e Arroz (200g)',
      description:
        'Prato de badejo ou abadejo frito ou grelhado, acompanhado de purê de batata e arroz.',
      price: 125.0,
    },
    {
      name: 'Com Purê de Batata e Arroz (400g)',
      description:
        'Versão maior do prato com badejo ou abadejo, servido com purê de batata e arroz.',
      price: 249.0,
    },
    {
      name: 'Com Legumes (200g)',
      description:
        'Badejo ou abadejo frito ou grelhado, servido com legumes frescos.',
      price: 125.0,
    },
    {
      name: 'Com Legumes (400g)',
      description:
        'Prato maior de badejo ou abadejo, acompanhado de uma porção generosa de legumes.',
      price: 249.0,
    },
    {
      name: 'Ao molho de Camarões Rosinha',
      description:
        'Badejo ou abadejo ao molho de camarões rosinha, uma opção deliciosa e rica em frutos do mar.',
      price: 249.0,
    },
    {
      name: 'Ao molho de Camarões Rosa',
      description:
        'Badejo ou abadejo ao molho de camarões rosa, um prato refinado e cheio de sabor.',
      price: 278.0,
    },
    {
      name: 'Salmão com Alcaparraz e Arroz com Brócolis (200g)',
      description:
        'Salmão grelhado com alcaparras, acompanhado de arroz com brócolis.',
      price: 298.0,
    },
    {
      name: 'Salmão com Alcaparraz e Arroz com Brócolis (400g)',
      description:
        'Versão maior do salmão grelhado com alcaparras, servido com arroz com brócolis.',
      price: 99.0,
    },
  ],
  specials: [
    {
      name: 'Moqueca à Moda da Casa',
      description:
        'Badejo (600g), Lagosta (400g), Camarões Rosa (400g), Camarões Rosinha (200g), Lulas (400g) e Mexilhões (200g). Um prato completo e farto para quem deseja desfrutar de uma autêntica moqueca com frutos do mar variados.',
      price: 'R$ 768,00',
    },
    {
      name: '1/2 Moqueca à Moda da Casa',
      description:
        'Badejo (300g), Lagosta (200g), Camarões Rosa (200g), Camarões Rosinha (100g), Lulas (200g) e Mexilhões (100g). A versão reduzida do prato tradicional, perfeita para grupos menores.',
      price: 'R$ 448,00',
    },
    {
      name: 'Paella para 4 Pessoas',
      description:
        'Uma paella rica em sabores do mar, perfeita para compartilhar com a família ou amigos.',
      price: 'R$ 558,00',
    },
    {
      name: 'Paella para 2 Pessoas',
      description:
        'Abadejo, Bacalhau, Camarões Rosa, Camarões Rosinha, Lulas e Mexilhões. Decorado com Camarões Rosa Inteiros e Caudas de Lagosta. Ideal para um jantar especial a dois. Tempo de preparo: 50 minutos.',
      price: 'R$ 389,00',
    },
    {
      name: 'Titanic para 4 Pessoas',
      description:
        'Um prato grandioso de frutos do mar, feito para surpreender e satisfazer todos à mesa.',
      price: 'R$ 568,00',
    },
    {
      name: 'Titanic para 2 Pessoas',
      description:
        'Filé de Abadejo grelhado acompanhado de Camarões Rosa empanados ao molho de camarões. Uma combinação perfeita para dois.',
      price: 'R$ 339,00',
    },
    {
      name: 'Peixe na Telha',
      description:
        'Um prato tradicional servido em telha de barro, garantindo um sabor autêntico e rústico.',
      price: 'R$ 279,00',
    },
    {
      name: 'Peixe na Telha com Camarões Rosa',
      description:
        'O clássico peixe na telha com um toque especial de camarões rosa, para os amantes de frutos do mar.',
      price: 'R$ 329,00',
    },
    {
      name: 'Peixe na Telha com Lagosta',
      description:
        'Peixe servido na telha com o toque refinado de lagosta. Uma escolha sofisticada e deliciosa.',
      price: 'R$ 349,00',
    },
    {
      name: 'Bacalhau à Moda Capixaba (450g)',
      description:
        'Bacalhau preparado ao estilo capixaba, trazendo sabores autênticos e bem temperados.',
      price: 'R$ 298,00',
    },
    {
      name: 'Bacalhau ao Forno (450g)',
      description:
        'Bacalhau assado no forno, suculento e saboroso, perfeito para uma refeição completa.',
      price: 'R$ 298,00',
    },
  ],
  individuals: [
    {
      name: 'Truta com Legumes no Vapor',
      description:
        'Truta servida com uma saudável porção de legumes preparados no vapor.',
      price: 'R$ 89,00',
    },
    {
      name: 'Truta com Arroz de Brócolis e Alcaparras',
      description:
        'Truta grelhada acompanhada de arroz de brócolis e alcaparras, um prato leve e saboroso.',
      price: 'R$ 89,00',
    },
    {
      name: 'Truta com Purê ou Batata Sauté',
      description:
        'Deliciosa truta servida com a opção de purê cremoso ou batata sauté.',
      price: 'R$ 89,00',
    },
    {
      name: 'Risoto de Camarões Rosinha',
      description:
        'Risoto cremoso acompanhado de camarões rosinha, ideal para quem aprecia frutos do mar.',
      price: 'R$ 109,00',
    },
    {
      name: 'Risoto de Camarões Rosa',
      description:
        'Risoto cremoso com camarões rosa, trazendo sabores intensos e marcantes.',
      price: 'R$ 129,00',
    },
    {
      name: 'Arroz de Polvo',
      description:
        'Polvo suculento servido com arroz temperado, uma escolha perfeita para os fãs de frutos do mar.',
      price: 'R$ 179,00',
    },
    {
      name: 'Espaguete com Camarões Rosa e Rosinha',
      description:
        'Espaguete combinado com camarões rosa e rosinha, ideal para quem gosta de uma massa leve e saborosa.',
      price: 'R$ 179,00',
    },
    {
      name: 'Espaguete com Frutos do Mar',
      description:
        'Espaguete servido com uma variedade de frutos do mar frescos.',
      price: 'R$ 110,00',
    },
  ],
  alternatives: [
    {
      name: 'Peito de Frango Grelhado (Purê ou Fritas)',
      description:
        'Peito de frango grelhado, servido com a opção de purê ou fritas, uma escolha leve e saborosa.',
      price: 'R$ 59,00',
    },
    {
      name: 'Filé Mignon com Fritas',
      description: 'Filé mignon grelhado acompanhado de batatas fritas.',
      price: 'R$ 99,00',
    },
    {
      name: 'Filé à Parmegiana',
      description:
        'Clássico filé à parmegiana, com molho de tomate e queijo derretido.',
      price: 'R$ 99,00',
    },
    {
      name: 'Espaguete com Picadinho de Filé Mignon ao Sugo',
      description:
        'Espaguete servido com picadinho de filé mignon ao molho sugo, uma refeição completa e saborosa.',
      price: 'R$ 69,00',
    },
    {
      name: 'Picanha Importada (300g)',
      description:
        'Picanha importada grelhada, perfeita para os amantes de carne.',
      price: 'R$ 120,00',
    },
  ],
  optionalAddOns: [
    {
      name: 'Lulas',
      description:
        'Porção de lulas frescas, perfeitas para acompanhar as moquecas.',
      price: 59.0,
    },
    {
      name: 'Mexilhões',
      description:
        'Mexilhões frescos para incrementar ainda mais seu prato de frutos do mar.',
      price: 59.0,
    },
    {
      name: 'Banana da Terra',
      description:
        'Banana da terra frita, um acompanhamento doce e perfeito para contrastar com os sabores das moquecas.',
      price: 39.0,
    },
  ],
}
