import React, { useState } from "react";
import axios from "axios";
import Result from "./result";
import Error from "./error";
import "./homepage.css";
import "./searchbar.css";
import { ReactComponent as ImagesIcon } from "../assets/icons/camera-svgrepo-com.svg";
import { ReactComponent as VoiceIcon } from "../assets/icons/microphone-svgrepo-com.svg";


const HomePage: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [result, setResult] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    console.log("Submit Clicked")
    e.preventDefault();
    

    try {
      const response = await axios.post("/gemini", { query });
      setResult(response.data.result || "No content found.");
      setError("");
    } catch (err: any) {
      setError(err.response?.data?.error || "Unknown error occurred.");
      setResult("");
    }
  };

  const handleImagesClick = () => {
    console.log("Images clicked");
    
  };

  const handleVoiceClick = () => {
    console.log("Voice clicked");
    
  };

  return (
    <div className="b">
      <h1>Welcome to the Homepage!</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="search"
          value={query}
          placeholder="Search"
          className="search-input"
          onChange={(e) => setQuery(e.target.value)}
        />
        <div className="search-option">
          <div>
            <input
              name="type"
              type="radio"
              value="type-images"
              id="type-images"
            />
            <label htmlFor="type-images" onClick={handleImagesClick}>
              <ImagesIcon className="icon" />
              <span>Images</span>
            </label>
          </div>
          <div>
            <input
              name="type"
              type="radio"
              value="type-special"
              id="type-special"
              defaultChecked
            />
            <label htmlFor="type-special" onClick={handleVoiceClick}>
              <VoiceIcon className="icon" />
              <span>Voice</span>
            </label>
          </div>
        </div>

        <button type="submit" className="button">
          Search
        </button>
      </form>
      <div className="results">
        {result && <Result result={result} />}
        {error && <Error error={error} />}
      </div>
    </div>
  );
};

export default HomePage;
