'use client'

import { AwaitedReactNode, JSXElementConstructor, Key, ReactElement, ReactNode, useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Toggle } from '@/components/ui/toggle'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Fish, Beer, Coffee } from 'lucide-react'

type MenuItem = {
    name: string;
    description: string;
    price: string;
  };
  
  type MenuData = {
    starters: MenuItem[];
    portions: MenuItem[];
    moquecas: MenuItem[];
    combineds: MenuItem[];
    bobos: MenuItem[];
    grilledFried: MenuItem[];
    specials: MenuItem[];
    individuals: MenuItem[];
    alternatives: MenuItem[];
    optionalAddOns: MenuItem[];
  };
  

const menuData: MenuData = {
  starters: [
    {
      name: 'Couvert Mix',
      price: 'R$119,00',
      description:
        'Um combinado variado de entradas deliciosas para começar a refeição.',
    },
    {
      name: 'Casquinha de Siri ou Aratu',
      price: 'R$89,00',
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
        'Moqueca tradicional com badejo, cozido em leite de coco e temperos típicos da culinária baiana.',
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
type DrinkItem = {
    descricao: string;
    preco: number;
  };

type DrinkCategory = {
    name: string;
    items: [string, DrinkItem][];
    [key: string]: any;
  };
  

const bebidasMenu: DrinkCategory = {
    bebidas: {
        chopp: {
            descricao: 'Chopp (340ml)',
            preco: 17.0,
        },
    },
    cervejas: {
        heineken: {
            descricao: 'Heineken/Original (600ml)',
            preco: 26.0,
        },
        longNeck: {
            descricao: 'Long Neck (300ml - 350ml)',
            preco: 16.0,
        },
        semAlcool: {
            descricao: 'Cerveja Sem Álcool (long neck)',
            preco: 16.0,
        },
    },
    coquetes: {
        coquetelFrutas: {
            descricao: 'Coquetel de Frutas',
            preco: 39.0,
        },
        alexander: {
            descricao: 'Alexander',
            preco: 39.0,
        },
        ginTonica: {
            descricao: 'Gin Tônica',
            preco: 36.0,
        },
        cubaLivre: {
            descricao: 'Cuba-Livre',
            preco: 36.0,
        },
        margarita: {
            descricao: 'Margarita',
            preco: 45.0,
        },
        bloodyMary: {
            descricao: 'Bloody Mary',
            preco: 45.0,
        },
    },
    sucosRefrigerantes: {
        aguaMineral: {
            descricao: 'Água Mineral',
            preco: 9.9,
        },
        refrigerante: {
            descricao: 'Refrigerantes (Lata 350ml)',
            preco: 12.0,
        },
        sucoDiversos: {
            descricao: 'Suco de Frutas (Diversas)',
            preco: 17.0,
        },
        limonada: {
            descricao: 'Limonada',
            preco: 12.0,
        },
        sucoTomate: {
            descricao: 'Suco de Tomate',
            preco: 17.0,
        },
        schweppes: {
            descricao: 'Schweppes Citrus',
            preco: 12.0,
        },
    },
    batidas: {
        caipirinha: {
            descricao: 'Caipirinha (Cachaça)',
            preco: 29.0,
        },
        caipivodkaSmirnoff: {
            descricao: 'Caipivodka (Smirnoff)',
            preco: 38.0,
        },
        caipivodkaAbsolut: {
            descricao: 'Caipivodka (Absolut/Stolichnaya)',
            preco: 45.0,
        },
        caipihaegerNacional: {
            descricao: 'Caipihaeger (Nacional)',
            preco: 32.0,
        },
        caipihaegerImportado: {
            descricao: 'Caipihaeger (Importado)',
            preco: 42.0,
        },
        caipirinhaSaque: {
            descricao: 'Caipirinha de Saquê',
            preco: 42.0,
        },
        caipirissima: {
            descricao: 'Caipiríssima (Bacardi)',
            preco: 38.0,
        },
    },
    aperitivos: {
        cachacaSalinas: {
            descricao: 'Cachaça Salinas (Consultar)',
            preco: 18.0,
        },
        campari: {
            descricao: 'Campari',
            preco: 26.0,
        },
        martini: {
            descricao: 'Martini',
            preco: 26.0,
        },
        saque: {
            descricao: 'Saquê',
            preco: 26.0,
        },
        rum: {
            descricao: 'Rum',
            preco: 26.0,
        },
        steinhaeger: {
            descricao: 'Steinhaeger',
            preco: 32.0,
        },
        steinhaegerAlemao: {
            descricao: 'Steinhaeger (Alemão)',
            preco: 37.0,
        },
        licorNacional: {
            descricao: 'Licores (Nacional)',
            preco: 34.0,
        },
        licorImportado: {
            descricao: 'Licores (Importado)',
            preco: 40.0,
        },
    },
    whiskys: {
        bellsTeachers: {
            descricao: "Bell's ou Teacher's",
            preco: 32.0,
        },
        johnnieWalkerRed: {
            descricao: 'Johnnie Walker Red',
            preco: 36.0,
        },
        johnnieWalkerBlack: {
            descricao: 'Johnnie Walker Black',
            preco: 90.0,
        },
        ballantines8: {
            descricao: "Ballantine's 8 anos",
            preco: 40.0,
        },
        ballantines12: {
            descricao: "Ballantine's 12 anos",
            preco: 55.0,
        },
        buchanans: {
            descricao: "Buchanan's",
            preco: 44.0,
        },
        chivas: {
            descricao: 'Chivas',
            preco: 44.0,
        },
    },
    vodka: {
        smirnoff: {
            descricao: 'Smirnoff',
            preco: 28.0,
        },
        absolutStolichnaya: {
            descricao: 'Absolut ou Stolichnaya',
            preco: 37.0,
        },
    },
    gin: {
        gilberts: {
            descricao: "Gilbert's/Gilbey's",
            preco: 34.0,
        },
        gordons: {
            descricao: "Gordon's",
            preco: 34.0,
        },
    },
    conhaque: {
        dormecq: {
            descricao: 'Dormecq',
            preco: 20.0,
        },
        macieira: {
            descricao: 'Macieira',
            preco: 25.0,
        },
        fundador: {
            descricao: 'Fundador',
            preco: 37.0,
        },
        napoleon: {
            descricao: 'Napoleon',
            preco: 39.0,
        },
    },
    name: '',
    items: []
} 

const drinkCategories = Object.keys(bebidasMenu).map(category => ({
  name: category,
  items: Object.entries(bebidasMenu[category]),
}))

export function SeafoodMenu() {
  const [activeTab, setActiveTab] = useState('starters')

  const renderMenuItems = (items: any[]) => {
    return items.map((item: { name: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | Promise<AwaitedReactNode> | null | undefined; description: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | Promise<AwaitedReactNode> | null | undefined; price: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | Promise<AwaitedReactNode> | null | undefined }, index: Key | null | undefined) => (
      <Card
        key={index}
        className="w-full md:w-64 m-2 bg-white bg-opacity-80 backdrop-blur-sm transition-all hover:shadow-lg"
      >
        <CardHeader>
          <CardTitle className="">{item.name}</CardTitle>
          <CardDescription>{item.description}</CardDescription>
        </CardHeader>
        <CardFooter className="flex justify-between">
          <span className="text-green-700 font-bold">{item.price}</span>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Details</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle className="text-[#7E4108]">
                  {item.name}
                </DialogTitle>
                <DialogDescription>{item.description}</DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <p>Preço: {item.price}</p>
              </div>
            </DialogContent>
          </Dialog>
        </CardFooter>
      </Card>
    ))
  }

  return (
    <>
      <div className="sticky top-0 z-50 bg-white bg-opacity-90 backdrop-blur-sm shadow-md p-4">
        <div className="flex justify-between items-center">
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="grid w-full grid-cols-3 md:grid-cols-5 lg:grid-cols-10">
              <TabsTrigger value="starters">Entradas</TabsTrigger>
              <TabsTrigger value="portions">Porções</TabsTrigger>
              <TabsTrigger value="moquecas">Moquecas</TabsTrigger>
              <TabsTrigger value="combineds">Combinados</TabsTrigger>
              <TabsTrigger value="bobos">Bobós</TabsTrigger>
              <TabsTrigger value="grilledFried">Grelhados e Fritos</TabsTrigger>
              <TabsTrigger value="specials">Especiais</TabsTrigger>
              <TabsTrigger value="individuals">Individuais</TabsTrigger>
              <TabsTrigger value="alternatives">Alternativas</TabsTrigger>
              <TabsTrigger value="optionalAddOns">Adicionais</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>

      <div className="mt-8">
        <Tabs value={activeTab} className="w-full">
          <TabsContent value="starters" className="mt-4">
            <h2 className="text-2xl font-semibold mb-4 text-[#7E4108]">
              Entradas
            </h2>
            <div className="flex flex-wrap justify-center">
              {renderMenuItems(menuData.starters)}
            </div>
          </TabsContent>
          <TabsContent value="portions" className="mt-4">
            <h2 className="text-2xl font-semibold mb-4 text-[#7E4108]">
              Porções
            </h2>
            <div className="flex flex-wrap justify-center">
              {renderMenuItems(menuData.portions)}
            </div>
          </TabsContent>
          <TabsContent value="moquecas" className="mt-4">
            <h2 className="text-2xl font-semibold mb-4 text-[#7E4108]">
              Moquecas
            </h2>
            <div className="flex flex-wrap justify-center">
              {renderMenuItems(menuData.moquecas)}
            </div>
          </TabsContent>
          <TabsContent value="combineds" className="mt-4">
            <h2 className="text-2xl font-semibold mb-4 text-[#7E4108]">
              Combinados
            </h2>
            <div className="flex flex-wrap justify-center">
              {renderMenuItems(menuData.combineds)}
            </div>
          </TabsContent>
          <TabsContent value="bobos" className="mt-4">
            <h2 className="text-2xl font-semibold mb-4 text-[#7E4108]">
              Bobós
            </h2>
            <div className="flex flex-wrap justify-center">
              {renderMenuItems(menuData.bobos)}
            </div>
          </TabsContent>
          <TabsContent value="grilledFried" className="mt-4">
            <h2 className="text-2xl font-semibold mb-4 text-[#7E4108]">
              Grelhados e Fritos
            </h2>
            <div className="flex flex-wrap justify-center">
              {renderMenuItems(menuData.grilledFried)}
            </div>
          </TabsContent>
          <TabsContent value="specials" className="mt-4">
            <h2 className="text-2xl font-semibold mb-4 text-[#7E4108]">
              Especiais
            </h2>
            <div className="flex flex-wrap justify-center">
              {renderMenuItems(menuData.specials)}
            </div>
          </TabsContent>
          <TabsContent value="individuals" className="mt-4">
            <h2 className="text-2xl font-semibold mb-4 text-[#7E4108]">
              Individuais
            </h2>
            <div className="flex flex-wrap justify-center">
              {renderMenuItems(menuData.individuals)}
            </div>
          </TabsContent>
          <TabsContent value="alternatives" className="mt-4">
            <h2 className="text-2xl font-semibold mb-4 text-[#7E4108]">
              Alternativas
            </h2>
            <div className="flex flex-wrap justify-center">
              {renderMenuItems(menuData.alternatives)}
            </div>
          </TabsContent>
          <TabsContent value="optionalAddOns" className="mt-4">
            <h2 className="text-2xl font-semibold mb-4 text-[#7E4108]">
              Adicionais
            </h2>
            <div className="flex flex-wrap justify-center">
              {renderMenuItems(menuData.optionalAddOns)}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <div className="mt-12 text-black rounded-lg">
        <h2 className="text-2xl font-semibold mb-6 text-[#7E4108]">Bebidas</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {drinkCategories.map((category, index) => (
            <DropdownMenu key={index}>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full bg-[#FCFDFE] text-[#7E4108] border-[#7E4108] hover:bg-[#7E4108] hover:text-white hover:border-transparent transition-all duration-300 rounded-lg shadow-md py-3"
                >
                  {category.name.charAt(0).toUpperCase() +
                    category.name.slice(1)}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white text-black rounded-lg shadow-lg border border-[#7E4108] mt-2">
                {category.items.map(([key, drink], drinkIndex) => (
                  <DropdownMenuItem
                    key={drinkIndex}
                    className="px-4 py-2 hover:bg-[#7E4108] hover:text-white rounded-md transition-colors duration-200"
                  >
                    {drink.descricao} - R$ {drink.preco.toFixed(2)}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          ))}
        </div>
      </div>
    </>
  )
}
