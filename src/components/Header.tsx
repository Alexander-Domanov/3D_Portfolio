import Link from 'next/link'

export const Navbar = () => {
  return (
        <header className='header'>
            <Link href={'/'} className='w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md'>
                <span className='blue-gradient_text'>Ah</span>
            </Link>
        </header>
  )
}
