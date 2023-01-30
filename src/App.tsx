import React from 'react';
import { useState, useEffect } from "react";

import FilterInput from "./components/FilterInput";
import ProductsList from "./components/ProductsList";
import Pagination from "./components/Pagination";

import './App.css';

function App() {
  const [page, setPage] = useState(1);
  const [idFilter, setIdFilter] = useState(null);
  const [API, setAPI] = useState(`https://reqres.in/api/products?page=${page}&per_page=5${idFilter ?? `id=${idFilter}`}`);


  return (
    <div className="App">
      <FilterInput />
      <ProductsList />
      <Pagination />
    </div>
  );
}

export default App;
