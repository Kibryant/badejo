import Link from 'next/link'

const sauces = [
  {
    name: 'Lemon Butter',
    description:
      'A classic sauce made with fresh lemon juice and melted butter',
  },
  {
    name: 'Garlic Aioli',
    description: 'Creamy garlic sauce perfect for dipping or spreading',
  },
  {
    name: 'Spicy Mango',
    description:
      'Sweet and spicy sauce made with ripe mangoes and chili peppers',
  },
  {
    name: 'Herb Pesto',
    description: 'Fresh basil pesto with a hint of lemon and pine nuts',
  },
  {
    name: 'Coconut Curry',
    description: 'Rich and creamy coconut sauce with aromatic curry spices',
  },
  {
    name: 'Chimichurri',
    description: 'Tangy Argentinian sauce with parsley, garlic, and vinegar',
  },
]

export default function SaucesPage() {
  return (
    <div className="min-h-screen bg-[#FCFDFE]">
      <main>
        <section className="container mx-auto py-16 sm:py-40 px-4">
          <h1 className="text-5xl font-bold mb-3 text-center text-[#7E4108]">
            Nossos Molhos
          </h1>
          <div className="w-24 h-1 bg-[#7E4108] mx-auto mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sauces.map((sauce, index) => (
              <article
                key={`${index + 1}`}
                className="bg-white rounded-lg shadow-lg hover:shadow-2xl overflow-hidden transition-transform transform hover:translate-y-[-5px]"
                aria-label={`Detalhes do molho ${sauce.name}`}
              >
                <div
                  className="h-96 bg-[url('/sauce.jpg')] bg-cover bg-center"
                  aria-hidden="true"
                />

                <div className="p-8">
                  <h2 className="text-2xl font-semibold mb-4 text-[#2C3E50]">
                    {sauce.name}
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    {sauce.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="container mx-auto py-16 sm:py-40 px-4">
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
        <section className="container mx-auto py-16 sm:py-24 px-4 text-center">
          <h2 className="text-4xl font-bold mb-3 text-[#7E4108]">
            A História por Trás dos Nossos Molhos
          </h2>
          <div className="w-20 h-1 bg-[#7E4108] mx-auto mb-8" />

          <p className="text-lg text-gray-700 mb-6 max-w-xl mx-auto leading-relaxed">
            Cada um de nossos molhos carrega uma rica tradição familiar e é
            elaborado com ingredientes frescos e selecionados. Desde o molho
            tradicional, uma herança de sabor, até criações inovadoras que
            encantam o paladar, nossos molhos são feitos com amor e dedicação.
          </p>

          <p className="text-lg text-gray-700 mb-8 max-w-xl mx-auto leading-relaxed"> 
            Descubra como um bom molho pode transformar seu prato em uma
            experiência única!
          </p>
        </section>
      </main>
    </div>
  )
}
