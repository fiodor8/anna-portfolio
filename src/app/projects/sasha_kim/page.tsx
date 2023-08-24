import dynamic from 'next/dynamic';

import { Suspense } from 'react';
const DynamicImage = dynamic(() => import('next/image'), { ssr: false });
const DynamicVideo = dynamic(() => import('@/components/videoPlayer'), { ssr: false });

import CoverImage from '@/components/coverImage'

export const metadata = {
  title: 'Anna Pazyuk | Sasha Kim',
  description: 'Branding for a luxury dress brand for little princesses',
}

export default function SashaKim() {

  return (
    <div className='max-w-screen-xl py-24 px-6 mx-auto text-sm sm:text-base'>
      <CoverImage id='sasha_kim' />

      <div className="relative w-full aspect-[1.16] bg-neutral-900">
        <DynamicImage src="/sasha_kim/sasha_kim_magazines.jpg" alt="Copy of the copy of the copy" fill priority={true} sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px," />
      </div>

      <div className="relative w-full aspect-[1.77] bg-neutral-900">
        <DynamicImage src="/sasha_kim/sasha_kim_logo.gif" alt="Copy of the copy of the copy" fill priority={true} sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px," />
      </div>

      <p className='my-12 mx-auto max-w-screen-md'>
        Sasha Kim is a luxury dress brand for little princesses. The brand believes that a fairy tale can overcome reality. After all reality can only be comparable to a fairy tale, but never better.
        The brand&apos;s mission is to turn childhood into a never ending fairy tale. That&apos;s why the logo serves as both a name abbreviation and an infinity sign with a princess crown.
      </p>

      <div className="relative w-full aspect-[1.77] bg-neutral-900">
        <DynamicImage src="/sasha_kim/sasha_kim_logo_palette.jpeg" alt="Copy of the copy of the copy" fill priority={true} sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px," />
      </div>

      <div className="relative w-full aspect-[1.77] bg-neutral-900">
        <DynamicImage src="/sasha_kim/sasha_kim_brand_elements_01.jpg" alt="Copy of the copy of the copy" fill priority={true} sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px," />
      </div>

      <div className="relative w-full aspect-[1.77] bg-neutral-900">
        <DynamicImage src="/sasha_kim/sasha_kim_tags_01.jpg" alt="Copy of the copy of the copy" fill priority={true} sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px," />
      </div>

      <div className="relative w-full aspect-[1.77] bg-neutral-900">
        <DynamicImage src="/sasha_kim/sasha_kim_tags_02.jpg" alt="Copy of the copy of the copy" fill priority={true} sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px," />
      </div>

      <p className='my-12 mx-auto max-w-screen-md'>
        The main pattern consists of symbols that belong to the most famous princesses in mass culture. In the pattern you can find the Snow White apple, Cinderella&apos;s shoe, a rose from the Beauty and the Beast and a lot of other references that turn the pattern into a discovery game.
      </p>

      <div className="relative w-full aspect-[4.66] bg-neutral-900">
        <DynamicImage src="/sasha_kim/sasha_kim_icons_01.jpg" alt="Copy of the copy of the copy" fill priority={true} sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px," />
      </div>

      <div className="relative w-full aspect-[2] bg-neutral-900">
        <DynamicImage src="/sasha_kim/sasha_kim_pattern_01.jpg" alt="Copy of the copy of the copy" fill priority={true} sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px," />
      </div>

      <p className='my-12 mx-auto max-w-screen-md'>
        And of course we&apos;ve made a version of the pattern for the boys&apos; collection.
      </p>

      <div className="relative w-full aspect-[4.66] bg-neutral-900">
        <DynamicImage src="/sasha_kim/sasha_kim_icons_02.jpg" alt="Copy of the copy of the copy" fill priority={true} sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px," />
      </div>

      <div className="relative w-full aspect-[2] bg-neutral-900">
        <DynamicImage src="/sasha_kim/sasha_kim_patterns_02.jpg" alt="Copy of the copy of the copy" fill priority={true} sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px," />
      </div>

      <div className="relative w-full aspect-[2] bg-neutral-900">
        <DynamicImage src="/sasha_kim/sasha_kim_shopper.gif" alt="Copy of the copy of the copy" fill priority={true} sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px," />
      </div>

      <div className="relative w-full aspect-[1.77] bg-neutral-900">
        <DynamicImage src="/sasha_kim/sasha_kim_cards.jpg" alt="Copy of the copy of the copy" fill priority={true} sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px," />
      </div>

      <div className="relative w-full aspect-[1.77] bg-neutral-900">
        <DynamicImage src="/sasha_kim/sasha_kim_scotch.jpg" alt="Copy of the copy of the copy" fill priority={true} sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px," />
      </div>

      <div className="relative w-full aspect-[1.77] bg-neutral-900">
        <DynamicImage src="/sasha_kim/sasha_kim_box.jpg" alt="Copy of the copy of the copy" fill priority={true} sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px," />
      </div>

      <div className="relative w-full aspect-[1.77] bg-neutral-900">
        <DynamicImage src="/sasha_kim/sasha_kim_ribbon.jpg" alt="Copy of the copy of the copy" fill priority={true} sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px," />
      </div>

      <div className="relative w-full aspect-[1.77] bg-neutral-900">
        <DynamicImage src="/sasha_kim/sasha_kim_instagram.jpg" alt="Copy of the copy of the copy" fill priority={true} sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px," />
      </div>

      <div className="relative w-full aspect-[1.77] bg-neutral-900">
        <DynamicImage src="/sasha_kim/sasha_kim_posters.jpg" alt="Copy of the copy of the copy" fill priority={true} sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px," />
      </div>

      <p className='my-12 mx-auto max-w-screen-md'>
        Also there are patterns for special occasions, such as a collaboration between Sasha Kim and Universal during the launch of “How to Train Your Dragon 3”.
      </p>

      <div className="relative w-full aspect-[4.66] bg-neutral-900">
        <DynamicImage src="/sasha_kim/sasha_kim_icons_03.jpg" alt="Copy of the copy of the copy" fill priority={true} sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px," />
      </div>

      <div className="relative w-full aspect-[2] bg-neutral-900">
        <DynamicImage src="/sasha_kim/sasha_kim_patterns_03.jpg" alt="Copy of the copy of the copy" fill priority={true} sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px," />
      </div>

      <p className='my-12 mx-auto max-w-screen-md'>
        And, of course, &quot;it&apos;s all about merchandising&quot;.<br /><br />
        Sasha Kim Kids Cafe also got its own pattern inspired by fairy tale symbols of feasts. You may find there Mad Hatter&apos;s hat, Ginger Cookie Man and a lot more references to the famous characters.
      </p>

      <div className="relative w-full aspect-[4.66] bg-neutral-900">
        <DynamicImage src="/sasha_kim/sasha_kim_icons_04.jpg" alt="Copy of the copy of the copy" fill priority={true} sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px," />
      </div>

      <div className="relative w-full aspect-[2] bg-neutral-900">
        <DynamicImage src="/sasha_kim/sasha_kim_patterns_04.jpg" alt="Copy of the copy of the copy" fill priority={true} sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px," />
      </div>

      <div className="relative w-full aspect-[1.77] bg-neutral-900">
        <DynamicImage src="/sasha_kim/sasha_kim_cafe_01.jpg" alt="Copy of the copy of the copy" fill priority={true} sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px," />
      </div>

      <div className="relative w-full aspect-[1.77] bg-neutral-900">
        <DynamicImage src="/sasha_kim/sasha_kim_cafe_02.jpg" alt="Copy of the copy of the copy" fill priority={true} sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px," />
      </div>

      <div className="relative w-full aspect-[1.77] bg-neutral-900">
        <DynamicImage src="/sasha_kim/sasha_kim_cafe_03.jpg" alt="Copy of the copy of the copy" fill priority={true} sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px," />
      </div>

      <div className="relative w-full aspect-[1.77] bg-neutral-900">
        <DynamicImage src="/sasha_kim/sasha_kim_merch_01.jpg" alt="Copy of the copy of the copy" fill priority={true} sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px," />
      </div>

      <p className='my-12 mx-auto max-w-screen-md'>
        And now for a little merchandising twist. Every princess can get with her new dress a family look: a tiny version of her dress made for her favourite doll.
      </p>

      <div className="relative w-full aspect-[1.77] bg-neutral-900">
        <DynamicImage src="/sasha_kim/sasha_kim_merch_02.jpg" alt="Copy of the copy of the copy" fill priority={true} sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px," />
      </div>

      <div className="relative w-full aspect-[1.77] bg-neutral-900">
        <DynamicImage src="/sasha_kim/sasha_kim_merch_03.jpg" alt="Copy of the copy of the copy" fill priority={true} sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px," />
      </div>

      <div className="relative w-full aspect-[1.77] bg-neutral-900">
        <DynamicImage src="/sasha_kim/sasha_kim_merch_04.jpg" alt="Copy of the copy of the copy" fill priority={true} sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px," />
      </div>

      <div className="relative w-full aspect-[4.26] bg-neutral-900">
        <DynamicImage src="/sasha_kim/sasha_kim_thanks.gif" alt="Copy of the copy of the copy" fill priority={true} sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px," />
      </div>

      <div className='my-6 sm:my-12 mx-auto max-w-screen-md'>
        <ul className='flex flex-col gap-0.5'>
          <li>Agency: The Clients</li>
          <li>Strategy & creative: Alexandr Bozhko</li>
          <li>Art direction: Lidiya Kapysh</li>
          <li>Design: Anna Pazyuk</li>
        </ul>
      </div>
    </div>
  )
}