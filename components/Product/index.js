import Button from 'components/Button'
import React from 'react'
import { database } from 'config/firebase'
import {collection,doc,getDocs,getDoc} from 'firebase/firestore'
import Link from 'next/link'


export async function getStaticPaths(){
  const col = collection(database,"productos")
  const docs = await getDocs(col)

  const productos = []

  docs.forEach(doc=>{
      productos.push({...doc.data(),id:doc.id})
  })

  const paths = productos.map(producto=>({
      params:{
          id:producto.id
      }
  }))

  return {
      paths,
      fallback:false // Si visitamos una ruta que no existe, devolvemos un 404
  }
}


export async function getStaticProps({params}){
  const document = doc(database,"productos",params.id)
  const productDocument = await getDoc(document)

  const producto = productDocument.data()

  return {
      props:{
          producto
      }
  }
}

export default function Product(props) {
    return(
        <div className='rounded'>
            <img src='https://www.pequerecetas.com/wp-content/uploads/2013/07/hamburguesas-caseras-receta.jpg' alt='Hamburguesa' className='object-cover h-48 w-96 hover:scale-125 transition rounded'/>
            <h1 className='font-bold'>{props.producto?.nombre}</h1>
            <p className='font-semibold'>{props.producto?.precio}</p>
            <p className='font-semibold'>{props.producto?.descripcion}</p>
            <Button>{`Agregar al carrito`}</Button>
        </div>
    )
}