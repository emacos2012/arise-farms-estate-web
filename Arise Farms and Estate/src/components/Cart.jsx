import { useCart } from '../context/CartContext';
import './Cart.css';

function Cart() {
  const { cart, removeFromCart, updateQuantity, clearCart, cartTotal, isCartOpen, setIsCartOpen } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="cart-overlay" onClick={() => setIsCartOpen(false)}>
      <div className="cart-sidebar" onClick={(e) => e.stopPropagation()}>
        <div className="cart-header">
          <h3>🛒 Your Cart</h3>
          <button className="cart-close" onClick={() => setIsCartOpen(false)}>✕</button>
        </div>

        {cart.length === 0 ? (
          <div className="cart-empty">
            <div className="empty-icon">🛒</div>
            <p>Your cart is empty</p>
            <button className="btn-shop" onClick={() => setIsCartOpen(false)}>
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cart.map((item) => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.name} className="cart-item-image" />
                  <div className="cart-item-details">
                    <h4>{item.name}</h4>
                    <p className="cart-item-price">π {item.price} / {item.unit}</p>
                    <div className="cart-item-quantity">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="qty-btn"
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="qty-btn"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button 
                    className="cart-item-remove" 
                    onClick={() => removeFromCart(item.id)}
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>

            <div className="cart-footer">
              <div className="cart-total">
                <span>Total:</span>
                <span className="total-price">π {cartTotal.toFixed(2)}</span>
              </div>
              <button className="btn-checkout">
                Proceed to Checkout
              </button>
              <button className="btn-clear" onClick={clearCart}>
                Clear Cart
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;

