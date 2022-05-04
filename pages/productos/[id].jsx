
// import { useRouter } from 'next/router'
import { database } from 'config/firebase'
import {collection,doc,getDocs,getDoc} from 'firebase/firestore'
import Link from 'next/link'
import React from 'react'


// export function getServerSaidProps(context){
//     const {id} = context.params

//     return {
//         props:{
//             id
//         }
//     }
// }

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

export default function Producto(props) {
    // const router = useRouter()
    // const id = router.query.id
  return (
    <div>
      <h1 className='font-bold'>
        {props.producto?.nombre}
      </h1>
      <p>
        {props.producto?.precio }
      </p>
      <p>
      {props.producto?.descripcion }
      </p>
      <Link href='/productos'>Volver a Productos</Link>
    </div>
  )
}
