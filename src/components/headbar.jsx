"use client";

/* Next */
import { usePathname } from 'next/navigation';
import { useData } from '../context/dataProvider';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import path from 'path';

export default function HeadBar() {

    /* Router */
    const pathname = usePathname();
    const [ currentProject, setCurrentProject ] = useState(null); //projectList[i].name
    const [ descript, setDescript ] = useState(null); //projectList[i].description
    const [ role, setRole ] = useState(null);

    const { 
        projectList
    } = useData();

    /* Update currentProject on pathname change */
    useEffect(() => {
        const localCurrentProject = projectList.find(project => pathname.includes(project.id));
        setCurrentProject(localCurrentProject ? localCurrentProject.name : null);
        setRole(localCurrentProject ? localCurrentProject.role : null);
        setDescript(localCurrentProject ? localCurrentProject.description : null);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname]);

    return (
        <div className={`fixed bg-opacity-20 flex justify-between top-0 left-0 pt-4 px-6 z-40 ${ pathname === '/' ? 'pb-0' : 'pb-4 bg-black backdrop-blur w-full'}`}>
            {/* Title */}
            <Link href="/" className=''>
                <span className='flex gap-2'>
                    <h1 className={`text-2xl sm:text-4xl font-bold whitespace-nowrap drop-shadow ${pathname === '/' ? 'block':'hidden'}`}>Anna Pazyuk</h1>
                    <h2 className='text-2xl sm:text-4xl font-bold whitespace-nowrap drop-shadow'>{currentProject}</h2>
                </span>
                <p className='text-sm sm:text-sm mt-0 tracking-wide whitespace-nowrap drop-shadow'>
                    {role ? role + ' for ' + descript : 'Brand Designer & Art Director'}
                </p>
            </Link>
            {/* Close [return on main page] button. Shows only not on main page. */}
            {pathname !== "/" && (
                <Link href="/">
                    <button className="group inline-flex gap-1 items-center py-0 translate-y-0.5">
                        {/*<span className='group-hover:scale-105 origin-right text-sm transition-transform duration-200'>Close</span>*/}
                        <svg className="group-hover:scale-125 h-7 sm:h-8 transition-transform duration-200"
                            fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"></path>
                        </svg>
                    </button>
                </Link>
            )}
        </div>
    )
}