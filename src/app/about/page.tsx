/* eslint-disable @next/next/no-img-element */
import dynamic from 'next/dynamic';

import { Suspense } from 'react';
const DynamicImage = dynamic(() => import('next/image'), { ssr: false });
//const DynamicVideo = dynamic(() => import('@/components/videoPlayer'), { ssr: false });

//import CoverImage from '@/components/coverImage'

import Link from 'next/link';

export const metadata = {
  title: 'Anna Pazyuk | About',
  description: 'Brand Designer and Art Director based in Istanbul, working worldwide.',
}

export default function About() {

  return (
    <div className='max-w-screen-xl pt-[5.5rem] sm:pt-24 px-6 text-base grid grid-cols-1 sm:grid-cols-2 gap-6 mb-20'>
      <div className='mr-6 max-w-xl'>
        <div className='mb-8 flex flex-col gap-2'>
          <p>Hi, I&apos;m Anya,<br />a Brand Designer &&nbsp;Art Director.</p>
          <p>Currently based in Istanbul and working worldwide.</p>
          <p>My approach to work is based on blending artistic vision with a&nbsp;pixel-perfect execution and a real-world practicality.</p>
          <p>This is how I create designs that rock in the real world.</p>
          <p>With over 10 years of experience, I&nbsp;can help with design at any stage, from generating ideas and presenting them to the client, to flawlessly executing them.</p>
          <p>Through my career I had an&nbsp;opportunity to work with a wide range of companies, from giants as IKEA and big agencies as Depot, to small local coffee shops.</p>
          <p>I believe in honest conceptions based on beauty, and it rocks in every work I&nbsp;do, no&nbsp;exceptions.</p>
        </div>
        <div className='flex flex-wrap gap-6 items-center mb-8 '>
          <img src="/clients_logos/bitfury_logo.svg" alt="Bitfury" className='h-8' />
          <img src="/clients_logos/leroy_marlin_logo.svg" alt="Leroy Marlin" className='h-8' />
          <img src="/clients_logos/dll_logo.svg" alt="DLL" className='h-8' />
          <img src="/clients_logos/ivc_logo.svg" alt="IVC" className='h-8' />
          <img src="/clients_logos/borjomi_logo.svg" alt="Borjomi" className='h-6' />
          <img src="/clients_logos/kmpg_logo.svg" alt="KMPG" className='h-8' />
          <img src="/clients_logos/nestle_logo.svg" alt="Nestle" className='h-7' />
          <img src="/clients_logos/kfc_logo.svg" alt="KFC" className='h-8' />
          <img src="/clients_logos/alpro_logo.svg" alt="Alpro" className='h-8' />
        </div>
        <ul className='flex flex-col gap-1 mb-4'>
          <li className='flex'>
            <div className='w-4 relative inline-flex items-center mr-2'>
              <DynamicImage
                src="/awards_logos/edwards_logo.svg"
                alt="European Design Award"
                fill
                priority={true}
                sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px," />
            </div>
            <Link href="https://awards.europeandesign.org/#/Winners/248381" className='underline whitespace-nowrap'>
              European Design 2021 / Bronze
            </Link>
          </li>
          <li className='flex'>
            <div className='w-4 relative inline-flex items-center mr-2'>
              <DynamicImage
                src="/awards_logos/pentawards_logo.svg"
                alt="Pentawards Logo"
                fill
                priority={true}
                sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px," />
            </div>
            <Link href="https://pentawards.com/directory/en/page/the-winners" className='underline'>
              Pentawards 2020 / Gold
            </Link>
          </li>
          <li className='flex'>
            <div className='w-7 relative inline-flex items-center mr-2'>
              <DynamicImage
                src="/awards_logos/g8_logo.svg"
                alt="G8 Logo"
                fill
                priority={true}
                sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px," />
            </div>
            <Link href="https://2020.ggggggggfest.com/ru/works/632" className='underline'>
              G8 Awards 2020 / Gold
            </Link>
          </li>
          <li className='flex items-center'>
            <div className='w-4 h-4 relative inline-flex items-center mr-2'>
              <DynamicImage
                src="/awards_logos/ADCR_logo.png"
                alt="ADCR Logo"
                fill
                priority={true}
                sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px," />
            </div>
            <Link href="https://awards.artdirectorsclub.ru/winners/?year=2020&work_id=6652&cat_id=2468" className='underline'>
              ADCR 2020 / Bronze
            </Link>
          </li>
        </ul>
        <p>Wanna work together?<br />
          Just drop me an <a href="mailto:hello@pzk.design" target="_blank" className='underline'>email</a></p>
      </div>
      <div className="relative w-full pr-12 aspect-square bg-neutral-900 rounded-sm overflow-hidden order-first sm:order-last">
        <DynamicImage
          src="/avatar.jpg"
          alt="This is me"
          fill
          priority={true}
          sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px,"
        />
      </div>
    </div>
  )
}