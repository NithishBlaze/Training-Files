import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from './apiSlice';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap'; // Import React-Bootstrap components

const DataListComp = () => {
    const [show, setShow] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null); // For storing product details

    const handleShow = (product) => {
        setSelectedProduct(product);
        setShow(true);
    };

    const handleClose = () => {
        setShow(false);
        setSelectedProduct(null);
    };

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);

    const deleteProduct = (id) => {
        const confirmDelete = window.confirm("Confirm Delete?");
        if (confirmDelete) {
            axios.delete(`http://localhost:8080/products/${id}`).then(() => {
                window.alert("Product Deleted Successfully!");
                dispatch(fetchData()); // Reload data after deletion
            });
        }
    };

    const data = useSelector((state) => state.api.data);
    const status = useSelector((state) => state.api.status);
    const error = useSelector((state) => state.api.error);

    let content;

    if (status === 'loading') {
        content = <div><span className="spinner-border"></span> Loading...</div>;
    } else if (status === 'success') {
        content = (
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Company</th>
                        <th>Quantity</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((val, index) => (
                        <tr key={val.id}>
                            <td>{index + 1}</td>
                            <td>{val.pname}</td>
                            <td>{val.pprice}</td>
                            <td>{val.pcompany}</td>
                            <td>{val.pquantity}</td>
                            <td>
                                <button className="btn btn-outline-success" onClick={() => handleShow(val)}>
                                    <VisibilityIcon />
                                </button>
                                |
                                <Link to={`/mainDashboard/productEdit/${val.id}`} className="btn btn-outline-success">
                                    <EditIcon />
                                </Link>
                                |
                                <button type="button" onClick={() => deleteProduct(val.id)} className="btn btn-outline-danger">
                                    <DeleteIcon />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    } else if (status === 'failed') {
        content = <div>Something went wrong...</div>;
    }

    return (
        <div>
            <h1>This is DataList Component</h1>
            {content}

            {/* Modal for product details */}
            {selectedProduct && (
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{selectedProduct.pname}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p><span>Price:</span> <strong>{selectedProduct.pprice}</strong></p>
                        <p><span>Company:</span> <strong>{selectedProduct.pcompany}</strong></p>
                        <p><span>Quantity:</span> <strong>{selectedProduct.pquantity}</strong></p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            )}
        </div>
    );
};

export default DataListComp;
