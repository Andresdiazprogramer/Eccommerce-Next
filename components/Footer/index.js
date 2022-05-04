import Link from 'next/link'
import React from 'react'
import {BsInstagram,BsFacebook,BsYoutube} from 'react-icons/bs'

export default function Footer() {
    return(
        <>
            <footer className='w-full'>
                <div className='flex flex-row justify-center'>
                    <Link href='/contact'>
                    <BsInstagram className='m-5 text-xl cursor-pointer'></BsInstagram>
                    </Link>
                    <BsFacebook className='m-5 text-xl cursor-pointer'></BsFacebook>
                    <BsYoutube className='m-5 text-xl cursor-pointer'></BsYoutube>
                </div>
            </footer>
        </>
    )
}