import type { Metadata } from 'next'
import '../globals.css'
import { Playfair_Display } from 'next/font/google'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { i18nConfig } from '@/i18n-config'
import { notFound } from 'next/navigation'

const descriptions: Record<string, { title: string; description: string }> = {
    'pt-BR': {
        title: 'Restaurante Badejo',
        description: 'O melhor restaurante de frutos do mar da cidade de São Paulo.',
    },
    en: {
        title: 'Badejo Restaurant',
        description: 'The best seafood restaurant in the city of São Paulo.',
    },
    ja: {
        title: 'バデジョレストラン',
        description: 'サンパウロ市で最高のシーフードレストラン。',
    },
    zh: {
        title: 'Badejo 餐厅',
        description: '圣保罗市最好的海鲜餐厅。',
    },
}

export async function generateMetadata({
    params: { locale },
}: {
    params: { locale: string }
}): Promise<Metadata> {
    const localeData = descriptions[locale] || descriptions['pt-BR']
    return {
        title: localeData.title,
        description: localeData.description,
        creator: 'Arthur Gustavo Souza Silva Nascimento',
    }
}

const playfair_display = Playfair_Display({
    subsets: ['latin'],
    display: 'swap',
})

export function generateStaticParams() {
    return i18nConfig.locales.map(locale => ({ locale }))
}

export default function RootLayout({
    children,
    params: { locale },
}: Readonly<{
    children: React.ReactNode
    params: {
        locale: string
    }
}>) {
    if (!i18nConfig.locales.includes(locale)) {
        notFound()
    }

    return (
        <html lang={locale} className="scroll-smooth">
            <body className={`${playfair_display.className} antialiased`}>
                <Header locale={locale} />
                {children}
                <Footer locale={locale} />
            </body>
        </html>
    )
}
