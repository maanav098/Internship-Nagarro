import React, { useState } from "react";
import { Photo } from "../../store/searchInterface";
import { fetchPhotos } from "../../controller.tsx/imagesController";
import DrawerAppBar from "../../navbar_materialui/material";
import "../../App.css"
import "./search.css"

const SearchPhotosComponent: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async () => {
    if (query.trim() === "") {
      setError("Please enter a search query.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetchPhotos(query);
      if (response) {
        setPhotos(response.results);
      } else {
        setError("Failed to fetch photos. Please try again later.");
      }
    } catch (error) {
      console.error("Error fetching photos:", error);
      setError("Failed to fetch photos. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <DrawerAppBar />
      <div className="bar">
      <input
        className="searchbar"
        type="text"
       
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter your search query"
        disabled={loading}
      />
      <button
        className="button"
        type="button"
        onClick={handleSearch}
        disabled={loading}
      >
        
        {loading ? "Searching..." : "Search"}
      </button>
      </div>

      {error && <p>{error}</p>}

      <div className="App-header">
        {photos.map((photo) => (
          <div key={photo.id}>
            <img
              src={photo.urls.thumb}
              alt={photo.description || "Photo"}
              className="App-logo"
            />
            <div className="photo-info-container">
              <p>{photo.description || "No description"}</p>
              <p>By: {photo.user.name}</p>
              <a
                href={photo.links.html}
                target="_blank"
                rel="noopener noreferrer"
              >
                View on Unsplash
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchPhotosComponent;
