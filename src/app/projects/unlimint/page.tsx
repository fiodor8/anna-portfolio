import dynamic from 'next/dynamic';

import { Suspense } from 'react';
const DynamicImage = dynamic(() => import('next/image'), { ssr: false });
const DynamicVideo = dynamic(() => import('@/components/videoPlayer'), { ssr: false });

import CoverImage from '@/components/coverImage'

export const metadata = {
   title: 'Anna Pazyuk | Unlimint',
   description: 'Brand platform for global fintech company',
 }

export default function Unlimint() {

   return (
      <div className='max-w-screen-xl py-24 px-6 mx-auto text-sm sm:text-base'>
            <CoverImage id='unlimint'/>
         <div className="relative w-full aspect-[3.36] bg-neutral-900">
            <DynamicImage
               src="/unlimint/unlimint_header_ready_for_tomorrow.jpg"
               alt="Ready For Tomorrow"
               fill
               priority={true}
               sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px,"
            />
         </div>
         <p className='my-6 mx-auto max-w-screen-md'>
            Unlimint is a global fintech company previously known as Cardpay. Today it&apos;s a leader in online payments market, working with hundreds of payment methods. And&nbsp;in&nbsp;the&nbsp;future Unlimint plans to create new services for innovative businesses, digital retail and other segments.
         </p>
         <p className='my-6 mx-auto max-w-screen-md'>
            <b>Brand platform &quot;Ready for tomorrow&quot; reflects the company&apos;s vision: to become the guide for companies going through digital transformation or innovators entering uncharted waters of emerging markets.</b>
         </p>
         <div className="w-full aspect-video">
            <DynamicVideo url="https://player.vimeo.com/video/488849984" placeholder='' />
         </div>
         <div className="relative w-full aspect-[0.82] bg-neutral-900">
            <DynamicImage
               src="/unlimint/unlimint_font_and_palette.jpg"
               alt="Fonts and Color Palette"
               fill
               priority={true}
               sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px,"
            />
         </div>
         <div className="w-full aspect-video">
            <DynamicVideo url="https://player.vimeo.com/video/487269867" placeholder='' />
         </div>
         <p className='my-6 sm:my-12 mx-auto max-w-screen-md'>
            The identity is built on three pillars. Number one is daring and futuristic display font Nekst from Type.Today. Number two is bright and energetic neon green. And finally, there is a bunch of graphic elements which symbolize constant renewal.
         </p>
         <div className="relative w-full aspect-video bg-neutral-900">
            <DynamicImage
               src="/unlimint/unlimint_app_cards.jpg"
               alt="Brand Overview"
               fill
               priority={true}
               sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px,"
            />
         </div>
         <div className="relative w-full aspect-video bg-neutral-900">
            <DynamicImage
               src="/unlimint/unlimint_posters.jpg"
               alt="Posters"
               fill
               priority={true}
               sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px,"
            />
         </div>
         <div className="w-full aspect-video">
            <DynamicVideo url="https://player.vimeo.com/video/507544815" placeholder='' />
         </div>
         <div className="w-full aspect-video">
            <DynamicVideo url="https://player.vimeo.com/video/495499924" placeholder='' />
         </div>
         <div className="relative w-full aspect-video bg-neutral-900">
            <DynamicImage
               src="/unlimint/unlimint_app_screens.jpg"
               alt="UI Elements"
               fill
               priority={true}
               sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px,"
            />
         </div>
         <div className="relative w-full aspect-video bg-neutral-900">
            <DynamicImage
               src="/unlimint/unlimint_flag.jpg"
               alt="Brand Elements"
               fill
               priority={true}
               sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px,"
            />
         </div>
         <div className="relative w-full aspect-video bg-neutral-900">
            <DynamicImage
               src="/unlimint/unlimint_merch_01.jpg"
               alt="Branded Pin and Watch"
               fill
               priority={true}
               sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px,"
            />
         </div>
         <div className="relative w-full aspect-video bg-neutral-900">
            <DynamicImage
               src="/unlimint/unlimint_merch_02.jpg"
               alt="Branded Plastic Bag and Phone Case"
               fill
               priority={true}
               sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px,"
            />
         </div>
         <div className="relative w-full aspect-[2.9] bg-neutral-900">
            <DynamicImage
               src="/unlimint/unlimint_header_crew.jpg"
               alt="Unlimiter's Crew"
               fill
               priority={true}
               sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px,"
            />
         </div>
         <p className='my-6 mx-auto max-w-screen-md'>
            People are the main resource of the company, they are curious, smart, agile, ambitious — they are Unlimiters. Visual identity of Unlimint HR brand is based on the brand logo and various metaphors of constant update.
         </p>
         <div className="relative w-full aspect-[3.36] bg-neutral-900">
            <DynamicImage
               src="/unlimint/unlimint_crew.gif"
               alt="Unlimit HR Brand Elements"
               fill
               priority={true}
               sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px,"
            />
         </div>
         <div className="relative w-full aspect-video bg-neutral-900">
            <DynamicImage
               src="/unlimint/unlimint_crew_uniform.jpg"
               alt="Crew Sweatshirts"
               fill
               priority={true}
               sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px,"
            />
         </div>
         <div className="relative w-full aspect-[3.37] bg-neutral-900">
            <DynamicImage
               src="/unlimint/unlimint_header_ready_for_tomorrow.jpg"
               alt="Ready For Tomorrow Kit"
               fill
               priority={true}
               sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px,"
            />
         </div>
         <p className='my-12 mx-auto max-w-screen-md'>
            Stylish merch for employees refers to the future and reminds of the Unlimiters’ principles. It ’s also possible to create custom copylines with combination of patches.
         </p>
         <div className="relative w-full aspect-video bg-neutral-900">
            <DynamicImage
               src="/unlimint/unlimint_crew_merch_01.jpg"
               alt="Ready For Tomorrow Kit"
               fill
               priority={true}
               sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px,"
            />
         </div>
         <div className="relative w-full aspect-video bg-neutral-900">
            <DynamicImage
               src="/unlimint/unlimint_crew_merch_02.jpg"
               alt="Ready For Tomorrow Kit"
               fill
               priority={true}
               sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px,"
            />
         </div>
         <div className="relative w-full aspect-video bg-neutral-900">
            <DynamicImage
               src="/unlimint/unlimint_crew_merch_03.jpg"
               alt="Ready For Tomorrow Kit"
               fill
               priority={true}
               sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px,"
            />
         </div>
         <div className="relative w-full aspect-video bg-neutral-900">
            <DynamicImage
               src="/unlimint/unlimint_crew_merch_04.jpg"
               alt="Ready For Tomorrow Kit"
               fill
               priority={true}
               sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px,"
            />
         </div>
         <div className="w-full aspect-video">
            <DynamicVideo url="https://player.vimeo.com/video/495506438" placeholder='' />
         </div>
         <div className="relative w-full aspect-[3.83] bg-neutral-900">
            <DynamicImage
               src="/unlimint/unlimint_thanks.gif"
               alt="Ready For Tomorrow Kit"
               fill
               priority={true}
               sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px,"
            />
         </div>
         <div className='my-6 mx-auto max-w-screen-md'>
            <ul className='flex flex-col gap-0.5'>
               <li>Agency: The Clients</li>
               <li>Creative direction: Aleksandr Bozhko, Ivan Dergachev</li>
               <li>Art direction: Lidiya Kapysh</li>
               <li>Account director: Maria Chechelova</li>
               <li>Design: Anna Pazyuk, Irina Vasilyeva</li>
               <li>3D: Natasha Kuchishkina</li>
               <li>UI kit: Igor Starkov</li>
               <li>Digital designer: Valeria Mikhailover</li>
               <li>Illustrator: Maria Yudina</li>
            </ul>
         </div>
         <div className='my-6 mx-auto max-w-screen-md'>
            <ul className='flex flex-col gap-0.5'>
               <li>Film production: Spot Films</li>
               <li>Film director: Roman Kosov</li>
               <li>Film sound: Sounds Like a Plan</li>
            </ul>
         </div>
         <div className='my-6 mx-auto max-w-screen-md'>
            <ul className='flex flex-col gap-0.5'>
               <li>Client: Unlimint</li>
               <li>CMO: Sergey Denisov</li>
               <li>Digital Marketing Manager: Elena Buzovska</li>
               <li>Head of Brand Design: Sasha Yagnyuk</li>
               <li>PR Manager: Nadya Ivanova</li>
               <li>Product Marketing Manager: Natalia Dengina</li>
            </ul>
         </div>
      </div>
    )
  }