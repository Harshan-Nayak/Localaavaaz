import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { ClerkProvider } from "@clerk/nextjs";
import { light } from "@clerk/themes";
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Localaavaaz',
  description: 'Meet and Get Guided',
}

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
   
  >
    <html data-theme="light" lang="en">
      <body className={inter.className}>
<Navbar />
        {children}
        <Footer />
        </body>
    </html>
    </ClerkProvider>
  )
}
