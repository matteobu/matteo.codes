import React from 'react';

const About = () => {
  return (
    <div className="container text-green-600 mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-8">
        About Me (Hold Tight, I Promise This Gets Better… Probably)
      </h1>

      <section className="text-lg mb-12">
        <p className="mb-4">
          I&apos;m a <strong>results-driven JavaScript Developer</strong> with
          over <strong>10 years of project management experience</strong>. My
          adaptability, determination, and resilience have shaped my ability to
          deliver technical solutions while managing processes, projects, and
          teams. My colleagues often praise my strong collaboration and
          analytical mindset, as well as my ability to thrive in dynamic
          environments.
        </p>

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
