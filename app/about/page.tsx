import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <div
      className="container text-white mx-auto p-6 border-2"
      style={{
        // backgroundColor: 'var(--color-dark-blue-2)',
        borderBottomLeftRadius: '3rem',
        borderBottomRightRadius: '3rem',
        borderColor: 'var(--color-border)',
        color: 'var(--color-text)',
      }}
    >
      <div className="flex items-center gap-4 mb-8">
        <Image src="/logo.svg" alt="Matteo.codes Logo" width={50} height={50} />
        <h1 className="text-4xl font-bold">
          About Me (Hold Tight, I Promise This Gets Better… Probably)
        </h1>
      </div>

      <section className="text-lg mb-12">
        <h2 className="text-2xl font-semibold mb-4">Technical Skills</h2>
        <ul className="list-disc pl-6 mb-6">
          <li>
            <strong>Programming & Frameworks:</strong> JavaScript, TypeScript,
            React.js, Redux, Node.js, Express.js
          </li>
          <li>
            <strong>Currently Improving:</strong> Next.js, Python
          </li>
          <li>
            <strong>Web Development & Tools:</strong> HTML5, CSS3, Tailwind CSS,
            REST API Integration, Git & GitHub
          </li>
          <li>
            <strong>Data & Testing:</strong> PostgreSQL, Jest, React Testing
            Library, Puppeteer
          </li>
          <li>
            <strong>Project Management & Workflows:</strong> Jira, Confluence,
            Agile (SCRUM)
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">Soft Skills</h2>
        <p className="mb-6">
          Analytical mindset, strong collaboration, outcome-driven, adaptable,
          and resilient.
        </p>
      </section>

      <section className="text-lg mb-12">
        <h2 className="text-2xl font-semibold mb-4">
          Side Project:{' '}
          <a
            href="https://whichfilm-xi.vercel.app/"
            className="text-pink-300 bg-amber-200"
          >
            &quot;whichfilm?&quot;
          </a>
        </h2>
        <p className="mb-4">
          A Next.js web app powered by the Orama search engine, helping users
          find the perfect film from hundreds of award-winning indie films.
        </p>
      </section>
    </div>
  );
};

export default About;
