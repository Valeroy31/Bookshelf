import "../css/Search.css";
import ResultCard from "../Components/ResultCard";
import { useState } from "react";
import { useBookSearchResultQuery } from "../Features/Api/bookFetchQueries/OpenLibraryApiSlice";
import { useSearchParams } from "react-router-dom";
import { SearchIcon } from "lucide-react";
import Navbar from "../Components/LandingPage/Navbar";
import Pagination from "../Components/Pagination";
const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [searchQuery, setSearchQuery] = useState(undefined);
  const fields =
    "ratings_average,publisher,first_publish_year,language,author_key,ratings_count,key,isbn,title,author_name,cover_i,description,subjects";
  const { data, isFetching, isSuccess, isError, error } =
    useBookSearchResultQuery(
      { searchQuery: searchParams.get("q"), fields },
      { skip: !searchParams.get("q") },
    );
  const [currentPage, setcurrentPage] = useState(1);
  const [resultPerPage] = useState(10);
  const resultLastIndex = currentPage * resultPerPage;
  const resultFirstIndex = resultLastIndex - resultPerPage;

  const setUrl = (e) => {
    e.preventDefault();
    setSearchParams({ q: `${searchQuery}` });
  };
  let content;
  let reference;

  if (isFetching) {
    content = <div className="loader-1"> </div>;
  } else if (isSuccess) {
    reference = (
      <p>
        {" "}
        <b>{data.docs.length} results</b> for <b>"{data.q}"</b> · sorted by
        relevance
      </p>
    );
    const dataDisplayed = data.docs.slice(resultFirstIndex, resultLastIndex);

    content =  (
      <>
      {dataDisplayed.map((book) => (
      <ResultCard book={book} key={book.key} />
      )) }
      <Pagination
      totalResult={ data.docs.length}
      resultPerPage={resultPerPage}
      currentPage={currentPage}
      setCurrentPage={setcurrentPage}
    />
      </>
 
    )
        
  } else if (isError) {
    content = <div>{error.error}</div>;
  }

  return (
    <>
      <Navbar />
      <div className="all-search">
        <div className="search-bg">
          <form className="search-submit-form" onSubmit={(e) => setUrl(e)}>
            <div className="search-container">
              <div className="search-icon">
                <SearchIcon color="#A9A6BD" />
              </div>
              <div className="search-input">
                <input
                  value={searchQuery ?? searchParams.get("q") ?? ""}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Tomorrow & Tomorrow & Tomorrow"
                  type="search"
                  name="search-bar"
                  id=""
                />
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
            
            </div>
             <div className="search-btn-2">
                <button
                  className="free-btn"
                  disabled={isFetching}
                  type="submit"
                >
                  Search
                </button>
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
