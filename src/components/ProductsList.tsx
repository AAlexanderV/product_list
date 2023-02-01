import { useSelector } from "react-redux";


import ProductItem from "./ProductItem";

function ProductsList() {
  const productsList = useSelector((state:any) => state.products.value);
    
    return (
      <div className="products_section">
        <h2>PRODUCTS:</h2>
        <ul>
          {productsList.map((item:any) => {
            return(
                <ProductItem 
                  id={item.id}
                  name={item.name} 
                  year={item.year} 
                  color={item.color}
                  key={item.id}
                />
            );
          })}
        </ul>
      </div>
    );
  }
  
  export default ProductsList;