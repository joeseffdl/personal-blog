import Image from "next/image"
import { images } from "./ImageCollection"

export default function Gallery() {
  return (
    <div className="overflow-hidden relative max-w-lg">
      <div className="flex">
        {images.map((imageArray) =>
          imageArray.map((image) => (
            <Image src={image.src} alt={image.alt} width={600} height={600} />
          ))
        )}
      </div>
    </div>
  )
}
