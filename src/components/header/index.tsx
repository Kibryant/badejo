import Image from 'next/image'
import Link from 'next/link'

export function Header() {
  return (
    <header className="bg-[#7E4108] text-[#FCFDFE] p-4 border-b border-[#FCFDFE] sm:border-none">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          <Image src="/logo.png" alt="Badejo" width={40} height={40} />
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="hover:underline">
              Inicio
            </Link>
          </li>
          <li>
            <Link href="/menu" className="hover:underline">
              Cardápio
            </Link>
          </li>
          <li>
            <Link
              href="/sauces"
              className="bg-[#FCFDFE] text-[#7E4108] py-2 px-4 rounded-full text-center font-bold hover:underline"
            >
              Molhos
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
