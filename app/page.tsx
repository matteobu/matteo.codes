'use client';
import React from 'react';
import SkillsList from '@/components/SkillsList';

export default function Home() {
  return (
    <section>
      <div className="max-w-screen-xl mx-auto flex items-center justify-between w-full mt-20">
        <p className="mb-4 text-3xl font-extrabold">
          I am a Software Developer with a strong foundation in JavaScript,
          TypeScript, React, Next.js and Node.js. Passionate about building
          scalable, user-friendly applications, I specialize in developing
          clean, efficient, and maintainable code. With experience in full-stack
          development, automation, and Agile workflows, I thrive in
          collaborative environments where innovation and problem-solving drive
          impactful solutions.
        </p>
      </div>
      <div className="max-w-screen-xl mx-auto flex items-center justify-between w-full mt-20">
        <SkillsList />
      </div>
    </section>
  );
}
