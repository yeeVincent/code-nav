"use client"

import React from "react"
import Image from "next/image"

import { cn } from "@/lib/utils"

export const MdxButton = () => {
  return <button onClick={() => alert("Button clicked!")}>Click me!</button>
}

interface MdxImageProps {
  src: string
  alt: string
  width: number
  height: number
  className: string
  innerClassName: string
}

export const MdxImage = ({ src, alt, width, height, className, innerClassName }: MdxImageProps) => {
  return (
    <div className={cn("w-full md:w-3/5 lg:w-2/3", className)}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={cn("w-full", innerClassName)}
      />
    </div>
  )
}
