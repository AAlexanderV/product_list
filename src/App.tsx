import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";


import FilterInput from "./components/FilterInput";
import ProductsList from "./components/ProductsList";
import Pagination from "./components/Pagination";
import { setProducts } from "./features/products/productsSlice";

import './App.css';

function App() {
  const [error, setError] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const dispatch = useDispatch();
  const page = useSelector((state:any) => state.page.value);
  const idFilter = useSelector((state:any) => state.filter.value);

  const API = `https://reqres.in/api/products?page=${page}&per_page=5${idFilter ? `&id=${idFilter}` : ""}`;

  useEffect(() => {
    fetch(API)
        .then((response) => response.json())
        .then(
            (result) => {
              if(Object.entries(result).length === 0){
                setError("No products found")
              } else {
                setIsLoaded(true);
                setError(null);
                dispatch(setProducts([result.data].flat()));
                console.log(API);
                console.log(result);
              }
            },
            (e) => {
              console.log("result ERROR");
              setIsLoaded(true);
              setError(e);
            }
        );
  }, [API]);
  // }, [API, page, idFilter]);


  
  if (error) {
    return (
      <div className="App">
        <FilterInput />
        <p>Error: {error}</p>
      </div>
    );
  } else if (!isLoaded) {
    return (
      <div className="App">
        <FilterInput />
        <p>Loading...</p>
      </div>
    );
  } else {
    return (
      <div className="App">
        <FilterInput />
        <ProductsList />
        <Pagination />
      </div>
    );
  }
}

export default App;
