import dynamic from 'next/dynamic';

import { Suspense } from 'react';
const DynamicImage = dynamic(() => import('next/image'), { ssr: false });
const DynamicVideo = dynamic(() => import('@/components/videoPlayer'), { ssr: false });

import CoverImage from '@/components/coverImage'

export const metadata = {
  title: 'Anna Pazyuk | Builders on the Block',
  description: 'Branding for an online magazine exploring the practical applications of blockchain',
}

export default function Gembox() {

  return (
    <div className='max-w-screen-xl py-24 px-6 mx-auto text-sm sm:text-base'>
      <div className="w-full aspect-video">
        <DynamicVideo url="https://player.vimeo.com/video/856737890" placeholder='' />
      </div>
      <h3 className='my-6 text-lg font-bold mx-auto  max-w-screen-md'>
        Lisk in a nutshell
      </h3>
      <p className='my-6 mx-auto max-w-screen-md'>
        Lisk is a cutting-edge layer-2 blockchain protocol equipped with an open-source SDK. With Lisk, building web3 applications using JavaScript has never been easier. But what sets Lisk apart is its unwavering commitment to accessibility.
      </p>
      <p className='my-6 mx-auto max-w-screen-md'>
        In our quest for mass adoption, we recognize that the complexity of blockchain technology has hindered its widespread use. Even for the most tech-savvy individuals, the process of buying cryptocurrency can be daunting. With limited knowledge on the subject (including the fact that blockchain is not limited by crypto), people hesitate to delve into the intricate technicalities.
      </p>
      <p className='my-6 mx-auto max-w-screen-md'>
        Our main goal is to create a seamless blockchain experience for all. Imagine using an app without realizing it&apos;s powered by blockchain technology. That&apos;s the future Lisk envisions - a world where technology is intuitive and transparent, designed for the everyday user.
      </p>
      <p className='my-6 mx-auto max-w-screen-md'>
        But there&apos;s more to Lisk than just accessibility. We&apos;re proud to say that we&apos;re a zero-emission blockchain. Through the constant purchase of solar panels, we actively contribute to renewable energy and offset our carbon footprint.
      </p>
      <p className='my-6 mx-auto max-w-screen-md'>
        With Lisk, we believe in technology that is not only powerful, but also user-friendly and environmentally responsible.
      </p>
      <p className='my-6 mx-auto max-w-screen-md'>
        <a className="underline" target='_blank' href="https://lisk.com/">lisk.com</a>
      </p>
      <h3 className='my-6 text-lg font-bold mx-auto max-w-screen-md mt-12'>
        Builders on the Block magazine
      </h3>
      <p className='my-6 mx-auto max-w-screen-md'>
        Builders on the Block is an online magazine fuelled by Lisk.
      </p>
      <p className='my-6 mx-auto max-w-screen-md'>
        Our mission? To explore the practical applications of blockchain in the real world. We&apos;re on a quest to uncover the challenges faced by entrepreneurs and businesses across various industries - and reveal how blockchain can provide solutions.
      </p>
      <p className='my-6 mx-auto max-w-screen-md'>
        By collaborating with industry experts and innovative blockchain pioneers, we delve into the depths of this transformative technology and share our findings with our readers.
      </p>
      <p className='my-6 mx-auto max-w-screen-md'>
        Additionally, our dedicated research team is busy constructing comprehensive market research studies, providing invaluable insights for navigating the ever-evolving blockchain landscape.
      </p>
      <p className='my-6 mx-auto max-w-screen-md'>
        <a className="underline" target='_blank' href="https://magazine.lisk.com/">magazine.lisk.com</a>
      </p>
      <div className="relative w-full aspect-video bg-neutral-900">
        <DynamicImage
          src="/builders/builders_01_issue.jpg"
          alt="Issue: Lack of knowledge about web3 and opportunities it brings"
          fill
          priority={true}
          sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px,"
        />
      </div>
      <div className="relative w-full aspect-video bg-neutral-900">
        <DynamicImage
          src="/builders/builders_01_solution.jpg"
          alt="Solution: An innovative magazine about reald world use cases of blockchain"
          fill
          priority={true}
          sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px,"
        />
      </div>
      <div className="relative w-full aspect-video bg-neutral-900">
        <DynamicImage
          src="/builders/builders_02_moodboard.jpg"
          alt="Moodboard"
          fill
          priority={true}
          sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px,"
        />
      </div>
      <p className='my-6 mx-auto max-w-screen-md'>
        Brand Concept of Builders on the Block is bridging the gap between tradition and innovation.
      </p>
      <p className='my-6 mx-auto max-w-screen-md'>
        Drawing inspiration from its maternal brand with a logo shape directly linked to Lisk, the magazine sets itself apart by embracing the diversity of the Web3 world and its real-world applications.
      </p>
      <p className='my-6 mx-auto max-w-screen-md'>
        Our main metaphor is a refraction of light through a crystal prism. This striking visual technique showcases the endless possibilities of blockchain in a way that is both innovative and captivating. Through innovative graphic design, we break away from widely-used &quot;space and rockets&quot; imagery and instead capture the essence of innovation.
      </p>
      <p className='my-6 mx-auto max-w-screen-md'>
        The web3 facets and colors of the maternal brand have been seamlessly incorporated into the brand style and website, creating a cohesive and visually stunning experience. This unconventional approach to blockchain showcases a new style for the magazine, one that is both captivating and thought-provoking.
      </p>
      <div className="w-full aspect-video">
        <DynamicVideo url="https://player.vimeo.com/video/856752533" placeholder='' />
      </div>
      <div className="w-full aspect-video">
        <DynamicVideo url="https://player.vimeo.com/video/856753765" placeholder='' />
      </div>
      <div className="w-full aspect-video">
        <DynamicVideo url="https://player.vimeo.com/video/856755934" placeholder='' />
      </div>
      <div className="relative w-full aspect-video bg-neutral-900">
        <DynamicImage
          src="/builders/builders_03_logo.jpg"
          alt="Logo"
          fill
          priority={true}
          sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px,"
        />
      </div>
      <div className="w-full aspect-video">
        <DynamicVideo url="https://player.vimeo.com/video/856758416" placeholder='' />
      </div>
      <div className="relative w-full aspect-video bg-neutral-900">
        <DynamicImage
          src="/builders/builders_04_app.jpg"
          alt="App"
          fill
          priority={true}
          sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px,"
        />
      </div>
      <div className="relative w-full aspect-video bg-neutral-900">
        <DynamicImage
          src="/builders/builders_05_colors.jpg"
          alt="Colour Palette"
          fill
          priority={true}
          sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px,"
        />
      </div>
      <div className="relative w-full aspect-video bg-neutral-900">
        <DynamicImage
          src="/builders/builders_06_fonts.jpg"
          alt="Font: PP Agrandir Grand Heavy"
          fill
          priority={true}
          sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px,"
        />
      </div>
      <div className="relative w-full aspect-video bg-neutral-900">
        <DynamicImage
          src="/builders/builders_07_gradients.jpg"
          alt="Gradients"
          fill
          priority={true}
          sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px,"
        />
      </div>
      <div className="w-full aspect-video">
        <DynamicVideo url="https://player.vimeo.com/video/856760238" placeholder='' />
      </div>
      <div className="relative w-full aspect-video bg-neutral-900">
        <DynamicImage
          src="/builders/builders_08_cards.jpg"
          alt="Socials"
          fill
          priority={true}
          sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px,"
        />
      </div>
      <div className="w-full aspect-video">
        <DynamicVideo url="https://player.vimeo.com/video/856761475" placeholder='' />
      </div>
      <p className='my-6 mx-auto max-w-screen-md'>
      We are proud of the richness of our website, where different meanings coexist harmoniously. Our main layout draws inspiration from traditional creative magazine covers, presented in a captivating vertical format.
      </p>
      <p className='my-6 mx-auto max-w-screen-md'>
      Main page is following principles of generative design while adding an extra connection with the magazine title. Elements on the page come to life with a mouse hover, creating an interactive link between reader and the content. User&apos;s movements literally &quot;build the blocks&quot; as colors shift and pixels dance.
      </p>
      <p className='my-6 mx-auto max-w-screen-md'>
      Special attention has been dedicated to the selection of our font. Instead of opting for a technological feel, we deliberately chose a more human font, bringing life and vitality to our words.
      </p>
      <p className='my-6 mx-auto max-w-screen-md'>
      In addition, each cover boasts unique graphics that stem from the core identity metaphor, ensuring every page is a visual masterpiece.
      </p>
      <div className="w-full aspect-video">
        <DynamicVideo url="https://player.vimeo.com/video/856762635" placeholder='' />
      </div>
      <div className="relative w-full aspect-[1.125] bg-neutral-900">
        <DynamicImage
          src="/builders/builders_09_magazine.jpg"
          alt="Magazine"
          fill
          priority={true}
          sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px,"
        />
      </div>
      <div className="relative w-full aspect-video bg-neutral-900">
        <DynamicImage
          src="/builders/builders_10_elements.jpg"
          alt="Visula Style Elements"
          fill
          priority={true}
          sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px,"
        />
      </div>
      <div className="relative w-full aspect-video bg-neutral-900">
        <DynamicImage
          src="/builders/builders_11_mobile.jpg"
          alt="Mobile Layout"
          fill
          priority={true}
          sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px,"
        />
      </div>
      <div className="relative w-full aspect-video bg-neutral-900">
        <DynamicImage
          src="/builders/builders_12_layout.jpg"
          alt="Layout"
          fill
          priority={true}
          sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px,"
        />
      </div>
      <div className="w-full aspect-video">
        <DynamicVideo url="https://player.vimeo.com/video/856763933" placeholder='' />
      </div>
      <div className="w-full aspect-video">
        <DynamicVideo url="https://player.vimeo.com/video/856765435" placeholder='' />
      </div>
      <div className="relative w-full aspect-video bg-neutral-900">
        <DynamicImage
          src="/builders/builders_14_socials.jpg"
          alt="Social's elements"
          fill
          priority={true}
          sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px,"
        />
      </div>
      <div className="w-full aspect-video">
        <DynamicVideo url="https://player.vimeo.com/video/856766404" placeholder='' />
      </div>
      <div className="relative w-full aspect-video bg-neutral-900">
        <DynamicImage
          src="/builders/builders_15_merch.jpg"
          alt="Layout"
          fill
          priority={true}
          sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px,"
        />
      </div>
      <div className="relative w-full aspect-video bg-neutral-900">
        <DynamicImage
          src="/builders/builders_16_key.jpg"
          alt="Key: Making crypto less cryptic"
          fill
          priority={true}
          sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px,"
        />
      </div>
      <p className='my-6 mx-auto max-w-screen-md'>
      Designing the brand concept for an innovative web3 online magazine proved to be quite a formidable task. However, we approached it with a fresh perspective, analyzing each and every angle imaginable. 
      </p>
      <h3 className='my-6 text-lg font-bold mx-auto  max-w-screen-md'>
        Team
      </h3>
      <div className='my-6 mx-auto max-w-screen-md'>
            <ul className='flex flex-col gap-0.5'>
               <li>Producing: <a target='_blank' className='underline' href="https://www.linkedin.com/in/maria-chernoyarova-534b781b2/">Maria Chernoyarova</a></li>
               <li>Art direction: <a target='_blank' className='underline' href="https://www.linkedin.com/in/anna-pazyuk-4043357a/">Anna Pazyuk</a></li>
               <li>UI/UX design: <a target='_blank' className='underline' href="https://www.linkedin.com/in/lucalem/">Lucas De Melo</a>, <a target='_blank' className='underline' href="https://www.linkedin.com/in/margarita-osokina-124201130/">Rita Osokina</a></li>
               <li>3D design: <a target='_blank' className='underline' href="https://www.instagram.com/delalsasha/">Alexander Zakharov</a></li>
               <li>Motion design: <a target='_blank' className='underline' href="https://www.behance.net/nktn-motion">Evgenii Nikitin</a></li>
            </ul>
         </div>
    </div>
  )
}