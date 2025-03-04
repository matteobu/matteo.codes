import NavLink from '@/components/NavLink';
import './globals.css';

import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className="flex">
        <p className="absolute right-0 transform text-8xl text-transparent opacity-10 font-extrabold matteo-text z-[-1]">
          javascript developer
        </p>
        <main className="w-4/5 p-6 overflow-y-auto">{children}</main>
        <aside className="w-1/5 p-4 sticky top-0 h-screen flex flex-col">
          <NavLink href="/about">ABOUT</NavLink>
          {/* <NavLink href="/">HOME</NavLink>
          <NavLink href="/projects">PROJECTS</NavLink>
          <NavLink href="/contacts">CONTACTS</NavLink> */}
        </aside>
      </body>
    </html>
  );
}
