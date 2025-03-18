'use client';
import { useMobile } from '@/context/MobileContext';
import { FaJsSquare, FaReact, FaNode, FaGithub } from 'react-icons/fa';
import { SiTypescript, SiJest, SiPostgresql, SiPython } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';

const skills = [
  {
    icon: <FaJsSquare className="text-yellow-500 text-3xl mr-2" />,
    name: 'JavaScript',
  },
  {
    icon: <SiTypescript className="text-blue-600 text-3xl mr-2" />,
    name: 'TypeScript',
  },
  {
    icon: <FaReact className="text-blue-500 text-3xl mr-2" />,
    name: 'React.js',
  },
  {
    icon: <TbBrandNextjs className="text-black text-3xl mr-2" />,
    name: 'Next.js',
  },
  {
    icon: <FaNode className="text-green-500 text-3xl mr-2" />,
    name: 'Node.js',
  },
  { icon: <SiJest className="text-pink-500 text-3xl mr-2" />, name: 'Jest' },
  {
    icon: <SiPostgresql className="text-indigo-500 text-3xl mr-2" />,
    name: 'PostgreSQL',
  },
  {
    icon: <FaGithub className="text-gray-600 text-3xl mr-2" />,
    name: 'Git & GitHub',
  },
  {
    icon: <SiPython className="text-blue-500 text-3xl mr-2" />,
    name: 'Python(learning)',
  },
];

export default function SkillsList() {
  const { isMobile } = useMobile();

  return (
    <>
      <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-2">
        {skills.map((skill, index) => (
          <li key={index} className="flex items-center">
            {skill.icon}
            {!isMobile && <span>{skill.name}</span>}
          </li>
        ))}
      </ul>
    </>
  );
}
