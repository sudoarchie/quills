import Image from "next/image"
import img1 from '@/public/ourclient.webp'
export function OurClient() {
  return (
    <div className=" w-full m-auto 2xl:w-[1536px]">
      <h2 className='text-center text-4xl font-bold my-12 mx-auto'>Our Clients</h2>
      <Image
        src={img1}
        width={1000}
        height={1000}
        draggable={false}
        alt="Our Clients"
        className="mx-auto rounded-md"
      ></Image>
    </div>
  )
}
