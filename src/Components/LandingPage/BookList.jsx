import "../../css/LandingBook.css";
import { IoMdStar, IoMdStarOutline, IoMdStarHalf } from "react-icons/io";
import { ArrowRightIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useLandingPageFetchTwoQuery } from "../../Features/Api/OpenLibraryQueries/OpenLibraryApiSlice";

const BookList = () => {
  const navigate = useNavigate()
  const {data, isFetching, isSuccess, error, isError} = useLandingPageFetchTwoQuery({fields: "key,title,author_name,subjects, description,first_publish_year,language,isbn,cover_i,pages,ratings_average,ratings_count",
    limit: 14,
    page: 4})


    let content;
const renderRating = (rating) => {
    const snapped = Math.round((rating ?? 0) * 2) / 2;
    return [1, 2, 3, 4, 5].map((i) => {
      if (snapped >= i) return <IoMdStar key={i} />;
      if (snapped >= i - 0.5) return <IoMdStarHalf key={i} />;
      return <IoMdStarOutline key={i} />;
    });
  };
    if(isFetching){
      content = (
         Array.from(  { length: 14 },(_, i) => (
              <article
                className="book-card book-card--skeleton"
                key={`skeleton-${i}`}
                aria-hidden="true"
              >
                <div className="book-card__cover skeleton"></div>
                <div className="book-card__meta">
                  <div className="skeleton skeleton-line skeleton-line--title"></div>
                  <div className="skeleton skeleton-line skeleton-line--author"></div>
                  <div className="skeleton skeleton-line skeleton-line--rating"></div>
                </div>
              </article>
            
      ))
      )
    }
    else if(isSuccess){
      content = (
 data.docs.map((book) => (
          <article onClick={()=>viewDetails(book)} className="book-card" key={book.key}>
            <div className="book-card__cover">
              <img
                className="book-card__img"
                src={`https://covers.openlibrary.org/b/id/${book?.cover_i}-L.jpg`}
                alt={book.title}
              />
            </div>

            <div className="book-card__meta">
              <h3 className="book-card__title">{book.title}</h3>
              <p className="book-card__author">
           {book?.author_name?.join(", ") || "Unknown Author"}

              </p>

              <div className="book-card__rating">
                <span className="book-card__stars">
                    {renderRating(book.ratings_average)}
                  {/* render stars from book.ratings_average */}
                </span>
                <span className="book-card__count">
                    {book.ratings_count}
                  {/* format book.ratings_count → 12.4k */}
                </span>
              </div>
            </div>
           
          </article>
        ))
      )
    }
    else if(isError){
         content = (
            <div className="posts-state">
        <p className="posts-error">Caught error: {error.error}</p>
        
      </div>
    );
    }




     
  
const viewDetails =(book)=>{
navigate(`/books/${book.isbn[0]}`)
}
 
  return (
    <section className="trending">
      <header className="trending__head">
        <h2 className="trending__title">Business & Finance < ArrowRightIcon size={16} /> </h2>
        <span className="trending__note">
          Updated hourly · activity count, not algorithms
        </span>
      </header>

      <div className="trending__row">
        {content}
      </div>
    </section>
  );
};

export default BookList;
