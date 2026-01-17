export default function SearchBar({ query, setQuery }) {
  return (
    <section className="search">
      <div className="searchbar">
        <input
          className="search"
          placeholder="Enter here"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        ></input>

        <a href="#" onClick={() => setQuery(query)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="s-icon"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}
