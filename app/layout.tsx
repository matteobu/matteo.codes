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
        <title>matteo.codes</title>
        <meta
          name="description"
          content="my personal website, designed and developed by Matteo Bucciol"
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
