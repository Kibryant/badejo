'use client'

import Image from 'next/image'
import { Phone, MapPin, Instagram } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Ifood } from '../icons/ifood'

export function Footer() {
  const pathname = usePathname()

  const isDarkBg = pathname.includes('menu') || pathname.includes('sauces')
  const bgColor = isDarkBg ? 'bg-[#734108]' : 'bg-[#FCFDFE]'
  const textColor = isDarkBg ? 'text-[#FCFDFE]' : 'text-black'
  const highlightColor = isDarkBg ? 'text-[#FCFDFE]' : 'tex t-[#7E4108]'
  const subTextColor = isDarkBg ? 'text-zinc-300' : 'text-zinc-700'
  const iconColor = isDarkBg ? 'text-[#FCFDFE]' : 'text-[#7E4108]'

  return (
    <footer className={`${bgColor} ${textColor} py-16 border-t border-[#734108]`}>
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center md:items-start space-y-10 md:space-y-0 text-center md:text-left">
        <div className="space-y-5">
          <h2 className={`text-3xl md:text-4xl font-bold ${highlightColor}`}>
            Horários
          </h2>
          <div className="text-lg space-y-2">
            <p className={`font-bold ${highlightColor}`}>
              Segunda:{' '}
              <span className={`font-normal ${subTextColor}`}>Fechado</span>
            </p>
            <p className={`font-bold ${highlightColor}`}>
              Terça:{' '}
              <span className={`font-normal ${subTextColor}`}>12:00 às 15:00</span>
            </p>
            <p className={`font-bold ${highlightColor}`}>
              Quarta á Sexta:{' '}
              <span className={`font-normal ${subTextColor}`}>
                12:00 às 15:00 - 18 ás 22:00
              </span>
            </p>
            <p className={`font-bold ${highlightColor}`}>
              Sábado:{' '}
              <span className={`font-normal ${subTextColor}`}>12:00 às 22:00</span>
            </p>
            <p className={`font-bold ${highlightColor}`}>
              Domingo:{' '}
              <span className={`font-normal ${subTextColor}`}>12:00 às 17:00</span>
            </p>
            <p className={`font-bold ${highlightColor}`}>
              Feriados:{' '}
              <span className={`font-normal ${subTextColor}`}>12:00 às 16:00</span>
            </p>
          </div>

          <div className="space-y-2">
            <p className="flex items-center justify-center md:justify-start space-x-2">
              <Phone className={`${iconColor}`} size={20} aria-label="Telefone" />
              <span className={`font-bold ${highlightColor}`}>
                <span className={`font-normal ${subTextColor}`}>
                  (11) 5052-6890
                </span>
              </span>
            </p>
            <p className="flex items-center justify-center md:justify-start sm:space-x-2">
              <MapPin className={`${iconColor}`} size={20} aria-label="Endereço" />
              <span className={`font-bold ${highlightColor}`}>
                Endereço:{' '}
                <span className={`font-normal ${subTextColor}`}>
                  Av. Moema, 265 - Moema, São Paulo
                </span>
              </span>
            </p> 
          </div>

          <div className="flex justify-center md:justify-start space-x-4 mt-4">
            <a
              href="https://www.instagram.com/badejorestaurantesp/"
              aria-label="Instagram"
              className={`${iconColor}`}
            >
              <Instagram size={28} />
            </a>
            <a
                href="https://www.ifood.com.br/delivery/sao-paulo-sp/badejo-moema-moema/117956af-3416-4b26-83ed-"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ifood"
              >
                <Ifood width={32} height={32} />
              </a>
          </div>

          <p className="hidden sm:block text-xs text-zinc-300 mt-4">
            Copyright ©2024 Badejo.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-start space-y-3">
          <h3 className={`text-2xl font-bold ${highlightColor}`}>Navegação</h3>
          <nav className="flex flex-col space-y-2">
            <Link
              href="/"
              className={`${subTextColor} hover:${highlightColor}`}
              aria-label="Ir para a página inicial"
            >
              Início
            </Link>
            <Link
              href="/menu"
              className={`${subTextColor} hover:${highlightColor}`}
              aria-label="Ver o menu"
            >
              Cardápio
            </Link>
            <Link
              href="/sauces"
              className={`${subTextColor} hover:${highlightColor}`}
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

        <p className="block sm:hidden text-xs text-zinc-300 mt-4">
          Copyright ©2024 Badejo.
        </p>
      </div>
    </footer>
  )
}
