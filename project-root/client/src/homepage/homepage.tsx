import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import Result from "./result";
import Error from "./error";
import "./homepage.css";
import { ReactComponent as ImagesIcon } from "../assets/icons/camera-svgrepo-com.svg";
import { ReactComponent as VoiceIcon } from "../assets/icons/microphone-svgrepo-com.svg";
import Load from "./loading/loading";
import { Grid } from "@mui/material";

const HomePage: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [result, setResult] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [chatHistory, setChatHistory] = useState<
    { question: string; answer: string }[]
  >([]);

  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [chatHistory]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post("/gemini", { query });
      const answer = response.data.result || "No content found.";
      setResult(answer);
      setError("");
      addToChatHistory(query, answer);
    } catch (err: any) {
      setError(err.response?.data?.error || "Unknown error occurred.");
      setResult("");
    } finally {
      setLoading(false);
      setQuery(""); 
    }
  };

  const addToChatHistory = (question: string, answer: string) => {
    setChatHistory((prev) => [...prev, { question, answer }]);
  };

  const handleImagesClick = () => {
    console.log("Images clicked");
  };

  const handleVoiceClick = () => {
    console.log("Voice clicked");
    alert(
      "This website requires your microphone access for this tool to be used... "
    );
  };

  return (
    <Grid container spacing={2}>
      {/* Left Side */}
      <Grid
        item
        xs={12}
        md={4}
        padding={1}
        className="left-grid"
        display={"flex"}
        alignItems={"flex-start"}
      >
        <div className="left-side-container">
          <h2 className="p">Result:</h2>
          <div className="results">
            {result && <Result result={result} />}
            {error && <Error error={error} />}
          </div>
        </div>
      </Grid>

      {/* Right Side */}
      <Grid
        item
        xs={12}
        md={8}
        className="right-grid"
        padding={1}
        display={"flex"}
        alignItems={"flex-end"}
      >
        <div className="chat-container">
          <div className="chat-history" ref={chatContainerRef}>
            {chatHistory.map((chat, index) => (
              <div key={index} className="chat-item">
                <div className="message self">
                  <p>{chat.question}</p>
                </div>
                <br />
                <div className="message other">
                  <p>{chat.answer}</p>
                </div>
              </div>
            ))}
            {loading && (
              <div className="loading">
                <Load />
              </div>
            )}
          </div>
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
              </label>
            </div>

            <form className="search-form" onSubmit={handleSubmit}>
              <input
                type="search"
                value={query}
                placeholder="Type a message..."
                className="search-input"
                onChange={(e) => setQuery(e.target.value)}
              />
              <button type="submit" className="button">
                Send
              </button>
            </form>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default HomePage;
