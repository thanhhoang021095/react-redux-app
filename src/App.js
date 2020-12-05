import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopHeader from "components/TopHeader";
import ProductList from "container/ProductList";

function App() {
  return (
    <div className="App">
      <TopHeader />
      <ProductList />
    </div>
  );
}

export default App;
