import { useContext } from "react";
import { SearchContext } from "../context/SearchContext";

export const SearchModal = () => {
  const { showSearch, setSearch } = useContext(SearchContext);
  return (
    showSearch && (
      <div id="search" className="modal-container">
        <form className="search-modal">
          <div className="exit-button">
            <button
              onClick={() => {
                setSearch(false);
              }}
            >
              X
            </button>
          </div>

          <div className="search-input">
            <input placeholder="Searched expression ..." />
            <button>Search</button>
          </div>
        </form>
      </div>
    )
  );
};
