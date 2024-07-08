import { useState, useRef, useEffect } from "react";
import autoAnimate from "@formkit/auto-animate";
import Facts from "../../api_call/facts";
import "./left_right.css"

const Leftdown = () => {
  const [show, setShow] = useState(false);
  const parent = useRef(null);

  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);

  const reveal = () => setShow(!show);

  return (
    <div ref={parent}>
      <strong className="dropdown-label" onClick={reveal}>
        RANDOM FACT
      </strong>
      {show && (
        <p className="dropdown-content">
          <p>
            <Facts />
          </p>
        </p>
      )}
    </div>
  );
};

export default Leftdown;


//later i will add a api https://api.api-ninjas.com/v1/facts which will display random facts here