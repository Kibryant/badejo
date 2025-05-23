import { kits } from '@/constants/kits'
import { sauces } from '@/constants/sauces'
import { Utensils } from 'lucide-react'
import Image from 'next/image'

export default function SaucesPage() {
  return (
    <div className="min-h-screen bg-[#FCFDFE]">
      <main>
        <section className="container mx-auto py-16 sm:py-24 px-4">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-5xl font-bold mb-3 text-center text-[#7E4108]">
              Nosso Molho e Nosso Kit de Moqueca{' '}
              <span className="text-lg text-[#7E4108]">- In Natura</span>
            </h1>
          </div>

          <div className="w-24 h-1 bg-[#7E4108] mx-auto mb-12" />

          <div className="flex flex-col items-center justify-center mb-16">
            {sauces.map((sauce, index) => (
              <article
                key={`${index + 1}`}
                className="bg-white rounded-lg shadow-lg hover:shadow-2xl overflow-hidden transition-transform transform hover:translate-y-[-5px] w-full max-w-2xl"
                aria-label={`Detalhes do molho ${sauce.name}`}
              >
                <div
                  className="h-64 bg-[url('/sauce.jpg')] bg-cover bg-center"
                  aria-hidden="true"
                />
                <div className="p-4 sm:p-8">
                  <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-[#7E4108]">
                    {sauce.name}
                  </h2>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-3 sm:mb-4">
                    Molho para preparo de moquecas capixaba.
                  </p>
                  <ul className="text-sm sm:text-base text-gray-600 list-disc pl-5 space-y-1 mb-3 sm:mb-4">
                    <li>Não contém glúten</li>
                    <li>Orgânico</li>
                    <li>Utilizado também para pratos veganos</li>
                    <li>Coentro opcional</li>
                  </ul>
                  <p className="text-base sm:text-lg font-semibold text-[#7E4108]">
                    Valor: R$ 45,00 (Avulso)
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="flex items-center justify-center gap-2 mb-16">
            <Utensils className="w-6 h-6 text-[#7E4108]" />
            <p className="text-lg text-[#7E4108] font-semibold">
              Todos os kits acompanham nosso molho capixaba
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {kits.map((kit, index) => (
              <article
                key={`${index + 1}`}
                className="bg-white rounded-lg shadow-lg hover:shadow-2xl overflow-hidden transition-transform transform hover:translate-y-[-5px]"
                aria-label={`Detalhes do kit ${kit.name}`}
              >
                <div className="p-8">
                  <h2 className="text-2xl font-semibold mb-4 text-[#7E4108]">
                    {kit.name} + Molho Capixaba
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {kit.description}
                  </p>
                  <p className="text-lg font-semibold text-[#7E4108]">
                    Valor: {kit.price}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-[#7E4108] py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <div className="w-full md:w-1/2">
                <Image
                  src="/kit.jpg"
                  alt="Promoção: Compre 2 kits e ganhe uma panela de barro"
                  width={500}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="w-full md:w-1/2 text-center md:text-left">
                <h2 className="text-4xl font-bold mb-3 text-[#FCFDFE]">
                  Promoção Especial!
                </h2>

                <p className="text-lg text-[#FCFDFE] mb-4">
                  Na compra de <strong>2 kits de moqueca</strong>, você recebe
                  de brinde:
                </p>

                <ul className="text-lg text-[#FCFDFE] mb-6 list-disc list-inside">
                  <li>Uma panela de barro autêntica</li>
                  <li>Suporte de apoio para a panela</li>
                </ul>
                <p className="text-lg text-[#FCFDFE]">
                  Aproveite essa oferta exclusiva e prepare suas moquecas com o
                  verdadeiro toque capixaba!
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto py-16 sm:py-24 px-4">
          <h2 className="text-4xl font-bold mb-3 text-center text-[#7E4108]">
            Como Fazer o Melhor Molho
          </h2>
          <div className="w-24 h-1 bg-[#7E4108] mx-auto mb-12" />
          <div className="flex justify-center">
            <div className="w-full md:w-2/3 lg:w-1/2 aspect-w-16 aspect-h-9">
              <iframe
                className="rounded-lg shadow-lg w-full h-96"
                src="https://www.youtube.com/embed/6HkSAX1ckHU"
                title="Como fazer o melhor molho"
                allowFullScreen
              />
            </div>
          </div>
          <p className="text-center text-gray-600 mt-6">
            Assista ao vídeo e aprenda a fazer o melhor molho em casa!
          </p>
        </section>

        <section className="bg-[#7E4108] py-16 sm:py-24 px-4 text-center">
          <h2 className="text-4xl font-bold mb-3 text-[#FCFDFE]">
            A História por Trás dos Nossos Molhos
          </h2>
          <div className="w-20 h-1 bg-[#FCFDFE] mx-auto mb-8" />

          <p className="text-lg text-[#FCFDFE] mb-6 max-w-xl mx-auto leading-relaxed">
            Cada um de nossos molhos carrega uma rica tradição familiar e é
            elaborado com ingredientes frescos e selecionados. Desde o molho
            tradicional, uma herança de sabor, até criações inovadoras que
            encantam o paladar, nossos molhos são feitos com amor e dedicação.
          </p>

          <p className="text-lg text-[#FCFDFE] mb-8 max-w-xl mx-auto leading-relaxed">
            Descubra como um bom molho pode transformar seu prato em uma
            experiência única!
          </p>
        </section>
      </main>
    </div>
  )
}
