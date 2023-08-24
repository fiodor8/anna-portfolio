import './globals.css'
import HeadBar from '../components/headbar.jsx'
import Socials from '../components/socials.jsx'

import { DataProvider } from '@/context/dataProvider';

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <DataProvider>
      <html lang="en" className='bg-black h-full'>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
        <body className="flex max-w-screen-2xl relative mx-auto h-full bg-neutral-950 text-white overflow-hidden" >
          <HeadBar />
          <Socials />
          {children}
        </body>
      </html>
    </DataProvider>
  )
}