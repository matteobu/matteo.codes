'use client';

import { NavLinkProps } from '@/types/interfaces';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`text-lg m-1 pl-4 w-full rounded-lg font-semibold transition duration-300 border-2 cursor-pointer ${
        isActive ? 'isActive' : 'isInactive'
      }`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
