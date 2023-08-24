import dynamic from 'next/dynamic';

import { Suspense } from 'react';
const DynamicImage = dynamic(() => import('next/image'), { ssr: false });
const DynamicVideo = dynamic(() => import('@/components/videoPlayer'), { ssr: false });

import CoverImage from '@/components/coverImage'

export const metadata = {
  title: 'Anna Pazyuk | Gravity Mall',
  description: 'Branding for a Shopping Mall',
}

export default function GravityMall() {

  return (
    <div className='max-w-screen-xl py-24 px-6 mx-auto text-sm sm:text-base'>
      <CoverImage id='gravity_mall' />
      <p className='my-12 mx-auto max-w-screen-md'>
        <span className='text-xl'>A tribute to locals</span><br />
        Gravitatsiya (Gravity) is a new shopping center soon to be open in the Chertanovo district of Moscow. It’s&nbsp;aiming to become the center of attraction for the locals. So we’ve created an identity system full of local pride — inspired by the view from space at the Soviet era modernist architecture the place is well known for.
      </p>

      {/*<div className="relative w-full aspect-[1.6] bg-neutral-900">
        <DynamicImage src="/gravity_mall/gravity_mall_face.jpg" alt="Copy of the copy of the copy" fill priority={true} sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px," />
  </div>*/}

      <div className="relative w-full aspect-[1.6] bg-neutral-900">
        <DynamicImage src="/gravity_mall/gravity_mall_buildings.gif" alt="Copy of the copy of the copy" fill priority={true} sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px," />
      </div>

      <div className="relative w-full aspect-[2.4] bg-neutral-900">
        <DynamicImage src="/gravity_mall/gravity_mall_glyphs.jpg" alt="Copy of the copy of the copy" fill priority={true} sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px," />
      </div>

      <div className="relative w-full aspect-video bg-neutral-900">
        <DynamicImage src="/gravity_mall/gravity_mall_logo.gif" alt="Copy of the copy of the copy" fill priority={true} sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px," />
      </div>

      <div className="relative w-full aspect-[2.15] bg-neutral-900">
        <DynamicImage src="/gravity_mall/gravity_mall_brand_elements.jpg" alt="Copy of the copy of the copy" fill priority={true} sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px," />
      </div>

      <div className="relative w-full aspect-[1.6] bg-neutral-900">
        <DynamicImage src="/gravity_mall/gravity_mall_building_inside.jpg" alt="Copy of the copy of the copy" fill priority={true} sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px," />
      </div>

      <div className="relative w-full aspect-[1.6] bg-neutral-900">
        <DynamicImage src="/gravity_mall/gravity_mall_pins.jpg" alt="Copy of the copy of the copy" fill priority={true} sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px," />
      </div>

      <div className="relative w-full aspect-[1.6] bg-neutral-900">
        <DynamicImage src="/gravity_mall/gravity_mall_shoppers.jpg" alt="Copy of the copy of the copy" fill priority={true} sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px," />
      </div>

      <div className="relative w-full aspect-[1.6] bg-neutral-900">
        <DynamicImage src="/gravity_mall/gravity_mall_advert.jpg" alt="Copy of the copy of the copy" fill priority={true} sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px," />
      </div>

      <div className="relative w-full aspect-[2.05] bg-neutral-900">
        <DynamicImage src="/gravity_mall/gravity_mall_flyers.jpg" alt="Copy of the copy of the copy" fill priority={true} sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px," />
      </div>

      <p className='my-12 mx-auto max-w-screen-md'>
        <span className='text-xl'>A bit of dynamics</span><br />
        When it comes to communicating mall’s activities logo is never enough. So we’ve created a full featured iconography system aimed at solving different communication tasks, such as introducing new categories and events.
      </p>

      <div className="relative w-full aspect-[2.4] bg-neutral-900">
        <DynamicImage src="/gravity_mall/gravity_mall_icons.jpg" alt="Copy of the copy of the copy" fill priority={true} sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px," />
      </div>

      <div className="relative w-full aspect-[1.6] bg-neutral-900">
        <DynamicImage src="/gravity_mall/gravity_mall_poster_wall.jpg" alt="Copy of the copy of the copy" fill priority={true} sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px," />
      </div>

      <div className="relative w-full aspect-[1.6] bg-neutral-900">
        <DynamicImage src="/gravity_mall/gravity_mall_instagram.jpg" alt="Copy of the copy of the copy" fill priority={true} sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px," />
      </div>

      <p className='my-12 mx-auto max-w-screen-md'>
        <span className='text-xl'>A hint of surrealism</span><br />
        Space is the topic reflected in the interior design and popular science events to be held at the mall. So we’ve created a series of key visuals that mix the mystery of space with daily activities that one can enjoy at the mall.
      </p>

      <div className="relative w-full aspect-[1.6] bg-neutral-900">
        <DynamicImage src="/gravity_mall/gravity_mall_space_poster_01.jpg" alt="Copy of the copy of the copy" fill priority={true} sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px," />
      </div>

      <div className="relative w-full aspect-[1.6] bg-neutral-900">
        <DynamicImage src="/gravity_mall/gravity_mall_space.gif" alt="Copy of the copy of the copy" fill priority={true} sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px," />
      </div>

      <div className="relative w-full aspect-[1.6] bg-neutral-900">
        <DynamicImage src="/gravity_mall/gravity_mall_space_poster_02.jpg" alt="Copy of the copy of the copy" fill priority={true} sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px," />
      </div>

      <div className="relative w-full aspect-[1.6] bg-neutral-900">
        <DynamicImage src="/gravity_mall/gravity_mall_space_poster_03.jpg" alt="Copy of the copy of the copy" fill priority={true} sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px," />
      </div>

      <div className="relative w-full aspect-video bg-neutral-900">
        <DynamicImage src="/gravity_mall/gravity_mall_merch_01.gif" alt="Copy of the copy of the copy" fill priority={true} sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px," />
      </div>

      <p className='my-12 mx-auto max-w-screen-md'>
        <span className='text-xl'>A drop of merch</span><br />
        This identity is already quite playful, but we’ve decided to turn it up a notch. We’ve hidden a Russian letter „Ч“ (Ch), the first letter of the district name, right in the main logo. And made a drop of merch to celebrate the local pride.
      </p>

      <div className="relative w-full aspect-[1.6] bg-neutral-900">
        <DynamicImage src="/gravity_mall/gravity_mall_merch_02.gif" alt="Copy of the copy of the copy" fill priority={true} sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px," />
      </div>

      <div className="relative w-full aspect-video bg-neutral-900">
        <DynamicImage src="/gravity_mall/gravity_mall_merch_03.gif" alt="Copy of the copy of the copy" fill priority={true} sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px," />
      </div>

      <div className="relative w-full aspect-[1.6] bg-neutral-900">
        <DynamicImage src="/gravity_mall/gravity_mall_merch_04.jpg" alt="Copy of the copy of the copy" fill priority={true} sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px," />
      </div>

      <div className="relative w-full aspect-video bg-neutral-900">
        <DynamicImage src="/gravity_mall/gravity_mall_merch_05.gif" alt="Copy of the copy of the copy" fill priority={true} sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px," />
      </div>

      <div className="w-full aspect-video">
            <DynamicVideo url="https://player.vimeo.com/video/369788561" placeholder='' />
         </div>

      <div className="relative w-full aspect-[1.6] bg-neutral-900">
        <DynamicImage src="/gravity_mall/gravity_mall_merch_06.jpg" alt="Copy of the copy of the copy" fill priority={true} sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px," />
      </div>
      
      <div className='my-6 sm:my-12 mx-auto max-w-screen-md'>
        <ul className='flex flex-col gap-0.5'>
          <li>Agency: The Clients</li>
          <li>Strategy & creative: Alexandr Bozhko, Ivan Dergachev </li>
          <li>Account director: Maria Chechelova</li>
          <li>Art director: Lidiya Kapysh</li>
          <li>Design: Anna Pazyuk, Albert Safin, Alexandra Chushkina</li>
          <li>Photographer: Anna Pazyuk</li>
          <li>Model: Alexandra Chushkina, Anatoly Chipenko</li>
          <li>Video editor: Aleksey Polianchekov</li>
        </ul>
      </div>
    </div>
  )
}