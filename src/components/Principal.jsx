import React from 'react'
import Form from './Form'
import TableForm from './TableForm'
import { useState } from 'react'
import './Principal.css'

const productsList = [
    {
        id: 1,
        nombre: 'Botella Cielo',
        descripcion: 'Productos para bodegas y consumo',
        stock: 25
    }, {
        id: 2,
        nombre: 'Taladro',
        descripcion: 'Productos para construccion',
        stock: 25
    }, {
        id: 3,
        nombre: 'DogShaw',
        descripcion: 'Productos para mascotas',
        stock: 25
    }
]

function Principal() {

    const [products, setProductsList] = useState(productsList)
    const [productToEdit, setProductToEdit] = useState(null)

    function createProduct(data){
        data.id = Date.now()
        setProductsList([...products, data]);
    }

    function updateProduct(data){
        let newProduct = products.map(element => element.id === data.id ? data : element)
        setProductsList(newProduct)
    }

    function deleteProduct(id){
        let isDelete = window.confirm('¿Estas seguro de eliminar este producto?')
        if(isDelete){
            let newData = products.filter(element => element.id !== id)
            setProductsList(newData)
        }else{
            return
        }
    }

    return (
        <div className='container'>
            <div>
            <Form 
            createProduct={createProduct} 
            updateProduct={updateProduct} 
            productToEdit={productToEdit}
            setProductToEdit={setProductToEdit} />
            </div>
            <div>
            <TableForm 
            data={products} 
            setProductToEdit={setProductToEdit}
            deleteProduct={deleteProduct}/>
            </div>
        </div>
    )
}

export default Principal