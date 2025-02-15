'use client'

import Image from 'next/image'
import { Phone, MapPin, Instagram } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Ifood } from '../icons/ifood'
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import { Whatsapp } from '../icons/whatsapp'
import { DialogHeader } from '../ui/dialog'

export function Footer() {
  const pathname = usePathname()

  const isBrownBg = pathname.includes('menu')

  const bgColor = isBrownBg ? 'bg-[#734108]' : 'bg-[#FCFDFE]'
  const textColor = isBrownBg ? 'text-[#FCFDFE]' : 'text-black'
  const fillColor = isBrownBg ? 'fill-[#FCFDFE]' : 'fill-[#7E4108]'
  const highlightColor = isBrownBg ? 'text-[#FCFDFE]' : 'text-[#7E4108]'
  const subTextColor = isBrownBg ? 'text-zinc-300' : 'text-zinc-700'
  const iconColor = isBrownBg ? 'text-[#FCFDFE]' : 'text-[#7E4108]'

  return (
    <footer
      className={`${bgColor} ${textColor} py-16 border-t border-[#734108]`}
    >
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
              <span className={`font-normal ${subTextColor}`}>
                12:00 às 15:00
              </span>
            </p>
            <p className={`font-bold ${highlightColor}`}>
              Quarta á Sexta:{' '}
              <span className={`font-normal ${subTextColor}`}>
                12:00 às 15:00 - 18 ás 22:00
              </span>
            </p>
            <p className={`font-bold ${highlightColor}`}>
              Sábado:{' '}
              <span className={`font-normal ${subTextColor}`}>
                12:00 às 22:00
              </span>
            </p>
            <p className={`font-bold ${highlightColor}`}>
              Domingo:{' '}
              <span className={`font-normal ${subTextColor}`}>
                12:00 às 17:00
              </span>
            </p>
            <p className={`font-bold ${highlightColor}`}>
              Feriados:{' '}
              <span className={`font-normal ${subTextColor}`}>
                12:00 às 16:00
              </span>
            </p>
          </div>

          <div className="space-y-2">
            <p className="flex items-center justify-center md:justify-start space-x-2">
              <Phone
                className={`${iconColor}`}
                size={20}
                aria-label="Telefone"
              />
              <span className={`font-bold ${highlightColor}`}>
                <span className={`font-normal ${subTextColor}`}>
                  (11) 5052-6890
                </span>
              </span>
            </p>
            <p className="flex items-center justify-center md:justify-start space-x-2">
              <Whatsapp
                className={`${fillColor} size-5`}
                aria-label="Telefone"
              />
              <span className={`font-bold ${highlightColor}`}>
                <span className={`font-normal ${subTextColor}`}>
                  (11) 9 9489-1957
                </span>
              </span>
            </p>
            <p className="flex items-center justify-center md:justify-start sm:space-x-2">
              <MapPin
                className={`${iconColor}`}
                size={20}
                aria-label="Endereço"
              />
                <span className={`font-normal ${subTextColor}`}>
                  Av. Moema, 265 - Moema, São Paulo
                </span>
            </p>
          </div>

          <div className="flex justify-center md:justify-start space-x-4 mt-4">
            <a
              href="https://www.instagram.com/badejorestaurantesp/"
              aria-label="Instagram"
              className={`${iconColor} hover:opacity-75 transition-opacity`}
            >
              <Instagram size={28} />
            </a>
            <a
              href="https://www.ifood.com.br/delivery/sao-paulo-sp/badejo-moema-moema/117956af-3416-4b26-83ed-"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ifood"
              className="hover:opacity-75 transition-opacity"
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
              className={`${subTextColor} hover:${highlightColor} transition-colors`}
              aria-label="Ir para a página inicial"
            >
              Início
            </Link>
            <Link
              href="/menu"
              className={`${subTextColor} hover:${highlightColor} transition-colors`}
              aria-label="Ver o menu"
            >
              Cardápio
            </Link>
            <Link
              href="/sauces"
              className={`${subTextColor} hover:${highlightColor} transition-colors`}
              aria-label="Reservar uma mesa"
            >
              Molhos
            </Link>

            <Dialog>
              <DialogTrigger
                className={`${isBrownBg ? 'bg-white' : 'bg-[#734108]'} ${isBrownBg ? 'text-[#734108]' : 'text-white'} py-2 px-4 rounded-full text-center font-bold hover:underline transition-colors`}
              >
                Faça sua Reserva
              </DialogTrigger>
              <DialogContent className="bg-[#F5F5F5] border border-gray-200 rounded-lg shadow-xl">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-[#7E4108]">
                    Escolha como deseja fazer sua reserva
                  </DialogTitle>
                  <DialogDescription className="text-gray-600 mt-2">
                    Clique em uma das opções abaixo para reservar sua mesa:
                  </DialogDescription>
                </DialogHeader>
                <div className="flex flex-col space-y-4 mt-6">
                  <a
                    href="https://api.whatsapp.com/send?phone=5511948919587&text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20uma%20reserva%20para%20o%20restaurante%20Badejo%20em%20S%C3%A3o%20Paulo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-transparent text-[#7E4108] py-3 px-6 rounded-lg text-center font-semibold shadow-md flex items-center justify-center border border-[#7E4108] hover:bg-[#5c3007] hover:text-[#FCFDFE] transition-colors"
                  >
                    <Whatsapp className="w-6 h-6 mr-2 fill-[#7E4108] group-hover:fill-[#FCFDFE] transition-colors" />
                    Reservar via WhatsApp
                  </a>
                  <a
                    href="https://widget.getinapp.com.br/VPz8yq6Q?fbclid=PAZXh0bgNhZW0CMTEAAaYHkzIonFkx_Yls96XyPFEKExCI_cto0QltKG1ZpWV3r3hJ9RmV_YdxVmA_aem_y_VYn5BmcbjgtXquk176YQ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#7E4108] text-white py-3 px-6 rounded-lg text-center font-semibold hover:bg-[#5c3007] transition-colors shadow-md flex items-center justify-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6 mr-2"
                    >
                      <title>Reservar via Site</title>
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
                    </svg>
                    Reservar via Site
                  </a>
                </div>
              </DialogContent>
            </Dialog>
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