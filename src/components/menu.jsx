"use client";

/* Components */
import { useData } from "../context/data";
import { useMenuIsCollapsed } from "../context/data";
import calculateMenuItems from "../components/calculateMenuItems";
import Socials from "../components/socials";
import TextRing from "../components/textRing";
/* Framer */
import { motion } from "framer-motion";
/* React */
import React from 'react';
import { useRef, useState, useEffect } from "react";
/* Next */
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

/* * */
function MenuItem({ id, name, userSetIsOpen, x, y, i, size, isCurrent, type }){
  const divRef = useRef(null);
  const pathname = usePathname();
  const isOpen = (userSetIsOpen && pathname === '/') ? true : false;

  function setPosition(x, y, isOpen, divRef, i) {
    const div = divRef.current;
    if (div) {
      if (isOpen) {
        div.style.left = `${x}px`;
        div.style.top = `${y}px`;
      } else {
        div.style.left = '20px';
        div.style.top = `${16 + (i * 38)}px`;
      }
    }
  }

  setPosition(x, y, isOpen, divRef, i);

  return (
    <motion.div
      ref={divRef}
      className=
      {
        `group hover:scale-110 absolute flex transition-all duration-700 ease-in-out` + ' '
        + (isOpen ? 'h-24 aspect-4/3 origin-center -translate-x-1/2 -translate-y-1/2' : 'h-8 origin-left')
      }
      style={isOpen ? { width: size, height: 'auto' } : {}}
    >{
        type === 'project' ? (
          <Link
            href={"projects/" + id}
            className={"flex" + ' ' + (isOpen ? 'flex-col gap-1' : 'flex-row  gap-2')}
          >
            <div
              style={isOpen ? { width: 'auto', height: 'auto' } : { width: 30, height: 20 }}
            >
              {
                <Image
                className={isOpen ? "rounded-xl shadow-xl" : "rounded-md"}
                src={"/" + id + "/cover.jpg"}
                alt={name}
                width='800'
                height='400'
                layout="cover"
                onError={(e) => console.error(e.target.id)}
                />
              }
            </div>
            <p
              className=
              {
                "group-hover:font-black whitespace-nowrap justify-center text-center align-middle transition-font duration-300" + ' '
                + (isCurrent ? 'font-black' : 'font-normal') + ' '
                + (isOpen ? 'text-xs flex flex-row rounded-md px-2 py-1 absolute bottom-0 left-2 bg-neutral-900 bg-opacity-50' : 'text-base')
              }
            >
              {name}
            </p>
          </Link>
        ) : type === 'personal' ? (
          name === 'about' ? (
            <Link href="/about" className="w-full h-full flex gap-2 hover:font-black transition-font duration-300 whitespace-nowrap">
              <div className={"mx-auto aspect-square rounded-full overflow-hidden" + " "}
                style={isOpen ? { height: '100%' } : { height: 24 }}
              >
                <Image src="/avatar.jpg" alt="About Me" width="1200" height="1200" layout="responsive" />
              </div>
              {!isOpen ? (<p>About Me</p>) : null}
              {isOpen ? (
                <TextRing className="w-full h-full font-black text-sm" text='Eat * Design * Sleep * Repeat * ' />
              ) : null}
            </Link>
          ) : null
        ) : null
      }
    </motion.div>
  )
}

/* * */

