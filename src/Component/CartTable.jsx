import React from "react";

function CartTable({ cartProduct, updateQuantityProduct, handleDelete }) {
  let totalPrice = cartProduct.reduce(function (price, product) {
    return price + product.quantity * product.price;
  }, 0);
  return (
    <div className="box-all">
      <div className="table_list">
        <div className="table_list-container">
          <div>
            <h2>List of selected products</h2>
            <div className="search-and-sort">
              <div className="form-search">
                <input
                  type="text"
                  placeholder="Nhập tên cần tìm kiếm"
                  className="search-value"
                />
                <button className="search">Search</button>
              </div>
            </div>
          </div>
          <table className="styled-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Image</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Total</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cartProduct.map((item, index) => (
                <tr className="style-table" key={index}>
                  <td>{index + 1}</td>
                  <td>{item.title}</td>
                  <td>
                    <img src={item.image} alt="" />
                  </td>
                  <td>
                    <div className="buttons_added">
                      <button
                        onClick={() =>
                          updateQuantityProduct(item.id, item.quantity - 1)
                        }
                        className="minus is-form"
                        type="button"
                        value="-"
                      >
                        -
                      </button>
                      <p aria-label="quantity" className="input-qty">
                        {item.quantity}
                      </p>
                      <button
                        onClick={() =>
                          updateQuantityProduct(item.id, item.quantity + 1)
                        }
                        className="plus is-form"
                        type="button"
                        value="+"
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td>{item.price}$</td>
                  <td>{item.price * item.quantity}$</td>
                  <td>
                    <button className="btn-edit">Update</button>
                    <button
                      className="btn-denger"
                      onClick={() => handleDelete(item)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <h3>Total: {totalPrice}$</h3>
        </div>
      </div>
    </div>
  );
}

export default CartTable;
