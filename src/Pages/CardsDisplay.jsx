import axios from "axios"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { addToCart } from "../Features/Cart/CartSlice"


const CardsDisplay = () => {
      const {id} = useParams()
      const dispatch = useDispatch()
      const navigate = useNavigate()
      const [foundProduct, setfoundProduct] = useState('')
      useEffect(() => {
        const fetch = async ()=>{
            try {
            const response =    await axios.get(`https://fakestoreapi.com/products`)
            const data = response.data

          const foundProduct =  data.find(product => String(product.id) === String(id))
          setfoundProduct(foundProduct)
          
            } catch (error) {
               console.log(error);
                
            }
        }
        fetch()
      }
      
      , [id])
      const addItem =(product)=>{
            dispatch(addToCart(product))
            navigate('/cart')
      }
      
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "40px",
        backgroundColor: "#F5F5FD",
        fontFamily: "Inter, sans-serif",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          backgroundColor: "#FFFFFF",
          borderRadius: "12px",
          padding: "32px",
          maxWidth: "500px",
          width: "100%",
          border: "1px solid rgba(0, 0, 0, 0.10)",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
         <h2 style={{ fontSize: "1.2rem", color: "#5D5588", textTransform: "uppercase", letterSpacing: "0.05em", margin: "0 0 12px 0" }}>
          {foundProduct.category}
        </h2>
        <img
          src={foundProduct.image}
          alt={foundProduct.title}
          style={{ width: "100%", maxWidth: "250px", height: "250px", objectFit: "contain", marginBottom: "20px" }}
        />
        <h3 style={{ fontSize: "1.4rem", color: "#130B43", margin: "0 0 12px 0", fontWeight: "700", lineHeight: "1.3", textAlign: "center" }}>
          {foundProduct.title}
        </h3>
        <p style={{ fontSize: "1.5rem", color: "#26282D", fontWeight: "700", margin: "0 0 16px 0" }}>
          ${foundProduct.price}
        </p>
        <button
        onClick={()=>addItem(foundProduct)}
          style={{
            backgroundColor: "#604FCD",
            color: "white",
            border: "none",
            borderRadius: "8px",
            padding: "12px 24px",
            width: "100%",
            cursor: "pointer",
            fontWeight: "600",
            fontSize: "1rem",
            marginBottom: "20px",
            transition: "background-color 0.2s",
          }}
        >
          Add to Cart
        </button>
        <p style={{ fontSize: "0.95rem", color: "#5D5588", lineHeight: "1.5", textAlign: "center", margin: 0 }}>
          {foundProduct.description}
        </p> 
      </div>
    </div>
  )
}

export default CardsDisplay