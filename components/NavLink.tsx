'use client';

import { NavLinkProps } from '@/types/interfaces';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavLink: React.FC<NavLinkProps> = ({ href, children, isMobile }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`text-lg m-1 max-w-3/4 rounded-lg font-semibold transition duration-300 ${
        isMobile ? 'border-0 p-1' : 'pl-4 border-2'
      } cursor-pointer ${isActive ? 'isActive' : 'isInactive'}`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
