'use client'

import Image from "next/image"
import { motion } from "framer-motion"
import { useState } from "react"
import VideoPlayer from "./videoPlayer"

export default function CoverImage( {id } ) {

    function typeCheck(id) {
        if (id === "unlimint" || id === "a4_award") {
            return "gif";
        } else {
            return "jpg";
        }
    }
    
    return (
        <motion.div 
            className="relative aspect-4/3 h-full bg-neutral-900"
            layoutId={id}
        >
            <Image
               src={"/"+ id + "/"+ id + "_cover." + typeCheck(id)}
               alt={id}
               fill
               priority={true}
               className="object-cover"
               sizes="(max-width: 1400px) 100vw, 1400px, (max-width: 1920px) 100vw, 1920px,"
            />
        </motion.div>
    )
}