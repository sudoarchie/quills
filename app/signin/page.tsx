'use client'
import React from 'react'
import { ArrowRight } from 'lucide-react'
import { Navbar } from '@/components/ui/navbar'
import { FooterOne } from '@/components/Footer'
import Link from 'next/link'
// import { useForm, SubmitHandler } from "react-hook-form";
import axios from 'axios'

type Inputs = {
  email: string,
  password: string
};


export default function SignIn() {
  async function handleSubmit(event: any) {
    event.preventDefault()
    console.log({
      email: event.target.email.value,
      password: event.target.password.value
    })
    const res =await axios.post('http://localhost:3000/signin', {
      email: event.target.email.value,
      password: event.target.password.value
    })
    localStorage.setItem("token",`Bearer ${res.data.token}`)
    console.log(res.data)
  }
  return (<>
    <Navbar></Navbar>
    <section className='my-10'>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">Sign in</h2>
            <p className="mt-2 text-sm text-white">
              Don&apos;t have an account?{' '}
              <Link
                href="/signup"
                title=""
                className="font-semibold text-black transition-all duration-200 hover:underline"
              >
                Create a free account
              </Link>
            </p>
            <form onSubmit={handleSubmit} className="mt-8">
              <div className="space-y-5">
                <div>
                  <label htmlFor="" className="text-base font-medium text-white">
                    {' '}
                    Email address{' '}
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="email"
                      name='email'
                      placeholder="Email"
                    ></input>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="" className="text-base font-medium text-white">
                      {' '}
                      Password{' '}
                    </label>
                    <a
                      href="#"
                      title=""
                      className="text-sm font-semibold text-white hover:underline"
                    >
                      {' '}
                      Forgot password?{' '}
                    </a>
                  </div>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="password"
                      name='password'
                      placeholder="Password"
                    ></input>
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center rounded-md bg-black dark:bg-white  px-3.5 py-2.5 font-semibold leading-7 text-white dark:text-black hover:bg-black/80 dark:hover:bg-white/80"
                  >
                    Login <ArrowRight className="ml-2" size={16} />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="h-full w-full">
          <img
            className="mx-auto h-full w-full rounded-md object-cover"
            src="https://images.unsplash.com/photo-1630673245362-f69d2b93880e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            alt=""
          />
        </div>
      </div>
    </section>
    <FooterOne></FooterOne>
  </>
  )
}
