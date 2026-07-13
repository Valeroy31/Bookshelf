import '../../css/Section2.css'
import bridgerton from '../../assets/files/bridgerton.jpeg'
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoMdStar, IoMdCheckmark , IoMdStarHalf } from "react-icons/io";
import { FaRegBookmark } from "react-icons/fa6";
import { TbPointFilled } from "react-icons/tb";
import { FiBookOpen } from "react-icons/fi";
import { MdOutlineBook } from "react-icons/md";
import { PiHexagonLight } from "react-icons/pi";
import { IoCheckmark } from "react-icons/io5";
const Section2 = () => {
  return (
    <>
    <div className="all-section">
     <div className="sections">
        <svg
         className="svg-2-2"
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
        <div className="section-left">
            <div className="icons">
                <div className="parent-icon">
  <PiHexagonLight size={72} color=' #130B43' />
                </div>
   <MdOutlineBook className='child-icon' size={32} color=' #130B43' />
            </div>

            <div className="text">
<h2>Organize your reading into <span>three simple shelves</span></h2>
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
            <p>Want to Read. Currently Reading. Read. That's all you need to start. 
            Add any book in seconds and your shelf is always there when you come back.</p>
       
            </div>

            <div className="pills">
                <div className="purple">
                    WANT TO READ
                </div>
                <div className="green">
                  <TbPointFilled />  CURRENTLY READING
                </div>
                  <div className="neutral">
            READ
                </div>
            </div>
          
             </div>
        <div className="section-right">
            <div className="book-display-card">
            <div className="book-image">
                <img src={bridgerton} alt="" />
            </div>
            <div className="book-details">
            <p>NOVEL . 2021</p>
            <h5>Bridgerton</h5>
            <p>Julia Quinn</p>
            
            <div className="ratings">
                <div className="rating-icons">
   <IoMdStar className='star-icon' size={28} />
   <IoMdStar className='star-icon' size={28} />
   <IoMdStar className='star-icon' size={28} />
   <IoMdStar className='star-icon' size={28} />
   
           <IoMdStarHalf className='icon-half' size={28} />
                </div>
  
        <div className="rating-figures"> <p>4.5 · 8,241 ratings</p></div>
            
            </div>
<div className="shelf-options">
 <div className="add-books">
     <p className='add'>Add</p> <p className='shelf'>Add to shelf</p> <span><RiArrowDropDownLine size={32} className='dropdown-icon' /> </span>
      
        <div className="shelf-list">
        <span> <FaRegBookmark /> Want to Read</span>
        <div className='highlight-option'>
            <span > <FiBookOpen /> Currently Reading </span> <IoCheckmark />
            </div>
        <span> <IoMdCheckmark /> Read</span>
       </div>
       </div>
      
</div>
      
           
          
            </div>
            
            </div>
        </div>
     </div>
    </div>

    </>
  )
}

export default Section2