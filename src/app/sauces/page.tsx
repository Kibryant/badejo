import { Menu } from 'lucide-react'
import Link from 'next/link'

const sauces = [
  { name: 'Lemon Butter', description: 'A classic sauce made with fresh lemon juice and melted butter' },
  { name: 'Garlic Aioli', description: 'Creamy garlic sauce perfect for dipping or spreading' },
  { name: 'Spicy Mango', description: 'Sweet and spicy sauce made with ripe mangoes and chili peppers' },
  { name: 'Herb Pesto', description: 'Fresh basil pesto with a hint of lemon and pine nuts' },
  { name: 'Coconut Curry', description: 'Rich and creamy coconut sauce with aromatic curry spices' },
  { name: 'Chimichurri', description: 'Tangy Argentinian sauce with parsley, garlic, and vinegar' },
]

export default function SaucesPage() {
  return (
    <div className="min-h-screen bg-[#FCFDFE] text-[#000000]">
      <main className="container mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold mb-12 text-center">Our Signature Sauces</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sauces.map((sauce, index) => (
            <div key={`${index + 1}`} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-[url('/placeholder.svg?height=300&width=400')] bg-cover bg-center" />
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{sauce.name}</h2>
                <p className="text-gray-600">{sauce.description}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}