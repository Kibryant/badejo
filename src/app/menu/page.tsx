const menuItems = [
  {
    name: 'Grilled Sea Bass',
    description:
      'Fresh sea bass grilled to perfection, served with lemon butter sauce',
    price: '$24.99',
  },
  {
    name: 'Lobster Tail',
    description: 'Succulent lobster tail, steamed and served with drawn butter',
    price: '$32.99',
  },
  {
    name: 'Shrimp Scampi',
    description:
      'Jumbo shrimp sautéed in garlic, white wine, and butter, served over pasta',
    price: '$21.99',
  },
  {
    name: 'Seafood Paella',
    description: 'Traditional Spanish rice dish with a medley of seafood',
    price: '$28.99',
  },
  {
    name: 'Grilled Octopus',
    description: 'Tender octopus grilled and served with olive oil and herbs',
    price: '$19.99',
  },
  {
    name: 'Clam Chowder',
    description: 'Creamy New England style clam chowder served in a bread bowl',
    price: '$12.99',
  },
]

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-[#FCFDFE] text-[#000000]">
      <main>
        <section className="container mx-auto py-16 sm:py-40 px-4">
          <h1 className="text-5xl font-bold mb-3 text-center text-[#7E4108]">
            Nosso Cardápio
          </h1>
          <div className="w-24 h-1 bg-[#7E4108] mx-auto mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuItems.map((item, index) => (
              <div
                key={`${index + 1}`}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="h-48 bg-[url('/placeholder.svg?height=300&width=400')] bg-cover bg-center" />
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <p className="text-[#7E4108] font-bold">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
