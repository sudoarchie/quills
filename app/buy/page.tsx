'use client'
import { FooterOne } from '@/components/Footer'
import { Navbar } from '@/components/ui/navbar'
import Link from 'next/link'

import React, { useState } from 'react'

export default function ProductOverviewOne() {
    const product={
        title: 'Quills',
        about: 'the thickness is 0.5mm and gel type pen',
        price: 20,
        image:'',
        reviews: [
            {
                username: 'shivam',
                message: 'the product is good',
                star: ["*","*","*","*"]
            }
        ]
    }
    const [quantity,setQuantity]=useState(100)
    return (<>
        <Navbar></Navbar>
        <div className="mx-auto max-w-7xl px-4 md:px-8 2xl:px-16">
            <div className="pt-8">
                <div className="flex items-center">
                    <ol className="flex w-full items-center overflow-hidden">
                        <li className="text-body hover:text-heading px-2.5 text-sm transition duration-200 ease-in first:pl-0 last:pr-0">
                            <Link href="/">Home</Link>
                        </li>
                        <li className="text-body mt-0.5 text-base">/</li>
                        <li className="text-body hover:text-heading px-2.5 text-sm transition duration-200 ease-in first:pl-0 last:pr-0">
                            <Link className="capitalize" href="/products">
                                products
                            </Link>
                        </li>
                        <li className="text-body mt-0.5 text-base">/</li>
                        <li className="text-body hover:text-heading px-2.5 text-sm transition duration-200 ease-in first:pl-0 last:pr-0">
                            <a className="capitalize" href="#">
                                {product.title}
                            </a>
                        </li>
                    </ol>
                </div>
            </div>
            <div className="block grid-cols-9 items-start gap-x-10 pb-10 pt-7 lg:grid lg:pb-14 xl:gap-x-14 2xl:pb-20">
                <div className="col-span-5 grid grid-cols-2 gap-2.5">
                    {Array.from({ length: 4 }, (_, i) => (
                        <div key={i} className="col-span-1 transition duration-150 ease-in hover:opacity-90">
                            <img
                                src="https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
                                alt="Nike Air Max 95 By You--0"
                                className="w-full object-cover"
                            />
                        </div>
                    ))}
                </div>
                <div className="col-span-4 pt-8 lg:pt-0">
                    <div className="mb-7 border-b border-gray-300 pb-7">
                        <h2 className="text-heading mb-3.5 text-lg font-bold md:text-xl lg:text-2xl 2xl:text-3xl">
                            {product.title}
                        </h2>
                        <p className="text-body text-sm leading-6  lg:text-base lg:leading-8">
                           {product.about}
                        </p>
                        <div className="mt-5 flex items-center ">
                            <div className="text-heading pr-2 text-base font-bold md:pr-0 md:text-xl lg:pr-2 lg:text-2xl 2xl:pr-0 2xl:text-4xl">
                            ₹{product.price}
                            </div>
                            <span className="font-segoe pl-2 text-sm text-gray-400 line-through md:text-base lg:text-lg xl:text-xl">
                            ₹{product.price+product.price/5}
                            </span>
                        </div>
                    </div>
                    <div className="border-b border-gray-300 pb-3  ">
                        
                        <div className="mb-4 ">
                            <h3 className="text-heading mb-2.5 text-base font-semibold capitalize md:text-lg">
                                color
                            </h3>
                            <ul className="colors -mr-3 flex flex-wrap">
                                {['bg-red-800', 'bg-blue-800', 'bg-black', 'bg-green-800'].map((color) => (
                                    <li
                                        key={color}
                                        className="text-heading mb-2 mr-2 flex h-9 w-9 cursor-pointer items-center justify-center rounded border border-gray-100 p-1 text-xs font-semibold uppercase transition duration-200 ease-in-out hover:border-black md:mb-3 md:mr-3 md:h-11 md:w-11 md:text-sm"
                                    >
                                        <span className={`block h-full w-full rounded ${color}`} />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="space-s-4 3xl:pr-48 flex items-center gap-2 border-b border-gray-300 py-8  md:pr-32 lg:pr-12 2xl:pr-32">
                        <div className="group flex h-11 flex-shrink-0 items-center justify-between overflow-hidden rounded-md border border-gray-300 md:h-12">
                            <button
                                className="text-heading hover:bg-heading flex h-full w-10 flex-shrink-0 items-center justify-center border-e border-gray-300 transition duration-300 ease-in-out focus:outline-none md:w-12"
                                onClick={()=>setQuantity(quantity+100)}
                            >
                                +
                            </button>
                            <span className="duration-250 text-heading flex h-full w-12  flex-shrink-0 cursor-default items-center justify-center text-base font-semibold transition-colors ease-in-out  md:w-20 xl:w-24">
                                {quantity}
                            </span>
                            <button className="text-heading hover:bg-heading flex h-full w-10 flex-shrink-0 items-center justify-center border-s border-gray-300 transition duration-300 ease-in-out focus:outline-none md:w-12"
                            onClick={()=>setQuantity(quantity-100)}
                            >
                                -
                            </button>
                        </div>
                        <button
                            type="button"
                            className="h-11 w-full rounded-md bg-black dark:bg-white px-3 py-2 text-sm font-semibold text-white dark:text-black shadow-sm hover:bg-black/80 dark:hover:bg-white/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                        >
                            Add to cart
                        </button>
                    </div>
                    <div className="py-6 ">
                        <ul className="space-y-5 pb-1 text-sm">
                            <li>
                                <span className="text-heading inline-block pr-2 font-semibold">Thickness</span>
                                0.5mm
                            </li>
                            <li>
                                <span className="text-heading inline-block pr-2 font-semibold">Type:</span>
                                <a className="hover:text-heading transition hover:underline" href="#">
                                    Gel
                                </a>
                            </li>
                            <li className="productTags">
                                <span className="text-heading inline-block pr-2 font-semibold">Tags:</span>
                                <a
                                    className="hover:text-heading inline-block pr-1.5 transition last:pr-0 hover:underline"
                                    href="#"
                                >
                                    Quills
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* <div className="">
                        <header className="flex cursor-pointer items-center justify-between border-t border-gray-300 py-5 transition-colors md:py-6">
                            <h2 className="text-heading pr-2 text-sm font-semibold leading-relaxed md:text-base lg:text-lg">
                                Additional Information
                            </h2>
                        </header>
                    </div> */}
                    <div className="">
                        <header className="flex cursor-pointer items-center justify-between border-t border-gray-300 py-5 transition-colors md:py-6">
                            <h2 className="text-heading pr-2 text-sm font-semibold leading-relaxed md:text-base lg:text-lg">
                                Customer Reviews
                            </h2>
                        </header>
                        {product.reviews.map((data,index)=>(

                            <div className='border-gray-600 border-2 p-5 my-2' key={index}>
                            <h3>{data.username}</h3>
                            {data.star.map((star,id)=>(
                                <span>⭐</span>
                            ))}
                            <p>{data.message}</p>
                            
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        <FooterOne></FooterOne>
    </>
    )
}
