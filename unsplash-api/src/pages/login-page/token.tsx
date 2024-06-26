import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../store/useAuth";
import { axiosInstance } from "../../controller.tsx/axiosIntstance";
import strings from "../../localization/en";

const Token: React.FC = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  useEffect(() => {
    const fetchAccessToken = async (code: string) => {
      const clientId = process.env.REACT_APP_API_ACCESS_KEY;
      const clientSecret = process.env.REACT_APP_API_SECRET_KEY;
      const redirectUri = process.env.REACT_APP_REDIRECT_URL;
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
          console.error(strings.console_error_fetch, errorData);
          throw new Error(strings.console_error_fetch);
        }

        const data = await response.json();
        console.log(strings.console_log_accesstoken, data);
        axiosInstance.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${data.access_token}`;
        const accessToken = data.access_token;
        login(accessToken);
        navigate("/homepage");
      } catch (error) {
        console.error(strings.console_error_fetch, error);
      }
    };

    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");

    if (code) {
      console.log(strings.console_log_auth_code, code);
      fetchAccessToken(code);
    } else {
      console.error(strings.console_error_auth_code);
    }
  }, [navigate, login]);

  return <div>{strings.loading_token}</div>;
};

export default Token;
