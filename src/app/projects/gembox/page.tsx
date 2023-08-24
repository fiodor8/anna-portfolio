import dynamic from 'next/dynamic';

import { Suspense } from 'react';
const DynamicImage = dynamic(() => import('next/image'), { ssr: false });
const DynamicVideo = dynamic(() => import('@/components/videoPlayer'), { ssr: false });

import CoverImage from '@/components/coverImage'

export const metadata = {
  title: 'Anna Pazyuk | Gembox',
  description: 'Branding for an online store of rare and beautiful things',
}

export default function Gembox() {

  return (
    <div className='max-w-screen-xl py-24 px-6 mx-auto text-sm sm:text-base'>
      <CoverImage id='gembox' />
      <div className="relative w-full aspect-[1.75] bg-neutral-900">
        <DynamicImage
          src="/gembox/gembox_brand_values.jpg"
          alt="Brand Values"
          fill
          priority={true}
          sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px,"
        />
      </div>
      <div className="relative w-full aspect-[1.75] bg-neutral-900">
        <DynamicImage
          src="/gembox/gembox_search.gif"
          alt="Search Line"
          fill
          priority={true}
          sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px,"
        />
      </div>
      <div className="relative w-full aspect-[1.75] bg-neutral-900">
        <DynamicImage
          src="/gembox/gembox_website.jpg"
          alt="Gembox Website"
          fill
          priority={true}
          sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px,"
        />
      </div>
      <div className="relative w-full aspect-[1.75] bg-neutral-900">
        <DynamicImage
          src="/gembox/gembox_phones.jpg"
          alt="Gembox Mobile Website"
          fill
          priority={true}
          sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px,"
        />
      </div>
      <div className="relative w-full aspect-[1.75] bg-neutral-900">
        <DynamicImage
          src="/gembox/gembox_discovering.gif"
          alt="Gembox Discovery"
          fill
          priority={true}
          sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px,"
        />
      </div>
      <div className="relative w-full aspect-[1.75] bg-neutral-900">
        <DynamicImage
          src="/gembox/gembox_expand.jpg"
          alt="Gembox Logo Expanding"
          fill
          priority={true}
          sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px,"
        />
      </div>
      <div className="relative w-full aspect-[1.75] bg-neutral-900">
        <DynamicImage
          src="/gembox/gembox_fonts.jpg"
          alt="Gembox Fonts"
          fill
          priority={true}
          sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px,"
        />
      </div>
      <div className="relative w-full aspect-[1.75] bg-neutral-900">
        <DynamicImage
          src="/gembox/gembox_merch.gif"
          alt="Gembox Merchandise"
          fill
          priority={true}
          sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px,"
        />
      </div>
      <div className="relative w-full aspect-[1.75] bg-neutral-900">
        <DynamicImage
          src="/gembox/gembox_merch_01.jpg"
          alt="Gembox Watch"
          fill
          priority={true}
          sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px,"
        />
      </div>
      <div className="relative w-full aspect-[1.75] bg-neutral-900">
        <DynamicImage
          src="/gembox/gembox_merch_02.jpg"
          alt="Gembox Tags"
          fill
          priority={true}
          sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px,"
        />
      </div>
      <div className="relative w-full aspect-[1.75] bg-neutral-900">
        <DynamicImage
          src="/gembox/gembox_merch_03.jpg"
          alt="Gembox Tags"
          fill
          priority={true}
          sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px,"
        />
      </div>
      <div className="relative w-full aspect-[1.75] bg-neutral-900">
        <DynamicImage
          src="/gembox/gembox_merch_04.jpg"
          alt="Gembox Tags"
          fill
          priority={true}
          sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px,"
        />
      </div>
      <div className="relative w-full aspect-[1.75] bg-neutral-900">
        <DynamicImage
          src="/gembox/gembox_tags_01.jpg"
          alt="Gembox Tags"
          fill
          priority={true}
          sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px,"
        />
      </div>
      <div className="relative w-full aspect-[1.75] bg-neutral-900">
        <DynamicImage
          src="/gembox/gembox_tags_02.gif"
          alt="Gembox Tags"
          fill
          priority={true}
          sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px,"
        />
      </div>
      <div className="relative w-full aspect-[1.75] bg-neutral-900">
        <DynamicImage
          src="/gembox/gembox_shopping_bag.gif"
          alt="Gembox Shopping Bag"
          fill
          priority={true}
          sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px,"
        />
      </div>
      <div className="relative w-full aspect-[1.75] bg-neutral-900">
        <DynamicImage
          src="/gembox/gembox_scotch.jpg"
          alt="Gembox Scotch Tape"
          fill
          priority={true}
          sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px,"
        />
      </div>
      <div className="relative w-full aspect-[1.75] bg-neutral-900">
        <DynamicImage
          src="/gembox/gembox_shopper.jpg"
          alt="Gembox Shopper"
          fill
          priority={true}
          sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px,"
        />
      </div>
      <div className="relative w-full aspect-[1.75] bg-neutral-900">
        <DynamicImage
          src="/gembox/gembox_ring.jpg"
          alt="Gembox Ring"
          fill
          priority={true}
          sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px,"
        />
      </div>
      <div className="relative w-full aspect-[1.75] bg-neutral-900">
        <DynamicImage
          src="/gembox/gembox_posters.jpg"
          alt="Gembox Posters"
          fill
          priority={true}
          sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px,"
        />
      </div>
      <div className="relative w-full aspect-[1.75] bg-neutral-900">
        <DynamicImage
          src="/gembox/gembox_book.jpg"
          alt="Gembox Book"
          fill
          priority={true}
          sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px,"
        />
      </div>
      <div className="relative w-full aspect-[3.04] bg-neutral-900">
        <DynamicImage
          src="/gembox/gembox_thanks.gif"
          alt="Thank you"
          fill
          priority={true}
          sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px,"
        />
      </div>
      <div className='my-6 sm:my-12 mx-auto max-w-screen-md'>
        <ul className='flex flex-col gap-0.5'>
          <li>Agency: The Clients</li>
          <li>Creative direction: Aleksandr Bozhko, Ivan Dergachev</li>
          <li>Art direction: Lidiya Kapysh</li>
          <li>Design: Anna Pazyuk</li>
        </ul>
      </div>
    </div>
  )
}