import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';

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
            <FaEnvelope className=" text-3xl mr-2" />
            <span>
              <a href="mailto:matteo.codes@pm.me" className="text-pink-300">
                matteo.codes@pm.me
              </a>
            </span>
          </li>
          <li className="flex items-center">
            <FaGithub className=" text-3xl mr-2" />
            <span>
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
            <FaLinkedin className=" text-3xl mr-2" />
            <span>
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
            <FaSquareXTwitter className=" text-3xl mr-2" />
            <span>
              <a
                href="https://twitter.com/dev_m_"
                className="text-blue-300"
                target="_blank"
              >
                @dev_m_
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
