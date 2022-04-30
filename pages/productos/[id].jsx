
// import { useRouter } from 'next/router'
import { database } from 'config/firebase'
import {collection,doc,getDocs,getDoc} from 'firebase/firestore'
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

  console.log(paths)

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
  console.log(props)
  return (
    <div className='font-bold'>{props.producto?.name}</div>
  )
}
