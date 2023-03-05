import { useContext } from "react";
import { SearchContext } from "../context/SearchContext";

export const SearchModal = () => {
  const { showSearch, setSearch } = useContext(SearchContext);
  return (
    <>
      {showSearch ? (
        <div className="modal-container">
          <form className="modal">
            <input />
            <button>search</button>
            <button
              onClick={() => {
                setSearch(false);
              }}
            >
              X
            </button>
          </form>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
