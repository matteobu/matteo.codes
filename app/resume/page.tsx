import React from 'react';

export default function resume() {
  return (
    <div
      className="container text-white mx-auto p-6 border-2 h-full"
      style={{
        borderBottomLeftRadius: '3rem',
        borderBottomRightRadius: '3rem',
        borderColor: 'var(--color-border-dark)',
        color: 'var(--color-text-dark)',
      }}
    >
      <section className="text-lg mb-12">
        <h2
          className="text-2xl font-semibold mb-4"
          style={{
            backgroundColor: 'var(--color-text-dark)',
            color: 'var(--color-background-dark)',
          }}
        >
          <a href="/resume">Fullstack Developer</a>{' '}
        </h2>
        <p className="mb-6">
          <strong className="text-xl">Work Experience</strong>
          <div className="mt-4">
            <p className="text-lg font-semibold">Software Developer</p>
            <p className="text-md italic">SeaTable, Berlin, Germany</p>
            <p className="text-sm italic">01/2024 - present</p>
            <ul className="mt-2 list-disc pl-5">
              <li>
                Developed custom React and TypeScript plugins to enhance data
                visualization and improve the user experience.
              </li>
              <li>
                Worked with a spreadsheet database API to improve data
                interaction and developed backend features using Node.js,
                enhancing data processing and integration.
              </li>
            </ul>
          </div>
          <div className="mt-4">
            <p className="text-lg font-semibold">Software Developer</p>
            <p className="text-md italic">Matterway, Berlin, Germany</p>
            <p className="text-sm italic">12/2022 - 12/2023</p>
            <ul className="mt-2 list-disc pl-5">
              <li>
                Integrated software automation into IT systems following coding
                standards
              </li>
              <li>
                Participated in the software development lifecycle, including
                estimation, coding (TypeScript), testing, code reviews, and
                client debugging to streamline release processes
              </li>
              <li>Increased SDK Unit Tests by 50%</li>
              <li>
                Prioritized tasks for a 6-person development team as a Scrum
                Master in Agile environment
              </li>
            </ul>
          </div>
          <div className="mt-4">
            <p className="text-lg font-semibold">Software Developer</p>
            <p className="text-md italic">Amiconsult, Berlin, Germany</p>
            <p className="text-sm italic">01/2022 - 11/2022</p>
            <ul className="mt-2 list-disc pl-5">
              <li>
                Implemented an SAP Storefront project using SCRUM for efficient
                development.
              </li>
              <li>
                Took ownership of Jira tickets and drove them through the
                implementation process
              </li>
              <li>
                Achieved project and client needs efficiently while
                collaborating with an international team
              </li>
            </ul>
          </div>
          <div className="mt-4">
            <p className="text-lg font-semibold">Career transition</p>
            <p className="text-sm italic">11/2020 - 12/2021</p>
            <ul className="mt-2 list-disc pl-5">
              <li>
                One year of career transition to software development, including
                self-study, coding bootcamp, and freelance projects.
              </li>
            </ul>
          </div>
          <div className="mt-4">
            <p className="text-lg font-semibold">Senior Dispatcher</p>
            <p className="text-md italic">FlixBus, Berlin, Germany</p>
            <p className="text-sm italic">11/2018 - 10/2020</p>
            <ul className="mt-2 list-disc pl-5">
              <li>
                Managed drivers and bus partners to ensure productivity and the
                quality of the FlixBus service
              </li>
            </ul>
          </div>
          <div className="mt-4">
            <p className="text-lg font-semibold">Senior Project Manager</p>
            <p className="text-md italic">STE-Energy, Padua, Italy</p>
            <p className="text-sm italic">11/2011 - 10/2018</p>
            <ul className="mt-2 list-disc pl-5">
              <li>
                Managed budgets, developed business strategies, oversaw
                contracts, and coordinated suppliers to ensure timely delivery
                of goods and services
              </li>
              <li>
                Collected, analyzed, and reported project data for informed
                decision-making
              </li>
            </ul>
          </div>
        </p>
      </section>
    </div>
  );
}
