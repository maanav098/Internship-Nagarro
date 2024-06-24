import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../store/useAuth";


const Token: React.FC = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  useEffect(() => {
    const fetchAccessToken = async (code: string) => {
      const clientId =`${process.env.REACT_APP_API_ACCESS_KEY}`;
      const clientSecret = `${process.env.REACT_APP_API_SECRET_KEY}`;
      const redirectUri = `${process.env.REACT_APP_REDIRECT_URL}`;
      const tokenUrl = "https://unsplash.com/oauth/token";

      const requestBody = {
        client_id: clientId,
        client_secret: clientSecret,
        redirect_uri: redirectUri,
        code,
        grant_type: "authorization_code",
      };

      try {
        const response = await fetch(tokenUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        });

        if (!response.ok) {
          const errorData = await response.json();
          console.error("Failed to fetch access token:", errorData);
          throw new Error("Failed to fetch access token");
        }

        const data = await response.json();
        console.log("Access_token_data:", data);
        const accessToken = data.access_token;
        login(accessToken);
        navigate("/homepage");
      } catch (error) {
        console.error("Error fetching access token:", error);
      }
    };

    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");

    if (code) {
      console.log("Authorization code:", code);
      fetchAccessToken(code);
    } else {
      console.error("Authorization code not found in URL");
    }
  }, [navigate, login]);

  return <div>Loading your token...</div>;
};

export default Token;
