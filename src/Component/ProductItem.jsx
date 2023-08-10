import React from "react";
import Item from "./Item";

function ProductItem({
  products,
  addToCart,
  updateQuantityProduct,
  cartProduct,
}) {
  return (
    <section className="box-3">
      <div className="container">
        <div className="product-hunt">
          {products.map((item, index) => (
            <Item
              products={products}
              cartProduct={cartProduct}
              key={index}
              product={item}
              addToCart={addToCart}
              updateQuantityProduct={updateQuantityProduct}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductItem;
