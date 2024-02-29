import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import  Header  from '@/components/Header/Header'
import  Footer  from '@/components/Footer'
import Providers from '@/app/Providers'
import Head from 'next/head'

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
      {/* <head>
        <link rel="icon" href="/images/icons-photo1.svg" sizes="16x16" />
      </head> */}
      
      
      <body className={inter.className}>
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
