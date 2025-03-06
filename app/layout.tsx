'use client';
import React from 'react';
import './globals.css';
import RenderNavLinks from '@/components/RenderNavLinks';
import RenderContactLinks from '@/components/RenderContactLinks';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className="flex min-h-screen relative">
        <p
          className="absolute right-0 transform text-8xl text-transparent opacity-10 font-extrabold matteo-text z-[-1]"
          style={{ userSelect: 'none' }}
        >
          javascript developer
        </p>
        <main className="w-full pb-20 lg:pb-0 flex-grow overflow-x-hidden overflow-y-auto">
          {children}
        </main>
        <div
          className="w-full fixed bottom-0 left-0 shadow-lg border-t-2 h-auto lg:hidden"
          style={{
            backgroundColor: 'var(--color-background-dark)',
            borderColor: 'var(--color-border-dark)',
          }}
        >
          <div className="flex justify-evenly p-4">
            <RenderNavLinks />
          </div>
        </div>

        <aside className="hidden lg:flex w-0 lg:w-1/5 p-4 lg:p-4 sticky top-0 h-screen flex-col justify-between">
          <div className="flex flex-col">
            <RenderNavLinks />
          </div>
          <div className="flex flex-row justify-center">
            <RenderContactLinks />
          </div>
        </aside>
      </body>
    </html>
  );
}
