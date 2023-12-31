import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

// title applies to all pages 'below' this layout
// setting other titles in pages will override this, and will also apply to the pages 'below' that page
export const metadata: Metadata = {
  title: 'AppRouter Demo',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
