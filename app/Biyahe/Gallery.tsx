"use client";

import Image from "next/image";
import { images } from "./ImageCollection";
import { BiChevronRightCircle, BiChevronLeftCircle } from "react-icons/bi";
import { useState } from "react";

export default function Gallery() {
  const [currentImage, setCurrentImage] = useState(0);

  const prev = () => {
    setCurrentImage(currentImage === 0 ? images.length - 1 : currentImage - 1);
  };

  const next = () => {
    setCurrentImage(currentImage === images.length - 1 ? 0 : currentImage + 1);
  };

  return (
    <div className="overflow-hidden relative max-w-md">
      <div
        className="flex aspect-[9/12] transition-transform ease-out duration-500"
        style={{
          transform: `translateX(-${currentImage * 100}%)`,
        }}
      >
        {images.map((imageArray) =>
          imageArray.map((image) => (
            <Image src={image.src} alt={image.alt} width={500} height={500} />
          )),
        )}
      </div>
      <div className="absolute inset-0 text-slate-100 text-3xl flex justify-between items-center px-2.5">
        <button
          onClick={prev}
          disabled={currentImage === 0}
          className="disabled:cursor-not-allowed disabled:hover:opacity-100 hover:opacity-75"
        >
          <BiChevronLeftCircle />
        </button>
        <button onClick={next} className="hover:opacity-75">
          <BiChevronRightCircle />
        </button>
      </div>
      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {images.map((_, index) => (
            <div
              key={index}
              className={`bg-slate-100 w-2 h-2 rounded-full cursor-pointer transition-all ${
                currentImage === index ? "p-2" : "bg-opacity-50"
              }`}
              onClick={() => setCurrentImage(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
