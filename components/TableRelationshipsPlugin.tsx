'use client';
import React from 'react';
import Image from 'next/image';

export default function TableRelationshipsPlugin() {
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
        Some screenshots of how a Plugin Table Relationships might look.
      </h3>

      <p>
        <Image
          src="https://seatable.io/wp-content/uploads/2024/07/Table-Relationships-Plugin.png"
          alt="Table relations plugin"
          width={2212}
          height={1128}
          priority
        />
      </p>
      <p className="mt-6 mb-2">
        If you would like to create another graphic, click on{' '}
        <span className="dtable-font dtable-icon-add-table"></span>{' '}
        <strong>Add new table relationship</strong>. This opens an input field
        in which you can enter the desired <strong>name</strong>.
      </p>
      <p>
        <Image
          src="https://seatable.io/wp-content/uploads/2023/07/Options-of-Table-Relationship-Chart.png"
          alt="Options of a table relationships graphic"
          width={363}
          height={308}
          decoding="async"
        />
      </p>
      <div className="mt-4 mb-2">
        <p>
          Would you like to display <strong>tables without links</strong>?
        </p>
        <p>Then you can set it on Settings:</p>
      </div>
      <p>
        <Image
          src="https://seatable.io/wp-content/uploads/2024/07/Settings-of-Table-Relationship-Chart.png"
          alt="Setting options for a table relationships graphic"
          width={454}
          height={272}
          decoding="async"
        />
      </p>
      <h2 className="mt-2">Move tables in a graphic:</h2>
      <p>
        You can move the various tables in the graphic as required{' '}
        <strong>using drag and drop</strong>. To do this, hold down the left
        mouse button, drag the table to the desired position and release.
      </p>
      <p>
        <Image
          src="https://seatable.io/wp-content/uploads/2024/07/Move-tables-in-a-Table-Relationship-Chart.gif"
          alt="Move tables in a table relationships graphic using drag-and-drop"
          width={1405}
          height={753}
          loading="lazy"
          decoding="async"
          onContextMenu={preventRightClick} // This disables right-click
        />
      </p>
    </div>
  );
}
