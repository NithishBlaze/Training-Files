import axios from 'axios';
import React, { useEffect, useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
const ProductDashComp = () => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const editProduct = (id) => {

    }

    const deleteProduct = (id) => {
        console.log(`Delete :${id}`);
        const confirmDelete = window.confirm("Confirm Delete?");
        if (confirmDelete) {
            axios.delete(`http://localhost:8080/products/${id}`).then(() => {
                window.alert("Product Deleted Successfully !");
                fetchData();
            })
        }
    }

    const fetchData = () => {
        axios.get("http://localhost:8080/products").then((response) => {
            console.log(response.data);
            setProduct(response.data);
        }).catch((error) => {
            console.log("error occured");
        })
    }
    const addData = () => {

    }

    return (
        <div>
            <h2>This is ProductDashComp</h2>
            <Link to="/mainDashboard/productAdd" className='btn btn-success'>Add</Link>&nbsp;
            {/* <Link to="/mainDashboard/productEdit" className='btn btn-success'>Edit</Link> */}
            <table className='table table-hover table-bordered table-striped text-center'>
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Company</th>
                        <th>Quantity</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        product.map((value, index) => {
                            return (
                                <tr key={value.id}>
                                    <td>{index + 1}</td>
                                    <td>{value.pname}</td>
                                    <td>{value.pprice}</td>
                                    <td>{value.pcompany}</td>
                                    <td>{value.pquantity}</td>
                                    <td>
                                        <Link to= {`/mainDashboard/productEdit/${value.id}`} className='btn btn-outline-success' > <EditIcon/> </Link>|
                                        <button type='button' onClick={() => { deleteProduct(value.id) }} className='btn btn-outline-danger'> <DeleteIcon /> </button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ProductDashComp