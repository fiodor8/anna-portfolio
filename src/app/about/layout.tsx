"use client";

import { useMenuIsCollapsed } from '@/context/data';
import Link from 'next/link';

import { motion, AnimatePresence } from 'framer-motion';

export default function AboutLayout({ children }: { children: React.ReactNode }) {

  const { menuIsCollapsed, setMenuIsCollapsed } = useMenuIsCollapsed();

  return (
    <div className={`flex flex-col mx-4 mb-16 relative transition-all duration-300 flex-1 ${!menuIsCollapsed ? 'ml-48' : ''}`}>
      <div className='flex justify-between sticky top-0 mt-4 mb-8'>
        <button
          className="group transition-font duration-300 hover:font-black bg-neutral-900 bg-opacity-50 py-1 px-2 rounded-md"
          onClick={() => setMenuIsCollapsed(!menuIsCollapsed)}
        >
          {menuIsCollapsed ?
            (
              <span>
                {/*<p>Open Menu</p>*/}
                <svg className="group-hover:scale-150 transition-all duration-300" width="20" height="20" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path clipRule="evenodd" fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"></path>
                </svg>
              </span>
            ) :
            (
              <span>
              <svg className="group-hover:scale-125 transition-all duration-300" width="20" height="20" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path clipRule="evenodd" fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"></path>
              </svg>
              {/*<p>Close Menu</p>*/}
              </span>
            )}
        </button>
        <Link href="/">
          <button className="group transition-all duration-300 hover:font-black inline-flex gap-1 hover:gap-2 items-center  bg-neutral-900 bg-opacity-50 py-1 px-2 rounded-md">
            <span>Close</span>
            <svg className="group-hover:scale-150 transition-all duration-300" width="20" height="20" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"></path>
            </svg>
          </button>
        </Link>
      </div>
      {children}
    </div>
  )
}
