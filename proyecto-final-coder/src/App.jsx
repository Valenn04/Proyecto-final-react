import React from 'react';
import Header from './componentes/Header';
import 'boxicons';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductoLista from './componentes/Productos';
import Inicio from './componentes/Inicio';
import { DataProvider } from './context/DataProvider';
import Carrito from './componentes/Carrito';
import ProductoDetalles from './componentes/Productos/ProductoDetalles';

const App = () => {
    return (
        <DataProvider>
        <div className='App'>
            <BrowserRouter>
                <Header />
                <Carrito />
                <Routes>
                    <Route path='/' element={<Inicio/>} />
                    <Route path='/productos' element={<ProductoLista/>} />
                    <Route path='/producto/:id' element={<ProductoDetalles/>} />
                </Routes>
            </BrowserRouter>
        </div>
        </DataProvider>
    );
}

export default App;
