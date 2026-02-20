import type {FooterQuery, HeaderQuery} from 'storefrontapi.generated';
import {Footer} from '~/components/Footer';
import {Header} from '~/components/Header';

interface PageLayoutProps {
  footer: Promise<FooterQuery | null>;
  header: HeaderQuery;
  publicStoreDomain: string;
  children?: React.ReactNode;
}

export function PageLayout({
  children = null,
  footer,
  header,
  publicStoreDomain,
}: PageLayoutProps) {
  return (
    <>
      {header && (
        <Header header={header} publicStoreDomain={publicStoreDomain} />
      )}
      <main>{children}</main>
      <Footer
        footer={footer}
        header={header}
        publicStoreDomain={publicStoreDomain}
      />
    </>
  );
}
