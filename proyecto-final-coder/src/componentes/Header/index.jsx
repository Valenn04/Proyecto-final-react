import React, { useContext } from 'react';
import '../../styles/Header.css'
import { Link } from 'react-router-dom';
import { DataContext } from '../../context/DataProvider';


const Header = () => {
    const value = useContext(DataContext);
    const [menu, setMenu] = value.menu;
    const [carrito] = value.carrito;

    const toogleMenu = () =>{
        setMenu(!menu )
    }


    return (
        <header>
            <Link to="/">
                <div className="logo">
                    <h1>THE SHOES BROTHERS</h1>
                </div>
            </Link>
            <ul>
                <li>
                    <Link to="/">INICIO</Link>
                </li>
                <li>
                    <Link to="/productos">PRODUCTOS</Link>
                </li>
            </ul>
            <div className="cart" onClick={toogleMenu}>
                <box-icon name='cart'></box-icon>
                <span className='item-total'>{carrito.length}</span>
            </div>
        </header>
    );
}

export default Header;
