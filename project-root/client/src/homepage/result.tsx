
import React from "react";

interface ResultProps {
  result: string;
}

const Result: React.FC<ResultProps> = ({ result }) => {
  const renderFormattedText = (text: string) => {
    const parts = text.split("**");
    return parts.map((part, index) =>
      index % 2 === 0 ? (
        <span key={index}>{part}</span>
      ) : (
        <span key={index} style={{ fontWeight: "bold" }}>
          {part}
        </span>
      )
    );
  };

  return (

    <div className="result-container">
      <p>{renderFormattedText(result)}</p>
    </div>
  );
};

export default Result;
