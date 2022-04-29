
// import { useRouter } from 'next/router'
import React from 'react'

// export function getServerSaidProps(context){
//     const {id} = context.params

//     return {
//         props:{
//             id
//         }
//     }
// }

export async function getStaticPaths(context){

  console.log(context)
    const productosRequest = await fetch("http://localhost:3000/api/productos")

  const productos = await productosRequest.json()

  const paths = productos.map(producto =>({
    params:{id:producto.id}
  }))
  console.log(paths)

  return {paths,fallback:true}
}

export async function getStaticProps({params}){
    return{
        props:{
            producto:{
                id:params.id,
                name:'producto'
            }
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
