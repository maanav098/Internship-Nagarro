import { ReactTyped } from "react-typed";

const Header = () => {
  return (
    <div>
      <h1>
        {" "}
        <ReactTyped strings={["This is a testing website..."]} typeSpeed={250} loop />
      </h1>
    </div>
  );
};

export default Header;

