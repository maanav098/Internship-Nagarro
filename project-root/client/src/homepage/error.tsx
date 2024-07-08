import React from "react";

interface ErrorProps {
  error: string;
}

const Error: React.FC<ErrorProps> = ({ error }) => {
  return (
    <div>
      <h2>Error:</h2>
      <p>{error}</p>
    </div>
  );
};

export default Error;
