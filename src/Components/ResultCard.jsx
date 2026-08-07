
import { useState } from 'react'
import { IoMdStar, IoMdStarOutline, IoMdStarHalf } from "react-icons/io"
import { ChevronDown } from "lucide-react"
import { useNavigate } from 'react-router-dom'
const SHELVES = ["Want to read", "Currently reading", "Read"]

const renderStars = (rating) => {
  const snapped = Math.round((rating ?? 0) * 2) / 2
  return [1, 2, 3, 4, 5].map((i) => {
    if (snapped >= i) return <IoMdStar key={i} />
    if (snapped >= i - 0.5) return <IoMdStarHalf key={i} />
    return <IoMdStarOutline key={i} />
  })
}



const ResultCard = ({ book }) => {
  const navigate = useNavigate()
  const [openShelves, setOpenShelves] = useState(false)
  const [shelf, setShelf] = useState(null)

  const pickShelf = (choice) => {
    setShelf(choice)
    setOpenShelves(false)
  }
  const viewDetails =(book)=>{
    navigate(`/books/${book.isbn[0]}`)
  }

  return (
    <article className="result-card">
      <div className="result-card__cover">
        <img
          className="result-card__img"
          src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
          alt={book.title}
          loading="lazy"
        />
      </div>

      <div className="result-card__body">
        <h3 onClick={()=>viewDetails(book)} className="result-card__title">{book.title}</h3>

        <p className="result-card__byline">
          by {book.author_name?.join(", ") ?? "Unknown Author"} · {book.first_publish_year}
        </p>

        <div className="result-card__rating">
          <span className="result-card__stars">{renderStars(book.ratings_average)}</span>
          <span className="result-card__score">{book.ratings_average?.toFixed(1)}</span>
          <span className="result-card__count">
            {book.ratings_count?.toLocaleString() > 0 ? book.ratings_count?.toLocaleString() : 'No'} ratings
                     </span>
        </div>

        <p className="result-card__blurb">{book.description?.substring(0, 400) ?? 'No description available'}
          {book.description?.length > 400 && '...'}
        </p>

        <ul className="result-card__tags">
          {book.subject?.map((tag) => (
            <li className="result-tag" key={tag}>{tag}</li>
          ))}
        </ul>
      </div>

      <div className="result-card__actions">
        <div className="shelf-btn">
          <button className="shelf-btn__main" type="button">
            {shelf ?? "Add to shelf"}
          </button>
          <button
            className="shelf-btn__caret"
            type="button"
            aria-label="Choose a shelf"
            aria-expanded={openShelves}
            onClick={() => setOpenShelves((open) => !open)}
          >
            <ChevronDown size={16} />
          </button>

          {openShelves && (
            <ul className="shelf-menu">
              {SHELVES.map((choice) => (
                <li key={choice}>
                  <button type="button" onClick={() => pickShelf(choice)}>
                    {choice}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <button className="preview-btn" type="button" onClick={()=>viewDetails(book)}>Preview</button>
      </div>
    </article>
  )
}

export default ResultCard