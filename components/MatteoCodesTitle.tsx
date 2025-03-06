'use client';
import React from 'react';
import Image from 'next/image';
import { useMobile } from '@/context/MobileContext';

export default function MatteoCodesTitle() {
  const { isMobile } = useMobile();
  return (
    <div
      className="flex items-center gap-4 mb-8"
      style={{ color: 'var(--color-title-dark)' }}
    >
      <Image src="/logo.png" alt="Matteo.codes Logo" width={50} height={50} />
      <h1 className={`${isMobile ? 'text-2xl' : 'text-4xl'} font-bold`}>
        matteo.codes
      </h1>
    </div>
  );
}
