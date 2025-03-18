import React from 'react';
import Image from 'next/image';
import { TbBlocks } from 'react-icons/tb';
import TreePlugin from '@/components/TreePlugin';

export default function Tree() {
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
          <a href="/tree-plugin">Tree Plugin</a>
        </h2>
        <p className="mb-4">
          Another plugin I developed is the <strong>Tree Plugin</strong>, which
          enables users to visualize and manage hierarchical data directly
          within SeaTable. Developed using React, this plugin provides a smooth
          and interactive user experience without relying on third-party
          libraries. By leveraging React’s powerful state management and
          rendering capabilities, I was able to create a dynamic tree structure
          for intuitively navigating and modifying nested data, significantly
          improving the management of complex, hierarchical datasets within
          SeaTable.
        </p>
        <p className="mb-4">
          The <strong>Tree Plugin</strong> offers a flexible, interactive
          interface for visualizing hierarchical data in a tree format within
          SeaTable. It simplifies the process of managing nested data and
          relationships, making it easier for users to organize and understand
          complex data structures.
        </p>
        <p className="mb-4">
          Whether you’re working with categories, subcategories, or any other
          form of nested data, the Tree Plugin enhances the user experience by
          providing a clear visual representation of data relationships, helping
          users streamline the process of viewing and managing their data.
        </p>

        <div className="mb-4">
          Key Features:
          <ul className="list-disc ml-6">
            <li>
              Visualize hierarchical data structures in an easy-to-read tree
              view
            </li>
            <li>
              Seamless integration with SeaTable for effortless use within your
              data tables
            </li>
            <li>
              Drag-and-drop functionality to easily modify hierarchical data
            </li>
            <li>Real-time updates reflecting changes made to tree nodes</li>
            <li>
              User-friendly interface for managing complex nested relationships
            </li>
            <li>
              Ideal for working with categories, subcategories, and nested data
            </li>
          </ul>
        </div>

        <p className="mb-4">
          Check out the code on{' '}
          <a
            href="https://github.com/seatable/seatable-plugin-tree"
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
            src="https://cloud.seatable.io/dtable-plugins/tree/?path=/media/icon.png"
            alt="Plugin Icon"
            className="ml-2 mr-2"
            width="22"
            height="22"
          />
          {'  '}
          Tree Plugin and explore hierarchical data management.
        </h2>

        <iframe
          className="dtable-embed"
          src="https://cloud.seatable.io/dtable/external-links/4b5cc5855fa1464cae5b/"
          width="100%"
          height="667"
        ></iframe>
        <TreePlugin />
      </section>
    </div>
  );
}
