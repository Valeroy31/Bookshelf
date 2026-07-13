import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, cartItems } from "../Features/Cart/CartSlice";
import { MdShoppingCart } from "react-icons/md";

import { IoIosSearch } from "react-icons/io";
import "../css/SearchBar.css";
import Filter from "../Components/Filter";

const Params = () => {
  const items = useSelector(cartItems);
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const [productList, setproductList] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [productPreview, setProductPreview] = useState({});
  const [searchInput, setSearchInput] = useState("");
  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setproductList(response.data);
        console.log(productList);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, []);

  const foundProduct = useMemo(() => {
    return productList.filter((products) =>
      products.title.toLowerCase().includes(searchInput.toLowerCase()),
    );
  }, [productList, searchInput]);

  const ViewDetails = (product) => {
    Navigate(`/card/${product.id}`);
  };

  const CartList = (product) => {
    dispatch(addToCart(product));
    Navigate("/cart");
  };

  const cartCount = items.length;

  const search = (e) => {
    setSearchInput(e.target.value);
  };

  const previewProduct = (product) => {
    setOpenModal(true);
    const previewedProduct = productList.find(
      (item) => String(item.id) === String(product.id),
    );
    setProductPreview(previewedProduct);
  };
  const handleModalClose=(e)=>{
    if(e.target === e.currentTarget) return setOpenModal(false)
  }
  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        flexWrap: "wrap",
        gap: "24px",
        padding: "40px",
        backgroundColor: "#F5F5FD",
        justifyContent: "center",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <div
        onClick={() => Navigate("/cart")}
        style={{
          position: "absolute",
          top: "20px",
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
          right: "40px",
          color: "#604FCD",
          cursor: "pointer",
        }}
      >
        <MdShoppingCart size={32} />{" "}
        <span
          style={{
            fontSize: "1.6rem",
            borderRadius: "28%",
            padding: ".5rem 1rem",
            backgroundColor: "#604FCD",
            color: "white",
            cornerShape: "squircle",
          }}
        >
          {cartCount}
        </span>
      </div>
      <div className="search-bar">
        <div className="search-cont">
          <button className="search-btn">
            {" "}
            <IoIosSearch size={24} />
          </button>

          <span>
            {" "}
            <input
              type="text"
              placeholder="Search Your Favourite Product"
              onChange={search}
            />
          </span>
        </div>

        <div className="categories">
          <select name="All Categories" id="">
            <option value="">All Categories</option>
            <option value="">Men's Clothing</option>
            <option value="">Jewelries</option>
            <option value="">Women's Clothing</option>
          </select>
        </div>
      </div>

      {!searchInput ? (
        productList.map((product) => (
          <div
            key={product.id}
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: "12px",
              marginTop: "6rem",
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
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "contain",
                  marginBottom: "20px",
                }}
              />
              <h5
                style={{
                  fontSize: "1.1rem",
                  color: "#130B43",
                  margin: "0 0 8px 0",
                  fontWeight: "700",
                  lineHeight: "1.4",
                }}
              >
                {product.title}
              </h5>
              <p
                style={{
                  fontSize: "0.875rem",
                  color: "#5D5588",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  margin: "0 0 12px 0",
                }}
              >
                {product.category}
              </p>
            </div>
            <div>
              <p
                style={{
                  fontSize: "1.5rem",
                  color: "#26282D",
                  fontWeight: "700",
                  margin: "0 0 20px 0",
                }}
              >
                ${product.price}
              </p>
              <button
                onClick={() => CartList(product)}
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

              <button
                onClick={() => previewProduct(product)}
                style={{
                  backgroundColor: "var(--color-bg-white)",
                  color: "var(--color-primary)",
                  border: " 1px solid var(--color-primary)",
                  borderRadius: "8px",
                  padding: "12px",
                  marginTop: "12px",
                  width: "100%",
                  cursor: "pointer",
                  fontWeight: "600",
                  fontSize: "1rem",
                  boxShadow: "var(--color-primary-shadow) 0 5px 5px;",
                }}
              >
                Preview
              </button>

              <button
                onClick={() => ViewDetails(product)}
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
        ))
      ) : (
        <Filter
          products={foundProduct}
          CartList={CartList}
          ViewDetails={ViewDetails}
        />
      )}

      {openModal && (
        <div className="modal-overlay" onClick={handleModalClose}>
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
            <button type="button" className="modal-close" aria-label="Close" onClick={()=>setOpenModal(false)}>
              &times;
            </button>
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
              <h2
                style={{
                  fontSize: "1.2rem",
                  color: "#5D5588",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  margin: "0 0 12px 0",
                }}
              >
                {productPreview.category}
              </h2>
              <img
                src={productPreview.image}
                alt={productPreview.title}
                style={{
                  width: "100%",
                  maxWidth: "250px",
                  height: "250px",
                  objectFit: "contain",
                  marginBottom: "20px",
                }}
              />
              <h3
                style={{
                  fontSize: "1.4rem",
                  color: "#130B43",
                  margin: "0 0 12px 0",
                  fontWeight: "700",
                  lineHeight: "1.3",
                  textAlign: "center",
                }}
              >
                {productPreview.title}
              </h3>
              <p
                style={{
                  fontSize: "1.5rem",
                  color: "#26282D",
                  fontWeight: "700",
                  margin: "0 0 16px 0",
                }}
              >
                ${productPreview.price}
              </p>
              <button
                onClick={() => CartList(productPreview)}
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
              <p
                style={{
                  fontSize: "0.95rem",
                  color: "#5D5588",
                  lineHeight: "1.5",
                  textAlign: "center",
                  margin: 0,
                }}
              >
                {productPreview.description}
              </p>
            </div>

            
          </div>
        </div>
      )}
    </div>
  );
};

export default Params;
