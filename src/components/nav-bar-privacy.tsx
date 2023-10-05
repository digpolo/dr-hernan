// components/common/NavBarPrivacy.js
import Link from 'next/link';

export const navItems = [
  { id: 1, text: 'Menciones legales', link: 'menciones-legales' },
  { id: 2, text: 'Protección de datos', link: 'proteccion-de-datos' },
  { id: 3, text: 'Gestión de cookies', link: 'gestion-de-cookies' },
]

const NavBarPrivacy = () => {
  return (
    <nav className="bg-green p-4">
      <ul className="flex space-x-4">
        {navItems.map((item) => (
          <li
            key={item.id}
          >
            <Link href={`/${item.link}`}>
              <h3 className="text-white hover:text-yellow-500 transition duration-300">{item.text}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavBarPrivacy

