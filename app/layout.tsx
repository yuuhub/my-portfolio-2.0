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
      <body className={`${inter.className} bg-teal-50 text-slate-zinc`}>{children}</body>
    </html>
  )
}
