import { NavLinks } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <nav className='flex-between navbar'>
        <div className='flex-1 flexStart gap-10'>
            <Link href="/">
                <Image
                    src="/logo.svg"
                    alt="Flexxible"
                    width={115}
                    height={43}
                />
            </Link>

            <ul className='xl:flex hidden text-sm gap-7'>
                {NavLinks.map((link))}
            </ul>
        </div>
    </nav>
  )
}

export default NavBar