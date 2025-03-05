import React from 'react';
import Image from 'next/image';
import { FaJsSquare, FaReact, FaNode, FaGithub } from 'react-icons/fa';
import {
  SiPostgresql,
  SiPython,
  SiTypescript,
  SiNextdotjs,
  SiJest,
} from 'react-icons/si';

export default function Home() {
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
      <div className="flex items-center gap-4 mb-8">
        <Image src="/logo.svg" alt="Matteo.codes Logo" width={50} height={50} />
        <h1 className="text-4xl font-bold">matteo.codes</h1>
      </div>

      <section className="text-2xl mb-12">
        <p className="mb-4">
          I&apos;m a <strong>results-driven JavaScript Developer</strong> with{' '}
          <strong>10+ years of project management</strong> experience. Known for
          my adaptability, determination, and strong collaboration, I deliver
          technical solutions while managing projects and teams in dynamic
          environments.
        </p>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-20">
          <li className="flex items-center">
            <FaJsSquare className="text-yellow-500 text-3xl mr-2" />
            <span>JavaScript</span>
          </li>
          <li className="flex items-center">
            <SiTypescript className="text-blue-600 text-3xl mr-2" />
            <span>TypeScript</span>
          </li>
          <li className="flex items-center">
            <FaReact className="text-blue-500 text-3xl mr-2" />
            <span>React.js</span>
          </li>
          <li className="flex items-center">
            <SiNextdotjs className="text-black text-3xl mr-2" />
            <span>Next.js</span>
          </li>
          <li className="flex items-center">
            <FaNode className="text-green-500 text-3xl mr-2" />
            <span>Node.js</span>
          </li>
          <li className="flex items-center">
            <SiJest className="text-pink-500 text-3xl mr-2" />
            <span>Jest</span>
          </li>
          <li className="flex items-center">
            <SiPostgresql className="text-indigo-500 text-3xl mr-2" />
            <span>PostgreSQL</span>
          </li>
          <li className="flex items-center">
            <FaGithub className="text-gray-600 text-3xl mr-2" />
            <span>Git & GitHub</span>
          </li>
          <li className="flex items-center">
            <SiPython className="text-blue-500 text-3xl mr-2" />
            <span>Python (learning)</span>
          </li>
        </ul>
      </section>
    </div>
  );
}
