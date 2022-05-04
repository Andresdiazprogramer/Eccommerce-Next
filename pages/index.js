import Footer from 'components/Footer'
import Header from 'components/Header'
import Link from 'next/link'
import React from 'react'

export default function Home() {
  return (
    <>
    <Header></Header>
    <div>
      <Link href='/productos'>Ir a productos</Link>
    </div>
    <Footer></Footer>
    </>
  )
}
