import './App.css';
import React from 'react';
import Header from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import Home from './components/Home';
//Router traido desde react-router-dom (no confundir con el de express)
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Dashboard }from './components/admin/Dashboard'
import ProductsList from './components/admin/ProductList';
import NewProduct from './components/admin/newProduct';
import Cart from './components/cart/Cart';


function App() {
  return (
    <Router>
    <div className="App">
        <Header />
        <div className='container container-fluid'>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/Home" element={<Home />}/>
            <Route path="/dashboard" element={<Dashboard />}/>
            <Route path="/allproducts" element={<ProductsList />}/>
            <Route path="/nuevoProducto" element={<NewProduct />}/>
            <Route path="/carrito" element={<Cart />}/>
          </Routes>
        </div>
        <Footer />
    </div>
    </Router>
  );
}

export default App;
