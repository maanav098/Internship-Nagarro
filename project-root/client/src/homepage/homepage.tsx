import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import Result from "./result";
import Error from "./error";
import "./homepage.css"
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
    { question: string; answer: string; image?: string }[]
  >([]);
  const [file, setFile] = useState<File | null>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [chatHistory]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFile(event.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      let answer = "";

      if (file) {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("query", query);

        const response = await axios.post(
          "http://localhost:5000/gemini",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        answer = response.data.result || "No content found.";
        addToChatHistory(query, answer, URL.createObjectURL(file));
        setFile(null);

        // Delete the file after use
        URL.revokeObjectURL(URL.createObjectURL(file));
      } else {
        const response = await axios.post("http://localhost:5000/gemini", {
          query,
        });
        answer = response.data.result || "No content found.";
        addToChatHistory(query, answer);
      }

      setResult(answer);
      setError("");
    } catch (err: any) {
      console.error(err);
      setError(err.response?.data?.error || "Unknown error occurred.");
      setResult("");
    } finally {
      setLoading(false);
      setQuery("");
    }
  };

  const addToChatHistory = (
    question: string,
    answer: string,
    image?: string
  ) => {
    setChatHistory((prev) => [...prev, { question, answer, image }]);
  };

  const handleImagesClick = () => {
    document.getElementById("file-input")?.click();
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
                {chat.image && (
                  <div className="message self">
                    <img
                      src={chat.image}
                      alt="uploaded"
                      className="uploaded-image"
                    />
                  </div>
                )}
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
                style={{ display: "none" }}
              />
              <label htmlFor="type-images" onClick={handleImagesClick}>
                <ImagesIcon className="icon" />
              </label>
              <input
                type="file"
                id="file-input"
                style={{ display: "none" }}
                onChange={handleFileChange}
              />
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
