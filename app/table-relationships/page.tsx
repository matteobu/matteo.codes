import React from 'react';
import Image from 'next/image';
import TableRelationshipsPlugin from '@/components/TableRelationshipsPlugin';
import { TbBlocks } from 'react-icons/tb';

export default function Table() {
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
          <a href="/table">Table Relationships Project</a>{' '}
        </h2>
        <p className="mb-4">
          I’m particularly proud of the{' '}
          <strong>Table Relationships Plugin</strong>, which allows users to
          visually connect and interact with complex data. During the
          development phase, I suggested using React Flow.js, which proved to be
          a more intuitive and user-friendly solution for the SeaTable
          community. React Flow.js enabled us to create an interactive,
          easy-to-understand visualization of table relationships that has
          greatly enhanced the user experience.
        </p>
        <p className="mb-4">
          The Table Relations Plugin is a powerful tool designed for SeaTable,
          enabling users to visualize and manage relationships between tables in
          a base. Especially in complex bases with many tables and columns, it
          can become difficult to track how the tables relate to each other.
          With the Table Relations Plugin, this process becomes seamless, as it
          helps users visualize and navigate the connections between tables
          effortlessly.
        </p>
        <p className="mb-4">
          With this plugin, users can instantly see which tables are linked to
          one another and through which columns, providing better clarity and
          organization for managing databases. It’s a perfect tool for anyone
          working with multiple related tables, making database management
          easier and more intuitive.
        </p>

        <div className="mb-4">
          Key Features:
          <ul className="list-disc ml-6">
            <li>
              Visualize table relationships by easily identifying linked columns
            </li>
            <li>
              Simplify complex databases with intuitive, interactive visuals
            </li>
            <li>
              Quickly discover and navigate relationships between multiple
              tables
            </li>
            <li>
              User-friendly interface powered by <strong>React Flow.js</strong>{' '}
              for interactive experiences
            </li>
            <li>
              Real-time updates reflecting changes made to tables and
              relationships
            </li>
            <li>
              Seamlessly integrates within SeaTable to enhance database
              management
            </li>
          </ul>
        </div>

        <p className="mb-4">
          Check out the code on{' '}
          <a
            href="https://github.com/seatable/seatable-plugin-table-relationship"
            className="text-pink-300"
          >
            GitHub
          </a>
          .
        </p>
      </section>

      <section className="mb-12">
        <h3
          className="text-2xl font-semibold mb-4"
          style={{
            backgroundColor: 'var(--color-text-dark)',
            color: 'var(--color-background-dark)',
          }}
        >
          A live preview
        </h3>
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          Click on &quot;
          <TbBlocks className="mr-2" /> Plugins&quot;, select
          <Image
            src="https://cloud.seatable.io/dtable-plugins/table-relationship/?path=/media/icon.png"
            alt="Plugin Icon"
            className="ml-2 mr-2"
            width="22"
            height="22"
          />
          {'  '}
          Table Relationships and play around.
        </h2>

        <iframe
          className="dtable-embed w-full"
          src="https://cloud.seatable.io/dtable/external-links/5fc694ec73294d61821d/"
          frameBorder="0"
          width="100%"
          height="667"
          style={{ background: 'transparent', border: '1px solid #ccc' }}
        ></iframe>
        <TableRelationshipsPlugin />
      </section>
    </div>
  );
}
