import { useState } from "react";
import Modal from "./Modal";

function ProductItem({id,name,year,color}: 
{ id: string; name: string, year: string, color: string }) {
    const [openModal, setOpenModal] = useState(false);
    
    return(
    <>
        <li className="product_item" onClick={()=>setOpenModal(true)} style={{backgroundColor: color}} key={id} >
            <p>№ {id} - name: {name}, year: {year} </p>
        </li>
        <Modal 
            open={openModal} 
            id={id} 
            onClose={()=>setOpenModal(false)}
        />
    </>
    );
}

export default ProductItem;