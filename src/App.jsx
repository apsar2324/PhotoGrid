import { useState, useEffect } from "react";
import SearchBar from "./SearchBar.jsx";
import Top from "./Top.jsx";
import ImageContainer from "./ImageContainer.jsx";
import "./App.css";

function App() {
  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    async function fetchPhoto() {
      const key = "WqtgrjyaYrU2DCzjjbvX4kklYajFI9KamVpFUOsBBOfA4rWZkVMkeVki";

      if (!query.trim()) return setPhotos([]);

      const url = `https://api.pexels.com/v1/search?query=${query}&per_page=10`;

      try {
        const response = await fetch(url, {
          headers: {
            Authorization: key,
          },
        });
        const data = await response.json();
        console.log(data);
        setPhotos(data.photos);
      } catch (err) {
        console.log("error", err);
      }
    }
    fetchPhoto();
  }, [query]);

  return (
    <>
      <Top />
      <SearchBar query={query} setQuery={setQuery} />
      <ImageContainer photos={photos} />
    </>
  );
}

export default App;
