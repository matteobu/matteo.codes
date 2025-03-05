import React from 'react';
import Image from 'next/image';

export default function Projects() {
  return (
    <div
      className="container text-white mx-auto p-6 border-2"
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

      <section className="text-lg mb-12">
        <h2 className="text-2xl font-semibold mb-4">
          <a
            href="https://whichfilm-xi.vercel.app/"
            className="text-pink-300"
            style={{
              backgroundColor: 'var(--color-text)',
              color: 'var(--color-background)',
            }}
          >
            &quot;whichfilm?&quot;
          </a>{' '}
          Project
        </h2>
        <p className="mb-4">
          <strong>WhichFilm?</strong> is a dynamic web application built with{' '}
          <strong>Next.js</strong> and powered by the{' '}
          <strong>Orama search engine</strong>, offering an immersive and
          seamless experience for film lovers. It allows users to easily explore
          and discover the perfect indie film from a curated selection of
          hundreds of award-winning movies.
        </p>

        <p className="mb-4">
          With real-time search capabilities, a user-friendly interface, and
          advanced filtering options, <strong>WhichFilm?</strong> makes it
          effortless for users to find films based on genres, directors, actors,
          or keywords. Whether you&apos;re a fan of documentaries, thrillers, or
          international cinema, this app helps you quickly find films that match
          your tastes.
        </p>

        <p className="mb-4">
          Key Features:
          <ul className="list-disc ml-6">
            <li>
              Instant search results with real-time updates powered by the Orama
              search engine
            </li>
            <li>
              Comprehensive movie details including trailers, ratings, cast, and
              more
            </li>
            <li>Filter movies by genre, director, release date, or keywords</li>
            <li>
              Responsive design for a smooth experience across all devices
            </li>
            <li>
              Built with the power of <strong>Next.js</strong> for fast,
              scalable performance
            </li>
          </ul>
        </p>

        <p className="mb-4">
          Check out the open-source code and contribute to the project on{' '}
          <a
            href="https://github.com/matteobu/whichfilm"
            className="text-pink-300"
          >
            GitHub
          </a>
          . Explore the power of film discovery with <strong>WhichFilm?</strong>{' '}
          today!
        </p>
      </section>
    </div>
  );
}
