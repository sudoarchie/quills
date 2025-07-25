import { WobbleCard } from "./ui/wobble-card";
import img1 from '@/public/office.png'
import img2 from '@/public/life.png'
import Image from "next/image";

export default function ProductMain() {
  return (<div className=" w-full m-auto 2xl:w-[1536px]">

    <h2 className='text-center text-4xl font-bold my-12 mx-auto'>What We Build</h2>
    <br />
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Office & Home Utility Products
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
            Thoughtfully crafted sustainable products that meet your daily office and home utility needs — perfect for branding, employee kits, or simply running a zero-plastic workspace. These solutions help lower your carbon footprint and move towards a plastic-free environment.
          </p>
        </div>
        <Image
          src={img1}
          width={700}
          height={700}
          alt="linear demo image"
          className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px]">
        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Corporate Impact Gifting
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">

          Premium, plastic-free gift sets for responsible brands and teams.

        </p>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Lifestyle for Environment (LiFE) Products
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            Sustainability starts with our choices. Our eco-lifestyle range encourages individuals to adopt conscious consumption habits in line with the LiFE (Lifestyle for Environment) movement — making sustainability a part of everyday living.
          </p>
        </div>
        <Image
          src={img2}
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
    </div>
  </div>)
}
