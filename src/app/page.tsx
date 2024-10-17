import { Clock, Phone, Instagram } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function Homepage() {
  const apikey = process.env.GOOGLE_MAP_API_KEY

  return (
    <div className="min-h-screen bg-[#FCFDFE] text-[#000000]">
      <Link
        href="/sauces"
        className="fixed bottom-8 right-8 bg-[#7E4108] text-[#FCFDFE] py-3 px-6 rounded-full shadow-lg"
      >
        Conheça nossos molhos exclusivos!
      </Link>

      <main>
        <section className="relative bg-[#7E4108] h-screen sm:bg-cover sm:bg-center sm:bg-fixed  sm:bg-[url('/badejo.jpg')]">
          <div className="absolute inset-0 sm:bg-black sm:bg-opacity-50 flex flex-col items-center justify-center text-center">
            <h1 className="text-[#FCFDFE] text-6xl font-bold tracking-wide drop-shadow-lg sm:text-6xl">
              Bem-vindo ao Badejo!
            </h1>

            <p className="text-[#FCFDFE] text-lg sm:text-2xl mt-3 mb-3">
              Dos Mares, o Melhor!
            </p>

            <div className="max-w-40 w-96 h-1 bg-[#FCFDFE] mx-auto mb-8" />

            <Link
              href="/sauces"
              className="bg-[#FCFDFE] text-[#7E4108] sm:bg-[#7E4108] sm:text-[#FCFDFE] py-3 px-6 sm:py-4 sm:px-10 rounded-full shadow-lg hover:bg-[#5c3007] animate-bounce transition duration-400 delay-400"
            >
              Conheça Nossos Molhos
            </Link>
          </div>
        </section>

        <section className="container mx-auto py-16 sm:py-40 px-4">
          <h2 className="text-4xl font-bold mb-3 text-center text-[#7E4108]">
            Nossa História
          </h2>
          <div className="w-24 h-1 bg-[#7E4108] mx-auto mb-8" />

          <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-12">
            <div className="mb-8 lg:mb-0 lg:w-1/2">
              <Image
                src="/badejo-inside.jpg"
                alt="História do Badejo"
                className="rounded-lg shadow-lg w-full h-auto"
                width={800}
                height={600}
              />
            </div>

            <div className="lg:w-1/2 max-w-2xl mx-auto text-center lg:text-left">
              <p className="mb-6 text-lg leading-relaxed text-gray-700">
                Fundado em 2010 por um grupo de apaixonados por frutos do mar, o{' '}
                <strong>Badejo</strong> nasceu com uma missão clara: trazer os
                sabores mais frescos e autênticos dos oceanos diretamente para a
                sua mesa. Desde o início, priorizamos a qualidade e o frescor,
                combinando os melhores ingredientes com o cuidado artesanal de
                nossos chefs.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                Localizado no coração de uma charmosa cidade litorânea,
                cultivamos uma relação próxima com pescadores e fazendeiros
                locais, garantindo não apenas a qualidade superior de nossos
                pratos, mas também o fortalecimento de nossa comunidade. Aqui no
                Badejo, cada refeição é uma celebração do mar, harmonizada com
                nossos molhos exclusivos e feitos na casa.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#7E4108] text-[#FCFDFE] py-16 sm:py-40">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-3 text-center text-[#FCFDFE]">
              A Moqueca Capixaba
            </h2>
            <div className="w-24 h-1 bg-[#FCFDFE] mx-auto mb-8" />
            <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-12">
              <div className="lg:w-1/2 max-w-2xl mx-auto text-center lg:text-left">
                <p className="mb-6 text-lg leading-relaxed text-[#FCFDFE]">
                  <strong>
                    A Moqueca que atrai e encanta os turistas no Espírito Santo.
                  </strong>{' '}
                  <br />
                  Os ingredientes usados no seu preparo não agridem o sabor
                  delicado dos peixes, camarões, siris, lagostas e, enfim, todos
                  os frutos do mar que usamos em nosso cardápio e, mesmo o
                  coentro, de gosto forte, na maneira como é administrado apenas
                  dá um toque a mais no aroma e enriquece o paladar. A panela de
                  barro também é muito importante e cada moqueca é preparada
                  individualmente, obedecendo a uma tradição onde cada produto é
                  adicionado passo a passo.
                </p>
                <p className="text-lg leading-relaxed text-[#FCFDFE]">
                  O pirão é puxado numa farinha de mandioca fina, peixe desfiado
                  e os mesmos ingredientes da moqueca Arroz branco e farofinha
                  de banana da terra completam a nossa moqueca capixaba.
                </p>
              </div>
              <div className="mb-8 lg:mb-0 lg:w-1/2">
                <img
                  src="/moqueca-capixaba.jpg"
                  alt="História do Badejo"
                  className="rounded-lg shadow-lg w-full object-cover h-[600px]"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto py-16 sm:py-40 px-4">
          <h2 className="text-4xl font-bold mb-3 text-center text-[#7E4108]">
            Um Gostinho do Nosso Menu
          </h2>
          <div className="w-24 h-1 bg-[#7E4108] mx-auto mb-8" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <img
                src="/camarao-coco.jpg"
                alt="Prato Badejo - Frutos do Mar"
                className="rounded-lg w-full h-auto max-h-[400px] mb-4 object-cover"
              />

              <h3 className="text-xl font-semibold mb-2 text-[#7E4108]">
                Camarão no Coco
              </h3>
              <p className="text-gray-700">
                Camarões frescos preparados em um delicioso molho de leite de
                coco, acompanhados de arroz branco e farofa de dendê.
              </p>
            </div>

            <div className="border p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <img
                src="/moqueca-mista.jpg"
                alt="Prato Badejo - Frutos do Mar"
                className="rounded-lg w-full h-auto max-h-[400px] mb-4 object-cover"
              />

              <h3 className="text-xl font-semibold mb-2 text-[#7E4108]">
                Moqueca Mista
              </h3>
              <p className="text-gray-700">
                Uma combinação de peixe, camarão e lula cozidos em um delicioso
                molho de tomate, leite de coco e azeite de dendê. Acompanha
                arroz branco e pirão.
              </p>
            </div>

            <div className="border p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <img
                src="/casquinha-de-siri.jpg"
                alt="Prato Badejo - Frutos do Mar"
                className="rounded-lg w-full h-auto max-h-[400px] mb-4 object-cover"
              />

              <h3 className="text-xl font-semibold mb-2 text-[#7E4108]">
                Casquinha de Siri
              </h3>
              <p className="text-gray-700">
                Delicioso siri desfiado temperado com especiarias e coberto com
                farofa de pão. Uma entrada perfeita para qualquer refeição.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/menu"
              className="bg-[#7E4108] text-[#FCFDFE] py-3 px-6 rounded-full shadow-lg hover:bg-[#5c3007] animate-bounce transition duration-400 delay-400"
            >
              Ver Menu Completo
            </Link>
          </div>
        </section>

        <section className="bg-[#7E4108] text-[#FCFDFE] py-16 sm:py-40">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-3 text-center text-[#FCFDFE]">
              Informações Essenciais
            </h2>
            <div className="w-24 h-1 bg-[#FCFDFE] mx-auto mb-8" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center justify-center">
                <div className="w-full h-64">
                  <iframe
                    src={`https://www.google.com/maps/embed/v1/place?key=${apikey}&q=Badejo+Dos+Mares+O+Melhor`}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title="Badejo Dos Mares O Melhor"
                  />
                </div>
                <h3 className="text-xl font-semibold mt-4 mb-2">Localização</h3>
                <p className="text-center">
                  Avenida Moema, 265 - Moema, São Paulo - 04077-020
                </p>
              </div>

              <div className="flex flex-col items-center justify-center">
                <Clock size={48} className="mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  Horário de Funcionamento
                </h3>
                <p className="text-center">
                  Segunda fechado <br />
                  Terça 12h - 15h <br />
                  Qua-Sex 12h - 15h, 18h - 22h <br />
                  Sáb 12h - 22h <br />
                  Dom 12h - 17h Feriados 12h - 16h
                </p>
              </div>

              <div className="flex flex-col items-center justify-center">
                <Phone size={48} className="mb-4" />
                <h3 className="text-xl font-semibold mb-2">Contato</h3>
                <p className="text-center">
                  Telefone: (11) 5052-6890 <br />
                  Whatsapp: (11) 9 9340-8275 <br />
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#FCFDFE] text-[#000000] py-16 sm:py-40">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-3 text-center text-[#7E4108]">
              Depoimentos de Clientes
            </h2>
            <div className="w-24 h-1 bg-[#7E4108] mx-auto mb-8" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="border p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <p className="font-bold text-lg">João Silva</p>
                </div>
                <p className="italic mb-4">
                  "A melhor experiência com frutos do mar que já tive! Tudo
                  fresco e os molhos são incríveis!"
                </p>
                <p className="text-sm text-gray-600">Cliente desde 2020</p>
              </div>

              <div className="border p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <p className="font-bold text-lg">Maria Souza</p>
                </div>
                <p className="italic mb-4">
                  "Simplesmente perfeito! O ambiente é incrível, e a comida é de
                  outro nível."
                </p>
                <p className="text-sm text-gray-600">Cliente desde 2018</p>
              </div>

              <div className="border p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <p className="font-bold text-lg">Maria Souza</p>
                </div>
                <p className="italic mb-4">
                  "Simplesmente perfeito! O ambiente é incrível, e a comida é de
                  outro nível."
                </p>
                <p className="text-sm text-gray-600">Cliente desde 2018</p>
              </div>

              <div className="border p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <p className="font-bold text-lg">Maria Souza</p>
                </div>
                <p className="italic mb-4">
                  "Simplesmente perfeito! O ambiente é incrível, e a comida é de
                  outro nível."
                </p>
                <p className="text-sm text-gray-600">Cliente desde 2018</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#7E4108] text-[#FCFDFE] py-16 sm:py-40">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Siga-nos nas Redes Sociais
            </h2>
            <div className="w-24 h-1 bg-[#FCFDFE] mx-auto mb-12" />

            <p className="mb-8 text-lg max-w-xl mx-auto">
              Fique por dentro das novidades, pratos especiais e promoções
              exclusivas do <strong>Badejo</strong> acompanhando nossas redes
              sociais. Estamos sempre postando conteúdo delicioso!
            </p>

            <div className="flex justify-center space-x-12">
              <a
                href="https://www.instagram.com/badejorestaurantesp"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform duration-200"
                aria-label="Instagram"
              >
                <Instagram
                  size={48}
                  className="hover:text-[#C13584] transition-colors duration-200"
                />
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
