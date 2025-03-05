'use client';
import React from 'react';
import { NAV_LINKS } from '@/utils/constants';
import NavLink from './NavLink';
import { useMobile } from '@/context/MobileContext';

export default function RenderNavLinks() {
  const { isMobile } = useMobile();
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
}
