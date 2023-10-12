import Link from 'next/link'
import logo from './dojo-logo.png'
import Image from 'next/image'

export default function Navbar() {
  return (
    <nav>
    <Image 
    src={logo}
    alt='Cs Dojo'
    placeholder='blur'
    quality={100}
    width={70}
    />
    <h1>Nextjs 13</h1>
    <Link href={'/'}>Dashboard</Link>
    <Link href={'/tickets'}>Tickets</Link>
  </nav>
  )
}
