import { useEffect, useState } from "react";
import axios from "axios";

const QuranSearch = () => {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  // pagination
  const [totalResults, setTotalResults] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // console.log(searchResults);
  // Function to fetch data
  const fetchData = async (page = 1) => {
    setLoading(true);

    try {
      const response = await axios.get(
        `https://api.quran.com/api/v4/search?q=${encodeURIComponent(query)}&page=${page}`
      );
      console.log(response);
      setTotalPages(response?.data?.search?.total_pages);
      setCurrentPage(page);
      setSearchResults(response?.data?.search?.results); // Modify this based on the structure of the API response
      setTotalResults(response?.data?.search?.total_results); // Modify this based on the structure of the API response

    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [query]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      fetchData(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      fetchData(currentPage - 1);
    }
  };

   const renderHTML = (htmlString) => {
     return { __html: htmlString };
   };

  return (
    <div>
      <label>Search Quran:</label>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button disabled={loading} onClick={() => fetchData(1)}>
        Search
      </button>

      {loading && <p>Loading...</p>}

      {searchResults && (
        <div>
          {/* Results here */}
          {/* <pre> */}
          {/* <div>Total pages:{totalResults?.total_pages} </div> */}
          {/* <div>Current pages:{totalResults.current_page} </div> */}
          <div>Total Results:{totalResults} </div>
          {searchResults?.map((result, index) => (
            <div key={index}>
              <p className="fs-4">
                <strong
                // dangerouslySetInnerHTML={renderHTML(searchResults.text)}
                >
                  {result.text}
                </strong>{" "}
                :- {result.verse_key}
              </p>
              {/* <strong> */}
              <p className="fs-4">{result?.translations[0].text}</p>
              {/* </strong> */}
            </div>
          ))}
          {/* </pre> */}
          <div>
            <button disabled={currentPage === 1} onClick={handlePreviousPage}>
              Previous
            </button>
            <span>
              {" "}
              Page {currentPage} of {totalPages}{" "}
            </span>
            <button
              disabled={currentPage === totalPages}
              onClick={handleNextPage}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuranSearch;
