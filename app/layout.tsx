'use client';
import { useState, useEffect } from 'react';
import NavLink from '@/components/NavLink';
import { NAV_LINKS } from '@/utils/constants';
import './globals.css';
import { MobileContext } from '@/context/MobileContext';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const widthLimit = 1024;
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const checkScreenWidth = () => {
        setIsMobile(window.innerWidth < widthLimit);
      };

      window.addEventListener('resize', checkScreenWidth);
      checkScreenWidth();
      return () => window.removeEventListener('resize', checkScreenWidth);
    }
  }, []);

  const renderNavLinks = () => {
    return NAV_LINKS.map((n, i) => {
      const IconComponent = n.icon;

      return isMobile ? (
        <NavLink key={i} href={n.href} isMobile={isMobile}>
          {IconComponent && <IconComponent />}
          {!isMobile && n.title}
        </NavLink>
      ) : (
        <NavLink key={i} href={n.href} isMobile={isMobile}>
          {n.title}
        </NavLink>
      );
    });
  };

  return (
    <MobileContext.Provider value={{ isMobile }}>
      <html lang="en" suppressHydrationWarning={true}>
        <body className="flex min-h-screen relative">
          <p
            className="absolute right-0 transform text-8xl text-transparent opacity-10 font-extrabold matteo-text z-[-1]"
            style={{ userSelect: 'none' }}
          >
            javascript developer
          </p>
          <main
            className={`w-full ${
              isMobile ? 'pb-20' : ''
            } flex-grow overflow-x-hidden overflow-y-auto`}
          >
            {children}
          </main>
          {isMobile ? (
            <div
              className="w-full fixed bottom-0 left-0 shadow-lg z-50 border-t-2 h-auto"
              style={{
                backgroundColor: 'var(--color-background)',
                borderColor: 'var(--color-border)',
              }}
            >
              <div className="flex justify-evenly p-4">{renderNavLinks()}</div>
            </div>
          ) : (
            <aside className="w-1/5 p-4 sticky top-0 h-screen flex flex-col">
              {renderNavLinks()}
            </aside>
          )}
        </body>
      </html>
    </MobileContext.Provider>
  );
}
