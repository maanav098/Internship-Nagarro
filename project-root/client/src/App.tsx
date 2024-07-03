import React, { useState, useEffect } from "react";

interface Response {
  "players": string[];
}

const App: React.FC = () => {
  const [data, setData] = useState<Response | null>(null);

  useEffect(() => {
    fetch("/hi")
      .then((res) => res.json())
      .then((data: Response) => {
        setData(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <h1>Data from API:</h1>
      {data ? (
        <ul>
          {data["players"].map((player, i) => (
            <li key={i}>{player}</li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default App;
