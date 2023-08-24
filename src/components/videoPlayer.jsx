'use client';

import ReactPlayer  from 'react-player';
import { useState } from 'react';
import Image from 'next/image';
import { delay } from 'framer-motion';

export default function VideoPlayer({ url, placeholder }) {

    const [isVideoLoaded, setIsVideoLoaded] = useState(false);

    const handleVideoReady = () => {
        setIsVideoLoaded(true);
      };

    return (
        <>
            {!isVideoLoaded &&
                (placeholder &&
                    <Image src={placeholder} alt='' fill={true} className='object-cover overflow-hidden' />
                )
            }
            <ReactPlayer
                url={url}
                playing={true}
                loop={true}
                muted={true}
                onReady={handleVideoReady}
                width='100%'
                height='100%'
                style={{ display: isVideoLoaded ? 'block' : 'none' }}
            />
        </>
    )
}
