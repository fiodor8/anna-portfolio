import './globals.css'
import Menu from '../components/menu.jsx'

import { DataProvider } from '@/context/data';

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <DataProvider>
      <html lang="en" className='bg-black h-full'>
        <body className="max-w-screen-2xl relative mx-auto h-full flex bg-gradient-to-br from-neutral-950 to-neutral-950 text-white">
          <Menu />
          {children}
        </body>
      </html>
    </DataProvider>
  )
}