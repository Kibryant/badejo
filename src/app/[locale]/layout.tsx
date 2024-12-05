import type { Metadata } from 'next'
import '../globals.css'
import { Playfair_Display } from 'next/font/google'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { i18nConfig } from '@/i18n-config'
import { notFound } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Restaurante Badejo',
  description: 'O melhor restaurante de frutos do mar da cidade de São Paulo.',
  creator: 'Arthur Gustavo Souza Silva Nascimento',
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
    <html lang="en" className="scroll-smooth">
      <body className={`${playfair_display.className} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
