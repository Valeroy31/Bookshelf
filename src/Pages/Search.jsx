import "../css/Search.css";
import Navbar from "../Components/LandingPage/Navbar";
import ResultCard from "../Components/ResultCard";
import { useState } from "react";
import { SearchIcon } from "lucide-react";
import { useBookSearchResultQuery } from "../Features/Api/OpenLibraryQueries/OpenLibraryApiSlice";
import { useSearchParams } from "react-router-dom";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams()
 const fields = "ratings_average,publisher,first_publish_year,language,author_key,ratings_count,key,isbn,title,author_name,cover_i,description,subjects"
   
  let content;
  let reference;
const setUrl =(e)=>{
  e.preventDefault()
   setSearchParams({q: `${searchQuery}`})
     
}
 const {data, isFetching, isSuccess, isError, error} = useBookSearchResultQuery({searchQuery: searchParams.get('q'), fields
       }, {skip: !searchParams.get('q')} )
   if (isFetching) {
     content = <div className="loader-1"> </div>;
   } else if (isSuccess) {
     reference = (
       <p>
         {" "}
         <b>{data.docs.length} results</b> for <b>"{data.q}"</b> ·
         sorted by relevance
       </p>
     );
     content = data.docs.map((book) => (
       <ResultCard book={book} key={book.key} />
  
      
     ));
   } else if (isError) {
     content = <div>{error.error}</div>;
   }

  return (
    <>
      <Navbar />

      <div className="all-search">
        <div className="search-bg">
          <form onSubmit={(e)=>setUrl(e)}>
            <div className="search-container">
              <div className="search-icon">
                <SearchIcon color="#A9A6BD" />
              </div>
              <div className="search-input">
                <input
                  value={ searchQuery ?? searchParams.get('q') }
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Tomorrow & Tomorrow & Tomorrow"
                  type="search"
                  name="search-bar"
                  id=""
                />
              </div>
              <div className="search-btn">
                <button
                  className="free-btn"
                   disabled={isFetching}
                  type="submit"
                >
                  Search
                </button>
              </div>
            </div>
          </form>

          {reference}
        </div>
      </div>
      <section className="main-results">{content}</section>
    </>
  );
};

export default Search;
