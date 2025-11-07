import Image from "next/image"

const BlogCard = ({ title, description, imageUrl }) => {
  return (
    <div className=" max-w-sm flex flex-col w-auto items-center overflow-hidden rounded md:w-[33%] shadow-lg bg-fondo transition-transform duration-300 ease-in-out hover:scale-105">
      <div className="relative h-48 w-full">
        {imageUrl && (
          <Image
            src={imageUrl}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="transition-opacity duration-300 ease-in-out hover:opacity-75"
          />
        )}
      </div>
      <div className="px-6 py-4">
        <h3 className="font-bold text-xl mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600 text-base">{description}</p>
      </div>
    </div>
  )
}

export const BlogText = ({ title, description }) => {
  return (
    <div className="max-w-sm flex flex-col w-auto items-center overflow-hidden rounded md:w-[33%] shadow-lg bg-fondo transition-transform duration-300 ease-in-out hover:scale-105">
      <div className="px-6 py-4">
        <h3 className="font-bold text-xl mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600 text-base">{description}</p>
      </div>
    </div>
  )
}

export default BlogCard

