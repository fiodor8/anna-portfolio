//import dynamic from 'next/dynamic'
import Image from 'next/image'

export const metadata = {
   title: 'Anna Pazyuk | Workhalolic',
   description: 'A brand designer and art-director currently based in Istanbul',
 }

//const ReactPlayer = dynamic(() => import("react-player"), { ssr: true });

export default function WorkaholicPackaging() {
   return (
      <div
         className='w-full h-full overflow-scroll'
      >
         <p>We were working on the packaging for a cold brew coffee in a wine bottle and realised that a real workaholic is the one who can’t ever stop. That’s why we’ve created 10 logos instead of one, 10 label designs instead of one, and also a gift box, beer cans, coffee bean bags, coasters, pins, stickers, wrapping paper, flask, badges, posters and Telegram stickerpack.
            <br />
            And now we kinda think we need to start from scratch.
         </p>
            {/*<ReactPlayer
               url='https://vimeo.com/video/383705190'
               controls={true}
               playing={true}
               loop={true}
               muted={true}
            />*/}
      </div>
   )
}