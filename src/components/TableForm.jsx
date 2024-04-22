import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import './TableForm.css'

function TableForm({ data, setProductToEdit, deleteProduct }) {
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Descripcion</th>
                        <th>Stock</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((element) => (
                            <tr key={element.id}>
                                <td className='left'>{element.nombre}</td>
                                <td className='left'>{element.descripcion}</td>
                                <td className='right'>{element.stock}</td>
                                <td><a onClick={() => setProductToEdit(element)} href="#"><FontAwesomeIcon icon={faPenToSquare} style={{color: "#63e6be",}} /></a>
                                    <a onClick={() => deleteProduct(element.id)} href="#"><FontAwesomeIcon icon={faTrash} style={{color: "#bb392a",}} /></a></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}

export default TableForm