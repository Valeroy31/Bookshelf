import { useEffect, useState } from "react";
import "../css/Reviews.css";
import { IoMdStar } from "react-icons/io";
import axios from "axios";

const Reviews = ({ bookId }) => {
  const [reviews, setReviews] = useState({});
  const [fetchedReviews, setFetchedReviews] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

//   useEffect(() => {
//     const fetchReviews = async () => {
//       try {
//         const response = await axios.get(
//           `http://localhost:5000/api/v1/reviews/get_reviews`,
//           {
//             params: {
//               bookId: bookId,
//             },
//           },
//         );
//         setFetchedReviews(response.data);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     fetchReviews();
//   }, [bookId, reviews, fetchedReviews]);

  const closeModal = () => {
    setIsOpen(false);
  };

  //Only close when the click lands on the backdrop itself, not the card.
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!rating || !body.trim()) return;

    setReviews({
      bookId,
      rating,
      date: new Date().toISOString(),
      title: title.trim(),
      body: body.trim(),
    });
    console.log(reviews);

    const postReview = async () => {
      try {
        const response = await axios.post(
          `http://localhost:5000/api/v1/reviews/create_review`,
          reviews,
        );
        setFetchedReviews([...fetchedReviews, response.data]);
      } catch (error) {
        console.log(error);
      }
    };
    postReview();

    // reset the form and close
    setRating(0);
    setHover(0);
    setTitle("");
    setBody("");
    closeModal();
  };

  return (
    <>
      <div className="review-section">
        <article className="review-trigger">
          <div className="review-text">
            <div className="header-text">
              <p className="review-header">You haven't written a review yet.</p>
              <p className="review-body">
                Share what you thought while it's fresh. You can edit later.
              </p>
            </div>
            <div className="review-container-rating">
              <span>YOUR RATING</span>
              <div className="rating-icons">
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
              </div>
            </div>
          </div>

          <div className="review-button">
            <button className="free-btn" onClick={() => setIsOpen(true)}>
              Start review
            </button>
          </div>
        </article>
      </div>

      {isOpen && (
        <div className="modal-overlay" onClick={handleOverlayClick}>
          <div className="modal-card">
            <div className="modal-head">
              <h2 className="modal-title">Write your review</h2>
              <button
                type="button"
                className="modal-close"
                onClick={closeModal}
                aria-label="Close"
              >
                &times;
              </button>
            </div>

            <form className="review-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">Your rating</label>
                <div
                  className="rating-input"
                  value={rating}
                  onChange={(e) => setRating(Number(e.target.value))}
                >
                  {[1, 2, 3, 4, 5].map((star) => (
                    <IoMdStar
                      key={star}
                      className={
                        star <= (hover || rating)
                          ? "star-active"
                          : "star-inactive"
                      }
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHover(star)}
                      onMouseLeave={() => setHover(0)}
                    />
                  ))}
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="review-title">
                  Title
                </label>
                <input
                  id="review-title"
                  type="text"
                  className="form-input"
                  placeholder="Sum it up in a line"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="review-body">
                  Your review
                </label>
                <textarea
                  id="review-body"
                  className="form-textarea"
                  placeholder="What did you think? What stood out?"
                  rows="5"
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                />
              </div>

              <div className="form-actions">
                <button
                  type="button"
                  className="browse-btn"
                  onClick={closeModal}
                >
                  Cancel
                </button>
                <button type="submit" className="free-btn">
                  Submit review
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Reviews;
