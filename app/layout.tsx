import NavLink from '@/components/NavLink';
import './globals.css';

import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className="flex">
        <p
          className="absolute right-0 transform text-8xl text-transparent opacity-10 font-extrabold matteo-text z-[-1]"
          style={{ userSelect: 'none' }}
        >
          javascript developer
        </p>
        <main className="w-4/5 pr-6 pb-6 pl-6 overflow-hidden">{children}</main>
        <aside className="w-1/5 p-4 sticky top-0 h-screen flex flex-col">
          <NavLink href="/">main</NavLink>
          <NavLink href="/projects">projects</NavLink>
          <NavLink href="/contacts">contacts</NavLink>
        </aside>
      </body>
    </html>
  );
}
