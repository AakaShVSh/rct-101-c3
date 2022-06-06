import {React,useState,useEffect} from "react";

const Product = ({count,setcount,product}) => {
  // Note: this id should come from api
  // const product = { id: 1 };
  // const [count,setcount] = useState(0);
  

  return (
    <div data-cy={`product-${product.id}`}>
      <h3 data-cy="product-name">{product.name}</h3>
      <h6 data-cy="product-description">{product.description}</h6>
      <button data-cy="product-add-item-to-cart-button">ADD TO Cart</button>
      <div>
     <button onClick={setcount}  data-cy="product-increment-cart-item-count-button">+</button>
        <span data-cy="product-count">
          {count }
        </span>
        <button onClick={setcount} data-cy="product-decrement-cart-item-count-button">-</button>
    <button   data-cy="product-remove-cart-item-button">Remove From Cart</button>
      </div>
    </div>
  );
};

export default Product;
