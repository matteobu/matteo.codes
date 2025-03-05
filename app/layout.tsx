'use client';
import { useState, useEffect } from 'react';
import './globals.css';
import { MobileContext } from '@/context/MobileContext';
import { UAParser } from 'ua-parser-js';
import RenderNavLinks from '@/components/RenderNavLinks';
import RenderContactLinks from '@/components/RenderContactLinks';
import { mobile, UAParser_value } from '@/utils/constants';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { device } = UAParser(UAParser_value);
  const isSSRMobile = device.is(mobile);
  const [isMobile, setIsMobile] = useState(isSSRMobile);
  const widthLimit = 1024;

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
              <div className="flex justify-evenly p-4">
                <RenderNavLinks />
              </div>
            </div>
          ) : (
            <aside className="w-1/5 p-4 sticky top-0 h-screen flex flex-col justify-between">
              <div className="flex flex-col">
                <RenderNavLinks />
              </div>
              <div className="flex flex-row justify-center">
                <RenderContactLinks />
              </div>
            </aside>
          )}
        </body>
      </html>
    </MobileContext.Provider>
  );
}
