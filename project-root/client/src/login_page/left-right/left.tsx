import { useState, useRef, useEffect } from "react";
import autoAnimate from "@formkit/auto-animate";

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
        RANDOM FACT ABOUT BURJ KHALIFA
      </strong>
      {show && (
        <p className="dropdown-content">
          <p>
            330,000 cubic metres of concrete were used in the construction,
            which is equivalent to the weight of 100,000 elephants as per the
            Burj Khalifa Facts. 2. The aluminium required to construct the Burj
            Khalifa is equivalent to the weight of five Airbus A380 planes.
          </p>
        </p>
      )}
    </div>
  );
};

export default Leftdown;


//later i will add a api https://api.api-ninjas.com/v1/facts which will display random facts here