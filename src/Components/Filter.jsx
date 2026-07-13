

const Filter = ({products, CartList, ViewDetails}) => {
  return (
<>
{products.map((product) => (
        <div
          key={product.id}
          style={{
            backgroundColor: "#FFFFFF",
            borderRadius: "12px",
            marginTop: '6rem',
            padding: "24px",
            width: "280px",
            border: "1px solid rgba(0, 0, 0, 0.10)",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            transition: "transform 0.2s ease-in-out",
          }}
        >
          <div>
            <img
              src={product.image}
              alt={product.title}
              style={{ width: "100%", height: "200px", objectFit: "contain", marginBottom: "20px" }}
            />
            <h5 style={{ fontSize: "1.1rem", color: "#130B43", margin: "0 0 8px 0", fontWeight: "700", lineHeight: "1.4" }}>
              {product.title}
            </h5>
            <p style={{ fontSize: "0.875rem", color: "#5D5588", textTransform: "uppercase", letterSpacing: "0.05em", margin: "0 0 12px 0" }}>
              {product.category}
            </p>
          </div>
          <div>
            <p style={{ fontSize: "1.5rem", color: "#26282D", fontWeight: "700", margin: "0 0 20px 0" }}>
              ${product.price}
            </p>
            <button
            onClick={()=>CartList(product)}
              style={{
                backgroundColor: "#604FCD",
                color: "white",
                border: "none",
                borderRadius: "8px",
                padding: "12px",
                width: "100%",
                cursor: "pointer",
                fontWeight: "600",
                fontSize: "1rem",
                boxShadow: "0 2px 4px rgba(96, 79, 205, 0.2)",
              }}
            >
              Add to Cart
            </button>

                <button onClick={()=>ViewDetails(product)}
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
              View
            </button>
          </div>
        </div>
      ))} 

</>
  )
}

export default Filter