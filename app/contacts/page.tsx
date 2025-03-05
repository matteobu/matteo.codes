import React from 'react';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

export default function Contacts() {
  return (
    <div
      className="container text-white mx-auto p-6 border-2 h-full"
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
        <p className="mb-4">
          Feel free to reach out! Whether you&apos;re interested in
          collaborating or have questions about my work, I&apos;m always open to
          connecting.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
        <ul className="space-y-4">
          <li className="flex items-center">
            <FaEnvelope className="text-pink-500 text-3xl mr-2" />
            <span>
              Email:{' '}
              <a href="mailto:matteo.codes@pm.me" className="text-pink-300">
                matteo.codes@pm.me
              </a>
            </span>
          </li>
          <li className="flex items-center">
            <FaGithub className="text-gray-600 text-3xl mr-2" />
            <span>
              GitHub:{' '}
              <a
                href="https://github.com/matteobu"
                target="_blank"
                className="text-gray-300"
              >
                github.com/matteobu
              </a>
            </span>
          </li>
          <li className="flex items-center">
            <FaLinkedin className="text-blue-600 text-3xl mr-2" />
            <span>
              LinkedIn:{' '}
              <a
                href="https://www.linkedin.com/in/matteo-bucciol/"
                className="text-blue-300"
                target="_blank"
              >
                linkedin.com/in/matteo-bucciol
              </a>
            </span>
          </li>
          <li className="flex items-center">
            <FaTwitter className="text-blue-400 text-3xl mr-2" />
            <span>
              Twitter:{' '}
              <a
                href="https://twitter.com/ehi.dev"
                className="text-blue-300"
                target="_blank"
              >
                @ehi.dev
              </a>
            </span>
          </li>
        </ul>
      </section>
      {/* 
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Send a Message</h2>
        <form
          action="https://formsubmit.co"
          method="POST"
          className="space-y-4"
        >
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="p-3 w-full rounded-md border border-gray-300 bg-transparent text-white"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="p-3 w-full rounded-md border border-gray-300 bg-transparent text-white"
            required
          />
          <button
            type="submit"
            className="p-3 w-full rounded-md bg-pink-500 text-white"
          >
            Send Message
          </button>
        </form>
      </section> */}
    </div>
  );
}
