import DarkMode from "components/DarkMode"
import Product from "components/Product"
import React from "react"
import { database } from "config/firebase"
import {collection,doc,getDocs,getDoc} from 'firebase/firestore'

// export async function getServerSaidProps() {
//   const productosRequest = await fetch("http://localhost:3000/api/productos")

//   const productos = await productosRequest.json()
//   return {
//     props: {
//       productos,
//     },
//   }
// }


export async function getStaticProps() {
  
  const col = collection(database,"productos")
  const docs = await getDocs(col)

  const productos = []

  docs.forEach(doc=>{
      productos.push({...doc.data(),id:doc.id})
  })

  return{
    props:{
      productos
    }
  }
}

export default function Productos({productos}) {
  // const [productos, setProductos] = useState([])
  // useEffect(() => {
  //   fetch('http://localhost:3000/api/productos')
  //   .then(response => response.json())
  //   .then(data =>{
  //     setProductos(data)
  //   })
  // }, [])

  return (
    <div>
      {productos.map((producto) => {
        return (
          <article key={producto.id}>
            <h2 className="font-bold">{producto.nombre}</h2>
            <p className="font-semibold">{producto.precio}</p>
            <DarkMode></DarkMode>
            <Product></Product>
          </article>
        )
      })}
    </div>
  )
}
