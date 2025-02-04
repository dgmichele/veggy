import { useState } from "react";
import styles from "../asset/style/SearchBar.module.css";

const SearchBar = ({onSearch}) => {
  const [query, setQuery] = useState(""); // Stato locale per memorizzare il valore dell'input di ricerca

  const handleSubmit = (e) => {
    e.preventDefault(); 
    onSearch(query); // Passa il valore dell'input a Home.jsx
  };

  return (
    <section className={styles.searchBarContainer}>
      <form onSubmit={handleSubmit} className={styles.searchBar}>
      <input
        type="text"
        placeholder="Search a recipe..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit">Search<i className="fa-solid fa-magnifying-glass"></i></button>
      </form>
    </section>
  );
};

export default SearchBar;