"use client"

import { useState } from "react"
import Image from "next/image"
import { urlForImage } from "@/sanity/lib/image"

import { SanityProduct } from "@/config/inventory"
import { shimmer, toBase64 } from "@/lib/image"

interface Props {
  product: SanityProduct
}

export function ProductGallery({product}: Props) {
  const [selectedImage, setSelectedImage] = useState(0)
  
  return (
    <div className="flex flex-col-reverse">
      {/* Image Grid */}
      <div className="hidden w-full max-w-2xl mx-auto mt-6 sm:block lg:max-w-none">
        <ul className="grid grid-cols-4 gap-6">
          {product.images.map((image, index) => (
            <div
              key={image._key as string}
              onClick={() => setSelectedImage(index)}
              className="relative flex items-center justify-center h-24 text-sm font-medium uppercase bg-white rounded-md cursor-pointer hover:bg-gray-50"
            >
              <span className="absolute inset-0 overflow-hidden rounded-md">
                <Image
                  placeholder="blur"
                  blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(200, 200))}`}
                  src={urlForImage(image).url()}
                  width={200}
                  height={200}
                  alt=""
                  className="object-cover object-center w-full h-full"
                />
              </span>
              {index === selectedImage && (<span
                  className="absolute inset-0 rounded-md pointer-events-none ring-4 ring-indigo-500 ring-offset-2"
                  aria-hidden="true"
                />)}
            </div>
          ))}
        </ul>
      </div>

      {/* Main Image */}
      <div className="w-full aspect-h-1 aspect-w-1">
        <Image
          priority
          src={urlForImage(product.images[selectedImage]).url()}
          alt={`Main ${product.name} image`}
          width={600}
          height={700}
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(600, 700))}`}
          className="object-cover object-center w-full h-full border-2 border-gray-200 shadow-sm dark:border-gray-800 sm:rounded-lg"
        />
      </div>
    </div>
  )
}
