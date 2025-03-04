'use client';
import { NavLinkProps } from '@/types/interfaces';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  console.log(isActive);

  return (
    <Link
      href={href}
      className="text-lg m-1 pl-4 w-full border-1 rounded-lg font-semibold text-green-600 hover:text-green-300 transition duration-300"
    >
      {children}
    </Link>
  );
};

export default NavLink;
