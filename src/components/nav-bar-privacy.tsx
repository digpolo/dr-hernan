// components/common/NavBarPrivacy.js
import Link from 'next/link';

export const navItems = [
  { id: 1, text: 'Política de privacidad', link: 'politica-de-privacidad' },
  { id: 2, text: 'Terminos y condiciones', link: 'terminos-y-condiciones' },
  { id: 3, text: 'Políticas de cookies', link: 'politica-de-cookies' },
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
              <h3 className="text-white hover:text-blue transition duration-300">{item.text}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavBarPrivacy

