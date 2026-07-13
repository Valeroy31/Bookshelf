
import { useDispatch, useSelector } from "react-redux";
import { cartItems, decreaseQuantity, increaseQuantity, removeFromCart } from "../Features/Cart/CartSlice";
import { useNavigate } from "react-router-dom";
const Cart = () => {

const items = useSelector(cartItems)
const navigate = useNavigate()
const dispatch = useDispatch()
const removeItem=(item)=>{
    dispatch(removeFromCart(item))
}
const back = ()=>{
    navigate('/params')
}
const totalPrice = items.reduce((sum, item)=> sum + item.price * item.quantity, 0)
  return (
   
    <div
      style={{
        padding: "40px",
        backgroundColor: "#F5F5FD",
        minHeight: "100vh",
        fontFamily: "Inter, sans-serif",
      }}
    >
        
                <button onClick={back}
              style={{
                backgroundColor: "#4c3ac0",
                color: "white",
                border: "none",
                borderRadius: "8px",
                padding: "12px",
                marginTop: "12px",
                width: "100%",
                cursor: "pointer",
                fontWeight: "600",
                fontSize: "1rem",
                boxShadow: "0 2px 4px rgba(96, 79, 205, 0.2)",
              }}
            >
              Back to Shopping
            </button>

      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <h1 style={{ color: "#130B43", marginBottom: "32px", fontSize: "2rem", fontWeight: "700" }}>
          Shopping Cart
        </h1>

        <div style={{ display: "flex", gap: "32px", flexWrap: "wrap" }}>
          {/* Cart Items List */}
          
          <div style={{ flex: "2", minWidth: "300px" }}>
            { items.length === 0 ? <h2>Your cart is empty</h2> : items.map((item) => (
              <div
                key={item.id}
                style={{
                  backgroundColor: "#FFFFFF",
                  borderRadius: "12px",
                  padding: "20px",
                  marginBottom: "16px",
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)",
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  style={{ width: "80px", height: "80px", objectFit: "contain" }}
                />
                <div style={{ flex: "1" }}>
                  <h3 style={{ margin: "0 0 4px 0", color: "#130B43", fontSize: "1.1rem" }}>{item.title}</h3>
                  <p style={{ margin: 0, color: "#5D5588", fontWeight: "600" }}>${item.price * item.quantity}</p>
                </div>
                <div  style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <button onClick={()=>dispatch(decreaseQuantity(item))} style={{ border: "1px solid #ddd", background: "none", padding: "4px 8px", borderRadius: "4px", cursor: "pointer" }}>-</button>
                  <span style={{ fontWeight: "600" }}>{item.quantity}</span>
                  <button onClick={()=>dispatch(increaseQuantity(item))} style={{ border: "1px solid #ddd", background: "none", padding: "4px 8px", borderRadius: "4px", cursor: "pointer" }}>+</button>
                </div>
                <button onClick={()=>removeItem(item.id)} style={{ background: "none", border: "none", color: "#FF4D4D", cursor: "pointer", fontWeight: "600" }}>
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div
            style={{
              flex: "1",
              minWidth: "300px",
              backgroundColor: "#FFFFFF",
              borderRadius: "12px",
              padding: "24px",
              height: "fit-content",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
              border: "1px solid rgba(0, 0, 0, 0.10)",
            }}
          >
            <h2 style={{ fontSize: "1.4rem", color: "#130B43", marginBottom: "20px" }}>Summary</h2>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px", color: "#5D5588" }}>
              <span>Subtotal</span>
              <span>{totalPrice.toFixed(2)}</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px", color: "#5D5588" }}>
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <hr style={{ border: "none", borderTop: "1px solid #EEE", margin: "20px 0" }} />
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "24px", fontSize: "1.2rem", fontWeight: "700", color: "#130B43" }}>
              <span>Total</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <button
              style={{
                width: "100%",
                backgroundColor: "#604FCD",
                color: "white",
                border: "none",
                padding: "14px",
                borderRadius: "8px",
                fontWeight: "600",
                fontSize: "1rem",
                cursor: "pointer",
              }}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart