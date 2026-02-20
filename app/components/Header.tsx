import {Link} from 'react-router';
import type {HeaderQuery} from 'storefrontapi.generated';

interface HeaderProps {
  header: HeaderQuery;
}

export default function Header({header}: HeaderProps) {
  const {shop, menu} = header;
  const logoUrl = shop.brand?.logo?.image?.url;
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex items-center justify-between">
        {/* Logo / Shop Name */}
        <Link
          to="/"
          className="flex items-center gap-3 hover:opacity-80 transition-opacity"
        >
          {logoUrl && (
            <img src={logoUrl} alt={shop.name} className="h-10 w-auto" />
          )}
        </Link>

        {/* Navigation Menu */}
        {menu?.items && (
          <ul className="flex gap-6">
            {menu.items.map((item) => {
              if (!item.url) return null;

              return (
                <li key={item.id}>
                  <Link
                    to={item.url}
                    className="hover:opacity-80 transition-opacity"
                  >
                    {item.title}
                  </Link>

                  {/* Nested items (dropdown) */}
                  {item.items && item.items.length > 0 && (
                    <ul className="hidden group-hover:block absolute bg-gray-700 mt-2 rounded shadow-lg">
                      {item.items.map((subItem) => {
                        if (!subItem.url) return null;

                        return (
                          <li key={subItem.id}>
                            <Link
                              to={subItem.url}
                              className="block px-4 py-2 hover:bg-gray-600 transition-colors"
                            >
                              {subItem.title}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        )}
      </nav>
    </header>
  );
}
