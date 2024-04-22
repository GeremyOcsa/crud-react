import React, { useEffect, useState } from 'react'
import './Form.css'

const newProduct = {
    id: null,
    nombre: "",
    descripcion: "",
    stock: ""
}

function Form({createProduct, updateProduct, productToEdit, setProductToEdit}) {

    const [product, setProduct] = useState(newProduct);

    useEffect(() => {
        if(productToEdit){
            setProduct(productToEdit)
        }else{
            setProduct(newProduct)
        }
    }, [productToEdit])

    function handleChange(event) {
        setProduct({
            ...product,
            [event.target.name]: event.target.value
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        if(!product.nombre || !product.stock || !product.descripcion){
            alert('No se permiten campos vacios')
            return
        }

        if(product.id === null){
            createProduct(product)
        } else{
            updateProduct(product)
        }
        handleReset()
    }

    function handleReset() {
        setProduct(newProduct)
        setProductToEdit(null)
    }

    return (
        <>
            <h1 className='titleForm'>Inventario de Productos</h1>
            <form onSubmit={handleSubmit}>
                <div className='inputBox'>
                <input type="text" name='nombre' onChange={handleChange} value={product.nombre} required='required' />
                <span>Nombre</span>
                </div>
                <div className='inputBox'>
                <input type="text" name='descripcion' onChange={handleChange} value={product.descripcion} required='required' />
                <span>Descripcion</span>
                </div>
                <div className='inputBox'>
                <input type="number" name='stock' onChange={handleChange} value={product.stock} required='required' />
                <span>Stock</span>
                </div>
                <input className='dobleInput' type="submit" value="Agregar" />
                <input className='dobleInput' type="reset" value="Limpiar" onClick={handleReset} />
            </form>
        </>
    )
}

export default Form