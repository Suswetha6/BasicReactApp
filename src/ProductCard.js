import './ProductCard.css';
import {useRef} from 'react';
function ProductCard({title,price}){
  let pRef =useRef(0);
  function printTitle(){
    // console.log("printTitle");
    // console.log(pRef.current.innerText);
    if(pRef.current.style.display === "none" ){
      pRef.current.style.display = "block";
    }
    else{
      pRef.current.style.display = "none";
    }
  }
  return(
    <div className="product-card">
     <p onClick={printTitle}> {title} </p>
     <p ref ={pRef}>{price}</p>
    </div>
  )
}

export default ProductCard;
