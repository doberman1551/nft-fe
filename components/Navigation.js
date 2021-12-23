import React from 'react'
import Link from 'next/link'
import { Router, useRouter } from 'next/dist/client/router'
import { getLocationOrigin } from 'next/dist/shared/lib/utils'
import Image from 'next/image'

const Navigation = () => {
    const router=useRouter()
    return (
        <nav className="flex items-center justify-between flex-wrap bg-background1 p-6 text-white">
             <div className="flex items-center flex-shrink-0 text-white mr-6">
             <Image src="/images/logo.png"  width={122} height={33}/>
                
                </div>
  <div class="block lg:hidden">
    <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
      <svg clasNames="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
  <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div className="text-sm lg:flex-grow">
        <Link href="/talent-profiles">
      <a  className={router.pathname=='/talent-profiles'? "block mt-4 lg:inline-block lg:mt-0 text-accent1 hover:text-white mr-4":"block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"}>
        Talents
      </a>
      </Link>
      <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
        Examples
      </a>
      <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
        Blog
      </a>
    </div>
    <div>
      <a href="#" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-accent1 hover:border-transparent hover:text-accent1 hover:bg-white mt-4 lg:mt-0">Login</a>
    </div>
  </div>
</nav>
    )
}

export default Navigation

