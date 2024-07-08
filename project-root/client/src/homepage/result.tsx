import React from "react";

interface ResultProps {
  result: string;
}

const Result: React.FC<ResultProps> = ({ result }) => {
  return (
    <div>
      <h2>Results:</h2>
      <p>{result}</p>
    </div>
  );
};

export default Result;
