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
            <FaEnvelope className="text-3xl mr-2" />
            <span>
              <a href="mailto:matteo.codes@pm.me">matteo.codes@pm.me</a>
            </span>
          </li>
          <li className="flex items-center">
            <FaGithub className=" text-3xl mr-2" />
            <span>
              <a href="https://github.com/matteobu" target="_blank">
                github.com/matteobu
              </a>
            </span>
          </li>
          <li className="flex items-center">
            <FaLinkedin className=" text-3xl mr-2" />
            <span>
              <a
                href="https://www.linkedin.com/in/matteo-bucciol/"
                target="_blank"
              >
                linkedin.com/in/matteo-bucciol
              </a>
            </span>
          </li>
          <li className="flex items-center">
            <FaSquareXTwitter className=" text-3xl mr-2" />
            <span>
              <a href="https://twitter.com/dev_m_" target="_blank">
                @dev_m_
              </a>
            </span>
          </li>
        </ul>
      </section>
    </div>
  );
}
