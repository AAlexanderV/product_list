import { useSelector } from "react-redux";


function ProductsList() {
  const productsList = useSelector((state:any) => state.products.value);
   
//  After clicking on a row a modal should be displayed and should present all item data. 
    console.log("productsList:", productsList);
    
    return (
      <div className="products_section">
        <h2>PRODUCTS:</h2>
        <ul>
          {productsList.map((item:any) => {
            return(
              <li key={item.id} style={{backgroundColor: item.color}}>
                <p>№ {item.id} - name: {item.name}, year: {item.year} </p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
  
  export default ProductsList;