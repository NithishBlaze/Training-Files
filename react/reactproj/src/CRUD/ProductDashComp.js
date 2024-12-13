import axios from 'axios';
import React, { useEffect, useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Button, Modal } from 'react-bootstrap';
const ProductDashComp = () => {
    const [product, setProduct] = useState([]);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = (value) => {
        setShow(true)
        setShow(value)
    };

    useEffect(() => {
        fetchData();
    }, []);


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
                                        <button className='btn btn-outline-success' onClick={()=>{handleShow(value)}}> <VisibilityIcon /> </button>|
                                        <Link to={`/mainDashboard/productEdit/${value.id}`} className='btn btn-outline-success' > <EditIcon /> </Link>|
                                        <button type='button' onClick={() => { deleteProduct(value.id) }} className='btn btn-outline-danger'> <DeleteIcon /> </button>
                                    </td>
                                </tr>

                            )
                        })
                    }
                </tbody>
            </table>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{show.pname}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <span>Price:</span><strong> {show.pprice}</strong><br/>
                    <span> Company:</span><strong> {show.pcompany}</strong><br/>
                    <span> Quantity:</span><strong> {show.pquantity}</strong><br/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default ProductDashComp