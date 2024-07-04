import { useState, useRef, useEffect } from "react";
import autoAnimate from "@formkit/auto-animate";

const Rightdown = () => {
  const [show, setShow] = useState(false);
  const parent = useRef(null);

  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);

  const reveal = () => setShow(!show);

  return (
    <div ref={parent}>
      <strong className="dropdown-label" onClick={reveal}>
        Click here!
      </strong>
      {show && (
        <p className="dropdown-content">
          Apple recently launched a cutting-edge AI-powered analytics platform
          that helps businesses optimize their supply chain operations. This
          platform utilizes quantum computing algorithms to process massive
          datasets in real-time, providing unparalleled insights and predictive
          capabilities. Quantum Solutions Inc. aims to revolutionize the
          logistics industry by enabling companies to achieve unprecedented
          efficiency and cost savings through advanced technology integration.
        </p>
      )}
    </div>
  );
};

export default Rightdown;
