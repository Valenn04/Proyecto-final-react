import React from 'react';
import '../../styles/Inicio.css'
import { Link } from 'react-router-dom';
import Portada from '../../images/portada.jpg'

const Inicio = () => {
    return (
        <div className='inicio'>
            <Link to='/'>
                <h1>Inicio</h1>
            </Link>
            <Link to='/productos'>
                <h1>Productos</h1>
            </Link>
            <img src={Portada} alt="portada" />
        </div>
    );
}

export default Inicio;
