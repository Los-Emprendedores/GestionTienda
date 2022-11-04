import React, { Fragment, useEffect } from 'react'
import MetaData from './layout/MetaData'
import {useDispatch, useSelector} from 'react-redux'
import { getProducts } from '../actions/productActions'
import { Link } from 'react-router-dom'
import { useAlert} from 'react-alert'

export const Home = () => {
          const { loading, productos, error} = useSelector(state=> state.products)
    const alert= useAlert();

    const dispatch = useDispatch();
    useEffect(() => {
        if (error){
            return alert.error(error)
        }

        dispatch(getProducts());
        alert.success("OK")
    }, [dispatch])


    return (
        <Fragment>
            {loading ? <i class="fa fa-refresh fa-spin fa-3x fa-fw"></i> :(
                <Fragment>
                    <MetaData title="Las mejores marcas a los mejores precios"></MetaData>
            <h1 id="encabezado_productos">Nuestros Productos</h1>

            <section id="productos" className='container mt-5'>
                <div className='row'>
                <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                        <div className='card p-3 rounded'>
                            <img className='card-img-top mx-auto' src='./images/productos/Muestra/Mestra-Budweiser-1_0.jpg' alt="Budweiser-muestra"></img>
                            <div className='card-body d-flex flex-column'>
                                <h2 id="titulo_producto"><a href='http://localhost:3000'>BUDWEISER</a></h2>
                                <div className='rating mt-auto'>
                                    <div className='rating-outer'>
                                        <div className='rating-inner'></div>
                                    </div>
                                    <span id="No_de_opiniones"> 5 reviews</span>
                                </div>
                                <p className='card-text'>$ 28.000</p><a href='http://localhost:3000' id="view_btn" className='btn btn-block'>
                                    Ver detalle
                                </a>
                            </div>
                        </div>
                    </div>

                    {/*Producto 2*/}
                    <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                        <div className='card p-3 rounded'>
                            <img className='card-img-top mx-auto' src='./images/productos/Muestra/MuestraPokerRegular.jpg' alt="Poker-Regular-Muestra"></img>
                            <div className='card-body d-flex flex-column'>
                                <h2 id="titulo_producto"><a href='http://localhost:3000'>POKER</a></h2>
                                <div className='rating mt-auto'>
                                    <div className='rating-outer'>
                                        <div className='rating-inner'></div>
                                    </div>
                                    <span id="No_de_opiniones"> 2 reviews</span>
                                </div>
                                <p className='card-text'>$ 30.000</p><a href='http://localhost:3000' id="view_btn" className='btn btn-block'>
                                    Ver detalle
                                </a>
                            </div>
                        </div>
                    </div>

                    {/*Producto 3*/}
                    <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                        <div className='card p-3 rounded'>
                            <img className='card-img-top mx-auto' src='./images/productos/Muestra/MuestraAguila.jpg' alt="Aguila-Muestra"></img>
                            <div className='card-body d-flex flex-column'>
                                <h2 id="titulo_producto"><a href='http://localhost:3000'>AGUILA</a></h2>
                                <div className='rating mt-auto'>
                                    <div className='rating-outer'>
                                        <div className='rating-inner'></div>
                                    </div>
                                    <span id="No_de_opiniones"> 12 reviews</span>
                                </div>
                                <p className='card-text'>$ 25.000</p><a href='http://localhost:3000' id="view_btn" className='btn btn-block'>
                                    Ver detalle
                                </a>
                            </div>
                        </div>
                    </div>

                    {/*Producto 4*/}
                    <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                        <div className='card p-3 rounded'>
                            <img className='card-img-top mx-auto' src='./images/productos/Muestra/MuestraStellagrilla_0.jpg' alt="BECKS_Muestra"></img>
                            <div className='card-body d-flex flex-column'>
                                <h2 id="titulo_producto"><a href='http://localhost:3000'>STELLA ARTOIS</a></h2>
                                <div className='rating mt-auto'>
                                    <div className='rating-outer'>
                                        <div className='rating-inner'></div>
                                    </div>
                                    <span id="No_de_opiniones"> 7 reviews</span>
                                </div>
                                <p className='card-text'>$3'899.900</p><a href='http://localhost:3000' id="view_btn" className='btn btn-block'>
                                    Ver detalle
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

                </Fragment>

            )}
            

        </Fragment>
    )
}
export default Home