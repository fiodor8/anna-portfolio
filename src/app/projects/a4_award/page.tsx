import dynamic from 'next/dynamic';

import { Suspense } from 'react';
const DynamicImage = dynamic(() => import('next/image'), { ssr: false });
const DynamicVideo = dynamic(() => import('@/components/videoPlayer'), { ssr: false });

import CoverImage from '@/components/coverImage'

export const metadata = {
  title: 'Anna Pazyuk | A4 Award',
  description: 'Branding for Short-Film award',
}

export default function A4award() {

  return (
    <div className='max-w-screen-xl pb-24 px-6 mx-auto text-sm sm:text-base'>
      <CoverImage id='a4_award' />
      <div className="relative w-full aspect-[1.6] bg-neutral-900">
        <DynamicImage src="/a4_award/a4_award_logo.jpg" alt="Copy of the copy of the copy" fill priority={true} sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px," />
      </div>
      {/*   <div className="relative w-full aspect-[1.6] bg-neutral-900">
        <DynamicImage src="/a4_award/a4_award_film.gif" alt="Copy of the copy of the copy" fill priority={true} sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px," />
            </div>
      */}
      <div className="relative w-full aspect-[1.6] bg-neutral-900">
        <DynamicImage src="/a4_award/a4_award_brand_elements.jpg" alt="Copy of the copy of the copy" fill priority={true} sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px," />
      </div>
      <div className="relative w-full aspect-[1.6] bg-neutral-900">
        <DynamicImage src="/a4_award/a4_award_posters_01.jpg" alt="Copy of the copy of the copy" fill priority={true} sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px," />
      </div>
      <div className="relative w-full aspect-[1.6] bg-neutral-900">
        <DynamicImage src="/a4_award/a4_award_scene.jpg" alt="Copy of the copy of the copy" fill priority={true} sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px," />
      </div>
      <div className="relative w-full aspect-[1.6] bg-neutral-900">
        <DynamicImage src="/a4_award/a4_award_thumb.jpg" alt="Copy of the copy of the copy" fill priority={true} sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px," />
      </div>
      <div className="relative w-full aspect-[1.6] bg-neutral-900">
        <DynamicImage src="/a4_award/a4_award_manifesto.jpg" alt="Copy of the copy of the copy" fill priority={true} sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px," />
      </div>
      <div className="relative w-full aspect-[1.6] bg-neutral-900">
        <DynamicImage src="/a4_award/a4_award_posters_02.jpg" alt="Copy of the copy of the copy" fill priority={true} sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px," />
      </div>
      <div className="relative w-full aspect-[1.6] bg-neutral-900">
        <DynamicImage src="/a4_award/a4_award_posters_03.jpg" alt="Copy of the copy of the copy" fill priority={true} sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px," />
      </div>
      <div className="relative w-full aspect-[1.6] bg-neutral-900">
        <DynamicImage src="/a4_award/a4_award_logo_ani.gif" alt="Copy of the copy of the copy" fill priority={true} sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px," />
      </div>
      <div className="relative w-full aspect-[1.6] bg-neutral-900">
        <DynamicImage src="/a4_award/a4_award_posters_04.jpg" alt="Copy of the copy of the copy" fill priority={true} sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px," />
      </div>
      <div className="relative w-full aspect-[1.6] bg-neutral-900">
        <DynamicImage src="/a4_award/a4_award_posters_05.jpg" alt="Copy of the copy of the copy" fill priority={true} sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px," />
      </div>
      <div className="relative w-full aspect-[1.6] bg-neutral-900">
        <DynamicImage src="/a4_award/a4_award_vk.gif" alt="Copy of the copy of the copy" fill priority={true} sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px," />
      </div>
      <div className="relative w-full aspect-[1.6] bg-neutral-900">
        <DynamicImage src="/a4_award/a4_award_merch_01.jpg" alt="Copy of the copy of the copy" fill priority={true} sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px," />
      </div>
      <div className="relative w-full aspect-[1.6] bg-neutral-900">
        <DynamicImage src="/a4_award/a4_award_card.jpg" alt="Copy of the copy of the copy" fill priority={true} sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px," />
      </div>
      <div className="relative w-full aspect-[1.6] bg-neutral-900">
        <DynamicImage src="/a4_award/a4_award_merch_02.jpg" alt="Copy of the copy of the copy" fill priority={true} sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px," />
      </div>
      <div className="relative w-full aspect-[1.6] bg-neutral-900">
        <DynamicImage src="/a4_award/a4_award_merch_03.jpg" alt="Copy of the copy of the copy" fill priority={true} sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px," />
      </div>
      <div className="relative w-full aspect-[1.6] bg-neutral-900">
        <DynamicImage src="/a4_award/a4_award_merch_04.jpg" alt="Copy of the copy of the copy" fill priority={true} sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px," />
      </div>
      <div className="relative w-full aspect-[1.6] bg-neutral-900">
        <DynamicImage src="/a4_award/a4_award_stage_01.jpg" alt="Copy of the copy of the copy" fill priority={true} sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px," />
      </div>
      <div className="relative w-full aspect-[1.6] bg-neutral-900">
        <DynamicImage src="/a4_award/a4_award_stage_02.jpg" alt="Copy of the copy of the copy" fill priority={true} sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px," />
      </div>
      <div className="relative w-full aspect-[1.6] bg-neutral-900">
        <DynamicImage src="/a4_award/a4_award_stage_03.jpg" alt="Copy of the copy of the copy" fill priority={true} sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px," />
      </div>
      <p className='my-6 mx-auto max-w-screen-md'>
        A4 Short Film Awards held by &quot;Snegurochka&qout; paper brand attracted hundreds of aspiring film directors by the means of strong communications based on young directors&apos; insights.
      </p>
      <div className='my-6 sm:my-12 mx-auto max-w-screen-md'>
        <ul className='flex flex-col gap-0.5'>
          <li>Agency: The Clients</li>
          <li>Strategy & creative: Alexandr Bozhko</li>
          <li>Art direction: Lidiya Kapysh</li>
          <li>Design: Anna Pazyuk</li>
          <li>Special thanks: Nata Lyowina, Albert Safin</li>

          <li>Client: Media Instinct Group</li>
          <li>Creative Director: Alexey Antonov</li>
          <li>Copywriter: Yan Uvenchikov</li>
          <li>Producer: Maxim Mosyakov</li>
        </ul>
      </div>
    </div>
  )
}