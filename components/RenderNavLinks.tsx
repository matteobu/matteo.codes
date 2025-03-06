'use client';
import React from 'react';
import { FilmIcon, TableCellsIcon } from '@heroicons/react/16/solid';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function RenderNavLinks() {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;

  const isProjectsActive = () =>
    ['/whichfilm', '/table-relationships'].includes(pathname);

  const whichProjectIsActive = () => {
    if (pathname === '/whichfilm') {
      return (
        <FilmIcon
          className="size-6 ml-2"
          style={{ color: 'var(--color-background-dark)' }}
        />
      );
    } else if (pathname === '/table-relationships') {
      return (
        <TableCellsIcon
          className="size-6 ml-2"
          style={{ color: 'var(--color-background-dark)' }}
        />
      );
    } else {
      return null;
    }
  };

  return (
    <Menu>
      <Link
        href="/"
        className={`flex items-start border-2 justify-center lg:justify-start 
            p-1 pl-2 rounded-lg transition-colors duration-200
            hover:bg-opacity-10 mb-1 ${
              isActive('/') ? 'isActive' : 'isInactive'
            }`}
      >
        main
      </Link>
      <MenuButton
        className={`flex items-start border-2 justify-center lg:justify-start 
          p-1 pl-2 rounded-lg transition-colors duration-200
          hover:bg-opacity-10 mb-1 ${
            isProjectsActive() ? 'isActive' : 'isInactive'
          }`}
      >
        {isProjectsActive() ? 'project:' : 'projects'} {whichProjectIsActive()}
      </MenuButton>
      <MenuItems anchor="bottom" className="mt-2">
        <MenuItem>
          <Link
            href="/whichfilm"
            className={`flex items-center border-2 justify-center lg:justify-start 
            p-1 pl-2 rounded-lg transition-colors duration-200
            hover:bg-opacity-10 mb-1 ${
              isActive('/whichfilm') ? 'isActive' : 'isInactive'
            }`}
          >
            <FilmIcon
              className="size-4 mr-2"
              style={{
                color: isActive('/whichfilm')
                  ? 'var(--color-background-dark)'
                  : 'var(--color-title-dark)',
              }}
            />
            whichfilm
          </Link>
        </MenuItem>
        <MenuItem>
          <Link
            href="/table-relationships"
            className={`flex items-center border-2 justify-center lg:justify-start 
              p-1 pl-2 rounded-lg transition-colors duration-200
              hover:bg-opacity-10 mb-1 ${
                isActive('/table-relationships') ? 'isActive' : 'isInactive'
              }`}
          >
            <TableCellsIcon
              className="size-4 mr-2"
              style={{
                color: isActive('/table-relationships')
                  ? 'var(--color-background-dark)'
                  : 'var(--color-title-dark)',
              }}
            />
            table-relationships
          </Link>
        </MenuItem>
      </MenuItems>
    </Menu>
  );
}
