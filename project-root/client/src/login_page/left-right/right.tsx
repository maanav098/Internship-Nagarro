import React from "react";
import "./right.css";
import { ReactComponent as InstagramIcon } from "../../assets/icons/instagramicon.svg"
import { ReactComponent as TwitterIcon } from "../../assets/icons/twittericon.svg"
import { ReactComponent as GithubIcon } from "../../assets/icons/githubicon.svg"
import { ReactComponent as FacebookIcon } from "../../assets/icons/metaicon.svg"
const Rightdown: React.FC = () => {
  return (
    <div className="main">
      <div className="up">
        <button
          className="card1"
          onClick={() => window.open("https://www.instagram.com/", "_blank")}
        >
          <InstagramIcon className="instagram" width="30px" height="30px" />
        </button>
        <button
          className="card2"
          onClick={() => window.open("https://x.com/home?lang=en", "_blank")}
        >
          <TwitterIcon className="twitter" width="30px" height="30px" />
        </button>
      </div>
      <div className="down">
        <button
          className="card3"
          onClick={() => window.open("https://github.com/", "_blank")}
        >
          <GithubIcon className="github" width="30px" height="30px" />
        </button>
        <button
          className="card4"
          onClick={() => window.open("https://www.facebook.com/", "_blank")}
        >
          <FacebookIcon className="facebook" width="30px" height="30px" />
        </button>
      </div>
    </div>
  );
};

export default Rightdown;
