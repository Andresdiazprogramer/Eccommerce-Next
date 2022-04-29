import Button from 'components/Button'
import React from 'react'

export default function Product() {
    return(
        <div className='rounded '>
            <img src='https://www.pequerecetas.com/wp-content/uploads/2013/07/hamburguesas-caseras-receta.jpg' alt='Hamburguesa' className='object-cover h-48 w-96 hover:scale-125 transition rounded'/>
            <h1 className='font-bold'>Nombre del Producto</h1>
            <p className='font-semibold'>descripcion del producto</p>
            <p className='font-semibold'>precio del producto</p>
            <Button>{`Agregar al carrito`}</Button>
        </div>
    )
}