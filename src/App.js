import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './component/Header';
import ListProduct from './component/ListProduct';
import Create from './component/Create';
import product from './json/products.json'

function App() {
  // Quản lý danh sách sản phẩm ở đây để chia sẻ giữa các component
  const [products, setProducts] = useState(product);

  // Hàm để thêm sản phẩm mới vào danh sách
  const addProduct = (newProduct) => {
      setProducts([...products, newProduct]);
  };
  return (
    

    <div className="App">
      <Header />
      <Routes>
        <Route path='/ListProduct' index element={<ListProduct products={products} setProducts={setProducts}/>} />
        <Route path='/Create' index element={<Create addProduct={addProduct}/>} />
      </Routes>
    </div>
  );
}

export default App;
