import { ReactTyped } from "react-typed";

const Header = () => {
  return (
    <div>
      <h1>
        Welcome to{" "}
        <ReactTyped strings={["this website"]} typeSpeed={150} loop />
      </h1>
    </div>
  );
};

export default Header;

