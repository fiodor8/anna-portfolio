import './globals.css'

import Menu from '../components/menu'
import { DataProvider } from '@/context/data';

export const metadata = {
  title: 'Anna Pazyuk',
  description: 'A brand designer and art-director currently based in Istanbul',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <DataProvider>
      <html lang="en" className='bg-black'>
        <body className="max-w-screen-2xl overflow-hidden -z-20 relative mx-auto min-h-screen flex bg-gradient-to-br from-neutral-950 to-neutral-950 text-white"> {/*dark:bg-gradient-to-br dark:from-neutral-900 dark:to-neutral-950*/}
            <Menu/>
            {children}
        </body>
      </html>
    </DataProvider>
  )
}
