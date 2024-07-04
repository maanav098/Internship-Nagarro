import React, { useState, useEffect } from "react";
import LoginPage from "./login_page/loginpage";
import './App.css'
interface Response {
  players: string[];
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
    <div >
      <h1 className="App-header">Python(Flask)-React App</h1>
      <LoginPage />
      {/* <h1>Data from API:</h1>
      {data ? (
        <ul>
          {data.players.map((player, index) => (
            <li key={index}>{player}</li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )} */}
    </div>
  );
};

export default App;
