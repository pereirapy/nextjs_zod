import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/globals.css';
import PropertiesContextProvider from '@/context/properties-context';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Your next house is here',
  description: 'Here you will find many properties to buy',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PropertiesContextProvider>{children}</PropertiesContextProvider>
      </body>
    </html>
  );
}
