import type { Metadata } from 'next'
import './globals.css'
import { Playfair_Display } from 'next/font/google'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Restaurante Badejo',
  description: 'O melhor restaurante de frutos do mar da cidade de S!',
}

const playfair_display = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
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
