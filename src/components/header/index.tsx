import Image from 'next/image'
import Link from 'next/link'
import { DialogTrigger } from '@/components/ui/dialog'
import { initTranslations } from '@/app/i18n'
import { LanguageChanger } from '../language-changer'
import { ReservationDialog } from '../reservation-dialog'

interface HeaderProps {
    locale: string
}

const namespace = ['header']

export async function Header({ locale }: HeaderProps) {
    const { t } = await initTranslations(locale, namespace)

    return (
        <header className="bg-[#7E4108] text-[#FCFDFE] p-4 border-b border-[#FCFDFE] sm:border-none">
            <nav className="container mx-auto flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold">
                    <Image src="/logo.png" alt="Badejo" width={40} height={40} />
                </Link>

                <ul className="flex space-x-4 items-center">
                    <li>
                        <Link
                            href="/"
                            className="hover:underline"
                            aria-label="Ir para a página inicial"
                        >
                            {t('Início')}
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/menu"
                            className="hover:underline"
                            aria-label="Ir para a página de cardápio"
                        >
                            {t('Cardápio')}
                        </Link>
                    </li>
                    <li className="sm:hidden">
                        <Link
                            href="/sauces"
                            className="hover:underline"
                            aria-label="Ir para a página de molhos"
                        >
                            {t('Kits')}
                        </Link>
                    </li>

                    <li className="sm:hidden">
                        <ReservationDialog>
                            <DialogTrigger className="bg-[#FCFDFE] text-[#7E4108] py-2 px-4 rounded-full text-center font-bold hover:underline">
                                {t('Reserva')}
                            </DialogTrigger>
                        </ReservationDialog>
                    </li>

                    <li className="hidden sm:block">
                        <Link
                            href="/sauces"
                            className="hover:underline"
                            aria-label="Ir para a página de molhos"
                        >
                            {t('Kits de Moqueca')}
                        </Link>
                    </li>

                    <li className="hidden sm:block">
                        <ReservationDialog>
                            <DialogTrigger className="bg-[#FCFDFE] text-[#7E4108] py-2 px-4 rounded-full text-center font-bold hover:underline">
                                {t('Faça sua reserva')}
                            </DialogTrigger>
                        </ReservationDialog>
                    </li>

                    <li>
                        <LanguageChanger locale={locale} />
                    </li>
                </ul>
            </nav>
        </header>
    )
}
