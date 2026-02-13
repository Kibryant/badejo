import Image from 'next/image'
import { Phone, MapPin, Instagram } from 'lucide-react'
import Link from 'next/link'
import { Ifood } from '../icons/ifood'
import { Whatsapp } from '../icons/whatsapp'
import { ReservationDialog } from '../reservation-dialog'
import { DialogTrigger } from '../ui/dialog'
import { initTranslations } from '@/app/i18n'

interface FooterProps {
    locale: string
    isBrownBg?: boolean
}

const namespace = ['footer', 'common']

export async function Footer({ locale, isBrownBg = false }: FooterProps) {
    const { t } = await initTranslations(locale, namespace)

    const bgColor = isBrownBg ? 'bg-[#734108]' : 'bg-[#FCFDFE]'
    const textColor = isBrownBg ? 'text-[#FCFDFE]' : 'text-black'
    const fillColor = isBrownBg ? 'fill-[#FCFDFE]' : 'fill-[#7E4108]'
    const highlightColor = isBrownBg ? 'text-[#FCFDFE]' : 'text-[#7E4108]'
    const subTextColor = isBrownBg ? 'text-zinc-300' : 'text-zinc-700'
    const iconColor = isBrownBg ? 'text-[#FCFDFE]' : 'text-[#7E4108]'
    const currentYear = new Date().getFullYear()

    return (
        <footer
            className={`${bgColor} ${textColor} py-16 border-t border-[#734108]`}
        >
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center md:items-start space-y-10 md:space-y-0 text-center md:text-left">
                <div className="space-y-5">
                    <h2 className={`text-3xl md:text-4xl font-bold ${highlightColor}`}>
                        {t('footer:horarios')}
                    </h2>
                    <div className="text-lg space-y-2">
                        <p className={`font-bold ${highlightColor}`}>
                            {t('footer:segunda')}{' '}
                            <span className={`font-normal ${subTextColor}`}>{t('footer:fechado')}</span>
                        </p>
                        <p className={`font-bold ${highlightColor}`}>
                            {t('footer:terca')}{' '}
                            <span className={`font-normal ${subTextColor}`}>
                                {t('footer:terca_horario')}
                            </span>
                        </p>
                        <p className={`font-bold ${highlightColor}`}>
                            {t('footer:quarta_sexta')}{' '}
                            <span className={`font-normal ${subTextColor}`}>
                                {t('footer:quarta_sexta_horario')}
                            </span>
                        </p>
                        <p className={`font-bold ${highlightColor}`}>
                            {t('footer:sabado')}{' '}
                            <span className={`font-normal ${subTextColor}`}>
                                {t('footer:sabado_horario')}
                            </span>
                        </p>
                        <p className={`font-bold ${highlightColor}`}>
                            {t('footer:domingo')}{' '}
                            <span className={`font-normal ${subTextColor}`}>
                                {t('footer:domingo_horario')}
                            </span>
                        </p>
                        <p className={`font-bold ${highlightColor}`}>
                            {t('footer:feriados')}{' '}
                            <span className={`font-normal ${subTextColor}`}>
                                {t('footer:feriados_horario')}
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
                                {t('footer:endereco')}
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
                        {t('footer:copyright', { year: currentYear })}
                    </p>
                </div>

                <div className="flex flex-col items-center md:items-start space-y-3">
                    <h3 className={`text-2xl font-bold ${highlightColor}`}>{t('footer:navegacao')}</h3>
                    <nav className="flex flex-col space-y-2">
                        <Link
                            href="/"
                            className={`${subTextColor} hover:${highlightColor} transition-colors`}
                            aria-label="Ir para a página inicial"
                        >
                            {t('footer:inicio')}
                        </Link>
                        <Link
                            href="/menu"
                            className={`${subTextColor} hover:${highlightColor} transition-colors`}
                            aria-label="Ver o menu"
                        >
                            {t('footer:cardapio')}
                        </Link>
                        <Link
                            href="/sauces"
                            className={`${subTextColor} hover:${highlightColor} transition-colors`}
                            aria-label="Reservar uma mesa"
                        >
                            {t('footer:molhos')}
                        </Link>

                        <ReservationDialog>
                            <DialogTrigger
                                className={`${isBrownBg ? 'bg-white' : 'bg-[#734108]'} ${isBrownBg ? 'text-[#734108]' : 'text-white'} py-2 px-4 rounded-full text-center font-bold hover:underline transition-colors`}
                            >
                                {t('footer:faca_reserva')}
                            </DialogTrigger>
                        </ReservationDialog>
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
                    {t('footer:copyright', { year: currentYear })}
                </p>
            </div>
        </footer>
    )
}