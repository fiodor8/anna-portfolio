import BodyLayout from '@/components/body';
import './globals.css'

import { DataProvider } from '@/context/data';

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <DataProvider>
      <html lang="en" className='bg-black'>
        <BodyLayout>
          {children}
        </BodyLayout>
      </html>
    </DataProvider>
  )
}