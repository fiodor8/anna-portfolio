import dynamic from 'next/dynamic';

import { Suspense } from 'react';
const DynamicImage = dynamic(() => import('next/image'), { ssr: false });
const DynamicVideo = dynamic(() => import('@/components/videoPlayer'), { ssr: false });

import CoverImage from '@/components/coverImage'

export const metadata = {
   title: 'Anna Pazyuk | Workaholic',
   description: 'Cold Brew Coffe Packaging Design',
 }

export default function Workaholic() {

   return (
      <div className='max-w-screen-xl py-24 px-6 mx-auto text-sm sm:text-base'>
            <CoverImage id='workaholic'/>
         <p className='my-12 mx-auto max-w-screen-md'>
            We were working on the packaging for a cold brew coffee in a wine bottle and realised that a real workaholic is the one who can’t ever stop. That’s why we’ve created 10 logos instead of one, 10 label designs instead of one, and also a gift box, beer cans, coffee bean bags, coasters, pins, stickers, wrapping paper, flask, badges, posters and Telegram stickerpack.
            <br /> <br />
            And now we kinda think we need to start from scratch.   
         </p>
         <div className="relative w-full aspect-[2.38] bg-neutral-900">
            <DynamicImage
               src="/workaholic/workaholic_copy_of_the_copy.gif"
               alt="Copy of the copy of the copy"
               fill
               priority={true}
               sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px,"
            />
         </div>
         <div className="relative w-full aspect-video bg-neutral-900">
            <DynamicImage
               src="/workaholic/workaholick_stickerpack.jpg"
               alt="Worcaholic Stickerpack"
               fill
               priority={true}
               sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px,"
            />
         </div>
         <div className="w-full aspect-video">
            <DynamicVideo url="https://player.vimeo.com/video/383705190" placeholder='' />
         </div>
         <div className="relative w-full aspect-video bg-neutral-900">
            <DynamicImage
               src="/workaholic/workaholic_bottles_01.jpg"
               alt="Worcaholic Stickerpack"
               fill
               priority={true}
               sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px,"
            />
         </div>
         <div className="w-full aspect-video">
            <DynamicVideo url="https://player.vimeo.com/video/384960200" placeholder='' />
         </div>
         <div className="relative w-full aspect-video bg-neutral-900">
            <DynamicImage
               src="/workaholic/workaholic_bottles_02.jpg"
               alt="Worcaholic Stickerpack"
               fill
               priority={true}
               sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px,"
            />
         </div>
         <div className="relative w-full aspect-video bg-neutral-900">
            <DynamicImage
               src="/workaholic/workaholic_bottles_03.jpg"
               alt="Worcaholic Stickerpack"
               fill
               priority={true}
               sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px,"
            />
         </div>
         <div className="relative w-full aspect-[2.91] bg-neutral-900">
            <DynamicImage
               src="/workaholic/workaholic_stickes_01.gif"
               alt="Worcaholic Stickerpack"
               fill
               priority={true}
               sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px,"
            />
         </div>
         <div className="w-full aspect-video">
            <DynamicVideo url="https://player.vimeo.com/video/386272940" placeholder='' />
         </div>
         <div className="relative w-full aspect-video bg-neutral-900">
            <DynamicImage
               src="/workaholic/workaholic_cans.jpg"
               alt="Worcaholic Stickerpack"
               fill
               priority={true}
               sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px,"
            />
         </div>
         <div className="relative w-full aspect-[2.91] bg-neutral-900">
            <DynamicImage
               src="/workaholic/workaholic_stickes_02.gif"
               alt="Worcaholic Stickerpack"
               fill
               priority={true}
               sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px,"
            />
         </div>
         <div className="relative w-full aspect-video bg-neutral-900">
            <DynamicImage
               src="/workaholic/workaholic_coffee_packs.jpg"
               alt="Worcaholic Stickerpack"
               fill
               priority={true}
               sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px,"
            />
         </div>
         <div className="relative w-full aspect-video bg-neutral-900">
            <DynamicImage
               src="/workaholic/workaholic_cards.jpg"
               alt="Worcaholic Stickerpack"
               fill
               priority={true}
               sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px,"
            />
         </div>
         <div className="relative w-full aspect-[2.91] bg-neutral-900">
            <DynamicImage
               src="/workaholic/workaholic_stickes_03.gif"
               alt="Worcaholic Stickerpack"
               fill
               priority={true}
               sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px,"
            />
         </div>
         <div className="relative w-full aspect-video bg-neutral-900">
            <DynamicImage
               src="/workaholic/workaholic_cafe.jpg"
               alt="Worcaholic Stickerpack"
               fill
               priority={true}
               sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px,"
            />
         </div>
         <div className="relative w-full aspect-video bg-neutral-900">
            <DynamicImage
               src="/workaholic/workaholic_merch.jpg"
               alt="Worcaholic Stickerpack"
               fill
               priority={true}
               sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px,"
            />
         </div>
         <div className="relative w-full aspect-video bg-neutral-900">
            <DynamicImage
               src="/workaholic/workaholic_pins.jpg"
               alt="Worcaholic Stickerpack"
               fill
               priority={true}
               sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px,"
            />
         </div>
         <div className="relative w-full aspect-video bg-neutral-900">
            <DynamicImage
               src="/workaholic/workaholic_t_shirts.gif"
               alt="Worcaholic Stickerpack"
               fill
               priority={true}
               sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px,"
            />
         </div>
         <div className="relative w-full aspect-video bg-neutral-900">
            <DynamicImage
               src="/workaholic/workaholic_posters_01.jpg"
               alt="Worcaholic Stickerpack"
               fill
               priority={true}
               sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px,"
            />
         </div>
         <div className="relative w-full aspect-video bg-neutral-900">
            <DynamicImage
               src="/workaholic/workaholic_posters_02.jpg"
               alt="Worcaholic Stickerpack"
               fill
               priority={true}
               sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px,"
            />
         </div>
         <div className="relative w-full aspect-video bg-neutral-900">
            <DynamicImage
               src="/workaholic/workaholic_tattoo.jpg"
               alt="Worcaholic Stickerpack"
               fill
               priority={true}
               sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px,"
            />
         </div>
         {/*<div className="relative w-full aspect-video bg-neutral-900">
            <DynamicImage
               src="/workaholic/workaholic_phones.gif"
               alt="Worcaholic Stickerpack"
               fill
               priority={true}
               sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px,"
            />
         </div>*/}
         <div className="relative w-full aspect-[4.11] bg-neutral-900">
            <DynamicImage
               src="/workaholic/workaholic_cup.gif"
               alt="Worcaholic Stickerpack"
               fill
               priority={true}
               sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px,"
            />
         </div>
         <div className='my-6 sm:my-12 mx-auto max-w-screen-md'>
            <ul className='flex flex-col gap-0.5'>
               <li>Agency: The Clients</li>
               <li>Strategy & copy: Aleksandr Bozhko, Ivan Dergachev</li>
               <li>Art direction: Lidiya Kapysh</li>
               <li>Design: Anna Pazyuk, Albert Safin, Alexandra Chushkina</li>
               <li>Illustration: Viktor Khomenko, Alexandra Chushkina</li>
               <li>3D: Albert Safin</li>
               <li>Motion: Alexandra Chushkina</li>
            </ul>
         </div>
      </div>
    )
  }