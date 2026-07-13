import "../../css/Section4.css";
import sectionImage from "../../assets/files/activity.png";
import { MdOutlineBook } from "react-icons/md";
import { PiHexagonLight } from "react-icons/pi";
const Section4 = () => {
  return (
    <>
      <div className="all-section-4">
         <div className="section-4-text-2">
          <div className="section-4-h2-header">
  <div className="icons">
            <div className="parent-icon">
              <PiHexagonLight size={72} color=" #130B43" />
            </div>
            <MdOutlineBook className="child-icon" size={32} color=" #130B43" />
          </div>
          <div className="h2">
            <h2>See what your friends are reading <span> right now</span></h2>
          </div>
          </div>
        
          <div className="zigzag">
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
          </div>
          <div className="p-text">
            <p>
              Follow the readers you trust. When a friend picks up a new book,
              writes a review, or finishes something they loved — you'll know.
              Discover your next read through people, not algorithms.
            </p>
          </div>
        </div>
        <div className="section-image">
          <img src={sectionImage} alt="" />
        </div>
        <svg
         className="svg"
          xmlns="http://www.w3.org/2000/svg"
          width="186"
          height="152"
          fill="none"
        >
          <path d="M0 .7h18.748v18.821H0V.701Z" fill="#FAE54E" />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7.67 4.978h14.487a3.842 3.842 0 0 1 3.835 3.85V23.37a3.842 3.842 0 0 1-3.835 3.85H7.67a3.842 3.842 0 0 1-3.835-3.85V8.827a3.842 3.842 0 0 1 3.835-3.85Zm0 3.422a.427.427 0 0 0-.426.427v14.544c0 .236.19.428.426.428h14.487a.427.427 0 0 0 .426-.428V8.827a.427.427 0 0 0-.426-.427H7.67Z"
            fill="#130B43"
          />
          <path
            d="M17.35 102.382c0 .928-.75 1.681-1.675 1.681A1.678 1.678 0 0 1 14 102.382c0-.929.75-1.681 1.675-1.681s1.675.752 1.675 1.681ZM17.35 108.434c0 .929-.75 1.681-1.675 1.681A1.677 1.677 0 0 1 14 108.434c0-.928.75-1.681 1.675-1.681s1.675.753 1.675 1.681ZM17.35 114.487c0 .928-.75 1.681-1.675 1.681A1.678 1.678 0 0 1 14 114.487c0-.929.75-1.682 1.675-1.682s1.675.753 1.675 1.682ZM23.379 102.382c0 .928-.75 1.681-1.675 1.681a1.678 1.678 0 0 1-1.675-1.681c0-.929.75-1.682 1.675-1.682s1.675.753 1.675 1.682ZM23.379 108.434c0 .929-.75 1.681-1.675 1.681a1.677 1.677 0 0 1-1.675-1.681c0-.928.75-1.681 1.675-1.681s1.675.753 1.675 1.681ZM23.379 114.487c0 .928-.75 1.681-1.675 1.681a1.678 1.678 0 0 1-1.675-1.681c0-.929.75-1.682 1.675-1.682s1.675.753 1.675 1.682ZM29.408 102.382c0 .928-.75 1.681-1.674 1.681a1.678 1.678 0 0 1-1.675-1.681c0-.929.75-1.682 1.675-1.682s1.674.753 1.674 1.682ZM29.408 108.434c0 .929-.75 1.681-1.674 1.681a1.678 1.678 0 0 1-1.675-1.681c0-.928.75-1.681 1.675-1.681s1.674.753 1.674 1.681ZM29.408 114.487c0 .928-.75 1.681-1.674 1.681a1.678 1.678 0 0 1-1.675-1.681c0-.929.75-1.682 1.675-1.682s1.674.753 1.674 1.682Z"
            fill="#130B43"
          />
          <path
            d="M171.233 128.075a.328.328 0 0 1 .305.489l-8.777 15.586a.326.326 0 0 1-.562.012l-9.025-14.498a.328.328 0 0 1 .257-.502l17.802-1.087Z"
            fill="#F69605"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M159.583 134a.329.329 0 0 0-.249.501l8.442 13.561a.325.325 0 0 0 .557-.005l9.039-15.098a.328.328 0 0 0-.309-.496L159.583 134Zm20.032.313-9.038 15.098c-1.133 1.891-3.856 1.915-5.021.043l-8.441-13.561c-1.165-1.872.05-4.318 2.24-4.51l17.48-1.537c2.396-.211 4.019 2.397 2.78 4.467Z"
            fill="#130B43"
          />
        </svg>
        <svg
         className="svg-1"
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
        </svg>
        <svg
         className="svg-2"
          xmlns="http://www.w3.org/2000/svg"
          width="308"
          height="148"
          fill="none"
        >
          <path
            d="M302.622 3.55c11.426 0 11.426 141.742-300.002 141.742"
            stroke="#CBC9D9"
            stroke-width="3"
            stroke-dasharray="6 9"
          />
          <mask id="a" fill="#fff">
            <ellipse cx="2.62" cy="145.292" rx="2.62" ry="2.708" />
          </mask>
          <ellipse cx="2.62" cy="145.292" rx="2.62" ry="2.708" fill="#fff" />
          <path
            d="M2.24 145.292c0-.048.021-.114.077-.171A.43.43 0 0 1 2.62 145v6c3.197 0 5.62-2.65 5.62-5.708h-6Zm.38-.292a.43.43 0 0 1 .304.121.256.256 0 0 1 .076.171h-6C-3 148.35-.577 151 2.62 151v-6Zm.38.292a.256.256 0 0 1-.076.17.43.43 0 0 1-.304.121v-6c-3.197 0-5.62 2.65-5.62 5.709h6Zm-.38.291a.43.43 0 0 1-.303-.121.256.256 0 0 1-.077-.17h6c0-3.059-2.423-5.709-5.62-5.709v6Z"
            fill="#CBC9D9"
            mask="url(#a)"
          />
          <mask id="b" fill="#fff">
            <ellipse cx="302.621" cy="3.549" rx="2.62" ry="2.708" />
          </mask>
          <ellipse cx="302.621" cy="3.549" rx="2.62" ry="2.708" fill="#fff" />
          <path
            d="M302.242 3.549c0-.048.021-.114.076-.17a.432.432 0 0 1 .304-.122v6c3.196 0 5.62-2.65 5.62-5.708h-6Zm.38-.292c.137 0 .246.063.303.121a.256.256 0 0 1 .076.171h-6c0 3.058 2.424 5.708 5.621 5.708v-6Zm.379.292a.256.256 0 0 1-.076.17.431.431 0 0 1-.303.122v-6c-3.197 0-5.621 2.65-5.621 5.708h6Zm-.379.292a.432.432 0 0 1-.304-.121.256.256 0 0 1-.076-.171h6c0-3.058-2.424-5.708-5.62-5.708v6Z"
            fill="#CBC9D9"
            mask="url(#b)"
          />
        </svg>
      
        <div className="section-4-text">
          <div className="section-4-h2-header">
  <div className="icons">
            <div className="parent-icon">
              <PiHexagonLight size={72} color=" #130B43" />
            </div>
            <MdOutlineBook className="child-icon" size={32} color=" #130B43" />
          </div>
          <div className="h2">
            <h2>See what your friends are reading <span> right now</span></h2>
          </div>
          </div>
        
          <div className="zigzag">
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
          </div>
          <div className="p-text">
            <p>
              Follow the readers you trust. When a friend picks up a new book,
              writes a review, or finishes something they loved — you'll know.
              Discover your next read through people, not algorithms.
            </p>
          </div>
        </div>
      </div>
      <div className="line"></div>
    </>
  );
};

export default Section4;
