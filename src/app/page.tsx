import { Menu, MapPin, Clock, Phone, Facebook, Instagram } from 'lucide-react'
import Link from 'next/link'
import { GoogleMapsEmbed } from '@next/third-parties/google'

export default function Homepage() {
    const apikey = process.env.GOOGLE_MAP_API_KEY

  return (
    <div className="min-h-screen bg-[#FCFDFE] text-[#000000]">
        <Link href="/sauces" className="fixed bottom-8 right-8 bg-[#7E4108] text-[#FCFDFE] py-3 px-6 rounded-full shadow-lg">
          Conheça nossos molhos exclusivos!
      </Link>
      <main>
        <section className="relative h-[60vh] bg-[url('/seafood-dish.jpg')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h1 className="text-[#FCFDFE] text-5xl font-bold">
              Bem-vindo ao Badejo!
            </h1>
          </div>
        </section>
        <section className="container mx-auto py-16 sm:py-40 px-4">
            <h2 className="text-4xl font-bold mb-8 text-center text-[#7E4108]">Nossa História</h2>
            <div className="w-24 h-1 bg-[#7E4108] mx-auto mb-8" />

            <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-12">
                
                <div className="mb-8 lg:mb-0 lg:w-1/2">
                <img
                    src="/images/history-image.jpg"
                    alt="História do Badejo"
                    className="rounded-lg shadow-lg w-full h-auto"
                />
                </div>

                <div className="lg:w-1/2 max-w-2xl mx-auto text-center lg:text-left">
                <p className="mb-6 text-lg leading-relaxed text-gray-700">
                    Fundado em 2010 por um grupo de apaixonados por frutos do mar, o <strong>Badejo</strong> nasceu com uma missão clara: trazer os sabores mais frescos e autênticos dos oceanos diretamente para a sua mesa. Desde o início, priorizamos a qualidade e o frescor, combinando os melhores ingredientes com o cuidado artesanal de nossos chefs.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                    Localizado no coração de uma charmosa cidade litorânea, cultivamos uma relação próxima com pescadores e fazendeiros locais, garantindo não apenas a qualidade superior de nossos pratos, mas também o fortalecimento de nossa comunidade. Aqui no Badejo, cada refeição é uma celebração do mar, harmonizada com nossos molhos exclusivos e feitos na casa.
                </p>
                </div>
            </div>
            </section>


        <section className="bg-[#7E4108] text-[#FCFDFE] py-16 sm:py-40">
  <div className="container mx-auto px-4">
  <h2 className="text-4xl font-bold mb-8 text-center text-[#FCFDFE]">Informações Essenciais</h2>
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
        <p className="text-center">Rua dos Mariscos, 123, Cidade Litorânea, CL 12345</p>
      </div>

      <div className="flex flex-col items-center justify-center">
        <Clock size={48} className="mb-4" />
        <h3 className="text-xl font-semibold mb-2">Horário de Funcionamento</h3>
        <p className="text-center">
          Seg-Sáb: 11h - 22h <br />
          Dom: 12h - 21h
        </p>
      </div>

      <div className="flex flex-col items-center justify-center">
        <Phone size={48} className="mb-4" />
        <h3 className="text-xl font-semibold mb-2">Contato</h3>
        <p className="text-center">
          Telefone: (555) 123-4567 <br />
          Email: info@badejo.com
        </p>
      </div>
    </div>
  </div>
</section>
<section className="bg-[#FCFDFE] text-[#000000] py-16 sm:py-40">
  <div className="container mx-auto px-4">
  <h2 className="text-4xl font-bold mb-8 text-center text-[#7E4108]">
            Depoimentos de Clientes
  </h2>
            <div className="w-24 h-1 bg-[#7E4108] mx-auto mb-8" />

    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      
      <div className="border p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <div className="flex items-center mb-4">
          <p className="font-bold text-lg">João Silva</p>
        </div>
        <p className="italic mb-4">"A melhor experiência com frutos do mar que já tive! Tudo fresco e os molhos são incríveis!"</p>
        <p className="text-sm text-gray-600">Cliente desde 2020</p>
      </div>
      
      <div className="border p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <div className="flex items-center mb-4">
          <p className="font-bold text-lg">Maria Souza</p>
        </div>
        <p className="italic mb-4">"Simplesmente perfeito! O ambiente é incrível, e a comida é de outro nível."</p>
        <p className="text-sm text-gray-600">Cliente desde 2018</p>
      </div>

      <div className="border p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <div className="flex items-center mb-4">
          <p className="font-bold text-lg">Maria Souza</p>
        </div>
        <p className="italic mb-4">"Simplesmente perfeito! O ambiente é incrível, e a comida é de outro nível."</p>
        <p className="text-sm text-gray-600">Cliente desde 2018</p>
      </div>

      <div className="border p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <div className="flex items-center mb-4">
          <p className="font-bold text-lg">Maria Souza</p>
        </div>
        <p className="italic mb-4">"Simplesmente perfeito! O ambiente é incrível, e a comida é de outro nível."</p>
        <p className="text-sm text-gray-600">Cliente desde 2018</p>
      </div>

      
    </div>
  </div>
</section>


        <section className="bg-[#7E4108] text-[#FCFDFE] py-16 sm:py-40">
  <div className="container mx-auto px-4 text-center">
    
    <h2 className="text-4xl font-bold mb-6">Siga-nos nas Redes Sociais</h2>
    <div className="w-24 h-1 bg-[#FCFDFE] mx-auto mb-12" />

    <p className="mb-8 text-lg max-w-xl mx-auto">
      Fique por dentro das novidades, pratos especiais e promoções exclusivas do <strong>Badejo</strong> acompanhando nossas redes sociais. Estamos sempre postando conteúdo delicioso!
    </p>

    <div className="flex justify-center space-x-12">
      <a 
        href="https://www.facebook.com" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="hover:scale-110 transition-transform duration-200"
        aria-label="Facebook"
      >
        <Facebook size={48} className="hover:text-[#4267B2] transition-colors duration-200" />
      </a>
      <a 
        href="https://www.instagram.com" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="hover:scale-110 transition-transform duration-200"
        aria-label="Instagram"
      >
        <Instagram size={48} className="hover:text-[#C13584] transition-colors duration-200" />
      </a>
    </div>
  </div>
</section>

      </main>
    </div>
  )
}
