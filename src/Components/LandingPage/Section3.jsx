import "../../css/Section3.css";
import { IoMdStar, IoIosStarOutline } from "react-icons/io";
import { LiaThumbsUp } from "react-icons/lia";
import { GoComment } from "react-icons/go";
const Section3 = () => {
  return (
    <>
      <div className="all-section-3">
              {/* <svg
         className="svg-1-2"
          xmlns="http://www.w3.org/2000/svg"
          width="94"
          height="158"
          fill="none"
        >
          <path
            d="m55 41.91 13.933-13.856 13.933 13.855-13.933 13.856L55 41.909Z"
            fill="#59D2AE"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="m63.867 39.39 10.766-10.707a4.046 4.046 0 0 1 5.7 0L91.1 39.39a3.992 3.992 0 0 1 0 5.668L80.333 55.765a4.046 4.046 0 0 1-5.7 0L63.867 45.058a3.992 3.992 0 0 1 0-5.668Zm2.533 2.52a.444.444 0 0 0 0 .629l10.767 10.707a.45.45 0 0 0 .633 0l10.766-10.707a.444.444 0 0 0 0-.63L77.8 31.203a.45.45 0 0 0-.633 0L66.4 41.909Z"
            fill="#130B43"
          />
          <path
            d="M5.297 135.96a1.798 1.798 0 0 1 2.534 0l9.5 9.447c.699.695.699 1.823 0 2.519-.7.696-1.834.696-2.534 0l-9.5-9.447c-.7-.696-.7-1.824 0-2.519ZM1.267 143.976a1.798 1.798 0 0 1 2.533 0l9.5 9.447c.7.696.7 1.823 0 2.519-.7.696-1.834.696-2.533 0l-9.5-9.447c-.7-.696-.7-1.823 0-2.519Z"
            fill="#130B43"
          />
        </svg> */}
        <div className="section-text">
       
          <div className="icon-3">
            <IoIosStarOutline
              className="child-icon-3"
              size={32}
              color=" var(--color-star)"
            />
          </div>
          
          <div className="review">
            <h2>
              Rate, review, and <span> remember what you thought</span>
            </h2>
          <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 78 20"
              fill="none"
              width={72}
            >
              <path
                d="m2 13 8.4-9L26 16 39.2 4.9 53 16l9.3-10.2L76.4 16"
                stroke="#000"
                stroke-width="3"
              />
            </svg>
            <p>
              Write a short review, give it stars, and set who sees it. Look
              back years later and remember exactly how a book made you feel.
              Your reading life, in your own words.
            </p>
          </div>
        </div>

        <div className="testimonials">
          <div className="testimonial-card-1">
            <div className="all-profile">
              <div className="profile">
                <div className="pfp">
                  <p className="abrev">EM</p>
                </div>

                <div className="profile-details">
                  <div className="info">
                    <p>Eleanor Mehta</p>
                    <small>finished . 3 days ago</small>
                  </div>
                  <div className="rating-3">
                    <div className="rating-icon">
                      <IoMdStar className="star-icon" size={16} />
                      <IoMdStar className="star-icon" size={16} />
                      <IoMdStar className="star-icon" size={16} />
                      <IoMdStar className="star-icon" size={16} />
                      <IoMdStar className="star-icon" size={16} />
                    </div>

                    <small>5.0</small>
                  </div>
                </div>
              </div>
              <div className="neutral"> READ</div>
            </div>
            <div className="comment">
              <p>
                "A book that quietly reshapes how you think about time. I kept
                underlining sentences and texting them to friends. Felt like
                finishing a long conversation with someone wise."
              </p>
            </div>
            <div className="reactions">
              <small>
                {" "}
                <LiaThumbsUp size={16} /> Helpful (42)
              </small>
              <small>
                {" "}
                <GoComment size={16} /> 4 comments
              </small>
            </div>
          </div>
          <div className="testimonial-card-2">
            <div className="all-profile">
              <div className="profile">
                <div className="pfp">
                  <p className="abrev-2">VM</p>
                </div>

                <div className="profile-details">
                  <div className="info">
                    <p>V. Midstorm</p>
                    <small>finished . 6 days ago</small>
                  </div>
                  <div className="rating-3">
                    <div className="rating-icon">
                      <IoMdStar className="star-icon" size={16} />
                      <IoMdStar className="star-icon" size={16} />
                      <IoMdStar className="star-icon" size={16} />
                      <IoMdStar className="star-icon" size={16} />
                      <IoMdStar className="star-icon" size={16} />
                    </div>

                    <small>5.0</small>
                  </div>
                </div>
              </div>
              <div className="neutral"> READ</div>
            </div>
            <div className="comment">
              <p>
                "Despite its title, “Asymmetry” comprises two seemingly
                unrelated sections of equal length, appended by a slim and
                quietly shocking coda. Halliday’s prose is clean and lean,
                almost reportorial in the style of W. G. Sebald, and like the
                murmurings of a shy person at a cocktail party, often comic only
                in single clauses. It’s a first novel that reads like the work
                of an author who has published many books over many years."
              </p>
            </div>
            <div className="reactions">
              <small>
                {" "}
                <LiaThumbsUp size={16} /> Helpful (42)
              </small>
              <small>
                {" "}
                <GoComment size={16} /> 4 comments
              </small>
            </div>
          </div>
        </div>

        <div className="section-text-1">
          <div className="icon-3">
            <IoIosStarOutline
              className="child-icon-3"
              size={32}
              color=" var(--color-star)"
            />
          </div>
          <div className="review">
            <h2>
              Rate, review, and <span> remember what you thought</span>
            </h2>
                      <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 78 20"
              fill="none"
              width={72}
            >
              <path
                d="m2 13 8.4-9L26 16 39.2 4.9 53 16l9.3-10.2L76.4 16"
                stroke="#000"
                stroke-width="3"
              />
            </svg>
            <p>
              Write a short review, give it stars, and set who sees it. Look
              back years later and remember exactly how a book made you feel.
              Your reading life, in your own words.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section3;
