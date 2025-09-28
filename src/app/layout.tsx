import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import { Navigation } from '@/components/layout/Navigation'
import { AnimatedBackground } from '@/components/ui/AnimatedBackground'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ZavConnect - Professional Networking Platform',
  description: 'Connect, collaborate, and succeed with ZavConnect - the premier platform for professional networking and career growth.',
  keywords: 'professional networking, career growth, collaboration, job opportunities, networking events',
  authors: [{ name: 'ZavConnect Team' }],
  openGraph: {
    title: 'ZavConnect - Professional Networking Platform',
    description: 'Connect, collaborate, and succeed with ZavConnect - the premier platform for professional networking and career growth.',
    url: 'https://zavconnect.com',
    siteName: 'ZavConnect',
    images: [
      {
        url: 'https://images.pexels.com/photos/3184432/pexels-photo-3184432.jpeg',
        width: 1200,
        height: 630,
        alt: 'ZavConnect Professional Networking',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ZavConnect - Professional Networking Platform',
    description: 'Connect, collaborate, and succeed with ZavConnect',
    images: ['https://images.pexels.com/photos/3184432/pexels-photo-3184432.jpeg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange={false}
        >
          <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-950 dark:to-purple-950">
            <AnimatedBackground />
            <Navigation />
            <main className="relative z-10">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}