"use client"

import React from "react"
import Image from "next/image"

export const MdxButton = () => {
  return <button onClick={() => alert("Button clicked!")}>Click me!</button>
}

interface MdxImageProps {
  src: string
  alt: string
  width: number
  height: number
  className: string
}

export const MdxImage = ({ src, alt, width, height, className }: MdxImageProps) => {
  return (
    <div className={className}>
      <Image src={src} alt={alt} width={width} height={height} />
    </div>
  )
}
