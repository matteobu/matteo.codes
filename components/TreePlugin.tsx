'use client';
import React from 'react';
import Image from 'next/image';

export default function TreePlugin() {
  const preventRightClick = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  return (
    <div className="mt-6">
      <h3
        className="text-2xl font-semibold mb-4"
        style={{
          backgroundColor: 'var(--color-text-dark)',
          color: 'var(--color-background-dark)',
        }}
      >
        Some screenshots of the Tree Plugin.
      </h3>

      <p>
        <Image
          src="https://seatable.io/wp-content/uploads/2024/11/TreePlugin.png"
          alt="Tree Plugin"
          width={900}
          height={900}
          priority
        />
      </p>
      <p className="mt-6 mb-2">
        The Tree Plugin is designed to visualize and manage hierarchical data
        within SeaTable. You can view your nested data in a clear and organized
        tree structure.
      </p>

      <p>
        <Image
          src="https://seatable.io/wp-content/uploads/2024/12/Eintraege-im-Tree-Plugin-alphabetisch-sortieren.gif" // Replace with actual image URL
          alt="Adding a new node to the Tree Plugin"
          width={900}
          height={900}
          decoding="async"
        />
      </p>
      <div className="mt-4 mb-2">
        <p>
          Would you like to collapse or expand nodes to view more or less data?
        </p>
      </div>
      <p>
        <Image
          src="https://seatable.io/wp-content/uploads/2024/12/Eintraege-im-Tree-Plugin-ausklappen.gif" // Replace with actual image URL
          alt="Tree Plugin settings"
          width={900}
          height={900}
          decoding="async"
        />
      </p>
      <div className="mt-4 mb-2">
        <p>
          You can change the entries directly from the Plugin, no need to switch
          to the table.
        </p>
      </div>
      <p>
        <Image
          src="https://seatable.io/wp-content/uploads/2024/12/Eintraege-im-Tree-Plugin-hinzufuegen-oeffnen-und-bearbeiten.gif" // Replace with actual image URL
          alt="Move nodes in the Tree Plugin using drag-and-drop"
          width={900}
          height={900}
          loading="lazy"
          decoding="async"
          onContextMenu={preventRightClick} // This disables right-click
        />
      </p>
    </div>
  );
}
