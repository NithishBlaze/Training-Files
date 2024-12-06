import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ProductAddComp = () => {
    const nav = useNavigate();

    const [product,setProduct] = useState({
        pname:"",
        pprice:"",
        pcomany:"",
        pquantity:""
    });

    const inputChange= (event) =>{
        const {type,name,value} = event.target;
        setProduct({...product,[name]:value});

    }

    const productAdd = (event) =>{
        event.preventDefault();
        axios.post(`http://localhost:8080/products`,product).then(()=>{
            window.alert("Product added Successfully");
            nav('/mainDashboard/productdash')
        }).catch((error)=>{})

    }

    return (
        <div>
            <h2>Add Products:</h2>
            <div className='row'>
                <div className='col-sm-3'></div>
                <div className='col-sm-6'>
                    <form onSubmit={productAdd}>
                        <label className='form-label'>Enter Product Name:</label>
                        <input type='text' name='pname' className='form-control' onChange={inputChange}></input>
                        <label className='form-label'>Enter Product Price:</label>
                        <input type='text' name='pprice' className='form-control' onChange={inputChange}></input>
                        <label className='form-label'>Enter Product Company:</label>
                        <input type='text' name='pcompany' className='form-control' onChange={inputChange}></input>
                        <label className='form-label'>Enter Product Quantity:</label>
                        <input type='text' name='pquantity' className='form-control' onChange={inputChange}></input> <br/>
                        <div className='d-grid gap-2'>
                            <button type='submit' className='btn btn-success' > ADD </button>
                        </div>
                    </form>
                </div>
                <div className='col-sm-3'></div>
            </div>
        </div>
    )
}

export default ProductAddComp