import React, { Fragment, useEffect, useState } from 'react'
import MetaData from '../layout/MetaData'
import Sidebar from './Sidebar'

import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { clearErrors, getProductDetails, updateProduct } from '../../actions/productActions'
import { UPDATE_PRODUCT_RESET } from '../../constants/productConstants'
import { useNavigate, useParams } from 'react-router-dom'

export const UpdateProduct = () => {
    const navigate = useNavigate()
    const params = useParams();
    const [nombre, setNombre] = useState('');
    const [precio, setPrecio] = useState(0);
    const [descripcion, setDescripcion] = useState('');
    const [recomendacion, setRecomendacion] = useState('');
    const [marca, setMarca] = useState('');
    const [inventario, setInventario] = useState(0);
    const [vendedor, setVendedor] = useState('');
    const [imagen, setImagen] = useState([]);
    const [imagenPreview, setImagenPreview] = useState([])
    const [oldImagen, setOldImagen] = useState([])

    const marcas = [
        "Aguila",
        "Poker",
        "Becks",
        "Reds",
        "Costeñita",
        "Budweiser",
        "Costeña",
        "Stella Artois",
        "Corona",
        "Michelob",
        "Pilsen"
    ]

    const alert = useAlert();
    const dispatch = useDispatch();

    const { loading, isUpdated, error: updateError } = useSelector(state => state.product)
    const { error, product } = useSelector(state => state.productDetails)
    const productId = params.id;

    useEffect(() => {
        if (product && product._id !== productId) {
            dispatch(getProductDetails(productId));
        } else {
            setNombre(product.nombre);
            setPrecio(product.precio);
            setDescripcion(product.descripcion);
            setRecomendacion(product.recomendacion)
            setMarca(product.marca);
            setVendedor(product.vendedor);
            setInventario(product.inventario);
            setOldImagen(product.imagen)
        }
        if (error) {
            alert.error(error)
            dispatch(clearErrors)
        }
        if (updateError) {
            alert.error(error)
            dispatch(clearErrors)
        }
        if (isUpdated) {
            alert.success("Producto actualizado correctamente");
            navigate("/dashboard")
            dispatch({ type: UPDATE_PRODUCT_RESET })
        }

    }, [dispatch, alert, error, isUpdated, updateError, product, productId])

    const submitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.set('nombre', nombre);
        formData.set('precio', precio);
        formData.set('descripcion', descripcion);
        formData.set('recomendacion', recomendacion);
        formData.set('marca', marca);
        formData.set('inventario', inventario);
        formData.set('vendedor', vendedor);

        imagen.forEach(img => {
            formData.append('imagen', img)
        })

        dispatch(updateProduct(product._id, formData))
    }

    const onChange = e => {

        const files = Array.from(e.target.files)

        setImagenPreview([]);
        setImagen([])
        setOldImagen([])

        files.forEach(file => {
            const reader = new FileReader();

            reader.onload = () => {
                if (reader.readyState === 2) {
                    setImagenPreview(oldArray => [...oldArray, reader.result])
                    setImagen(oldArray => [...oldArray, reader.result])
                }
            }

            reader.readAsDataURL(file)
        })
    }

    return (
        <Fragment>
            <MetaData title={'Actualizar producto'} />
            <div className="row">
                <div className="col-12 col-md-2">
                    <Sidebar />
                </div>

                <div className="col-12 col-md-10">
                    <Fragment>
                        <div className="wrapper my-5">
                            <form className="shadow-lg" onSubmit={submitHandler} encType='multipart/form-data'>
                                <h1 className="mb-4">Actualizar Producto</h1>

                                <div className="form-group">
                                    <label htmlFor="name_field">Nombre</label>
                                    <input
                                        type="text"
                                        id="name_field"
                                        className="form-control"
                                        value={nombre}
                                        onChange={(e) => setNombre(e.target.value)}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="price_field">Precio</label>
                                    <input
                                        type="text"
                                        id="price_field"
                                        className="form-control"
                                        value={precio}
                                        onChange={(e) => setPrecio(e.target.value)}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="description_field">Descripcion</label>
                                    <textarea className="form-control"
                                        id="description_field"
                                        rows="8"
                                        value={descripcion}
                                        onChange={(e) => setDescripcion(e.target.value)}></textarea>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="recomendacion_field">Recomendacion</label>
                                    <textarea className="form-control"
                                        id="recomendacion_field"
                                        rows="6"
                                        value={recomendacion}
                                        onChange={(e) => setRecomendacion(e.target.value)}></textarea>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="category_field">Categoria</label>
                                    <select className="form-control"
                                        id="category_field"
                                        value={marca}
                                        onChange={(e) => setMarca(e.target.value)}>
                                        {marcas.map(categoria => (
                                            <option key={categoria} value={categoria} >{categoria}</option>
                                        ))}

                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="stock_field">Inventario</label>
                                    <input
                                        type="number"
                                        id="stock_field"
                                        className="form-control"
                                        value={inventario}
                                        onChange={(e) => setInventario(e.target.value)}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="seller_field">Vendedor</label>
                                    <input
                                        type="text"
                                        id="seller_field"
                                        className="form-control"
                                        value={vendedor}
                                        onChange={(e) => setVendedor(e.target.value)}
                                    />
                                </div>

                                <div className='form-group'>
                                    <label>Imágenes</label>

                                    <div className='custom-file'>
                                        <input
                                            type='file'
                                            name='product_images'
                                            className='custom-file-input'
                                            id='customFile'
                                            onChange={onChange}
                                            multiple
                                        />
                                        <label className='custom-file-label' htmlFor='customFile'>
                                            Seleccione Imágenes
                                        </label>
                                    </div>

                                    {oldImagen && oldImagen.map(img => (
                                        <img key={img} src={img.url} alt={img.url} className="mt-3 mr-2" width="55" height="52" />
                                    ))}

                                    {imagenPreview.map(img => (
                                        <img src={img} key={img} alt="Vista Previa" className="mt-3 mr-2" width="55" height="52" />
                                    ))}

                                </div>


                                <button
                                    id="login_button"
                                    type="submit"
                                    className="btn btn-block py-3"
                                    disabled={loading ? true : false}
                                >
                                    ACTUALIZAR
                                </button>

                            </form>
                        </div>
                    </Fragment>
                </div>
            </div>

        </Fragment>
    )
}