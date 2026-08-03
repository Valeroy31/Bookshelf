import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { IoMdStar, IoMdStarOutline, IoMdStarHalf } from "react-icons/io";
import "../css/BooksDisplay.css";
import Reviews from "../Components/Reviews";
import Footer from "../Components/LandingPage/Footer";
const BooksDisplay = () => {
  const { id } = useParams();
  const [foundBook, setfoundBook] = useState({});
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        // const response = await axios.get(` https://openlibrary.org/works/${id}.json`)
        setisLoading(true);
        const response = await axios.get(
          `https://openlibrary.org/search.json?q=${id}&fields=ratings_average,subjects,number_of_pages_median,subtitle,publisher,first_publish_year,language,author_key,ratings_count,key,isbn,title,author_name,cover_i,description`,
        );
        setfoundBook(response.data.docs[0]);
        setisLoading(false);
        console.log(response.data.docs[0]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBook();
  }, [id]);
  const renderRatings = (ratings) => {
    const snapped = Math.round((ratings ?? 0) * 2) / 2;
    return [1, 2, 3, 4, 5].map((i) => {
      if (snapped >= i) return <IoMdStar key={i} />;
      if (snapped >= i - 0.5) return <IoMdStarHalf key={i} />;
      return <IoMdStarOutline key={i} />;
    });
  };

  return (
    <>
       {isLoading ? 
          <div className="loader-2"></div>
         : 
    <div className="all-content">
      <main className="all__description">
      
          <div className="main-div-actual"  style={{ display: "flex", flexDirection: 'column' }}>
            <div className="main-div">
                <div className="book-image-left">
              <div className="image-div">
                <img
                  src={`https://covers.openlibrary.org/b/id/${foundBook?.cover_i}-L.jpg`}
                  alt=""
                />
              </div>

              <div className="shelf__review">
                <button className="free-btn">Add to Shelf</button>
                <button className="browse-btn">Write a review</button>
              </div>
            </div>
            <div className="book-info-right">
              <div className="book__details">
                <p className="tiny">
                  {foundBook.first_publish_year} •{" "}
                  {foundBook.number_of_pages_median ?? "—"} PAGES
                </p>

                <h1 className="title__h1">{foundBook.title}</h1>
                <span className="author">
                  by{" "}
                  <span className="colored-span">
                    {foundBook?.author_name?.join(", ")}
                  </span>
                </span>
              </div>
              <div className="metadata">
                <div className="rating__reviews">
                  <div className="rating-numbers">
                    <span className="rating-bold">
                      {foundBook.ratings_average.toFixed(1)}
                    </span>
                    <span className="star__outline">
                      {" "}
                      {renderRatings(foundBook.ratings_average)}
                    </span>
                  </div>
                  <p>{foundBook.ratings_count} ratings</p>
                </div>
              
                  <div className="rating__reviews">
                    <div className="rating-numbers">
                      <span className="rating-bold">
                        {foundBook.first_publish_year}
                      </span>
                    </div>
                    <p>Release Date</p>
                  </div>

                  <div className="rating__reviews">
                    <div className="rating-numbers">
                      <span className="rating-bold">
                        {foundBook.number_of_pages_median}
                      </span>
                    </div>
                    <p>Pages</p>
                  </div>
                
              </div>
            </div>
            </div>
          
             <div className="line"></div>
            <div className="book__description">
              <h2>Book Description</h2>
              {foundBook.description ? (
                <>
                  {foundBook.description.substring(0, 400)}...
                </>
              ) : (
                <p>No description provided</p>
              )}
            </div>
          
          </div>
          
     
      </main>
  <div className="line-2"></div>
      <section>
        <Reviews bookId = {id}/>
      </section>

    </div>
       }
  <Footer/>
    </>
   
)};

export default BooksDisplay;
