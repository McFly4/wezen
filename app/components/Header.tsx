import {Link} from 'react-router';
import type {HeaderQuery} from 'storefrontapi.generated';

interface HeaderProps {
  header: HeaderQuery;
}

export default function Header({header}: HeaderProps) {
  const {shop, menu} = header;
  const logoUrl = shop.brand?.logo?.image?.url;

  return (
    <header className="text-white py-6 fixed top-0 left-0 w-full z-50 ">
      <nav className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          {logoUrl && (
            <img src={logoUrl} alt={shop.name} className="h-8 w-auto" />
          )}
        </Link>

        {/* Navigation Menu - Centered */}
        <div className="flex-1 flex justify-center">
          {menu?.items && (
            <ul className="flex items-center gap-8">
              {menu.items.map((item) => {
                if (!item.url) return null;
                const hasSubItems = item.items && item.items.length > 0;

                return (
                  <li key={item.id} className="relative group">
                    <Link
                      to={item.url}
                      className="flex items-center gap-1 text-white/90 hover:text-white transition-colors"
                    >
                      {item.title}
                      {hasSubItems && (
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      )}
                    </Link>

                    {/* Dropdown Menu */}
                    {hasSubItems && (
                      <ul className="absolute left-0 top-full pt-2 hidden group-hover:block min-w-[200px]">
                        <div className="bg-black/95 backdrop-blur-sm rounded-lg shadow-xl border border-white/10 py-2">
                          {item.items.map((subItem) => {
                            if (!subItem.url) return null;

                            return (
                              <li key={subItem.id}>
                                <Link
                                  to={subItem.url}
                                  className="block px-4 py-2 text-white/80 hover:text-white hover:bg-white/5 transition-colors"
                                >
                                  {subItem.title}
                                </Link>
                              </li>
                            );
                          })}
                        </div>
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        {/* CTA Button */}
        <Link
          to="/contact"
          className="px-6 py-2 border border-cyan-500 text-cyan-500 rounded-full hover:bg-cyan-500 hover:text-black transition-all duration-300"
        >
          Book a demo
        </Link>
      </nav>
    </header>
  );
}
