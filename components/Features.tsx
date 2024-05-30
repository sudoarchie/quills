import React from 'react'
import { Recycle, Leaf, Sprout, Cog } from 'lucide-react'

export function Feature() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-xl text-center">
        <div className="mx-auto inline-flex rounded-full bg-gray-100 px-4 py-1.5">
          <p className="text-xs font-semibold uppercase tracking-widest text-black">
            An EcoFriendly Effort
          </p>
        </div>
        <h2 className="mt-6 text-3xl font-bold leading-tight text-green-500 sm:text-4xl lg:text-5xl">
          Quills help World for achiving sustanable future
        </h2>
        <p className="mt-4 text-base leading-relaxed text-gray-600">
          We have to take the responsibility to deal with ongoing global warming
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-y-8 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-4">
        <div>
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
            <Recycle className="h-9 w-9 text-green-600" />
          </div>
          <h3 className="mt-8 text-lg font-semibold text-black dark:text-white">Recycled Material</h3>
          <p className="mt-4 text-sm text-gray-600">
            Our products are made with the help of recycled materials
          </p>
        </div>
        <div>
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
            <Leaf className="h-9 w-9 text-green-600" />
          </div>
          <h3 className="mt-8 text-lg font-semibold text-black dark:text-white">Reducing Carbon Footprint</h3>
          <p className="mt-4 text-sm text-gray-600">
           Our products are designed and pack in such a way that it have least impact on nature.
          </p>
        </div>
        <div>
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
            <Sprout className="h-9 w-9 text-green-600" />
          </div>
          <h3 className="mt-8 text-lg font-semibold text-black dark:text-white">Seeds with Pens</h3>
          <p className="mt-4 text-sm text-gray-600">
            We provide seed with every pen for a green future 
          </p>
        </div>
        <div>
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
            <Cog className="h-9 w-9 text-green-600" />
          </div>
          <h3 className="mt-8 text-lg font-semibold text-black dark:text-white">Customistion</h3>
          <p className="mt-4 text-sm text-gray-600">
            We Customise the Products according to your need
          </p>
        </div>
      </div>
    </div>
  )
}
