import Image from "next/image"

const images = [
  {
    src: "/images/Day0A.JPG",
    alt: "Day 0 Image 1",
  },
  {
    src: "/images/Day0B.JPG",
    alt: "Day 0 Image 2",
  },
]

export default function Gallery() {
    return (
      <div className="overflow-hidden relative max-w-lg">
        <div className="flex">
          {images.map((image) => (
            <Image src={image.src} alt={image.alt} width={600} height={600} />
          ))}
        </div>
      </div>
  )
}
