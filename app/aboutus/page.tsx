'use client'

import React from 'react'
import { Menu, X, MapPin } from 'lucide-react'
import { Navbar } from '@/components/ui/navbar'
import { FooterOne } from '@/components/Footer'
import abhipfp from '@/public/abhipfp.jpeg'
import badal from '@/public/badalpfp.jpeg'
import kusalpfp from '@/public/kusalpfp.jpeg'
import shivampfp from '@/public/shivampfp.jpeg'
import anuvpfp from '@/public/Anuvpfp.jpeg'
import Image from 'next/image'

const menuItems = [
  {
    name: 'Home',
    href: '#',
  },
  {
    name: 'About',
    href: '#',
  },
  {
    name: 'Contact',
    href: '#',
  },
]

const locations = [
  {
    title: 'Head Office',
    timings: 'Sun-Sat 9am to 5pm.',
    address: "H-53 Ground floor sector 63 Noida , Noida electronic City, uttar pradesh Pin 201301 IN",
  },
 
]

const users = [
  {
    name: 'Abhishek Kumar',
    image: abhipfp,
    position: 'Director',
  },
  {
    name: 'Anubhav',
    image: anuvpfp,
    position: 'Director',
  },
  {
    name: 'Shivam singh',
    image: shivampfp,
    position: 'Tech Lead',
  },
  {
    name: 'Kushal Jaiswal',
    image: kusalpfp,
    position: 'Sales Lead',
  },
  {
    name: 'Bhopender singh gautam',
    image: badal,
    position: 'Social Media Lead',
  },
  
]

export default function AboutPageOne() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div>
     <Navbar></Navbar>

      <div className="mx-auto max-w-7xl px-4">
        {/* Hero Map */}
        <div className="flex flex-col space-y-8 pb-10 pt-12 md:pt-24">
          <div className="max-w-max rounded-full border bg-gray-50 p-1 px-3">
            <p className="text-xs font-semibold leading-normal md:text-sm dark:text-black">About the company</p>
          </div>
          <div className="text-3xl font-bold text-gray-900 dark:text-white md:text-5xl md:leading-10">
            Made with love, right here in &nbsp;
            <h4 className='bg-gradient-to-t from-green-300 via-white to-orange-300 inline text-green-900 rounded-3xl px-2'>
                 India
                </h4>
          </div>
          <p className="max-w-4xl text-base text-gray-600 md:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore veritatis voluptates
            neque itaque repudiandae sint, explicabo assumenda quam ratione placeat?
          </p>
        </div>
        <div className="w-full space-y-4">
          <img
            className="h-[200px] w-full rounded-xl object-cover md:h-full"
            src="https://dev-ui-image-assets.s3.ap-south-1.amazonaws.com/google-map.jpg"
            alt=""
          />
        </div>
        {/* locations */}
        <div className="my-8 flex flex-col gap-y-6 md:flex-row lg:justify-around">
          {locations.map((location) => (
            <div key={location.title} className="flex flex-col space-y-3 md:w-2/4 lg:w-1/5">
              <MapPin className="h-5 w-5" />
              <p className="w-full text-xl font-semibold  text-gray-900 dark:text-white">{location.title}</p>
              <p className="w-full text-base text-gray-700">{location.timings}</p>
              <p className="text-sm font-medium">{location.address}</p>
            </div>
          ))}
        </div>
        <hr className="mt-20" />
        {/* greetings */}
        <div className="mt-16 flex items-center">
          <div className="space-y-6 md:w-3/4">
            <div className="max-w-max rounded-full border bg-gray-50 p-1 px-3">
              <p className="text-xs font-semibold leading-normal dark:text-black md:text-sm">Join Us &rarr;</p>
            </div>
            <p className="text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">Meet our team</p>
            <p className="max-w-4xl text-base text-gray-700 md:text-xl">
              Our philosophy is simple — hire a team of diverse, passionate people and foster a
              culture that empowers you to do your best work.
            </p>
            <div></div>
          </div>
        </div>
        {/* TEAM */}
        <div className="grid grid-cols-1 gap-4 gap-y-6 border-b border-gray-300 py-12 pb-20 md:grid-cols-2 lg:grid-cols-4">
          {users.map((user) => (
            <div className="rounded-md border" key={user.name}>
              <Image
                src={user.image}
                alt={user.name}
                width={100}
                height={100}
                unoptimized
                className="h-[300px] w-full rounded-lg object-cover "
              />
              <p className="mt-6 w-full px-2 text-xl  font-semibold text-gray-900 dark:text-white">{user.name}</p>
              <p className="w-full px-2 pb-6 text-sm font-semibold text-gray-500">
                {user.position}
              </p>
            </div>
          ))}
        </div>
       
        <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-7xl py-12 md:py-24">
          <div className="grid items-center justify-items-center gap-x-4 gap-y-10 lg:grid-cols-2">
            {/* contact from */}
            <div className="flex items-center justify-center">
              <div className="px-2 md:px-12">
                <p className="text-2xl font-bold text-gray-900 md:text-4xl">Get in touch</p>
                <p className="mt-4 text-lg text-gray-600">
                  Our friendly team would love to hear from you.
                </p>
                <form action="" className="mt-8 space-y-4">
                  <div className="grid w-full gap-y-4 md:gap-x-4 lg:grid-cols-2">
                    <div className="grid w-full  items-center gap-1.5">
                      <label
                        className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="first_name"
                      >
                        First Name
                      </label>
                      <input
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                        type="text"
                        id="first_name"
                        placeholder="First Name"
                      />
                    </div>
                    <div className="grid w-full  items-center gap-1.5">
                      <label
                        className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="last_name"
                      >
                        Last Name
                      </label>
                      <input
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                        type="text"
                        id="last_name"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>
                  <div className="grid w-full  items-center gap-1.5">
                    <label
                      className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                      type="text"
                      id="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="grid w-full  items-center gap-1.5">
                    <label
                      className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="phone_number"
                    >
                      Phone number
                    </label>
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                      type="tel"
                      id="phone_number"
                      placeholder="Phone number"
                    />
                  </div>
                  <div className="grid w-full  items-center gap-1.5">
                    <label
                      className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="message"
                    >
                      Message
                    </label>
                    <textarea
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                      id="message"
                      placeholder="Leave us a message"
                      cols={3}
                    />
                  </div>
                  <button
                    type="button"
                    className="w-full rounded-md bg-black dark:text-black dark:bg-white px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 dark:hover:bg-white/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
            <img
              alt="Contact us"
              className="hidden max-h-full w-full rounded-lg object-cover lg:block"
              src="https://images.unsplash.com/photo-1543269664-56d93c1b41a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fGhhcHB5JTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
            />
          </div>
        </div>
      </div>
      </div>
      <FooterOne></FooterOne>
      </div>
  
  )
}
