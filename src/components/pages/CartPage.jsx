import React, { useState, useContext } from "react";
import "./CartPage.css";
import userContext from "../../utils/context/userContext.js";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearItems } from "../../utils/slices/cartSlice.js";

const CartPage = () => {
  const { loggedUser } = useContext(userContext);
  const items = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();


  const [totalPrice, setTotalPrice] = useState(15);

  const clearCart = () => {
    dispatch(clearItems())

  };

  return (
    <div className="cart-container">
      <div className="cart-card">
        <h2 className="cart-welcome">
          Welcome <span className="logged-user">{loggedUser}</span> to your Cart
        </h2>

        <p className="cart-description">
          Review your selected food items below.
        </p>

        {items.length === 0 ? (
          <div className="empty-cart">
            <h3>Your cart is empty 😔</h3>
            <p>Add some delicious food items.</p>
          </div>
        ) : (
          <div className="cart-content">
            <h3 className="cart-subtitle">Items in your cart</h3>

            <ul className="cart-items-list">
              {items?.map((item, index) => (
                <li key={item?.id} className="cart-item">
                  <span className="item-name">{item?.name}</span>

                  <span className="item-price">
                    ${item.price/100}
                  </span>
                </li>
              ))}
            </ul>

            <div className="cart-total">
              <h4>Total Price</h4>
              <span>${ items?.reduce((sum, item) => {
                        return sum + (item.price/100);
                      }, 0)}</span>
            </div>

            <button
              className="clear-cart-btn"
              onClick={clearCart}
            >
              Clear Cart
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;