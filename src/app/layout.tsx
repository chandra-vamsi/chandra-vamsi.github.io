import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://chandra-vamsi.github.io'),
  title: 'Chandra Vamsi | AI Engineer',
  description: 'Portfolio of Chandra Vamsi, AI Engineer specializing in Python, Machine Learning, RAG, LangChain and Generative AI.',
  openGraph: {
    title: 'Chandra Vamsi | AI Engineer',
    description: 'Transforming complex data into fast, reliable insights using LLMs, RAG, and Deep Learning.',
    url: 'https://chandra-vamsi.github.io',
    siteName: 'Chandra Vamsi Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Chandra Vamsi AI Engineering Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chandra Vamsi | AI Engineer',
    description: 'Portfolio of Chandra Vamsi, AI Engineer specializing in Python, Machine Learning, RAG, LangChain and Generative AI.',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen bg-background text-foreground antialiased selection:bg-purple-500/30 overflow-x-hidden`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} forcedTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
