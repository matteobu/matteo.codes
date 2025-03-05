'use client';
import React from 'react';

import MatteoCodes from '@/components/MatteoCodes';
import { useMobile } from '@/context/MobileContext';
import SkillsList from '@/components/SkillsList';

export default function Home() {
  const { isMobile } = useMobile();

  return (
    <div
      className="container text-white mx-auto h-full p-6 border-2"
      style={{
        borderBottomLeftRadius: '3rem',
        borderBottomRightRadius: '3rem',
        borderColor: 'var(--color-border)',
        color: 'var(--color-text)',
      }}
    >
      <MatteoCodes />
      <section className={`${isMobile ? 'text-2xl' : 'text-3xl'} mb-12`}>
        <p className="mb-4">
          I&apos;m a <strong>JavaScript Developer</strong> with{' '}
          <strong>over ten years of project management</strong> experience.
          Known for my adaptability, determination, and strong collaboration, I
          deliver technical solutions while managing projects and teams in
          dynamic environments.
        </p>
        <SkillsList />
      </section>
    </div>
  );
}
