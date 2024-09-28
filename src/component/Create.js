import React, { useState } from 'react';
import product from '../json/products.json'

function Create({ addProduct }) {
    const [newProduct, setNewProduct] = useState({
        ID: '',
        ProductName: '',
        Category: '',
        Price: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewProduct({ ...newProduct, [name]: value });
    };

    const handleSave = (e) => {
        e.preventDefault();
        
        if (!newProduct.ID || !newProduct.ProductName || !newProduct.Category || !newProduct.Price) {
            alert('Please fill out all fields.');
            return;
        }

        const productToAdd = {
            ID: parseInt(newProduct.ID),
            ProductName: newProduct.ProductName,
            Category: newProduct.Category,
            Price: parseFloat(newProduct.Price)
        };

        addProduct(productToAdd); // Gọi hàm addProduct để thêm sản phẩm mới vào danh sách
        alert('The Product is added to list successfully.');

        setNewProduct({
            ID: '',
            ProductName: '',
            Category: '',
            Price: ''
        });
    };

    return (
        <div className="container">
            <h2 className="mt-4">Add New Product</h2>
            <form onSubmit={handleSave}>
                <div className="mb-3">
                    <label className="form-label">Product ID</label>
                    <input
                        type="number"
                        className="form-control"
                        name="ID"
                        value={newProduct.ID}
                        onChange={handleChange}
                        placeholder="Enter Product ID"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Product Name</label>
                    <input
                        type="text"
                        className="form-control"
                        name="ProductName"
                        value={newProduct.ProductName}
                        onChange={handleChange}
                        placeholder="Enter Product Name"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Category</label>
                    <input
                        type="text"
                        className="form-control"
                        name="Category"
                        value={newProduct.Category}
                        onChange={handleChange}
                        placeholder="Enter Category"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Price</label>
                    <input
                        type="number"
                        className="form-control"
                        name="Price"
                        value={newProduct.Price}
                        onChange={handleChange}
                        placeholder="Enter Price"
                    />
                </div>
                <button type="submit" className="btn btn-success">Save Product</button>
            </form>
        </div>
    );
}


export default Create;