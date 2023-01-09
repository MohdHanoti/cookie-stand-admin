'use client';

import './globals.css'
import Footer from './components/Footer'
import Header from './components/Header'
import ThemeWrapper from './contexts/theme'
import { AuthWrapper } from './contexts/auth';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <AuthWrapper>
        <ThemeWrapper>
        <body>
        <header>
            <Header />
          </header>
          <main className='dark:bg-black'>
            {children}
          </main>
          <footer>
            <Footer />
          </footer>
          </body>
          </ThemeWrapper>
        </AuthWrapper>
    </html>
  )
}
