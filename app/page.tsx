'use client';
import React from 'react';
import SkillsList from '@/components/SkillsList';

export default function Home() {
  return (
    <section>
      <div className="max-w-screen-xl mx-auto flex items-center justify-between w-full mt-20">
        <p className="mb-4 text-3xl font-extrabold">
          I’m a Software Developer who enjoys turning ideas into practical,
          user-focused applications. I work across the stack using JavaScript
          (Typescript) and its ecosystem — from front-end frameworks like React
          and Next.js to back-end tools like Node.js and Nest.js. I focus on
          building clean, scalable solutions that are easy to maintain and
          genuinely enjoyable to use. I’m especially drawn to collaborative
          environments where solving real problems with smart, thoughtful code
          is the goal.
        </p>
      </div>
      <div className="max-w-screen-xl mx-auto flex items-center justify-between w-full mt-20">
        <SkillsList />
      </div>
    </section>
  );
}
