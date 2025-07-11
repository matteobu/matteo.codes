'use client';
import React from 'react';
import SkillsList from '@/components/SkillsList';
import Link from 'next/link';

export default function Home() {
  return (
    <section>
      <div className="max-w-screen-xl mx-auto flex flex-col items-start justify-between w-full mt-20">
        <p className="mb-4 text-3xl font-extrabold">
          I’m a Software Developer who enjoys turning ideas into practical,
          user-focused applications. I work across the stack using{' '}
          <span className="text-yellow-500">JavaScript</span> (
          <span className="text-blue-600">TypeScript</span>) and its ecosystem.
          I build clean, scalable solutions and enjoy working in collaborative
          environments to solve real problems with thoughtful code.
        </p>
        <p className="mb-4 text-3xl font-extrabold">
          I also contribute to impactful open-source projects such as{' '}
          <Link
            href={'https://www.preciousplastic.com/'}
            style={{ color: '#22c55e' }}
          >
            Precious Plastic.
          </Link>
        </p>
      </div>
      <div className="max-w-screen-xl mx-auto flex items-center justify-between w-full mt-20">
        <SkillsList />
      </div>
    </section>
  );
}
