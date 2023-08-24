import dynamic from 'next/dynamic';

import { Suspense } from 'react';
const DynamicImage = dynamic(() => import('next/image'), { ssr: false });
const DynamicVideo = dynamic(() => import('@/components/videoPlayer'), { ssr: false });

import CoverImage from '@/components/coverImage'

export const metadata = {
  title: 'Anna Pazyuk | New Wallet',
  description: 'Branding for local St. Petersburg accessories brand',
}

export default function NewNew() {

  return (
    <div className='max-w-screen-xl py-24 px-6 mx-auto text-sm sm:text-base'>
      <CoverImage id='n_NEW' />
      <p className='my-12 mx-auto max-w-screen-md'>
        <span className='text-xl pb-4 font-bold'>It’s a statement. And also a wallet.</span><br />
        New Wallet is a local St. Petersburg brand known for their accessories made with that kick-ass Tyvek material. Their wallets, passport covers and toiletry bags are light, durable and feature colorful illustrations. We helped them create and launch НЬЮ (literally „new“ in Cyrillic) sub-brand. It’s all of the above and something more: each collection is dedicated to some important discussion in Russian society — from art to sex to culture to politics.
      </p>
      <div className="relative w-full aspect-[1.6] bg-neutral-900">
        <DynamicImage src="/n_NEW/n_NEW_wallets_01.jpg" alt="Copy of the copy of the copy" fill priority={true} sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px," />
      </div>
      <p className='my-12 mx-auto max-w-screen-md'>
        <span className='text-xl pb-4 font-bold'>Fits into pocket. But belongs outside.</span><br />
        Creating a real conversation starter requires being bold in all aspects. We started with creating a bold name that’s deeply rooted in the parent brand but combined with a very modern local touch. And literally typed it with a bold font. Self-proclaimed „Swiss cyberpunk“ style allows for both great shelf visibility and easy navigation between collections.
      </p>
      <div className="relative w-full aspect-[1.6] bg-neutral-900">
        <DynamicImage src="/n_NEW/n_NEW_fonts_colors.jpg" alt="Copy of the copy of the copy" fill priority={true} sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px," />
      </div>
      <div className="relative w-full aspect-[3.55] bg-neutral-900">
        <DynamicImage src="/n_NEW/n_NEW_marquee.gif" alt="Copy of the copy of the copy" fill priority={true} sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px," />
      </div>
      <div className="w-full aspect-video">
        <DynamicVideo url="https://player.vimeo.com/video/415136125" placeholder='' />
      </div>
      <div className="relative w-full aspect-[1.6] bg-neutral-900">
        <DynamicImage src="/n_NEW/n_NEW_rus_letters.jpg" alt="Copy of the copy of the copy" fill priority={true} sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px," />
      </div>
      <div className="relative w-full aspect-[1.6] bg-neutral-900">
        <DynamicImage src="/n_NEW/n_NEW_hashtags.jpg" alt="Copy of the copy of the copy" fill priority={true} sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px," />
      </div>
      <div className="relative w-full aspect-[1.6] bg-neutral-900">
        <DynamicImage src="/n_NEW/n_NEW_posters.jpg" alt="Copy of the copy of the copy" fill priority={true} sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px," />
      </div>
      <div className="relative w-full aspect-[1.6] bg-neutral-900">
        <DynamicImage src="/n_NEW/n_NEW_wallets_02.jpg" alt="Copy of the copy of the copy" fill priority={true} sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px," />
      </div>
      <div className="relative w-full aspect-[4.11] bg-neutral-900">
        <DynamicImage src="/n_NEW/n_NEW_new_russia.jpg" alt="Copy of the copy of the copy" fill priority={true} sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px," />
      </div>
      <p className='my-12 mx-auto max-w-screen-md'>
        <span className='text-xl pb-4 font-bold'>New Russia. Same old story.</span><br />
        Those wallets won’t necessary save you from being detained for peacefully voicing your personal opinion on political matters. But at least they will make your cards and money safe.
      </p>
      <div className="relative w-full aspect-[1.6] bg-neutral-900">
        <DynamicImage src="/n_NEW/n_NEW_new_r_wallets_01.jpg" alt="Copy of the copy of the copy" fill priority={true} sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px," />
      </div>
      <div className="relative w-full aspect-[1.6] bg-neutral-900">
        <DynamicImage src="/n_NEW/n_NEW_new_r_wallets_02.jpg" alt="Copy of the copy of the copy" fill priority={true} sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px," />
      </div>
      <div className="relative w-full aspect-[2.56] bg-neutral-900">
        <DynamicImage src="/n_NEW/n_NEW_new_r_wallets_03.gif" alt="Copy of the copy of the copy" fill priority={true} sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px," />
      </div>
      <div className="relative w-full aspect-[1.6] bg-neutral-900">
        <DynamicImage src="/n_NEW/n_NEW_new_r_wallets_04.jpg" alt="Copy of the copy of the copy" fill priority={true} sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px," />
      </div>
      <div className="relative w-full aspect-[1.6] bg-neutral-900">
        <DynamicImage src="/n_NEW/n_NEW_new_r_wallets_05.jpg" alt="Copy of the copy of the copy" fill priority={true} sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px," />
      </div>
      <div className="relative w-full aspect-[1.6] bg-neutral-900">
        <DynamicImage src="/n_NEW/n_NEW_new_r_wallets_06.jpg" alt="Copy of the copy of the copy" fill priority={true} sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px," />
      </div>
      <div className="relative w-full aspect-[2.56] bg-neutral-900">
        <DynamicImage src="/n_NEW/n_NEW_new_r_wallets_07.gif" alt="Copy of the copy of the copy" fill priority={true} sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px," />
      </div>
      <div className="w-full aspect-video">
        <DynamicVideo url="https://player.vimeo.com/video/417584707" placeholder='' />
      </div>
      <div className="relative w-full aspect-[1.6] bg-neutral-900">
        <DynamicImage src="/n_NEW/n_NEW_new_r_wallets_08.jpg" alt="Copy of the copy of the copy" fill priority={true} sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px," />
      </div>
      <p className='my-12 mx-auto max-w-screen-md'>
        <span className='text-xl pb-4 font-bold'>New Sex. For money.</span><br />
        Official Russia is all about traditions and puritanism. That’s why when you pay for a coffee using a wallet covered with 12 vaginas, you may have some questions asked. Great! It’s much better than talking about weather, isn’t it?
      </p>
      <div className="relative w-full aspect-[4.11] bg-neutral-900">
        <DynamicImage src="/n_NEW/n_NEW_new_sex.jpg" alt="Copy of the copy of the copy" fill priority={true} sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px," />
      </div>
      <div className="relative w-full aspect-[1.6] bg-neutral-900">
        <DynamicImage src="/n_NEW/n_NEW_new_sex_wallets_01.jpg" alt="Copy of the copy of the copy" fill priority={true} sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px," />
      </div>
      <div className="relative w-full aspect-[1.6] bg-neutral-900">
        <DynamicImage src="/n_NEW/n_NEW_new_sex_wallets_02.jpg" alt="Copy of the copy of the copy" fill priority={true} sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px," />
      </div>
      <div className="relative w-full aspect-[2.56] bg-neutral-900">
        <DynamicImage src="/n_NEW/n_NEW_new_sex_wallets_03.gif" alt="Copy of the copy of the copy" fill priority={true} sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px," />
      </div>
      <div className="relative w-full aspect-[1.6] bg-neutral-900">
        <DynamicImage src="/n_NEW/n_NEW_new_sex_wallets_04.jpg" alt="Copy of the copy of the copy" fill priority={true} sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px," />
      </div>
      <div className="relative w-full aspect-[1.6] bg-neutral-900">
        <DynamicImage src="/n_NEW/n_NEW_new_sex_wallets_05.jpg" alt="Copy of the copy of the copy" fill priority={true} sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px," />
      </div>
      <div className="w-full aspect-video">
        <DynamicVideo url="https://player.vimeo.com/video/417588373" placeholder='' />
      </div>
      <div className="relative w-full aspect-[1.6] bg-neutral-900">
        <DynamicImage src="/n_NEW/n_NEW_new_sex_wallets_06.jpg" alt="Copy of the copy of the copy" fill priority={true} sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px," />
      </div>
      <div className="relative w-full aspect-[2.56] bg-neutral-900">
        <DynamicImage src="/n_NEW/n_NEW_new_sex_wallets_07.gif" alt="Copy of the copy of the copy" fill priority={true} sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px," />
      </div>
      <div className="relative w-full aspect-[1.6] bg-neutral-900">
        <DynamicImage src="/n_NEW/n_NEW_new_sex_wallets_08.jpg" alt="Copy of the copy of the copy" fill priority={true} sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px," />
      </div>
      <div className="relative w-full aspect-[1.6] bg-neutral-900">
        <DynamicImage src="/n_NEW/n_NEW_new_sex_wallets_09.jpg" alt="Copy of the copy of the copy" fill priority={true} sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px," />
      </div>
      <div className="relative w-full aspect-[1.6] bg-neutral-900">
        <DynamicImage src="/n_NEW/n_NEW_new_sex_wallets_10.jpg" alt="Copy of the copy of the copy" fill priority={true} sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px," />
      </div>
      <div className="relative w-full aspect-[1.6] bg-neutral-900">
        <DynamicImage src="/n_NEW/n_NEW_new_sex_wallets_11.jpg" alt="Copy of the copy of the copy" fill priority={true} sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px," />
      </div>
      <div className="relative w-full aspect-[1.6] bg-neutral-900">
        <DynamicImage src="/n_NEW/n_NEW_new_sex_wallets_12.jpg" alt="Copy of the copy of the copy" fill priority={true} sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px," />
      </div>
      <div className="relative w-full aspect-[3.84] bg-neutral-900">
        <DynamicImage src="/n_NEW/n_NEW_thanks.gif" alt="Copy of the copy of the copy" fill priority={true} sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px," />
      </div>


      <div className='my-6 sm:my-12 mx-auto max-w-screen-md'>
        <ul className='flex flex-col gap-0.5'>
          <li>Agency: The Clients</li>
          <li>Art direction: Lidiya Kapysh</li>
          <li>Design: Anna Pazyuk, Albert Safin, Alexandra Chushkina</li>
          <li>Illustration: Alexandra Chushkina, Albert Safin</li>
          <li>Motion: Alexandra Chushkina</li>
          <li>Сopy: Ksenia Lazareva</li>
          <li>Strategy: Andrew Silin, Aleksandr Bozhko, Ivan Dergachev</li>
          <li>Creative direction: Aleksandr Bozhko, Ivan Dergachev</li>
          <li>Account director: Maria Chechelova</li>
        </ul>
      </div>
    </div>
  )
}