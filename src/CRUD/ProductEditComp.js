import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
const ProductEditComp = () => {

    const { id } = useParams();
    const nav = useNavigate();

    const [product, setProduct] = useState({
        id: "",
        pname: "",
        pprice: "",
        pcompany: "",
        pquantity: ""
    })

    const inputChange = (event) => {
        const { type, name, value } = event.target;
        setProduct({ ...product, [name]: value });

    }

    useEffect(() => {
        axios.get(`http://localhost:8080/products/${id}`)
            .then((response) => {
                console.log(response.data);
                setProduct(response.data);
            })
            .catch((error) => {
            });
    }, []);



    const productEdit = (event) => {
        event.preventDefault();
        axios.put(`http://localhost:8080/products/${id}`, product).then(() => {
            window.alert("Product edited Successfully");
            nav('/mainDashboard/productdash')
        }).catch((error) => { })

    }
    return (
        <div>
            <h2> This is ProductEditComp</h2>
            <div className='row'>
                <div className='col-sm-3'></div>
                <div className='col-sm-6'>
                    <form onSubmit={productEdit}>
                        <label className='form-label'>Enter Product Name:</label>
                        <input type='text' name='pname' className='form-control' value={product.pname} onChange={inputChange}></input>
                        <label className='form-label'>Enter Product Price:</label>
                        <input type='text' name='pprice' className='form-control'value={product.pprice} onChange={inputChange}></input>
                        <label className='form-label'>Enter Product Company:</label>
                        <input type='text' name='pcompany' className='form-control' value={product.pcompany} onChange={inputChange}></input>
                        <label className='form-label'>Enter Product Quantity:</label>
                        <input type='text' name='pquantity' className='form-control' value={product.pquantity} onChange={inputChange}></input> <br />
                        <div className='d-grid gap-2'>
                            <button type='submit' className='btn btn-success' > EDIT </button>
                        </div>
                    </form>
                </div>
                <div className='col-sm-3'></div>
            </div>
        </div>
    )
}

export default ProductEditComp