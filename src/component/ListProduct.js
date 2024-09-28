import React, { useState, useEffect } from 'react';

function ListProduct({ products, setProducts }) {
    const [searchTerm, setSearchTerm] = useState(''); 
    const [sortConfig, setSortConfig] = useState({ key: 'ID', direction: 'asc' });
    const [allProducts, setAllProducts] = useState(products); // New state for the original products

    useEffect(() => {
        // Initialize the product lists
        setAllProducts(products);
        setProducts(products);
    }, [products]);

    const handleSearch = () => {
        const filteredProducts = allProducts.filter(product => 
            product.ProductName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.Category.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.ID.toString().includes(searchTerm) ||
            product.Price.toString().includes(searchTerm)
        );
        setProducts(filteredProducts);
    };

    const handleSort = (key) => {
        let direction = 'asc';
        if (sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }

        const sortedProducts = [...products].sort((a, b) => {
            if (key === 'Price') {
                return direction === 'asc' ? a[key] - b[key] : b[key] - a[key];
            } else {
                if (a[key] < b[key]) return direction === 'asc' ? -1 : 1;
                if (a[key] > b[key]) return direction === 'asc' ? 1 : -1;
                return 0;
            }
        });

        setSortConfig({ key, direction });
        setProducts(sortedProducts);
    };

    useEffect(() => {
        if (searchTerm === '') {
            setProducts(allProducts); // Reset to original product list when search term is empty
        }
    }, [searchTerm, allProducts]);

    return (
        <div className="container">
            <h2 className="mt-4 mb-3">List Product</h2>
            <div className="input-group mb-3">
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Search product..." 
                    value={searchTerm} 
                    onChange={(e) => setSearchTerm(e.target.value)} 
                />
                <button className="btn btn-primary" onClick={handleSearch}>Search</button>
            </div>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th onClick={() => handleSort('ID')} style={{ cursor: 'pointer' }}>
                            ID {sortConfig.key === 'ID' ? (sortConfig.direction === 'asc' ? '↑' : '↓') : ''}
                        </th>
                        <th onClick={() => handleSort('ProductName')} style={{ cursor: 'pointer' }}>
                            Product Name {sortConfig.key === 'ProductName' ? (sortConfig.direction === 'asc' ? '↑' : '↓') : ''}
                        </th>
                        <th onClick={() => handleSort('Category')} style={{ cursor: 'pointer' }}>
                            Category {sortConfig.key === 'Category' ? (sortConfig.direction === 'asc' ? '↑' : '↓') : ''}
                        </th>
                        <th onClick={() => handleSort('Price')} style={{ cursor: 'pointer' }}>
                            Price {sortConfig.key === 'Price' ? (sortConfig.direction === 'asc' ? '↑' : '↓') : ''}
                        </th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <tr key={product.ID}>
                            <td>{product.ID}</td>
                            <td>{product.ProductName}</td>
                            <td>{product.Category}</td>
                            <td>${product.Price}</td>
                            <td>
                                <button className="btn btn-danger btn-sm" onClick={() => setProducts(products.filter(p => p.ID !== product.ID))}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ListProduct;
