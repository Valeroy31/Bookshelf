import { useEffect, useState } from "react";
import "../../css/LandingBook.css";
import axios from "axios";
import { IoMdStar, IoMdStarOutline, IoMdStarHalf } from "react-icons/io";
import { ArrowRightIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import BooksDisplay from "../../Pages/BooksDisplay";

const LandingBookList = () => {
  const [BookList, setBookList] = useState([]);
  const [loading, setLoading] = useState(true);

 const navigate = useNavigate()
  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get(
        'https://openlibrary.org/search.json?q=new_york_times_nonfiction&offset=50&limit=14&fields=ratings_average,publisher,first_publish_year,language,author_key,ratings_count,key,isbn,title,author_name,cover_i,description,subjects'
        );
        setBookList(response.data.docs);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, []);
const viewDetails =(book)=>{
navigate(`/books/${book.isbn[0]}`)
}

  const renderStars = (rating) => {
    const snapped = Math.round((rating ?? 0) * 2) / 2;
    return [1, 2, 3, 4, 5].map((i) => {
      if (snapped >= i) return <IoMdStar key={i} />;
      if (snapped >= i - 0.5) return <IoMdStarHalf key={i} />;
      return <IoMdStarOutline key={i} />;
    });
  };
  return (
    <section className="trending">
      <header className="trending__head">
        <h2 className="trending__title">New York Times Nonfiction < ArrowRightIcon size={16} /> </h2>
        <span className="trending__note">
          Updated hourly · activity count, not algorithms
        </span>
      </header>

      <div className="trending__row">
        {loading
          ? Array.from({ length: 14 }).map((_, i) => (
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
          : BookList.map((book) => (
          <article className="book-card" key={book.key} onClick={()=>viewDetails(book)}>
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
                {book?.author_name?.join(", ") ?? "Unknown Author"}
              </p>

              <div className="book-card__rating">
                <span className="book-card__stars">
                  {renderStars(book.ratings_average)}
                </span>
                <span className="book-card__count">
                {book.ratings_count}
                  {/* format books.ratings_count → 12.4k */}
                </span>
              </div>
            </div>

          </article>
        ))}
      </div>
    </section>
  );
};

export default LandingBookList;

