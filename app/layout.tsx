'use client';
import React from 'react';
import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Matteo Bucciol',
              url: 'https://matteo.codes',
              sameAs: [
                'https://www.linkedin.com/in/matteo-bucciol',
                'https://github.com/matteobu',
                'https://twitter.com/dev_m_',
              ],
              image: 'https://matteo.codes/images/matteo.jpg',
              description:
                'Personal website of Matteo Bucciol, showcasing my projects and skills as a software developer.',
            }),
          }}
        />
      </Head>
      <body className="bg-gray-50 text-gray-900 flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
