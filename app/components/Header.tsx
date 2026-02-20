import {NavLink} from 'react-router';
import type {HeaderQuery} from 'storefrontapi.generated';

interface HeaderProps {
  header: HeaderQuery;
  publicStoreDomain: string;
}

export function Header({header, publicStoreDomain}: HeaderProps) {
  const {shop} = header;
  return (
    <header className="header">
      <NavLink prefetch="intent" to="/" style={activeLinkStyle} end>
        <strong>{shop.name}</strong>
      </NavLink>
      <HeaderMenu
        primaryDomainUrl={header.shop.primaryDomain.url}
        publicStoreDomain={publicStoreDomain}
      />
    </header>
  );
}

export function HeaderMenu({
  primaryDomainUrl,
  publicStoreDomain,
}: {
  primaryDomainUrl: HeaderProps['header']['shop']['primaryDomain']['url'];
  publicStoreDomain: HeaderProps['publicStoreDomain'];
}) {
  const navigation = [
    {id: '1', title: 'Solution', url: '/solution'},
    {id: '2', title: 'Ressource', url: '/ressource'},
    {id: '3', title: 'Pricing', url: '/pricing'},
    {id: '4', title: 'Carrière', url: '/carriere'},
  ];

  return (
    <nav className="header-menu-desktop" role="navigation">
      {navigation.map((item) => (
        <NavLink
          className="header-menu-item"
          end
          key={item.id}
          prefetch="intent"
          style={activeLinkStyle}
          to={item.url}
        >
          {item.title}
        </NavLink>
      ))}
    </nav>
  );
}

function activeLinkStyle({
  isActive,
  isPending,
}: {
  isActive: boolean;
  isPending: boolean;
}) {
  return {
    fontWeight: isActive ? 'bold' : undefined,
    color: isPending ? 'grey' : 'black',
  };
}
