'use client';
import React from 'react';
import MatteoCodesTitle from '@/components/MatteoCodesTitle';
import SkillsList from '@/components/SkillsList';

export default function Home() {
  return (
    <div
      className="container mx-auto h-auto m-2 p-6 border-2"
      style={{
        borderBottomLeftRadius: '3rem',
        borderBottomRightRadius: '3rem',
        borderColor: 'var(--color-border-dark)',
        color: 'var(--color-text-dark)',
      }}
    >
      <MatteoCodesTitle />
      <section className={`text-2xl mb-12`}>
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
