import React from "react";

function Item({ product, addToCart, updateQuantityProduct, cartProduct }) {
  return (
    <div className="product-1">
      <div className="image">
        <img src={product.image} alt="" />
      </div>
      <div className="content-product">
        <h4>{product.title}</h4>

        <h2>{product.price}$</h2>
        <div className="button-addtocart">
          
          <div className="add-to-cart">
            <button onClick={() => addToCart(product)}>Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;
