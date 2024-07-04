import Image from 'next/image'
import Link from 'next/link'


const navIcons = [
  { src: '/icons/search.svg', alt: 'search' },
  { src: '/icons/black-heart.svg', alt: 'heart' },
  { src: '/icons/user.svg', alt: 'user' },
]

const Navbar = () => {
  return (
    <header className="w-full bg-[#eec9c9] border-b-4 border-gray-900">
      <nav className="nav">
        <Link href="/" className="flex items-center gap-1">
          <Image 
            src="/icons/logo.svg"
            width={35}
            height={35}
            alt="logo"
          />

          <p className="nav-logo font-medium ml-2">
          <span className='text-primary'>Web Scraping App</span>
          </p>
        </Link>

        <div className="flex items-center gap-5">
          {navIcons.map((icon) => (
            <Image 
              key={icon.alt}
              src={icon.src}
              alt={icon.alt}
              width={28}
              height={28}
              className="object-contain"
            />
          ))}
        </div>
      </nav>
    </header>
  )
}

export default Navbar