export default function Menu() {
  /* Hooks */
  const { data, setData } = useData();
  const { menuIsCollapsed, setMenuIsCollapsed } = useMenuIsCollapsed();
  /* State */
  const [ userSetIsOpen, setUserSetIsOpen ] = useState(true);
  const [size, setSize] = useState({ width: 0, height: 0});
  const [menuItems, setMenuItems] = useState([]);
  /* Refs */
  const parentRef = useRef(null);
  /* Router */
  const pathname = usePathname();

  useEffect(() => {
    const calculatedItems = calculateMenuItems(data, size, 20);
    setMenuItems(calculatedItems);
  }, [data, size]);

  const refreshGrid = () => {
    const updatedItems = calculateMenuItems(data, size, 40);
    setMenuItems(updatedItems);
  };

  useEffect(() => {
    function handleResize() {
      if (parentRef.current) {
        const width = parentRef.current.offsetWidth;
        const height = parentRef.current.offsetHeight;
        setSize({ width, height });
      }
    }
    handleResize();

    const resizeObserver = new ResizeObserver(handleResize);
    if (parentRef.current) {
      resizeObserver.observe(parentRef.current);
    }
    return () => {
      if (parentRef.current) {
        resizeObserver.unobserve(parentRef.current);
      }
    };
  }, []);

  //const menuItems = calculateMenuItems(data, size, 20);

  useEffect (() => {
    if (pathname === '/') {
      setMenuIsCollapsed(false);
      console.log('setMenuIsCollapsed(false)')
    }
  }, [pathname]);

  return (
    <div 
      id='menu'
      ref={parentRef}
      className={'min-w-36 flex flex-col relative overflow-hidden' + ' ' + (pathname === '/' && 'flex-1')}
    >
        {pathname === '/' && (
        <div className="flex absolute bottom-4 right-4 z-20 gap-2">
          {/* * */}
          <button
            className="
              inline-flex 
              px-2 py-1 rounded-md bg-neutral-900 bg-opacity-50
              origin-top-right transition-all duration-300
            "
            onClick={() => setUserSetIsOpen(!userSetIsOpen)}
          >
            <div className="group flex gap-1 text-sm items-center transition-all duration-300 hover:font-black hover:gap-2">
            {userSetIsOpen ?
              (<>
                  <svg className="group-hover:scale-110 transition-all duration-300" fill="currentColor" width="18" height="18" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path clipRule="evenodd" fillRule="evenodd" d="M2 3.75A.75.75 0 012.75 3h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 3.75zm0 4.167a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75zm0 4.166a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75zm0 4.167a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z"></path>
                  </svg>
                  <p>Organise</p>
                </>
              )
              :
              (
                <>
                  <svg className="group-hover:scale-110 transition-all duration-300" fill="currentColor" width="18" height="18" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M13.28 7.78l3.22-3.22v2.69a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.69l-3.22 3.22a.75.75 0 001.06 1.06zM2 17.25v-4.5a.75.75 0 011.5 0v2.69l3.22-3.22a.75.75 0 011.06 1.06L4.56 16.5h2.69a.75.75 0 010 1.5h-4.5a.747.747 0 01-.75-.75zM12.22 13.28l3.22 3.22h-2.69a.75.75 0 000 1.5h4.5a.747.747 0 00.75-.75v-4.5a.75.75 0 00-1.5 0v2.69l-3.22-3.22a.75.75 0 10-1.06 1.06zM3.5 4.56l3.22 3.22a.75.75 0 001.06-1.06L4.56 3.5h2.69a.75.75 0 000-1.5h-4.5a.75.75 0 00-.75.75v4.5a.75.75 0 001.5 0V4.56z"></path>
                  </svg>
                  <p>Make Chaos</p>
                </>
              )
            }
            </div>
          </button>
          <button
            className="px-2 py-1 rounded-md bg-neutral-900 bg-opacity-50"
            onClick={refreshGrid}
          >
            <svg className="hover:scale-125 transition-all duration-300" fill="currentColor" viewBox="0 0 20 20" width="18" height="18" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path clipRule="evenodd" fillRule="evenodd" d="M15.312 11.424a5.5 5.5 0 01-9.201 2.466l-.312-.311h2.433a.75.75 0 000-1.5H3.989a.75.75 0 00-.75.75v4.242a.75.75 0 001.5 0v-2.43l.31.31a7 7 0 0011.712-3.138.75.75 0 00-1.449-.39zm1.23-3.723a.75.75 0 00.219-.53V2.929a.75.75 0 00-1.5 0V5.36l-.31-.31A7 7 0 003.239 8.188a.75.75 0 101.448.389A5.5 5.5 0 0113.89 6.11l.311.31h-2.432a.75.75 0 000 1.5h4.243a.75.75 0 00.53-.219z"></path>
            </svg>
          </button>
        </div>
        )}
      {/* * */}
      <ul
        className={`relative transition-all duration-300`}
        style={menuIsCollapsed ? { opacity: 0 } : {}}
      >
        {Object.entries(menuItems).map(([key, value], index) => (
            <MenuItem
              key={key}
              i={index}
              id={value.id}
              name={value.name}
              type={value.type}
              userSetIsOpen={userSetIsOpen}
              x={value.x} y={value.y}
              size={value.size}
              isCurrent={pathname === ("/projects/" + value.id)}
            />
        ))}
      </ul>
      {/* * */}
      <Socials />
    </div>
  )
}