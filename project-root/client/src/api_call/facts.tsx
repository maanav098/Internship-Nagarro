import React, { useEffect, useState } from "react";


interface Fact {
  fact: string;
}

const Facts: React.FC = () => {
  const [facts, setFacts] = useState<Fact[]>([]);
  const [error, setError] = useState<string | null>(null);

  const apiKey = "fQVHGREINGsD8ovf+mlMlw==hCLO3zlccKfLoTkZ";
  const url = `https://api.api-ninjas.com/v1/facts?`;

  useEffect(() => {
    const fetchFacts = async () => {
      try {
        const response = await fetch(url, {
          method: "GET",
          headers: {
            "X-Api-Key": apiKey,
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }

        const result = await response.json();
        setFacts(result);
      } catch (error: any) {
        setError(error.message);
        console.error("Error:", error.message);
      }
    };

    fetchFacts();
  }, [url, apiKey]);

  return (
    <div>
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
        {facts.map((fact, index) => (
          <h3 key={index}>{fact.fact}</h3>
        ))}
    </div>
  );
};

export default Facts;
