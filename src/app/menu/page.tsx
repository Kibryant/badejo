import { SeafoodMenu } from '@/components/seafood-menu'

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-[#FCFDFE] text-[#000000]">
      <main>
        <section className="container mx-auto py-16 sm:py-40 px-4">
          <h1 className="text-5xl font-bold mb-3 text-center text-[#7E4108]">
            Nosso Cardápio
          </h1>
          <div className="w-24 h-1 bg-[#7E4108] mx-auto mb-12" />
          <SeafoodMenu />
        </section>
      </main>
    </div>
  )
}
