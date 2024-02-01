import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import  Header  from '@/components/Header'
import  Footer  from '@/components/Footer'
import Providers from '@/components/Providers'

const inter = Inter({ subsets: ['latin']})

export const metadata: Metadata = {
  title: 'Photos collections',
  description: 'Web application for displaying and filtering a collection of photos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <div className='flex flex-col min-h-screen'>
          <Header />
          <main className='box flex-1'>
            {children}
          </main>
          <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}
