import { Clock, Phone, Instagram, FishIcon } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { Ifood } from '@/components/icons/ifood'
import {
    DialogTrigger
} from '@/components/ui/dialog'
import { initTranslations } from '@/app/i18n'
import { ReservationDialog } from '@/components/reservation-dialog'

interface PageProps {
    params: {
        locale: string
    }
}

const namespace = ['home']

export default async function Page({ params: { locale } }: PageProps) {
    const { t } = await initTranslations(locale, namespace)

    const apikey = process.env.GOOGLE_MAP_API_KEY

    return (
        <div className="min-h-screen bg-[#FCFDFE] text-[#000000]">
            <Link
                href="/sauces"
                className="fixed bottom-8 right-8 bg-[#7E4108] text-[#FCFDFE] py-3 px-6 rounded-full shadow-lg"
            >
                {t('conheca_molhos')}
            </Link>

            <main>
                <section className="relative bg-[#7E4108] h-screen sm:bg-cover sm:bg-center sm:bg-fixed sm:bg-[url('/badejo.jpg')]">
                    <video
                        className="absolute inset-0 w-full h-full object-cover sm:hidden"
                        src="/introduction.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        controls={false}
                        preload="auto"
                        disablePictureInPicture
                        controlsList="nodownload nofullscreen noplaybackrate"
                    />

                    <div className="absolute inset-0 sm:bg-black sm:bg-opacity-50 flex flex-col items-center justify-center text-center p-6">
                        <Badge className="flex items-center bg-[#7E4108] text-[#FCFDFE] rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105 hover:bg-[#7E4108] mb-2 sm:mb-0">
                            <FishIcon className="mr-2" />
                            {t('dos_mares_melhor')}
                        </Badge>

                        <h1 className="text-[#FCFDFE] text-5xl font-bold tracking-wide drop-shadow-lg sm:text-6xl">
                            {t('bem_vindo')}
                        </h1>

                        <p className="text-gray-200 text-lg sm:text-2xl mt-4 mb-6 max-w-lg leading-relaxed">
                            {t('hero_description')}
                        </p>

                        <ReservationDialog>
                            <DialogTrigger className="bg-[#7E4108] text-[#FCFDFE] py-3 px-6 sm:py-4 sm:px-10 rounded-full shadow-lg hover:bg-[#5c3007] font-bold mt-6">
                                {t('faca_reserva')}
                            </DialogTrigger>
                        </ReservationDialog>
                    </div>
                </section>

                <section className="container mx-auto py-16 sm:py-40 px-4">
                    <h2 className="text-4xl font-bold mb-3 text-center text-[#7E4108]">
                        {t('nossa_historia')}
                    </h2>
                    <div className="w-24 h-1 bg-[#7E4108] mx-auto mb-8" />

                    <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-12">
                        <div className="mb-8 lg:mb-0 lg:w-1/2">
                            <Image
                                quality={100}
                                src="/badejo-inside.jpg"
                                alt="História do Badejo"
                                className="rounded-lg shadow-lg w-full h-auto"
                                width={800}
                                height={600}
                            />
                        </div>

                        <div className="lg:w-1/2 max-w-2xl mx-auto text-center lg:text-left">
                            <p className="mb-6 text-lg leading-relaxed text-gray-700">
                                {t('historia_p1_part1')} <strong>{t('historia_p1_strong1')}</strong>{' '}
                                {t('historia_p1_part2')}{' '}
                                <strong>{t('historia_p1_strong2')}</strong>{' '}
                                {t('historia_p1_part3')}
                                <strong> {t('historia_p1_strong3')}</strong>.
                            </p>
                            <p className="mb-6 text-lg leading-relaxed text-gray-700">
                                <strong>{t('historia_p2_strong1')}</strong>
                                {t('historia_p2_part1')}{' '}
                                <strong>{t('historia_p2_strong2')}</strong>
                                {t('historia_p2_part2')}{' '}
                                <strong>{t('historia_p2_strong3')}</strong>.
                            </p>
                            <p className="mb-6 text-lg leading-relaxed text-gray-700">
                                {t('historia_p3_part1')}{' '}
                                <strong>{t('historia_p3_strong1')}</strong>{' '}
                                {t('historia_p3_part2')}{' '}
                                <strong>{t('historia_p3_strong2')} </strong>
                                {t('historia_p3_part3')}
                                <strong> {t('historia_p3_strong3')}</strong> {t('historia_p3_part4')}{' '}
                                <strong>{t('historia_p3_strong4')}</strong>.
                            </p>
                            <p className="text-lg leading-relaxed text-gray-700">
                                {t('historia_p4_part1')}{' '}
                                <strong>{t('historia_p4_strong1')}</strong>{' '}
                                {t('historia_p4_part2')}{' '}
                                <strong>{t('historia_p4_strong2')}</strong>.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="bg-[#7E4108] text-[#FCFDFE] py-16 sm:py-40">
                    <div className="container mx-auto px-4">
                        <h2 className="text-4xl font-bold mb-3 text-center text-[#FCFDFE]">
                            {t('moqueca_capixaba')}
                        </h2>
                        <div className="w-24 h-1 bg-[#FCFDFE] mx-auto mb-8" />
                        <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-12">
                            <div className="lg:w-1/2 max-w-2xl mx-auto text-center lg:text-left">
                                <p className="mb-6 text-lg leading-relaxed text-[#FCFDFE]">
                                    <strong>
                                        {t('moqueca_p1_strong')}
                                    </strong>{' '}
                                    <br />
                                    {t('moqueca_p1')}
                                </p>
                                <p className="text-lg leading-relaxed text-[#FCFDFE]">
                                    {t('moqueca_p2')}
                                </p>
                            </div>
                            <div className="mb-8 lg:mb-0 lg:w-1/2">
                                <Image
                                    quality={100}
                                    src="/moqueca-capixaba.jpg"
                                    alt="História do Badejo"
                                    className="rounded-lg shadow-lg w-full object-cover h-[600px]"
                                    width={800}
                                    height={600}
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="container mx-auto py-16 sm:py-40 px-4">
                    <h2 className="text-4xl font-bold mb-3 text-center text-[#7E4108]">
                        {t('gostinho_menu')}
                    </h2>
                    <div className="w-24 h-1 bg-[#7E4108] mx-auto mb-8" />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="border p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                            <Image
                                quality={100}
                                src="/camarao-coco.jpg"
                                alt="Prato Badejo - Frutos do Mar"
                                className="rounded-lg w-full h-auto max-h-[400px] mb-4 object-cover"
                                width={800}
                                height={600}
                            />

                            <h3 className="text-xl font-semibold mb-2 text-[#7E4108]">
                                {t('prato_camarao_coco')}
                            </h3>
                            <p className="text-gray-700">
                                {t('desc_camarao_coco')}
                            </p>
                        </div>
                        <div className="border p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                            <Image
                                quality={100}
                                src="/casquinha-de-siri.jpg"
                                alt="Prato Badejo - Frutos do Mar"
                                className="rounded-lg w-full h-auto max-h-[400px] mb-4 object-cover"
                                width={800}
                                height={600}
                            />

                            <h3 className="text-xl font-semibold mb-2 text-[#7E4108]">
                                {t('prato_casquinha_siri')}
                            </h3>
                            <p className="text-gray-700">
                                {t('desc_casquinha_siri')}
                            </p>
                        </div>
                        <div className="border p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                            <Image
                                quality={100}
                                src="/moqueca-mista.jpg"
                                alt="Prato Badejo - Frutos do Mar"
                                className="rounded-lg w-full h-auto max-h-[400px] mb-4 object-cover"
                                width={800}
                                height={600}
                            />

                            <h3 className="text-xl font-semibold mb-2 text-[#7E4108]">
                                {t('prato_moqueca_mista')}
                            </h3>
                            <p className="text-gray-700">
                                {t('desc_moqueca_mista')}
                            </p>
                        </div>
                    </div>

                    <div className="text-center mt-12">
                        <Link
                            href="/menu"
                            className="bg-[#7E4108] text-[#FCFDFE] py-3 px-6 rounded-full shadow-lg hover:bg-[#5c3007] animate-bounce transition duration-400 delay-400"
                        >
                            {t('ver_cardapio')}
                        </Link>
                    </div>
                </section>

                <section className="bg-[#7E4108] text-[#FCFDFE] py-16 sm:py-40">
                    <div className="container mx-auto px-4">
                        <h2 className="text-4xl font-bold mb-3 text-center text-[#FCFDFE]">
                            {t('info_essenciais')}
                        </h2>
                        <div className="w-24 h-1 bg-[#FCFDFE] mx-auto mb-8" />
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="flex flex-col items-center justify-center">
                                <div className="w-full h-64">
                                    <iframe
                                        src={`https://www.google.com/maps/embed/v1/place?key=${apikey}&q=Badejo+Dos+Mares+O+Melhor`}
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        title="Badejo Dos Mares O Melhor"
                                    />
                                </div>
                                <h3 className="text-xl font-semibold mt-4 mb-2">{t('localizacao')}</h3>
                                <p className="text-center">
                                    {t('endereco')}
                                </p>
                            </div>

                            <div className="flex flex-col items-center justify-center">
                                <Clock size={48} className="mb-4" />
                                <h3 className="text-xl font-semibold mb-2">
                                    {t('horario_funcionamento')}
                                </h3>
                                <p className="text-center">
                                    {t('horario_seg')} <br />
                                    {t('horario_ter')} <br />
                                    {t('horario_qua_sex')} <br />
                                    {t('horario_sab')} <br />
                                    {t('horario_dom')}
                                </p>
                            </div>

                            <div className="flex flex-col items-center justify-center">
                                <Phone size={48} className="mb-4" />
                                <h3 className="text-xl font-semibold mb-2">{t('contato')}</h3>
                                <p className="text-center">
                                    {t('telefone')} <br />
                                    {t('whatsapp')}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-[#FCFDFE] text-[#000000] py-16 sm:py-40">
                    <div className="container mx-auto px-4">
                        <h2 className="text-4xl font-bold mb-3 text-center text-[#7E4108]">
                            {t('depoimentos')}
                        </h2>
                        <div className="w-24 h-1 bg-[#7E4108] mx-auto mb-8" />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div className="border p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                                <div className="flex items-center mb-4">
                                    <p className="font-bold text-lg">João Silva</p>
                                </div>
                                <p className="italic mb-4">
                                    {t('depoimento_1')}
                                </p>
                                <p className="text-sm text-gray-600">{t('cliente_desde_2020')}</p>
                            </div>

                            <div className="border p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                                <div className="flex items-center mb-4">
                                    <p className="font-bold text-lg">Maria Souza</p>
                                </div>
                                <p className="italic mb-4">
                                    {t('depoimento_2')}
                                </p>
                                <p className="text-sm text-gray-600">{t('cliente_desde_2018')}</p>
                            </div>

                            <div className="border p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                                <div className="flex items-center mb-4">
                                    <p className="font-bold text-lg">Maria Souza</p>
                                </div>
                                <p className="italic mb-4">
                                    {t('depoimento_2')}
                                </p>
                                <p className="text-sm text-gray-600">{t('cliente_desde_2018')}</p>
                            </div>

                            <div className="border p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                                <div className="flex items-center mb-4">
                                    <p className="font-bold text-lg">Maria Souza</p>
                                </div>
                                <p className="italic mb-4">
                                    {t('depoimento_2')}
                                </p>
                                <p className="text-sm text-gray-600">{t('cliente_desde_2018')}</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-[#7E4108] text-[#FCFDFE] py-16 sm:py-40">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-4xl font-bold mb-3">
                            {t('siga_nos')}
                        </h2>

                        <div className="w-24 h-1 bg-[#FCFDFE] mx-auto mb-12" />

                        <p className="mb-8 text-lg max-w-xl mx-auto">
                            {t('texto_redes')} <strong>{t('badejo')}</strong> {t('texto_redes_2')}
                        </p>

                        <div className="flex justify-center space-x-8">
                            <a
                                href="https://www.instagram.com/badejorestaurantesp"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:scale-110 transition-transform duration-200"
                                aria-label="Instagram"
                            >
                                <Instagram size={44} />
                            </a>{' '}
                            <a
                                href="https://www.ifood.com.br/delivery/sao-paulo-sp/badejo-moema-moema/117956af-3416-4b26-83ed-"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:scale-110 transition-transform duration-200"
                                aria-label="Instagram"
                            >
                                <Ifood width={52} height={52} />
                            </a>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}
