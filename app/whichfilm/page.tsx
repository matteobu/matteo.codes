import React from 'react';
import Image from 'next/image';

export default function whichfilm() {
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
          <a href="https://whichfilm-xi.vercel.app/">
            &quot;whichfilm?&quot; Project.{' '}
            <span
              style={{
                backgroundColor: 'var(--light-blue)',
                padding: '0 5px',
                borderRadius: '4px',
              }}
            >
              Live on: [whichfilm-xi.vercel.app]
            </span>
          </a>
        </h2>
        <p className="mb-4">
          <strong>WhichFilm?</strong> is a dynamic web application built with{' '}
          <strong>Next.js</strong>, <strong>TypeScript</strong> and powered by
          the <strong>Orama search engine</strong>, offering an immersive and
          seamless experience for film lovers. It allows users to easily explore
          and discover the perfect indie film from a curated selection of
          hundreds of award-winning movies.
        </p>
        <p className="mb-4">
          With real-time search capabilities, a user-friendly interface, and
          advanced filtering options, <strong>whichfilm?</strong> makes it
          effortless for users to find films based on genres, directors, actors,
          or keywords. Whether you&apos;re a fan of documentaries, thrillers, or
          international cinema, this app helps you quickly find films that match
          your tastes.
        </p>

        <div className="mb-4">
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
              Built with the power of <strong>Next.js</strong> and{' '}
              <strong>TypeScript</strong> for fast, scalable performance
            </li>
          </ul>
        </div>

        <p className="mb-4">
          Check out the open-source code and contribute to the project on{' '}
          <a
            href="https://github.com/matteobu/whichfilm"
            className="text-pink-300"
          >
            GitHub
          </a>
          .
        </p>
        <p className="mb-4 bg-[var(--light-blue)]">
          Maybe you&apos;re the hiring manager at{' '}
          <strong className="text-amber-500">JustWatch</strong>, and you&apos;re
          already thinking, &quot;I need this person on our team!&quot;
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
          Screenshots
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="flex justify-center items-center">
            <Image
              src="/whichfilm/whichfilm-home.png"
              alt="WhichFilm Home Page"
              width={400}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="flex justify-center items-center">
            <Image
              src="/whichfilm/whichfilm-films.png"
              alt="WhichFilm Film List"
              width={400}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="flex justify-center items-center">
            <Image
              src="/whichfilm/whichfilm-film-details.png"
              alt="WhichFilm Filter"
              width={400}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="flex justify-center items-center">
            <Image
              src="/whichfilm/whichfilm-filter.png"
              alt="WhichFilm Filter"
              width={400}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="flex justify-center items-center">
            <Image
              src="/whichfilm/whichfilm-about.png"
              alt="WhichFilm About Page"
              width={400}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="flex justify-center items-center">
            <Image
              src="/whichfilm/whichfilm-about-sc.png"
              alt="WhichFilm About Page"
              width={400}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
