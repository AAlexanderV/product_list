import { useSelector } from "react-redux";

function Modal({open, id, onClose}:{open:boolean, id:string, onClose:any}) {
    const productsList = useSelector((state:any) => state.products.value);
    const productToShow = productsList.find((item:any) => item.id === id)

    let productInfo = [];
    for (let key in productToShow) {
        productInfo.push(`${key} : ${productToShow[key]}`);
    }

    if(!open) return null;

    return(
        <div className="overlay" onClick={onClose}>
            <div className="modal_container">
                <div className="modal_top">
                    <h2>Product details:</h2>
                    <p className="close_btn" onClick={onClose}>X</p>
                </div>
                <ul className="modal_content">
                    {productInfo.map((item, index) => {
                        return <li key={index}>{item}</li>
                    })}
                </ul>
            </div>
        </div>    
    );
}

export default Modal;