import type { Metadata } from 'next';
import { Toaster } from 'react-hot-toast';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'Tour Consultant - Explore Sumatera Barat',
  description: 'Book your perfect tour to Sumatera Barat with our professional tour consultation services',
  keywords: ['tour', 'booking', 'sumatera barat', 'travel', 'adventure'],
  authors: [{ name: 'Tour Consultant' }],
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://tour-consultant.com',
    title: 'Tour Consultant',
    description: 'Book your perfect tour to Sumatera Barat',
    siteName: 'Tour Consultant',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
