import React from "react";
import "./CartPage.css";
import userContext from "../../utils/context/userContext.js";
class CartPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quantity: 0,
      cartItems: [
        { name: "Pizza", price: 10 },
        { name: "Burger", price: 5 },
      ],
      totalPrice: 15,
    };
  }

  render() {
    return (
      <div className="cart-container">
        <div className="cart-card">
          <h2 className="cart-welcome">
            Welcome 
            <userContext.Consumer>
              {(context) => (
                <span className="logged-user">{context.loggedUser}</span>
              )}
            </userContext.Consumer>
             to your Cart
          </h2>
          <p className="cart-description">
            Review your selected food items below.
          </p>

          {this.state.cartItems.length === 0 ? (
            <div className="empty-cart">
              <h3>Your cart is empty 😔</h3>
              <p>Add some delicious food items.</p>
            </div>
          ) : (
            <div className="cart-content">
              <h3 className="cart-subtitle">Items in your cart</h3>

              <ul className="cart-items-list">
                {this.state.cartItems.map((item, index) => (
                  <li key={index} className="cart-item">
                    <span className="item-name">{item.name}</span>

                    <span className="item-price">
                      ${item.price}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="cart-total">
                <h4>Total Price</h4>
                <span>${this.state.totalPrice}</span>
              </div>

              <button
                className="clear-cart-btn"
                onClick={() =>
                  this.setState({
                    cartItems: [],
                    totalPrice: 0,
                  })
                }
              >
                Clear Cart
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default CartPage;