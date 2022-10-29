import React, {useContext, useState, useEffect} from 'react';
import '../../styles/DetalleProducto.css'
import { DataContext } from '../../context/DataProvider';
import { useParams } from 'react-router-dom'

const ProductoDetalles = () => {
    const value = useContext(DataContext)
    const [productos] = value.productos;
    const addCarrito = value.addCarrito
    const [detalle, setDetalle] = useState([])
    const params = useParams();

    useEffect(() =>{
        productos.forEach(producto => {
            if(producto.id === parseInt(params.id)){
                setDetalle(producto)
            }
        })
    },[params.id, productos])


    return (
        <>
            {
                <div className="detalles">
                    <h2>{detalle.title}</h2>
                    <p className="price">${detalle.price}</p>
                    <div className="grid">
                        <div className='size'>
                            <select placeholder='Tamaño'>
                                <option value="1">1</option>
                                <option value="1">2</option>
                                <option value="1">3</option>
                                <option value="1">4</option>
                                <option value="1">5</option>
                                <option value="1">6</option>
                                <option value="1">7</option>
                                <option value="1">8</option>
                                <option value="1">9</option>
                            </select>
                            <p>Tamaño</p>
                        </div>
                    </div>
                    <button onClick={()=> addCarrito(detalle.id)}>Añadir al carrito</button>
                    <img src={detalle.image} alt={detalle.title} />
                </div>
            }
        </>
    );
}

export default ProductoDetalles;
