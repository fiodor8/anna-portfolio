"use client";

/* Hooks */
import { useData } from '../context/dataProvider.jsx';
import { useRef, useState, useEffect, use } from 'react';
/* Next */
import Link from 'next/link';
import Image from 'next/image.js';
import { usePathname } from 'next/navigation';
/* Framer Motion */
import { useAnimate, stagger, motion, delay, m } from "framer-motion"
/* Components */
import VideoPlayer from './videoPlayer.jsx';
import TextRing from './textRing.jsx';
import CoverImage from './coverImage.jsx';

function MenuItem({
        project, //project data {name, id, type, videoUrl}
        coord, //array of coordinates of the menu item [width, height]
        i, //index of the menu item
        coverSize, //average distance between menu items
        menuSize,
    }) {

    const {
        menuIsChaotic, //is menu chaotic
    } = useData();

    const [scope, animate] = useAnimate() //animate menu item
    
    {/* animate menu item */}
    useEffect(() => {
        if (scope.current) {
            if (menuIsChaotic) {
                animate([
                    [scope.current, {
                        //20 is scale factor in lloyds algorithm call in dataProvider.jsx
                        left: `${(coord[0] * 20 - coverSize * 20 / 2)}px`,
                        top: `${(coord[1] * 20 - coverSize * 20 / 2)}px`,
                        width: `${coverSize * 20 * 1.25}px`,
                        height: `${coverSize * 20 * 1.25 * 0.75}px` //0.5625
                    }, { duration: 0.4 }
                    ],
                    [".project_header", { paddingLeft: '4px', top : '4px' , opacity: 0 }, { duration: 0.4, at: 0 }],
                    [".about_header", { opacity: 0 , paddingLeft: '4px', top : '4px' }, { duration: 0, at: 0 }],
                ])
            }
            else {
                animate([
                    [scope.current, { height: '22px', width:`${menuSize.width}px`, left: '0', top: `${(i * 32) + 8}px` }, { duration: 0.4, at: 0 }],
                    [".project_header", { paddingLeft: '40px' , top: '2px', opacity: 1 }, { duration: 0.4, at: 0 }],
                    [".about_header", { opacity: 1 , paddingLeft: '40px', top : '1px' }, { duration: 0, at: 0.5 }],
                ])
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [menuIsChaotic, coord]);

    return (
        <motion.div
            id={project.id}
            ref={scope}
            className={`flex absolute text-sm sm:text-base z-0 transition-transform duration-300 hover:z-10 hover:scale-105 ${menuIsChaotic ? 'origin-center' : 'origin-left'}`}
            //set the origianl position to avoid jiggin on load
            initial={
                menuIsChaotic ? {
                    height: `${coverSize * 20 * 1.5 * 0.5625}px`,
                    width: `${coverSize * 20 * 1.5}px`,
                    left: `${(coord[0] * 20 - coverSize * 20 / 2)}px`,
                    top: `${(coord[1] * 20 - coverSize * 20 / 2)}px`,
                } : {
                    height: '22px',
                    width: `${menuSize.width}px`,
                    left: '0',
                    top: `${(i * 32) + 8}px`
                }
            }
        >
            {/* work project */}
            {project.type === 'project' &&
                <>
                    <div className='h-full aspect-4/3 rounded overflow-hidden box-content shadow-lg'>
                        <CoverImage id={project.id} />
                    </div>
                    <Link href={`projects/${project.id}`} className='absolute w-full h-full z-10 top-0 left-0' />
                    <div className='project_header absolute w-full flex flex-1'
                        style={{ top: 0, paddingLeft: '40px' }}
                    >
                        <p className='drop-shadow w-full flex whitespace-nowrap px-2 items-center'>
                            {project.name}
                            {/*
                            <div className='mx-2 w-full max-w-lg overflow-hidden'>
                                <motion.div
                                    className='mx-2 w-full'
                                    animate={{ translateX: ['-100%', '100%'] }}
                                    transition={{
                                        duration: 30,
                                        ease: 'linear',
                                        repeat: Infinity,
                                        repeatType: 'loop',
                                    }}
                                >
                                    {project.role + " for " + project.description + " ✸ "} {project.role + " for " + project.description + " "}
                                </motion.div>
                            </div>
                                */}
                        </p>
                    </div>
                </>
            }
            {/* about page*/}
            {project.type === 'personal' && project.id === 'about' &&
                <>
                    <div className='absolute h-full aspect-video left-0'>
                        <Image src="/anya_logo_transparent.svg" alt="About Me" fill={true} className='object-fill scale-75 origin-center' />
                    </div>
                    <motion.div
                        className='absolute h-full aspect-video left-0'
                        animate={{ rotate: 360 }}
                        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                    >
                        <Image src="/eat-design-sleep-repeat.svg" alt="About Me" fill={true} className='object-fill' />
                    </motion.div>
                    <Link href={'/about'} className='absolute w-full h-full z-10 top-0 left-0' />
                    <div className='about_header absolute w-full flex flex-1'
                        style={{ top: 0, paddingLeft: '40px' }}
                    >
                        <p className=' drop-shadow w-full absolute whitespace-nowrap px-2'
                            style={{ top: 0 }}
                        >
                            About
                        </p>
                    </div>
                </>
            }
        </motion.div>
    )
}

/* Menu */

export default function Menu() {

    const menuRef = useRef(null);

    const [menuSize, setMenuSize] = useState({ width: 0, height: 0 }); //size of the menuRef div {width, height}

    /* Hooks */
    const {
        projectList, //list of projects
        /* Menu Chaotic */
        menuIsChaotic,
        setUserPreferMenuChaotic,
        toggleMenuIsChaotic,
        /* Menu Items */
        coverSize, //average distance between menu items
        coordsList, //list of coordinates for each menu item
        updateCoords, //update the coordinates of the menu items
    } = useData();

    /* Recalculate poisition of the menu items when screen size is changes */
    useEffect(() => {
        function handleResize() {
            if (menuRef.current) {
                const width = menuRef.current.offsetWidth;
                const height = menuRef.current.offsetHeight;
                setMenuSize({ width, height });
                updateCoords(width, height);
            }
        }
        handleResize();
        const resizeObserver = new ResizeObserver(handleResize);
        //obzerve the screen size changes
        if (menuRef.current) {
            resizeObserver.observe(menuRef.current);
        }
        return () => {
            if (menuRef.current) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                resizeObserver.unobserve(menuRef.current);
            }
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <div className={`fixed flex gap-3 bottom-4 left-6 z-20`}>
                {/* Balance/Chaos toggle. Shows only on main page */}<button
                    onClick={() => {
                        toggleMenuIsChaotic();
                        setUserPreferMenuChaotic(prevState => !prevState);
                    }} >
                    {menuIsChaotic ?
                        <div className='flex gap-1 items-center'>
                            <svg
                                className="hover:scale-110 transition-all duration-200 drop-shadow h-5 sm:h-6"
                                viewBox="0 0 100 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 27V34.6667H79.8V27H20ZM20 46.1668V53.8334H79.8V46.1668H20ZM20 65.3333V73H79.8V65.3333H20Z" />
                            </svg>
                            {/*<span className='text-sm'>Balance</span>*/}
                        </div>
                        :
                        <div className='flex gap-1 items-center'>
                            <svg
                                className="hover:scale-110 transition-all duration-200 drop-shadow h-5 sm:h-6"
                                viewBox="0 0 100 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M28.7834 23.9231H38.2821V17H17V38.2821H23.9231V28.7834L42.5333 47.3937L47.3937 42.5333L28.7834 23.9231ZM57.4667 47.3937L52.6063 42.5333L71.2166 23.9231H61.718V17H83V38.2821H76.0769V28.7834L57.4667 47.3937ZM71.2166 76.0769L52.6063 57.4667L57.4667 52.6063L76.0769 71.2166V61.718H83V83H61.718V76.0769H71.2166ZM42.5333 52.6063L47.3937 57.4667L28.7834 76.0769H38.2821V83H17V61.718H23.9231V71.2166L42.5333 52.6063Z" />
                            </svg>
                            {/*<span className='text-sm'>Chaos</span>*/}
                        </div>
                    }
                </button>
                {/* Refresh button. Shows only on main page when menu is chaoitic */}
                {menuIsChaotic && (
                    <button
                        onClick={() => updateCoords(menuRef.current.offsetWidth, menuRef.current.offsetHeight)}
                    >
                        <svg
                            className="hover:scale-110 transition-all duration-200 drop-shadow h-5 sm:h-6"
                             viewBox="0 0 100 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M24.7174 56.8887L25.0013 57.8385C27.8067 67.2221 36.5876 76.7249 49.6432 76.7249C65.0174 76.7249 75.3432 63.4491 75.3432 51.0249C75.3432 38.6007 65.0174 25.3249 49.6432 25.3249C41.4437 25.3249 34.7272 29.5141 30.4779 33.992L42.8182 33.8105L42.9681 39.8097L20.8279 40.1402L21.1584 18L27.1591 18.15L26.985 28.9443C32.2162 23.759 40.0559 19.3249 49.6432 19.3249C68.6697 19.3249 81.3432 35.7499 81.3432 51.0249C81.3432 66.3023 68.5676 82.7249 49.6432 82.7249C33.401 82.7249 22.679 71.03 19.284 59.5076L19 58.5438L24.7174 56.8887Z" />
                        </svg>
                    </button>
                )}

            </div>
            {/* Menu */}
            <div ref={menuRef} className={`flex flex-1 relative `}>
             {coordsList && coordsList.length > 0 
                    ? projectList.map((project, i) => (
                        <MenuItem
                            key={project.id}
                            i={i}
                            project={project}
                            coord={coordsList[i]}
                            menuSize={menuSize} //size of the menuRef div {width, height}
                            coverSize={coverSize}
                        />
                    ))
                    : <span className='absolute text-xs'>loading...</span>}
            </div>
        </>
    );
}