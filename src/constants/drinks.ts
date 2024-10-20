export const drinks = {
  chopps: {
    chopp: {
      description: 'Chopp (340ml)',
      price: 17.0,
    },
  },
  cervejas: {
    heineken: {
      description: 'Heineken (600ml)',
      price: 26.0,
    },
    original: {
      description: 'Original (600ml)',
      price: 26.0,
    },
    longNeck: {
      description: 'Long Neck (300ml - 350ml)',
      price: 16.0,
    },
    semAlcool: {
      description: 'Cerveja Sem Álcool (long neck)',
      price: 16.0,
    },
  },
  coquetéis: {
    coquetelFrutas: {
      description: 'Coquetel de Frutas',
      price: 39.0,
    },
    alexander: {
      description: 'Alexander',
      price: 39.0,
    },
    ginTonica: {
      description: 'Gin Tônica',
      price: 36.0,
    },
    cubaLivre: {
      description: 'Cuba-Livre',
      price: 36.0,
    },
    margarita: {
      description: 'Margarita',
      price: 45.0,
    },
    bloodyMary: {
      description: 'Bloody Mary',
      price: 45.0,
    },
  },
  'Sucos e Refrigerantes': {
    aguaMineral: {
      description: 'Água Mineral',
      price: 9.9,
    },
    refrigerante: {
      description: 'Refrigerantes (Lata 350ml)',
      price: 12.0,
    },
    sucoDiversos: {
      description: 'Suco de Frutas (Diversas)',
      price: 17.0,
    },
    limonada: {
      description: 'Limonada',
      price: 12.0,
    },
    sucoTomate: {
      description: 'Suco de Tomate',
      price: 17.0,
    },
    schweppes: {
      description: 'Schweppes Citrus',
      price: 12.0,
    },
  },
  batidas: {
    caipirinha: {
      description: 'Caipirinha (Cachaça)',
      price: 29.0,
    },
    caipivodkaSmirnoff: {
      description: 'Caipivodka (Smirnoff)',
      price: 38.0,
    },
    caipivodkaAbsolut: {
      description: 'Caipivodka (Absolut/Stolichnaya)',
      price: 45.0,
    },
    caipihaegerNacional: {
      description: 'Caipihaeger (Nacional)',
      price: 32.0,
    },
    caipihaegerImportado: {
      description: 'Caipihaeger (Importado)',
      price: 42.0,
    },
    caipirinhaSaque: {
      description: 'Caipirinha de Saquê',
      price: 42.0,
    },
    caipirissima: {
      description: 'Caipiríssima (Bacardi)',
      price: 38.0,
    },
  },
  aperitivos: {
    cachacaSalinas: {
      description: 'Cachaça Salinas (Consultar)',
      price: 18.0,
    },
    campari: {
      description: 'Campari',
      price: 26.0,
    },
    martini: {
      description: 'Martini',
      price: 26.0,
    },
    saque: {
      description: 'Saquê',
      price: 26.0,
    },
    rum: {
      description: 'Rum',
      price: 26.0,
    },
    steinhaeger: {
      description: 'Steinhaeger',
      price: 32.0,
    },
    steinhaegerAlemao: {
      description: 'Steinhaeger (Alemão)',
      price: 37.0,
    },
    licorNacional: {
      description: 'Licores (Nacional)',
      price: 34.0,
    },
    licorImportado: {
      description: 'Licores (Importado)',
      price: 40.0,
    },
  },
  whiskys: {
    bellsTeachers: {
      description: "Bell's ou Teacher's",
      price: 32.0,
    },
    johnnieWalkerRed: {
      description: 'Johnnie Walker Red',
      price: 36.0,
    },
    johnnieWalkerBlack: {
      description: 'Johnnie Walker Black',
      price: 90.0,
    },
    ballantines8: {
      description: "Ballantine's 8 anos",
      price: 40.0,
    },
    ballantines12: {
      description: "Ballantine's 12 anos",
      price: 55.0,
    },
    buchanans: {
      description: "Buchanan's",
      price: 44.0,
    },
    chivas: {
      description: 'Chivas',
      price: 44.0,
    },
  },
  vodka: {
    smirnoff: {
      description: 'Smirnoff',
      price: 28.0,
    },
    absolutStolichnaya: {
      description: 'Absolut ou Stolichnaya',
      price: 37.0,
    },
  },
  gin: {
    gilberts: {
      description: "Gilbert's/Gilbey's",
      price: 34.0,
    },
    gordons: {
      description: "Gordon's",
      price: 34.0,
    },
  },
  conhaque: {
    dormecq: {
      description: 'Dormecq',
      price: 20.0,
    },
    macieira: {
      description: 'Macieira',
      price: 25.0,
    },
    fundador: {
      description: 'Fundador',
      price: 37.0,
    },
    napoleon: {
      description: 'Napoleon',
      price: 39.0,
    },
  },
}

export const drinkCategories = [
  { name: 'chopps', items: Object.entries(drinks.chopps) },
  { name: 'cervejas', items: Object.entries(drinks.cervejas) },
  { name: 'coquetéis', items: Object.entries(drinks.coquetéis) },
  {
    name: 'sucos e refrigerantes',
    items: Object.entries(drinks['Sucos e Refrigerantes']),
  },
  { name: 'batidas', items: Object.entries(drinks.batidas) },
  { name: 'aperitivos', items: Object.entries(drinks.aperitivos) },
  { name: 'whiskys', items: Object.entries(drinks.whiskys) },
  { name: 'vodka', items: Object.entries(drinks.vodka) },
  { name: 'gin', items: Object.entries(drinks.gin) },
  { name: 'conhaque', items: Object.entries(drinks.conhaque) },
]
