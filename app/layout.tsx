import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Yuuri Peñas Portfolio',
  description: 'Yuuri is a full stack developer with 6 years of UI/UX experience',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-teal-50 text-slate-950 relative`}>
        <div className='bg-teal-200 absolute top-[-6rem] -z-10 right-[3rem] h-[31.25rem] w-[40.25rem] rounded-full blur-[10rem]  sm:w-[68.75rem]'></div>
        <div className='bg-indigo-200 absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem]  sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left[-5rem]'></div>
        {children}
      </body>
    </html>
  )
}
