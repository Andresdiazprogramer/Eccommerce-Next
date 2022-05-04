import Link from 'next/link'
import React from 'react'
import {BsSearch} from 'react-icons/bs'
import {AiOutlineUser} from 'react-icons/ai'


export default function Header() {
  return (
    <>
    <header className='flex flex-row justify-center'>
        <div className='p-2 h-0'>
            <svg>

            </svg>
        </div>
        <nav className='font-bold flex flex-row justify-center w-full'>
            <div className='m-5 text-xl'>
            <Link href='/'>Inicio</Link>
            </div>
            <div className='m-5 text-xl'>
            <Link href='/categorias'>Categorias</Link>
            </div>
            <div className='m-5 text-xl'>
            <Link href='/contact'>Contactanos</Link>
            </div>
            <div className='m-6 text-xl'>
            <BsSearch></BsSearch>
            </div>  
            <div className='m-5 text-2xl'>
            <AiOutlineUser></AiOutlineUser>
            </div>
        </nav>
    </header>
    </>
  )
}
