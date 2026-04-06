import type { ReactNode } from 'react';
import OrganizationJsonLd from '../seo/OrganizationJsonLd';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <a
        href="#main-content"
        className="absolute left-[-9999px] top-4 z-[100] rounded-md bg-white px-4 py-2 text-sm font-semibold text-primary-500 shadow-lg outline-none ring-2 ring-accent-500 transition-none focus:left-4"
      >
        Skip to main content
      </a>
      <Header />
      <main id="main-content" className="flex-1 pt-16" tabIndex={-1}>
        {children}
      </main>
      <Footer />
      <OrganizationJsonLd />
    </div>
  );
};

export default Layout;
