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
            price: '129,00',
            description:
                'Seleção especial de entradas da casa, ideal para compartilhar, com acompanhamentos variados e sabores do mar.',
        },
        {
            number: '02',
            name: 'Casquinha de Siri ou Aratu',
            price: '42,00',
            description:
                'Carne desfiada de siri ou aratu, temperada e gratinada na própria casca.',
        },
        {
            number: '03',
            name: 'Casquinha de Lagosta Gratinada',
            price: '65,00',
            description:
                'Lagosta desfiada ao creme, gratinada com queijo, servida na casquinha.',
        },
        {
            number: '04',
            name: 'Mexilhões ao Vinagrete (250g)',
            price: '65,00',
            description:
                'Mexilhões frescos cozidos e servidos com vinagrete especial da casa.',
        },
        {
            number: '05',
            name: 'Frigideira de Mexilhões (250g)',
            price: '65,00',
            description: 'Mexilhões salteados com alho, cebola e temperos frescos.',
        },
        {
            number: '06A',
            name: 'Vinagrete de Lagosta com Lula',
            price: '139,00',
            description:
                'Lagosta e lula em cubos, marinadas em vinagrete cítrico e refrescante.',
        },
        {
            number: '06B',
            name: 'Vinagrete de Polvo e Lagosta',
            price: '199,00',
            description: 'Combinação nobre de polvo e lagosta ao vinagrete artesanal.',
        },
        {
            number: '06C',
            name: 'Vinagrete de Lula com Mexilhões',
            price: '109,00',
            description: 'Lula macia e mexilhões frescos marinados em vinagrete.',
        },
        {
            number: '07',
            name: 'Ostras Gratinadas (12 un.)',
            price: '110,00',
            description: 'Ostras frescas gratinadas com molho especial e queijo.',
        },
        {
            number: '08',
            name: 'Lulas à Provençal (400g)',
            price: '69,00',
            description: 'Lulas grelhadas com alho, ervas finas e azeite.',
        },
        {
            number: '09',
            name: 'Salada Mista',
            price: '67,00',
            description: 'Folhas frescas, legumes selecionados e molho da casa.',
        },
        {
            number: '10',
            name: 'Salada de Lagosta',
            price: '99,00',
            description: 'Lagosta desfiada servida fria com legumes e molho especial.',
        },
        {
            number: '11',
            name: 'Camarões Rosa à Paulista (200g)',
            price: '110,00',
            description: 'Camarões rosa salteados com alho, cebola e temperos clássicos.',
        },
        {
            number: '12',
            name: 'Mexilhões Empanados (250g)',
            price: '69,00',
            description:
                'Mexilhões empanados e fritos, crocantes por fora e macios por dentro.',
        },
        {
            number: '13',
            name: 'Camarões Rosa ao Catupiry (200g)',
            price: '129,00',
            description: 'Camarões rosa ao creme de Catupiry, gratinados.',
        },
        {
            number: '14',
            name: 'Caldo de Sururu',
            price: '45,00',
            description:
                'Caldo quente e encorpado feito com sururu e temperos regionais.',
        },
    ],
    portions: [
        {
            number: '15',
            name: 'Ostras Frescas (6 un.)',
            price: '59,00',
            description: 'Ostras servidas in natura, frescas e selecionadas.',
        },
        {
            number: '16',
            name: 'Iscas de Linguado (200g)',
            price: '89,00',
            description: 'Filé de linguado cortado em iscas e frito.',
        },
        {
            number: '17',
            name: 'Iscas de Badejo (200g)',
            price: '119,00',
            description: 'Iscas de badejo empanadas e crocantes.',
        },
        {
            number: '18',
            name: 'Lulas em Anéis (250g)',
            price: '69,00',
            description: 'Anéis de lula empanados e fritos.',
        },
        {
            number: '19',
            name: 'Bolinhos de Bacalhau (6 un.)',
            price: '45,00',
            description: 'Clássicos bolinhos portugueses, crocantes e macios.',
        },
        {
            number: '20',
            name: 'Camarões Empanados (200g)',
            price: '119,00',
            description: 'Camarões empanados e fritos.',
        },
        {
            number: '21',
            name: 'Batata Frita',
            price: '45,00',
            description: 'Batatas fritas crocantes.',
        },
        {
            number: '22',
            name: 'Mandioca Frita',
            price: '45,00',
            description: 'Mandioca frita dourada.',
        },
        {
            number: '23',
            name: 'Pastel de Camarão ou Carne (6 un.)',
            price: '45,00',
            description: 'Pasteizinhos crocantes com recheio à escolha.',
        },
        {
            number: '24',
            name: 'Camarão Frito (250g)',
            price: '79,00',
            description: 'Camarões fritos e temperados.',
        },
    ],
    moquecas: [
        {
            number: '25 - A',
            name: 'De Badejo (200g) 1P',
            description:
                'Badejo cozido em molho de tomate, cebola, pimentões e azeite de dendê.',
            price: '135,00',
        },
        {
            number: '25 - B',
            name: 'De Badejo (400g) 2P',
            description:
                'Badejo cozido em molho de tomate, cebola, pimentões e azeite de dendê.',
            price: '270,00',
        },
        {
            number: '26 - A',
            name: 'De Camarões Rosinha (200g) 1P',
            description: 'Camarões rosinha em tradicional moqueca capixaba.',
            price: '129,00',
        },
        {
            number: '26 - B',
            name: 'De Camarões Rosinha (400g) 2P',
            description: 'Camarões rosinha em tradicional moqueca capixaba.',
            price: '258,00',
        },
        {
            number: '27 - A',
            name: 'De Camarões Rosa (200g) 1P',
            description: 'Camarões rosa selecionados em molho aromático.',
            price: '145,00',
        },
        {
            number: '27 - B',
            name: 'De Camarões Rosa (400g) 2P',
            description: 'Camarões rosa selecionados em molho aromático.',
            price: '290,00',
        },
        {
            number: '28 - A',
            name: 'De Lagosta (200g) 1P',
            description: 'Lagosta fresca preparada na moqueca tradicional.',
            price: '170,00',
        },
        {
            number: '28 - B',
            name: 'De Lagosta (400g) 2P',
            description: 'Lagosta fresca preparada na moqueca tradicional.',
            price: '340,00',
        },
        {
            number: '29 - A',
            name: 'De Siri (200g) 1P',
            description: 'Carne de siri em moqueca leve e saborosa.',
            price: '129,00',
        },
        {
            number: '29 - B',
            name: 'De Siri (400g) 2P',
            description: 'Carne de siri em moqueca leve e saborosa.',
            price: '258,00',
        },
        {
            number: '30 - A',
            name: 'De Peixe (200g) 1P',
            description: 'Peixe do dia cozido lentamente em molho especial.',
            price: '125,00',
        },
        {
            number: '30 - B',
            name: 'De Peixe (400g) 2P',
            description: 'Peixe do dia cozido lentamente em molho especial.',
            price: '250,00',
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
                'Badejo, lagosta, camarões rosa e rosinha, lulas e mexilhões. Serve 5 a 6 pessoas.',
            price: '879,00',
        },
        {
            number: '39',
            name: '1/2 Moqueca à Moda da Casa',
            description: 'Versão reduzida da moqueca especial. Serve 3 a 4 pessoas.',
            price: '529,00',
        },
        {
            number: '40',
            name: 'Paella para 4 Pessoas',
            description:
                'Arroz com frutos do mar variados, decorado com camarões e lagosta.',
            price: '629,00',
        },
        {
            number: '41',
            name: 'Paella para 2 Pessoas',
            description: 'Versão individual da paella tradicional.',
            price: '399,00',
        },
        {
            number: '42',
            name: 'Titanic para 4 Pessoas',
            description:
                'Filé de badejo grelhado com camarões empanados ao molho de camarão.',
            price: '629,00',
        },
        {
            number: '43',
            name: 'Titanic para 2 Pessoas',
            description: 'Versão para duas pessoas do prato Titanic.',
            price: '399,00',
        },
        {
            number: '44',
            name: 'Peixe na Telha',
            description: 'Peixe assado servido na telha, com legumes.',
            price: '299,00',
        },
        {
            number: '45',
            name: 'Peixe na Telha com Camarões Rosa',
            description: 'Peixe assado com camarões rosa.',
            price: '399,00',
        },
        {
            number: '46',
            name: 'Peixe na Telha com Lagosta',
            description: 'Peixe assado com lagosta fresca.',
            price: '429,00',
        },
        {
            number: '47',
            name: 'Bacalhau à Moda Capixaba (450g)',
            description: 'Bacalhau preparado à maneira tradicional capixaba.',
            price: '349,00',
        },
        {
            number: '48',
            name: 'Bacalhau ao Forno (450g)',
            description: 'Bacalhau assado com legumes e azeite.',
            price: '349,00',
        },
    ],
    individuals: [
        {
            number: '62',
            name: 'Truta com Legumes no Vapor',
            description: 'Truta grelhada acompanhada de legumes no vapor.',
            price: '99,00',
        },
        {
            number: '63',
            name: 'Truta com Arroz de Brócolis e Alcaparras',
            description:
                'Truta grelhada acompanhada de arroz de brócolis e alcaparras, um prato leve e saboroso.',
            price: '99,00',
        },
        {
            number: '64',
            name: 'Truta com Purê ou Batata Sauté',
            description:
                'Deliciosa truta servida com a opção de purê cremoso ou batata sauté.',
            price: '99,00',
        },
        {
            number: '65',
            name: 'Risoto de Camarões Rosinha',
            description:
                'Risoto acompanhado de camarões rosinha, ideal para quem aprecia frutos do mar.',
            price: '129,00',
        },
        {
            number: '66',
            name: 'Risoto de Camarões Rosa',
            description:
                'Risoto com camarões rosa, trazendo sabores intensos e marcantes.',
            price: '149,00',
        },
        {
            number: '67',
            name: 'Arroz de Polvo',
            description:
                'Polvo suculento servido com arroz temperado, uma escolha perfeita para os fãs de frutos do mar.',
            price: '199,00',
        },
        {
            number: '68',
            name: 'Espaguete com Camarões Rosa e Rosinha',
            description:
                'Espaguete combinado com camarões rosa e rosinha, ideal para quem gosta de uma massa leve e saborosa.',
            price: '119,00',
        },
        {
            number: '69',
            name: 'Espaguete com Frutos do Mar',
            description:
                'Espaguete servido com uma variedade de frutos do mar frescos.',
            price: '130,00',
        },
    ],
    alternatives: [
        {
            number: '70',
            name: 'Peito de Frango Grelhado',
            description: 'Acompanha purê ou fritas.',
            price: '59,00',
        },
        {
            number: '71',
            name: 'Filé Mignon com Fritas',
            description: 'Filé mignon grelhado acompanhado de batatas fritas.',
            price: '119,00',
        },
        {
            number: '72',
            name: 'Filé à Parmegiana',
            description:
                'Clássico filé à parmegiana, com molho de tomate e queijo derretido.',
            price: '119,00',
        },
        {
            number: '73',
            name: 'Espaguete com Picadinho de Filé Mignon ao Sugo',
            description:
                'Espaguete servido com picadinho de filé mignon ao molho sugo, uma refeição completa e saborosa.',
            price: '79,00',
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
