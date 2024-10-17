import Image from 'next/image'
import { Phone, MapPin, Instagram, Facebook } from 'lucide-react'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-[#FCFDFE] text-black py-16 border-t border-[#734108]">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center md:items-start space-y-10 md:space-y-0 text-center md:text-left">
        <div className="space-y-5">
          <h2 className="text-3xl md:text-4xl font-bold text-[#7E4108]">
            Horários
          </h2>
          <div className="text-lg space-y-2">
            <p className="font-bold text-[#7E4108]">
              Segunda:{' '}
              <span className="font-normal text-gray-700">Fechado</span>
            </p>
            <p className="font-bold text-[#7E4108]">
              Terça:{' '}
              <span className="font-normal text-gray-700">12:00 às 15:00</span>
            </p>
            <p className="font-bold text-[#7E4108]">
              Quarta á Sexta:{' '}
              <span className="font-normal text-gray-700">
                12:00 às 15:00 - 18 ás 22:00
              </span>
            </p>
            <p className="font-bold text-[#7E4108]">
              Sábado:{' '}
              <span className="font-normal text-gray-700">12:00 às 22:00</span>
            </p>
            <p className="font-bold text-[#7E4108]">
              Domingo:{' '}
              <span className="font-normal text-gray-700">12:00 às 17:00</span>
            </p>
            <p className="font-bold text-[#7E4108]">
              Feriados:{' '}
              <span className="font-normal text-gray-700">12:00 às 16:00</span>
            </p>
          </div>

          <div className="space-y-2">
            <p className="flex items-center justify-center md:justify-start space-x-2">
              <Phone
                className="text-[#7E4108]"
                size={20}
                aria-label="Telefone"
              />
              <span className="font-bold text-[#7E4108]">
                <span className="font-normal text-gray-700">
                  (11) 5052-6890
                </span>
              </span>
            </p>
            <p className="flex items-center justify-center md:justify-start sm:space-x-2">
              <MapPin
                className="text-[#7E4108]"
                size={20}
                aria-label="Endereço"
              />
              <span className="font-bold text-[#7E4108]">
                Endereço:{' '}
                <span className="font-normal text-gray-700">
                  Av. Moema, 265 - Moema, São Paulo
                </span>
              </span>
            </p>
            <p className="text-gray-700">Rod BR356 - 2500 - loja R02</p>
          </div>

          <div className="flex justify-center md:justify-start space-x-4 mt-4">
            <a
              href="https://www.instagram.com/badejorestaurantesp/"
              aria-label="Instagram"
              className="text-[#7E4108] hover:text-gray-600"
            >
              <Instagram size={28} />
            </a>
          </div>

          <p className="hidden sm:block text-xs text-gray-500 mt-4">
            Copyright ©2024 Badejo.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-start space-y-3">
          <h3 className="text-2xl font-bold text-[#7E4108]">Navegação</h3>
          <nav className="flex flex-col space-y-2">
            <Link
              href="/"
              className="text-gray-700 hover:text-[#7E4108]"
              aria-label="Ir para a página inicial"
            >
              Início
            </Link>
            <Link
              href="/menu"
              className="text-gray-700 hover:text-[#7E4108]"
              aria-label="Ver o menu"
            >
              Cardápio
            </Link>
            <Link
              href="/sauces"
              className="text-gray-700 hover:text-[#7E4108]"
              aria-label="Reservar uma mesa"
            >
              Molhos
            </Link>
          </nav>
        </div>

        <div className="flex justify-center md:justify-end">
          <Image
            src="/logo-black.png"
            alt="Logo do Restaurante Badejo"
            width={150}
            height={150}
            className="object-contain"
          />
        </div>

        <p className="block sm:hidden text-xs text-gray-500 mt-4">
          Copyright ©2024 Badejo.
        </p>
      </div>
    </footer>
  )
}
